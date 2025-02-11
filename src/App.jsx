import React, { useState } from 'react';
import TestModule from './TestModule';
import Module from './components/Module';
import { lessons } from './data/lessons';

const TamilLearningApp = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [mode, setMode] = useState('learn'); // 'learn' or 'test'

  const renderIcon = (IconComponent) => {
    return <IconComponent className="w-6 h-6" />;
  };

  return (
    <div className="max-w-6xl mx-auto px-2 py-1 sm:p-4 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
          {selectedLesson ? 'Tamil Learning App' : 'Choose Your Mode'}
        </h1>
        {!selectedLesson && (
          <div className="flex gap-2 mt-4 sm:mt-0">
            <button
              onClick={() => setMode('learn')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                mode === 'learn'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600 border border-blue-600'
              }`}
            >
              Learn
            </button>
            <button
              onClick={() => setMode('test')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                mode === 'test'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600 border border-blue-600'
              }`}
            >
              Test
            </button>
          </div>
        )}
      </div>
      
      {!selectedLesson ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {lessons.map((lesson) => (
            <div 
              key={lesson.id}
              className="rounded-lg border cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-blue-100 hover:border-blue-200 bg-white"
              onClick={() => setSelectedLesson(lesson)}
            >
              <div className="border-b border-blue-100 p-4">
                <div className="flex items-center gap-2">
                  {renderIcon(lesson.icon)}
                  <h2 className="text-lg font-semibold">{lesson.title}</h2>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">
                  {mode === 'learn' 
                    ? `${lesson.modules.length} learning modules`
                    : 'Practice test available'
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button 
            className="mb-6 px-4 py-2 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2"
            onClick={() => setSelectedLesson(null)}
          >
            ← Back to Lessons
          </button>
          
          <h2 className="text-2xl font-semibold mb-6">{selectedLesson.title}</h2>
          
          {mode === 'learn' ? (
            selectedLesson.modules.map((module, index) => (
              <Module key={index} module={module} />
            ))
          ) : (
            <TestModule lesson={selectedLesson} />
          )}
        </div>
      )}
    </div>
  );
};

export default TamilLearningApp;
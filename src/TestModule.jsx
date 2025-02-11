import React, { useState, useEffect } from 'react';
import { Check, X, RefreshCw, Award } from 'lucide-react';

// Helper functions for test generation
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const generateFakeAnswers = (count) => {
  const fakeAnswers = [
    'இது சரியான விடை அல்ல',
    'மேலும் படிக்கவும்',
    'முயற்சி செய்யவும்',
    'வேறு பதில் தேர்வு செய்யவும்'
  ];
  return shuffleArray(fakeAnswers).slice(0, count);
};

const generateQuestionFromModule = (module, allModules) => {
  const questions = [];
  
  switch (module.type) {
    case 'translations':
      module.content.forEach(item => {
        // Get incorrect options from other translation items
        const otherOptions = allModules
          .filter(m => m.type === 'translations')
          .flatMap(m => m.content)
          .map(c => c.tamil)
          .filter(tamil => tamil !== item.tamil);

        const options = shuffleArray([item.tamil, ...shuffleArray(otherOptions).slice(0, 3)]);
        
        questions.push({
          type: 'translation',
          question: `What is the Tamil word for "${item.english}"?`,
          correctAnswer: item.tamil,
          options
        });
      });
      break;

    case 'meanings':
      module.content.forEach(item => {
        const otherMeanings = allModules
          .filter(m => m.type === 'meanings')
          .flatMap(m => m.content)
          .map(c => c.meaning)
          .filter(meaning => meaning !== item.meaning);

        const options = shuffleArray([item.meaning, ...shuffleArray(otherMeanings).slice(0, 3)]);
        
        questions.push({
          type: 'meaning',
          question: `What is the meaning of "${item.word}"?`,
          correctAnswer: item.meaning,
          options
        });
      });
      break;

    case 'opposites':
      module.content.forEach(item => {
        const otherOpposites = allModules
          .filter(m => m.type === 'opposites')
          .flatMap(m => m.content)
          .map(c => c.opposite)
          .filter(opposite => opposite !== item.opposite);

        const options = shuffleArray([item.opposite, ...shuffleArray(otherOpposites).slice(0, 3)]);
        
        questions.push({
          type: 'opposite',
          question: `What is the opposite of "${item.word}"?`,
          correctAnswer: item.opposite,
          options
        });
      });
      break;

    case 'qa':
      module.content.forEach(item => {
        if (item.answer && item.answer[0]) {
          const options = shuffleArray([item.answer[0], ...generateFakeAnswers(3)]);
          questions.push({
            type: 'comprehension',
            question: item.question,
            correctAnswer: item.answer[0],
            options
          });
        }
      });
      break;
  }

  return questions;
};

const TestModule = ({ lesson }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Generate questions from all modules in the lesson
    const allModules = lesson.modules;
    const allQuestions = allModules.flatMap(module => 
      generateQuestionFromModule(module, allModules)
    );
    
    setQuestions(shuffleArray(allQuestions));
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [lesson]);

  const handleAnswer = (answer) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <p className="text-center text-gray-600">
          No test questions available for this lesson.
        </p>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Test Complete!</h2>
          <p className="text-lg mb-4">
            Your score: {score} out of {questions.length}
            ({Math.round((score / questions.length) * 100)}%)
          </p>
          <button
            onClick={handleRetry}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span className="text-sm text-gray-500">
            Score: {score}
          </span>
        </div>
        <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={isAnswered}
              className={`w-full p-3 text-left rounded-lg border transition-all ${
                isAnswered
                  ? option === currentQuestion.correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : option === selectedAnswer
                    ? 'bg-red-100 border-red-500'
                    : 'bg-gray-50 border-gray-200'
                  : 'hover:bg-blue-50 border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {isAnswered && option === currentQuestion.correctAnswer && (
                  <Check className="w-5 h-5 text-green-500" />
                )}
                {isAnswered && option === selectedAnswer && option !== currentQuestion.correctAnswer && (
                  <X className="w-5 h-5 text-red-500" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
      {isAnswered && (
        <button
          onClick={handleNext}
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {currentQuestionIndex === questions.length - 1 ? 'Show Results' : 'Next Question'}
        </button>
      )}
    </div>
  );
};

export default TestModule;
import React, { useState } from 'react';
import { Book, Monitor, Trophy, Languages, Grid, ArrowRightLeft, MessageCircle } from 'lucide-react';

const lessons = [
  {
    id: 1,
    title: 'நூலகம் (Library)',
    icon: <Book className="w-6 h-6" />,
    modules: [
      {
        title: 'Translations (மொழிபெயர்த்தல்)',
        type: 'translations',
        content: [
          { english: 'house', tamil: 'வீடு' },
          { english: 'book', tamil: 'புத்தகம், நூல்' },
          { english: 'library', tamil: 'நூலகம்' },
          { english: 'reading', tamil: 'படித்தல்' }
        ]
      },
      {
        title: 'Word Meanings (பொருள் எழுதுக)',
        type: 'meanings',
        content: [
          { word: 'நூல்', meaning: 'புத்தகம்' },
          { word: 'வழி', meaning: 'பாதை' },
          { word: 'நாளிதழ்', meaning: 'செய்தித்தாள்' }
        ]
      },
      {
        title: 'Word Separation (பிரித்து எழுதுக)',
        type: 'separation',
        content: [
          { combined: 'தேனருவி', parts: ['தேன்', 'அருவி'] },
          { combined: 'புத்துணர்ச்சி', parts: ['புதுமை', 'உணர்ச்சி'] }
        ]
      },
      {
        title: 'Word Joining (சேர்த்து எழுதுக)',
        type: 'joining',
        content: [
          { parts: ['பள்ளி', 'கூடம்'], combined: 'பள்ளிக்கூடம்' },
          { parts: ['நூல்', 'அகம்'], combined: 'நூலகம்' }
        ]
      },
      {
        title: 'Opposites (எதிர்ச்சொல்)',
        type: 'opposites',
        content: [
          { word: 'அத்தை', opposite: 'மாமா' },
          { word: 'போகும்', opposite: 'போகாது' },
          { word: 'சரி', opposite: 'தவறு' }
        ]
      },
      {
        title: 'Questions and Answers (வினாக்களுக்கு விடையளி)',
        type: 'qa',
        content: [
          {
            question: 'நூலகத்தின் வேறு பெயர்கள் யாவை?',
            answer: ['நூல் நிலையம்', 'புத்தகச்சாலை']
          },
          {
            question: 'நூலக தினமாகக் கொண்டாடப்படும் நாள் எது?',
            answer: ['ஆகஸ்ட் 12 ம் தேதி நூலக தினமாகக் கொண்டாடப்படுகிறது.']
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'உள்ளங்கையில் ஓர் உலகம் (World in Palm)',
    icon: <Monitor className="w-6 h-6" />,
    modules: [
      {
        title: 'Technology Terms (தொழில்நுட்ப சொற்கள்)',
        type: 'translations',
        content: [
          { english: 'Mail', tamil: 'மின்னஞ்சல்' },
          { english: 'Facebook', tamil: 'முகநூல்' },
          { english: 'WhatsApp', tamil: 'புலனம்' },
          { english: 'Internet', tamil: 'இணையம்' },
          { english: 'Youtube', tamil: 'வலையொளி' }
        ]
      },
      {
        title: 'Word Meanings (பொருள் எழுதுக)',
        type: 'meanings',
        content: [
          { word: 'தரணி', meaning: 'உலகம்' },
          { word: 'ஏற்றம்', meaning: 'உயர்வு' },
          { word: 'துணைபுரிவேன்', meaning: 'உதவுவேன்' }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'துணிந்தவர் வெற்றி கொள்வர் (Brave Will Win)',
    icon: <Trophy className="w-6 h-6" />,
    modules: [
      {
        title: 'Translations (மொழிபெயர்த்தல்)',
        type: 'translations',
        content: [
          { english: 'Classroom', tamil: 'வகுப்பறை' },
          { english: 'competition', tamil: 'போட்டி' },
          { english: 'win', tamil: 'வெற்றி' },
          { english: 'try', tamil: 'முயற்சி' }
        ]
      },
      {
        title: 'Word Meanings (பொருள் எழுதுக)',
        type: 'meanings',
        content: [
          { word: 'ஆக்கம்', meaning: 'முயற்சி' },
          { word: 'வியப்பு', meaning: 'ஆச்சரியம்' },
          { word: 'சுலபமாக', meaning: 'எளிதாக' }
        ]
      }
    ]
  }
];

const ContentCard = ({ item, type }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleTouchStart = (e) => {
    e.preventDefault();
  };

  const renderContent = () => {
    switch (type) {
      case 'translations':
        return (
          <>
            <div className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4">
              {isFlipped ? item.tamil : item.english}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mb-2">
              Click to see {isFlipped ? 'English' : 'Tamil'}
            </div>
          </>
        );
      case 'meanings':
        return (
          <>
            <div className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4">
              {isFlipped ? item.meaning : item.word}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mb-2">
              Click to see {isFlipped ? 'word' : 'meaning'}
            </div>
          </>
        );
      case 'separation':
        return (
          <>
            <div className="text-base sm:text-lg md:text-xl mb-2">{item.combined}</div>
            <div className="text-lg text-blue-700 font-medium">
              {isFlipped ? item.parts.join(' + ') : 'Click to see parts'}
            </div>
          </>
        );
      case 'joining':
        return (
          <>
            <div className="text-base sm:text-lg md:text-xl mb-2">{item.parts.join(' + ')}</div>
            <div className="text-lg text-blue-700 font-medium">
              {isFlipped ? item.combined : 'Click to see combined word'}
            </div>
          </>
        );
      case 'opposites':
        return (
          <>
            <div className="text-base sm:text-lg md:text-xl mb-2">{item.word}</div>
            <div className="text-lg text-blue-700 font-medium">
              {isFlipped ? item.opposite : 'Click to see opposite'}
            </div>
          </>
        );
      case 'qa':
        return (
          <>
            <div className="text-base sm:text-lg md:text-xl mb-4">{item.question}</div>
            {isFlipped && (
              <div className="text-md text-blue-700 font-medium">
                {item.answer.map((ans, idx) => (
                  <p key={idx} className="mb-2">{ans}</p>
                ))}
              </div>
            )}
            <div className="text-xs sm:text-sm text-gray-500">
              {!isFlipped && 'Click to see answer'}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={`rounded-lg border p-4 cursor-pointer transform transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md ${
        isFlipped ? 'bg-blue-50 border-blue-200' : 'bg-white border-blue-100'
      }`}
      onClick={() => setIsFlipped(!isFlipped)}
      onTouchStart={handleTouchStart}
      role="button"
      tabIndex={0}
    >
      <div className="p-2 sm:p-3 md:p-6 text-center min-h-[120px] flex flex-col justify-between">
        {renderContent()}
      </div>
    </div>
  );
};

const Module = ({ module }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'translations': return <Languages className="w-5 h-5" />;
      case 'separation': return <Grid className="w-5 h-5" />;
      case 'qa': return <MessageCircle className="w-5 h-5" />;
      default: return <ArrowRightLeft className="w-5 h-5" />;
    }
  };

  return (
    <div className="mb-4 sm:mb-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
      <div className="border-b border-blue-100 p-4">
        <div className="flex items-center gap-2">
          {getIcon(module.type)}
          <h3 className="text-lg text-blue-900 font-semibold">{module.title}</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 p-4">
        {module.content.map((item, index) => (
          <div key={index} className="touch-manipulation">
            <ContentCard item={item} type={module.type} />
          </div>
        ))}
      </div>
    </div>
  );
};

const TamilLearningApp = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);

  // Add meta viewport tag for proper mobile rendering
  React.useEffect(() => {
    // Check if viewport meta tag exists
    if (!document.querySelector('meta[name="viewport"]')) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-2 py-1 sm:p-4 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 sm:mb-4 md:mb-8 text-blue-900 py-2">Tamil Learning App</h1>
      
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
                  {lesson.icon}
                  <h2 className="text-lg font-semibold">{lesson.title}</h2>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">
                  {lesson.modules.length} learning modules
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
          
          {selectedLesson.modules.map((module, index) => (
            <Module key={index} module={module} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TamilLearningApp;
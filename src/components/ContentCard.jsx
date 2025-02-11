import React, { useState } from 'react';

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

export default ContentCard;
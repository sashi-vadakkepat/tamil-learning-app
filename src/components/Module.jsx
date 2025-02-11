import React from 'react';
import { Languages, Grid, MessageCircle, ArrowRightLeft } from 'lucide-react';
import ContentCard from './ContentCard';

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
      <div className="border-b border-blue-100 p-3">
        <div className="flex items-center gap-2">
          {getIcon(module.type)}
          <h3 className="text-lg text-blue-900 font-semibold">{module.title}</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 p-2 sm:p-4">
        {module.content.map((item, index) => (
          <div key={index} className="touch-manipulation">
            <ContentCard item={item} type={module.type} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Module;
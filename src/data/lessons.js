import { Book, Monitor, Trophy } from 'lucide-react';

export const lessons = [
  {
    id: 1,
    title: 'நூலகம் (Library)',
    icon: Book,
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
    icon: Monitor,
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
    icon: Trophy,
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
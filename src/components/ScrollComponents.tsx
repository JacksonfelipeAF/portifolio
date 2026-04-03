import React from 'react';

interface ScrollIndicatorProps {
  sections: string[];
  activeSection: number;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ sections, activeSection }) => {
  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-4">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === index
                ? 'bg-amber-600 scale-150 shadow-lg shadow-amber-400/50'
                : 'bg-stone-400 hover:bg-stone-500 hover:scale-110'
            }`}
            aria-label={`Go to ${sections[index]}`}
          />
        ))}
      </div>
    </div>
  );
};

interface ProgressBarProps {
  progress: number;
}

export const ScrollProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-stone-200 z-50">
      <div
        className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

interface StickyNavProps {
  sections: string[];
  activeSection: number;
}

export const StickyNav: React.FC<StickyNavProps> = ({ sections, activeSection }) => {
  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-stone-100/90 backdrop-blur-md border-b border-stone-300 z-40 hidden md:block">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center gap-8 py-4">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeSection === index
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-400/30'
                  : 'text-stone-600 hover:text-stone-800 hover:bg-stone-200'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

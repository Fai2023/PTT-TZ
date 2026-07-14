import React from 'react';
import Navigation from './Navigation';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          <div className="flex items-center gap-3">
            <img
              src="https://ik.imagekit.io/8jn9lgbbcw/logo%20phoenix.png?updatedAt=1748513646327"
              alt="Phoenix Tanzania Logo"
              className="h-10 sm:h-16 lg:h-20 w-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <LanguageToggle />
            </div>
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
}
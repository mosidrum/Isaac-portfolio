import React from 'react';
import { Experience, Hero, Recent } from '../components';
import './globals.css';

// eslint-disable-next-line react/function-component-definition
export default function Home() {
  return (
    <div className="px-2 sm:px-4 md:px-6">
      <Hero />
      <div className="recent-exp flex-center-between align-item-start mt-3 gap-4 md:gap-6">
        <Recent />
        <Experience />
      </div>
    </div>
  );
}

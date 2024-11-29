import React from 'react';
import { Experience, Hero, Recent } from '../components';
import './globals.css';

// eslint-disable-next-line react/function-component-definition
export default function Home() {
  return (
    <div>
      <Hero />
      <div className="recent-exp flex-center-between align-item-start mt-3 gap-1">
        <Recent />
        <Experience />
      </div>
    </div>
  );
}

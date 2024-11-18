import React from 'react';
import { Experience, Hero, Recent } from '../components';


// eslint-disable-next-line react/function-component-definition
export default function Home() {
  return (
    <div>
      <Hero />
      <div className="flex-center-between align-item-start mt-3">
        <Recent />
        <Experience />
      </div>
    </div>
  );
}

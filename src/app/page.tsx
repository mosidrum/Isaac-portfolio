import React from 'react';
import { Experience, Hero, Recent } from '../components';


// eslint-disable-next-line react/function-component-definition
export default function Home() {
  return (
    <div>
      <Hero />
      <div className="flex-center-between">
        <Recent />
        <Experience />
      </div>
    </div>
  );
}

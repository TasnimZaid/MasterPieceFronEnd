import React from 'react';
import HeroActivity from './HeroActivity';
import LetterActivity from './LetterActivity';
import ActivityCards from './ActivityCards';
import TipsAndAdvice from './TipsAndAdvice';

function MainActivity() {
  return (
    <div className="App">
      <HeroActivity />
      <LetterActivity />
      <ActivityCards />
      <TipsAndAdvice/>
    </div>
  );
}

export default MainActivity;
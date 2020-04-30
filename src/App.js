import React from 'react';
import {PageOne} from './components/page_one'
import {PageTwo} from './components/page_two'
import {PageThree} from './components/page_three'
import {PageFour} from './components/page_four'
import {PageFive} from './components/page_five'
import {PageSix} from './components/page_six'
import {PageSeven} from './components/page_seven'
import {PageNine} from './components/page_nine'
import './App.css'

function App() {
  return (
    <div className="App">
      <PageOne/>
      <PageTwo/>
      <PageThree/>
      <PageFour/>
      <PageFive/>
      <PageSix/>
      <PageSeven/>
      <PageNine/>
    </div>
  );
}

export default App;

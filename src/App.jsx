import React from 'react'
import data from "../data.json"
import reactionIcon from "./assets/images/icon-reaction.svg"
import memoryIcon from "./assets/images/icon-memory.svg"
import verbalIcon from "./assets/images/icon-verbal.svg"
import visualIcon from "./assets/images/icon-visual.svg"

function App() {

const scoreSum = Math.floor((data[0].score + data[1].score + data[2].score + data[3].score)/4)

  return (
    <div className='container'>
      <div className='result'>
        <h2 className='result--title'>Your Result</h2>
        <div className='score'>
          <h2 className='current-score'>{scoreSum}</h2>
          <p className='max-score'>of 100</p>
        </div>
          <h1 className='result--subtitle'>Great</h1>
          <p className='result--text'>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
      <div className='summary'>
        <h2 className='summary--title'>Summary</h2>
        <div className='summary--category'>
          <img className='icon' src={reactionIcon}/>
          <h3 className='category--reaction'>{data[0].category}</h3>
          <h3 className='category-score'>{data[0].score}</h3>
          <h3 className='max-category-score'>/ 100</h3>
        </div>
        <div className='summary--category'>
          <img className='icon' src={memoryIcon}/>
          <h3 className='category--memory'>{data[1].category}</h3>
          <h3 className='category-score'>{data[1].score}</h3>
          <h3 className='max-category-score'>/ 100</h3>
        </div>
        <div className='summary--category'>
          <img className='icon' src={verbalIcon}/>
          <h3 className='category--verbal'>{data[2].category}</h3>
          <h3 className='category-score'>{data[2].score}</h3>
          <h3 className='max-category-score'>/ 100</h3>
        </div>
        <div className='summary--category'>
          <img className='icon' src={visualIcon}/>
          <h3 className='category--visual'>{data[3].category}</h3>
          <h3 className='category-score'>{data[3].score}</h3>
          <h3 className='max-category-score'>/ 100</h3>
        </div>
        <button className='summary-btn'>Continue</button>
      </div>
    </div>
  )
}

export default App

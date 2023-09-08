import './App.css';
import moonImg from '../../Images/moon.png'
import leftTreesImg from '../../Images/left-trees.png'
import rightTreesImg from '../../Images/right-trees.png'
import mountain1 from '../../Images/m1.png'
import mountain2 from '../../Images/m2.png'
import mountain3 from '../../Images/m3.png'
import mountain4 from '../../Images/m4.png'
import mountain5 from '../../Images/m5.png'
import { useEffect, useState } from 'react';
import styleByScroll from './scrollStyle';

function App() {
  const [scrollValue, setScrollValue] = useState(0)
  
  window.addEventListener('wheel', (e) => {
    const changeY = e.deltaY;
    if (scrollValue + changeY >= 0) {
      setScrollValue(scrollValue + changeY)
    } else {
      setScrollValue(0)
    }
  })
  
  useEffect(() => {
    styleByScroll(scrollValue)
  }, [scrollValue])

  return (
    <div className="App">
        <div className='moon-container'>
          <img className="moon" src={moonImg} />
        </div>
        <img className='mountain1' src={mountain1} />
        <img className='mountain2' src={mountain2} />
        <img className='mountain3' src={mountain3} />
        <img className='mountain4' src={mountain4} />
        <img className='mountain5' src={mountain5} />
        <img className='left-trees' src={leftTreesImg} />
        <img className='right-trees' src={rightTreesImg} />
    </div>
  );
}

export default App;

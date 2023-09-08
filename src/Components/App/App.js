import './App.css';

import { useEffect, useState } from 'react';
import styleByScroll from './scrollStyle';
import Scenery from '../Scenery/Scenery';

function App() {
  const [scrollValue, setScrollValue] = useState(0);
  
  window.addEventListener('wheel', (e) => {
    const changeY = e.deltaY;
    if (scrollValue + changeY >= 0) {
      setScrollValue(scrollValue + changeY)
    } else {
      setScrollValue(0)
    }
  })
  
  useEffect(() => {
    // styleByScroll(scrollValue)
  }, [scrollValue])

  return (
    <div className="App">
        <Scenery scrollValue={scrollValue}/>
    </div>
  );
}

export default App;

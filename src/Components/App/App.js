import './App.css';

import { useEffect, useState } from 'react';
import styleByScroll from './scrollStyle';
import Scenery from '../Scenery/Scenery';

function App() {
  const [scrollValue, setScrollValue] = useState(0);
  const [moonStyle, setMoonStyle] = useState({});
  const [m1Style, setM1Style] = useState({});
  const [m2Style, setM2Style] = useState({});
  const [m3Style, setM3Style] = useState({});
  const [m4Style, setM4Style] = useState({});
  const [m5Style, setM5Style] = useState({});
  const [leftTreeStyle, setLeftTreeStyle] = useState({});
  const [rightTreeStyle, setRightTreeStyle] = useState({});
  
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
        <Scenery
          moonStyle={moonStyle} 
          m1Style={m1Style}
          m2Style={m2Style}
          m3Style={m3Style}
          m4Style={m4Style}
          m5Style={m5Style}
          leftTreeStyle={leftTreeStyle}
          rightTreeStyle={rightTreeStyle}
          />
    </div>
  );
}

export default App;

import './App.css';

import { useEffect, useState } from 'react';
import Scenery from '../Scenery/Scenery';
import Form from '../Form/Form';
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';

function App() {
  const [scrollValue, setScrollValue] = useState(0);
  const [data, setData] = useState({})
  const [formSubmitted, setFormSubmitted] = useState(false)  
  const [scrollerVisible, setScrollerVisible] = useState(false)

  window.addEventListener('wheel', (e) => {
    const changeY = e.deltaY;
    if (scrollValue + changeY >= 0 && scrollValue + changeY < 9000 && formSubmitted) {
      setScrollValue(Number((scrollValue + changeY).toFixed(0)))
    } else if (scrollValue + changeY > 9000) {
      setScrollValue(8999)
    } else {
      setScrollValue(0)
    }
  })

  useEffect(() => {
    if (scrollValue < 8999 && formSubmitted) {
      setScrollerVisible(true)
    } else {
      setScrollerVisible(false)
    }
  }, [scrollValue, formSubmitted])
  
  useEffect(() => {
    if (data?.obstacle) {
      setFormSubmitted(true)
    } else {
      setFormSubmitted(false)
    }
  }, [data])

  return (
    <div className="App">
        {!formSubmitted && <Form setData={setData} />}
        <Scenery scrollValue={scrollValue} data={data} formSubmitted={formSubmitted}/>
        {scrollerVisible && <ScrollIndicator />}
    </div>
  );
}

export default App;

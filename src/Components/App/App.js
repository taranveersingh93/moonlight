import './App.css';

import { useEffect, useState } from 'react';
import Scenery from '../Scenery/Scenery';
import Form from '../Form/Form';

function App() {
  const [scrollValue, setScrollValue] = useState(0);
  const [data, setData] = useState({})
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  window.addEventListener('wheel', (e) => {
    const changeY = e.deltaY;
    if (scrollValue + changeY >= 0) {
      setScrollValue(Number((scrollValue + changeY).toFixed(0)))
    } else {
      setScrollValue(0)
    }
  })
  
  useEffect(() => {
    console.log(data)
    if (data?.obstacle) {
      setFormSubmitted(true)
    } else {
      setFormSubmitted(false)
    }
  }, [data])

  return (
    <div className="App">
        {!formSubmitted && <Form setData={setData} />}
        {formSubmitted && <Scenery scrollValue={scrollValue}/>}
    </div>
  );
}

export default App;

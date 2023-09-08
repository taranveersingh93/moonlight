import './mountains.css'
import mountain2 from '../../Images/m2.png'
import { useState, useEffect } from 'react';

const M2 = ({scrollValue}) => {
  const [m2Left, setM2Left] = useState(-10)
  const [m2Top, setM2Top] = useState(25)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);
  useEffect(() => {
    console.log(scrollValue, "scroll")
    if (scrollValue > 400) {
      setM2Top(25 + (0.009 * scrollValue))
      setSizeMultiplier(1 + (0.0001 * scrollValue))
    } else {
      setM2Top(25)
      setSizeMultiplier(1)
    }
}, [scrollValue])

  useEffect(() => {
    console.log("top", m2Top, "size", sizeMultiplier)
  }, [m2Top, sizeMultiplier])
  return (
    <img className='mountain2' src={mountain2} style={{top: `${m2Top}vh`, left: `${m2Left}vw`, transform: `scale(${sizeMultiplier})`}}/>
  )
}

export default M2;
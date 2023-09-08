import './mountains.css'
import mountain2 from '../../Images/m2.png'
import { useState, useEffect } from 'react';

const M2 = ({scrollValue}) => {
  const [adjustedScroll, setAdjustedScroll] = useState(0);
  const [m2Left, setM2Left] = useState(-10)
  const [m2Top, setM2Top] = useState(25)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);
  useEffect(() => {
    if (scrollValue > 500) {
      setAdjustedScroll(scrollValue - 500)
    } else {
      setAdjustedScroll(0)
    }
    setM2Top(25 + (0.022 * adjustedScroll))
    setSizeMultiplier(1 + (0.0005 * adjustedScroll))
}, [scrollValue])

  return (
    <img className='mountain2' src={mountain2} style={{top: `${m2Top}vh`, left: `${m2Left}vw`, transform: `scale(${sizeMultiplier})`}}/>
  )
}

export default M2;
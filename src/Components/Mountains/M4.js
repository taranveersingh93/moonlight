import './mountains.css'
import mountain4 from '../../Images/m4.png'
import { useState, useEffect } from 'react';

const M4 = ({scrollValue}) => {
  const [m4Left, setM4Left] = useState(0)
  const [m4Top, setM4Top] = useState(5)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);
  const [adjustedScroll, setAdjustedScroll] = useState(0)

  useEffect(() => {
    if (scrollValue > 4350) {
      setAdjustedScroll(scrollValue - 4350)
    } else {
      setAdjustedScroll(0)
    }
    setM4Top(20 + (0.017 * adjustedScroll))
    setSizeMultiplier(1 + (0.0003 * adjustedScroll))
  }, [scrollValue])

  return (
    <img className='mountain4' src={mountain4} style={{top: `${m4Top}vh`, left: `${m4Left}vw`, transform: `scale(${sizeMultiplier})`}}/>
  )
}

export default M4;

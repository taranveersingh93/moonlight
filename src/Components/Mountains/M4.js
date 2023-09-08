import './mountains.css'
import mountain4 from '../../Images/m4.png'
import { useState, useEffect } from 'react';

const M4 = ({scrollValue}) => {
  const [m4Left, setM4Left] = useState(0)
  const [m4Top, setM4Top] = useState(5)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);
  const [adjustedScroll, setAdjustedScroll] = useState(0)

  useEffect(() => {
    if (scrollValue > 4200) {
      setAdjustedScroll(scrollValue - 4200)
    } else {
      setAdjustedScroll(0)
    }
    setM4Top(20 + (0.005 * adjustedScroll))
    setSizeMultiplier(1 + (0.00015 * adjustedScroll))
  }, [scrollValue])

  useEffect(() => {
    console.log("top", m4Top, "size", sizeMultiplier, "scroll", scrollValue)
  }, [m4Top, sizeMultiplier, scrollValue])
  return (
    <img className='mountain4' src={mountain4} style={{top: `${m4Top}vh`, left: `${m4Left}vw`, transform: `scale(${sizeMultiplier})`}}/>
  )
}

export default M4;

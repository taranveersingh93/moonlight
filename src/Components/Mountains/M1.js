import './mountains.css'
import mountain1 from '../../Images/m1.png'
import { useState, useEffect } from 'react';

const M1 = ({scrollValue}) => {
  const [adjustedScroll, setAdjustedScroll] = useState(0);
  const [m1Left, setM1Left] = useState(-5)
  const [m1Top, setM1Top] = useState(55)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);
  useEffect(() => {
    if (scrollValue > 490) {
      setAdjustedScroll(scrollValue - 490)
    } else {
      setAdjustedScroll(0)
    }
      setM1Top(55 + (0.05 * adjustedScroll))
      setSizeMultiplier(1 + (0.001 * adjustedScroll))
  }, [scrollValue])

  return (
    <img className='mountain1' src={mountain1} style={{top: `${m1Top}vh`, left: `${m1Left}vw`, transform: `scale(${sizeMultiplier})` }}/>
  )
}

export default M1
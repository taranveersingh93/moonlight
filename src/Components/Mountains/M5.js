import './mountains.css'
import mountain5 from '../../Images/m5.png'
import { useState, useEffect } from 'react';

const M5 = ({scrollValue}) => {
  const [m5Right, setM5Right] = useState(0)
  const [m5Top, setM5Top] = useState(30)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);
  const [adjustedScroll, setAdjustedScroll] = useState(0)
  useEffect(() => {
    if (scrollValue > 6100) {
      setAdjustedScroll(scrollValue - 6100)
    } else {
      setAdjustedScroll(0)
    }
    // setM5Right (0.0001 * scrollValue)
    setSizeMultiplier(1 + (0.0000015 * scrollValue))
  }, [scrollValue])

  useEffect(() => {
    console.log("top", m5Top, "size", sizeMultiplier, "scroll", scrollValue)
  }, [m5Top, sizeMultiplier, scrollValue])
  return (
    <img className='mountain5' src={mountain5} style={{top: `${m5Top}vh`, right: `${m5Right}vw`, transform: `scale(${sizeMultiplier})`}}/>
  )
}

export default M5;
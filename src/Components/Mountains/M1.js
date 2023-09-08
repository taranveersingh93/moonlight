import './mountains.css'
import mountain1 from '../../Images/m1.png'
import { useState, useEffect } from 'react';

const M1 = ({scrollValue}) => {
  const [m1Left, setM1Left] = useState(-5)
  const [m1Top, setM1Top] = useState(55)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);
  useEffect(() => {
    // console.log(scrollValue)
    if (scrollValue < 760) {
      setM1Top(55 + (0.01 * scrollValue))
      setSizeMultiplier(1 + (0.0002 * scrollValue))
    } else {
      setM1Top(55 + (0.02 * scrollValue))
      setSizeMultiplier(1 + (0.0004 * scrollValue))
    }
  }, [scrollValue])

  useEffect(() => {
    console.log("top", m1Top, "left",m1Left,"size", sizeMultiplier, "scroll", scrollValue)
  }, [m1Top, m1Left, sizeMultiplier])

  return (
    <img className='mountain1' src={mountain1} style={{top: `${m1Top}vh`, left: `${m1Left}vw`, transform: `scale(${sizeMultiplier})` }}/>
  )
}

export default M1
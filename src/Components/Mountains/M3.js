import './mountains.css'
import mountain3 from '../../Images/m3.png'
import { useState, useEffect } from 'react';

const M3 = ({scrollValue}) => {
  const [m3Left, setm3Left] = useState(-5)
  const [m3Top, setM3Top] = useState(20)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);
  const [adjustedScroll, setAdjustedScroll] = useState(0);
  

  useEffect(() => {

    if (scrollValue > 1300) {
      setAdjustedScroll(scrollValue - 1300)
    } else {
      setAdjustedScroll(0)
    }
    setM3Top(20 + (0.005 * adjustedScroll))
    setSizeMultiplier(1 + (0.0002 * adjustedScroll))
  }, [scrollValue])

  useEffect(() => {
    console.log("top", m3Top, "size", sizeMultiplier, "scroll", scrollValue)
  }, [m3Top, sizeMultiplier, scrollValue])

  return (
    <img className='mountain3' src={mountain3} style={{top: `${m3Top}vh`, left: `${m3Left}vw`, transform: `scale(${sizeMultiplier})`}}/>
  )
}

export default M3;
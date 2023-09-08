import './mountains.css'
import mountain4 from '../../Images/m4.png'
import { useState, useEffect } from 'react';

const M4 = ({scrollValue}) => {
  const [m4Left, setm4Left] = useState(0)
  const [m4Top, setm4Top] = useState(5)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);
  useEffect(() => {
    // console.log(scrollValue)
  }, [scrollValue])
  return (
    <img className='mountain4' src={mountain4} style={{top: `${m4Top}vh`, left: `${m4Left}vw`, transform: `scale(${sizeMultiplier})`}}/>
  )
}

export default M4;

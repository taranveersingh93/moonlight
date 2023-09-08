import './mountains.css'
import mountain3 from '../../Images/m3.png'
import { useState, useEffect } from 'react';

const M3 = ({scrollValue}) => {
  const [m3Left, setm3Left] = useState(-5)
  const [m3Top, setm3Top] = useState(20)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);
  useEffect(() => {
    // console.log(scrollValue)
  }, [scrollValue])
  return (
    <img className='mountain3' src={mountain3} style={{top: `${m3Top}vh`, left: `${m3Left}vw`, transform: `scale(${sizeMultiplier})`}}/>
  )
}

export default M3;
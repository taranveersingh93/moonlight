import './mountains.css'
import mountain3 from '../../Images/m3.png'
import { useState } from 'react';

const M3 = () => {
  const [m3Left, setm3Left] = useState(-5)
  const [m3Top, setm3Top] = useState(20)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);

  return (
    <img className='mountain3' src={mountain3} style={{top: `${m3Top}vh`, left: `${m3Left}vw`, transform: `scale(${sizeMultiplier})`}}/>
  )
}

export default M3;
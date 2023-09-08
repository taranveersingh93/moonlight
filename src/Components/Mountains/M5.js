import './mountains.css'
import mountain5 from '../../Images/m5.png'
import { useState, useEffect } from 'react';

const M5 = ({scrollValue}) => {
  const [m5Right, setm5Right] = useState(0)
  const [m5Top, setm5Top] = useState(10)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);
  useEffect(() => {
    // console.log(scrollValue)
  }, [scrollValue])
  return (
    <img className='mountain5' src={mountain5} style={{top: `${m5Top}vh`, right: `${m5Right}vw`, transform: `scale(${sizeMultiplier})`}}/>
  )
}

export default M5;
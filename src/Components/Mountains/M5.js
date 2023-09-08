import './mountains.css'
import mountain5 from '../../Images/m5.png'
import { useState } from 'react';

const M5 = () => {
  const [m5Right, setm5Right] = useState(0)
  const [m5Top, setm5Top] = useState(10)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);

  return (
    <img className='mountain5' src={mountain5} style={{top: `${m5Top}vh`, right: `${m5Right}vw`, transform: `scale(${sizeMultiplier})`}}/>
  )
}

export default M5;
import './mountains.css'
import mountain2 from '../../Images/m2.png'
import { useState } from 'react';

const M2 = () => {
  const [m2Left, setm2Left] = useState(-10)
  const [m2Top, setm2Top] = useState(25)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);

  return (
    <img className='mountain2' src={mountain2} style={{top: `${m2Top}vh`, left: `${m2Left}vw`, transform: `scale(${sizeMultiplier})`}}/>
  )
}

export default M2;
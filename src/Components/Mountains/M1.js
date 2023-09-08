import './mountains.css'
import mountain1 from '../../Images/m1.png'
import { useState } from 'react';

const M1 = () => {
  const [m1Left, setM1Left] = useState(-5)
  const [m1Top, setM1Top] = useState(55)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);


  return (
    <img className='mountain1' src={mountain1} style={{top: `${m1Top}vh`, left: `${m1Left}vw`, transform: `scale(${sizeMultiplier})` }}/>
  )
}

export default M1
import './mountains.css'
import mountain2 from '../../Images/m2.png'
import { useState, useEffect } from 'react';

const M2 = ({scrollValue}) => {
  const [m2Left, setm2Left] = useState(-10)
  const [m2Top, setm2Top] = useState(25)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);
  useEffect(() => {
    // console.log(scrollValue)
  }, [scrollValue])
  return (
    <img className='mountain2' src={mountain2} style={{top: `${m2Top}vh`, left: `${m2Left}vw`, transform: `scale(${sizeMultiplier})`}}/>
  )
}

export default M2;
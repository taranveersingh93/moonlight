import './Moon.css'
import moonImg from '../../Images/moon.png'
import { useState } from 'react';


const Moon = ({scrollValue}) => {
  const [moonTop, setMoonTop] = useState(0);
  const [moonLeft, setMoonleft] = useState(40)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);

  return (
    <div className='moon-container' style={{top: `${moonTop}vh`, left: `${moonLeft}vw`, transform: `scale(${sizeMultiplier})`}}>
      <img className="moon" src={moonImg} />
    </div>
  )
}

export default Moon;
import './Moon.css'
import moonImg from '../../Images/moon.png'
import { useState } from 'react';


const Moon = ({scrollValue}) => {
  const [moonStyle, setMoonStyle] = useState({});

  return (
    <div className='moon-container'>
      <img className="moon" src={moonImg} />
    </div>
  )
}

export default Moon;
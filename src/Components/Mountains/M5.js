import './mountains.css'
import mountain5 from '../../Images/m5.png'
import { useState } from 'react';

const M5 = () => {
  const [m5Style, setM5Style] = useState({});
 
  return (
    <img className='mountain5' src={mountain5} />
  )
}

export default M5;
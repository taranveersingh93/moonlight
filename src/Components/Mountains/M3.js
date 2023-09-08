import './mountains.css'
import mountain3 from '../../Images/m3.png'
import { useState } from 'react';

const M3 = () => {
  const [m3Style, setM3Style] = useState({});

  return (
    <img className='mountain3' src={mountain3} />
  )
}

export default M3;
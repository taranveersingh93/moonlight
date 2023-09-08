import './mountains.css'
import mountain4 from '../../Images/m4.png'
import { useState } from 'react';

const M4 = () => {
  const [m4Style, setM4Style] = useState({});

  return (
    <img className='mountain4' src={mountain4} />
  )
}

export default M4;

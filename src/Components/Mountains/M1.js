import './mountains.css'
import mountain1 from '../../Images/m1.png'
import { useState } from 'react';

const M1 = () => {
  const [m1Style, setM1Style] = useState({});
 
  return (
    <img className='mountain1' src={mountain1} />
  )
}

export default M1
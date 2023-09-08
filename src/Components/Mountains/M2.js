import './mountains.css'
import mountain2 from '../../Images/m2.png'
import { useState } from 'react';

const M2 = () => {
  const [m2Style, setM2Style] = useState({});

  return (
    <img className='mountain2' src={mountain2} />
  )
}

export default M2;
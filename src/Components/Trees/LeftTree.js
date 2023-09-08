import './trees.css'
import leftTreesImg from '../../Images/left-trees.png'
import { useState } from 'react';

const LeftTree = () => {
  const [leftTreeStyle, setLeftTreeStyle] = useState({top: ''});
  return (
    <img className='left-trees' src={leftTreesImg} />
  )
}

export default LeftTree;
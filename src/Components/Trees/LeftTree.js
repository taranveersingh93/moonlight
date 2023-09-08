import './trees.css'
import leftTreesImg from '../../Images/left-trees.png'
import { useState } from 'react';

const LeftTree = () => {
  const [treeLeft, setTreeLeft] = useState(-15)
  const [treeTop, setTreeTop] = useState(30)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);

  return (
    <img className='left-trees' src={leftTreesImg} style={{top: `${treeTop}vh`, left: `${treeLeft}vw`, transform: `scale(${sizeMultiplier})`}}/>
  )
}

export default LeftTree;
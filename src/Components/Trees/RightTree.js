import './trees.css'
import rightTreesImg from '../../Images/right-trees.png'
import { useState } from 'react';

const RightTree = () => {
  const [treeRight, setTreeRight] = useState(-5)
  const [treeTop, setTreeTop] = useState(50)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);

  return (
    <img className='right-trees' src={rightTreesImg} style={{top: `${treeTop}vh`, right: `${treeRight}vw`, transform: `scale(${sizeMultiplier})`}} />
  )
}

export default RightTree;
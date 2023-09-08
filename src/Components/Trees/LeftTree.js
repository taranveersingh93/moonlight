import './trees.css'
import leftTreesImg from '../../Images/left-trees.png'
import { useState, useEffect } from 'react';

const LeftTree = ({scrollValue}) => {
  const [treeLeft, setTreeLeft] = useState(-15)
  const [treeTop, setTreeTop] = useState(30)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);
  useEffect(() => {
    // console.log(scrollValue)
  }, [scrollValue])
  return (
    <img className='left-trees' src={leftTreesImg} style={{top: `${treeTop}vh`, left: `${treeLeft}vw`, transform: `scale(${sizeMultiplier})`}}/>
  )
}

export default LeftTree;
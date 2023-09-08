import './trees.css'
import rightTreesImg from '../../Images/right-trees.png'
import { useState, useEffect } from 'react';

const RightTree = ({scrollValue}) => {
  const [treeRight, setTreeRight] = useState(-5)
  const [treeTop, setTreeTop] = useState(50)
  const [sizeMultiplier, setSizeMultiplier] = useState(1);
  useEffect(() => {
    setTreeRight(-5 - (0.18*scrollValue))
    setSizeMultiplier(1+(scrollValue*0.007))
  }, [scrollValue])

  useEffect(() => {
    // console.log(treeRight)
  }, [treeRight])
  return (
    <img className='right-trees' src={rightTreesImg} style={{top: `${treeTop}vh`, right: `${treeRight}vw`, transform: `scale(${sizeMultiplier})`}} />
  )
}

export default RightTree;
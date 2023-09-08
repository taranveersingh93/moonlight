import './trees.css'
import rightTreesImg from '../../Images/right-trees.png'
import { useState } from 'react';

const RightTree = () => {
  const [rightTreeStyle, setRightTreeStyle] = useState({});

  return (
    <img className='right-trees' src={rightTreesImg} />
  )
}

export default RightTree;
import { useEffect, useState } from 'react'
import './texts.css'

const Win1 = ({data, scrollValue}) => {
  
  return (
    <p className='win1-text' style={{top: `${50+ 0.05*scrollValue}vh`}}>
      {data?.win1}
    </p>
  )
}

export default Win1;
import './Scenery.css'
import Moon from '../Moon/Moon'
import M1 from '../Mountains/M1'
import M2 from '../Mountains/M2'
import M3 from '../Mountains/M3'
import M4 from '../Mountains/M4'
import M5 from '../Mountains/M5'
import LeftTree from '../Trees/LeftTree'
import RightTree from '../Trees/RightTree'
import Win1 from '../Texts/Win1'
import Win2 from '../Texts/Win2'
import Win3 from '../Texts/Win3'
import Win4 from '../Texts/Win4'
import Obstacle from '../Texts/Obstacle'
import { useEffect, useState } from 'react'
import Assurance1 from '../Texts/Assurance1'
import Assurance2 from '../Texts/Assurance2'
import Assurance3 from '../Texts/Assurance3'
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator'


const Scenery = ({scrollValue, data, formSubmitted}) => {
  const [win1Visible, setWin1Visible] = useState(false);
  const [win2Visible, setWin2Visible] = useState(false);
  const [win3Visible, setWin3Visible] = useState(false);
  const [win4Visible, setWin4Visible] = useState(false);
  const [assurance1Visible, setAssurance1Visible] = useState(false);
  const [obstacleVisible, setObstacleVisible] = useState(false);
  const [assurance2Visible, setAssurance2Visible] = useState(false)
  const [assurance3Visible, setAssurance3Visible] = useState(false)

  useEffect(() => {
    console.log(scrollValue, formSubmitted)
    if (scrollValue > 150 && scrollValue < 420) {
      setWin1Visible(true)
    } else {
      setWin1Visible(false)
    }

    if (scrollValue > 530 && scrollValue < 1300) {
      setWin2Visible(true)
    } else {
      setWin2Visible(false)
    }

    if (scrollValue > 1570 && scrollValue < 2800) {
      setWin3Visible(true)
    } else {
      setWin3Visible(false)
    }

    if (scrollValue > 3200 && scrollValue < 5200) {
      setWin4Visible(true)
    } else {
      setWin4Visible(false)
    }

    if (scrollValue > 5200 && scrollValue < 9000) {
      setObstacleVisible(true)
    } else {
      setObstacleVisible(false)
    }

    if (scrollValue > 5200) {
      setAssurance1Visible(true) 
    } else {
      setAssurance1Visible(false)
    }

    if (scrollValue > 5600) {
      setAssurance2Visible(true) 
    } else {
      setAssurance2Visible(false)
    }

    if (scrollValue > 6000) {
      setAssurance3Visible(true) 
    } else {
      setAssurance3Visible(false)
    }


  }, [scrollValue])
  return (
    <>
      <Moon scrollValue={scrollValue}/>
      <M1 scrollValue={scrollValue}/>
      {win1Visible && <Win1 data={data} scrollValue={scrollValue}/>}
      <M2 scrollValue={scrollValue}/>
      {win2Visible && <Win2 data={data} scrollValue={scrollValue} />}
      <M3 scrollValue={scrollValue}/>
      {win3Visible && <Win3 data={data} scrollValue={scrollValue} />}
      <M4 scrollValue={scrollValue}/>
      {win4Visible && <Win4 data={data} scrollValue={scrollValue} />}
      <M5 scrollValue={scrollValue}/>
      {obstacleVisible && <Obstacle data={data} scrollValue={scrollValue} />}
      {assurance1Visible && <Assurance1 scrollValue={scrollValue}/>}
      {assurance2Visible && <Assurance2 scrollValue={scrollValue}/>}
      {assurance3Visible && <Assurance3 scrollValue={scrollValue}/>}
      <LeftTree scrollValue={scrollValue}/>
      <RightTree scrollValue={scrollValue} />
    </>
  )
}

export default Scenery;
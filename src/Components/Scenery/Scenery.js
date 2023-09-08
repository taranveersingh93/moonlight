import './Scenery.css'
import Moon from '../Moon/Moon'
import M1 from '../Mountains/M1'
import M2 from '../Mountains/M2'
import M3 from '../Mountains/M3'
import M4 from '../Mountains/M4'
import M5 from '../Mountains/M5'
import LeftTree from '../Trees/LeftTree'
import RightTree from '../Trees/RightTree'

const Scenery = ({moonStyle, m1Style, m2Style, m3Style, m4Style, m5Style, leftTreeStyle, rightTreeStyle}) => {
  return (
    <>
      <Moon />
      <M1 />
      <M2 />
      <M3 />
      <M4 />
      <M5 />
      <LeftTree />
      <RightTree />
    </>
  )
}

export default Scenery;
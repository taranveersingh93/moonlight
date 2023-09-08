import './Scenery.css'
import Moon from '../Moon/Moon'
import M1 from '../Mountains/M1'
import M2 from '../Mountains/M2'
import M3 from '../Mountains/M3'
import M4 from '../Mountains/M4'
import M5 from '../Mountains/M5'
import LeftTree from '../Trees/LeftTree'
import RightTree from '../Trees/RightTree'

const Scenery = ({scrollValue}) => {

  return (
    <>
      <Moon scrollValue={scrollValue}/>
      <M1 scrollValue={scrollValue}/>
      <M2 scrollValue={scrollValue}/>
      <M3 scrollValue={scrollValue}/>
      <M4 scrollValue={scrollValue}/>
      <M5 scrollValue={scrollValue}/>
      <LeftTree scrollValue={scrollValue}/>
      <RightTree scrollValue={scrollValue} />
    </>
  )
}

export default Scenery;
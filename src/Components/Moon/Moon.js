import './Moon.css'
import moonImg from '../../Images/moon.png'


const Moon = () => {
  return (
    <div className='moon-container'>
      <img className="moon" src={moonImg} />
    </div>
  )
}

export default Moon;
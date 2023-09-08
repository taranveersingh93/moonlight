import './texts.css'

const Obstacle = ({data, scrollValue}) => {
  return (
    <p className='obstacle-text'style={{top: `${40 + 0.001*scrollValue}vh`}}>
      {data?.obstacle}
    </p>
  )
}

export default Obstacle
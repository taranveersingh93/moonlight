import './texts.css'

const Assurance2 = ({scrollValue}) => {
  return (
    <p className='assurance-text' style={{top: `${40 - 0.001*scrollValue}vh`, left: `${20 - 0.0005 * scrollValue}vw`}}>
      But so were the previous obstacles.
    </p>
  )
}

export default Assurance2;
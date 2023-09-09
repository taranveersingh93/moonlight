import './texts.css'

const Assurance2 = ({scrollValue}) => {
  return (
    <p className='assurance-text' style={{top: `${43 - 0.001*scrollValue}vh`, left: `${20 - 0.0005 * scrollValue}vw`}}>
      But so were the previous ones.
    </p>
  )
}

export default Assurance2;
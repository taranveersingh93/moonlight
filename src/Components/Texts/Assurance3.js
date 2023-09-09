import './texts.css'

const Assurance3 = ({scrollValue}) => {
  return (
    <p className='assurance-text' style={{top: `${45 - 0.001*scrollValue}vh`, left: `${20 + 0.0005 * scrollValue}vw`}}>
      You got this.
    </p>
  )
}

export default Assurance3;
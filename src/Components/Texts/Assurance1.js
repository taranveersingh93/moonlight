import './texts.css'

const Assurance1 = ({scrollValue}) => {
  return (
    <p className='assurance-text' style={{top: `${35 - 0.001*scrollValue}vh`, left: `20vw`}}>
      Hey, this must be tough.
    </p>
  )
}

export default Assurance1;
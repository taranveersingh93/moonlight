import './texts.css'

const Assurance1 = ({scrollValue}) => {
  return (
    <p className='assurance-text' style={{top: `${40 - 0.001*scrollValue}vh`}}>
      Hey, this must be tough.
    </p>
  )
}

export default Assurance1;
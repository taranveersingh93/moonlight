import './texts.css'

const Assurance3 = ({scrollValue}) => {
  return (
    <p className='assurance-text' style={{top: `${46 - 0.001*scrollValue}vh`}}>
      You got this.
    </p>
  )
}

export default Assurance3;
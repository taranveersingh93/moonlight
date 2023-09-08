import './texts.css'

const Assurance2 = ({scrollValue}) => {
  return (
    <p className='assurance-text' style={{top: `${43 - 0.001*scrollValue}vh`}}>
      But so were the previous ones.
    </p>
  )
}

export default Assurance2;
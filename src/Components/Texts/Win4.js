import './texts.css'

const Win4 = ({data, scrollValue}) => {
  return (
    <p className='win1-text' style={{top: `${30 + 0.01*scrollValue}vh`}}>
      {data?.win4}
    </p>
  )
}

export default Win4;
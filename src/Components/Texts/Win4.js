import './texts.css'

const Win4 = ({data, scrollValue}) => {
  return (
    <p className='win4-text' style={{top: `${-15 + 0.017*scrollValue}vh`}}>
      {data?.win4}
    </p>
  )
}

export default Win4;
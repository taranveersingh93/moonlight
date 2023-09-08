import './texts.css'

const Win3 = ({data, scrollValue}) => {
  return (
    <p className='win1-text' style={{top: `${60 + 0.01*scrollValue}vh`}}>
      {data?.win3}
    </p>
  )
}

export default Win3;
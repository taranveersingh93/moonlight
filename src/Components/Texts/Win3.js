import './texts.css'

const Win3 = ({data, scrollValue}) => {
  return (
    <p className='win3-text' style={{top: `${15 + 0.02*scrollValue}vh`}}>
      {data?.win3}
    </p>
  )
}

export default Win3;
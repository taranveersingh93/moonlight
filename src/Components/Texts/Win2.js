import './texts.css'

const Win2 = ({data, scrollValue}) => {
  return (
    <p className='win2-text' style={{top: `${60 + 0.01*scrollValue}vh`}}>
      {data?.win2}
    </p>
  )
}

export default Win2;
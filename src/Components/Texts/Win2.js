import './texts.css'

const Win2 = ({data, scrollValue}) => {
  return (
    <p className='win2-text' style={{top: `${35 + 0.022*scrollValue}vh`}}>
      {data?.win2}
    </p>
  )
}

export default Win2;
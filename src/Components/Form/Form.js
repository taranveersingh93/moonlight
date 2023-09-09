import { useEffect, useState } from 'react'
import './Form.css'

const Form = ({setData}) => {
  const [formEntries, setFormEntries] = useState({obstacle: "", win1: "", win2: "", win3: "", win4: ""})
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const handleChange = (e, entry) => {
    const clone = {...formEntries}
    clone[entry] = e.target.value
    setFormEntries(clone)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setData(formEntries)
  }

  const checkSubmitButton = () => {
    if (formEntries.obstacle && formEntries.win1 && formEntries.win2 && formEntries.win3 && formEntries.win4) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }

  useEffect(() => {
    checkSubmitButton()
  }, [formEntries])


  return (
    <form onSubmit={(e) => {handleSubmit(e)}}>
      <label className='obstacle'>
        What's a life obstacle infront of you?
        <input type='text' name='obstacle'value={formEntries.obstacle} onChange={(e) => {handleChange(e, "obstacle")}}/>
      </label>
      <label className='wins'>
        List 4 life obstacles that you got through:
        <input type='text' name='win1' value={formEntries.win1} onChange={(e) => {handleChange(e, "win1")}}/>
        <input type='text' name='win2' value={formEntries.win2} onChange={(e) => {handleChange(e, "win2")}}/>
        <input type='text' name='win3' value={formEntries.win3} onChange={(e) => {handleChange(e, "win3")}}/>
        <input type='text' name='win4' value={formEntries.win4} onChange={(e) => {handleChange(e, "win4")}}/>
      </label>
      <button className='submit' disabled={buttonDisabled}>
        Submit
      </button>
    </form>
  )
}

export default Form
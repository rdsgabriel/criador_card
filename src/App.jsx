import { useState } from 'react'

import Page from './page'
import './App.css'



function App() {
    const [userName, setUserName] = useState('')
    const [nameSubmitted, setNameSubmitted] = useState(false)

    const handleSubmit = (event) => {
      event.preventDefault();
      setNameSubmitted(true)
    }


    const handleNameChange = (event) => {
      setUserName(event.target.value)
    }

      if(nameSubmitted){
        return (
        <Page className='container' username={userName}/>
        )
      }


  return (
    <div className='container'>
      <h2>Olá, coloque seu nome</h2>
      <form onSubmit={handleSubmit}>
      <input type="text" value={userName} onChange={handleNameChange}/>
      <button type='submit'>Enviar</button>
      </form>
    </div>
  )  
}



export default App

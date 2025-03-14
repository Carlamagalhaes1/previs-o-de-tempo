import { useState, useRef } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()

  async function searchCity(){

    const city = inputRef.current.value
    const key = "65170a08c74cad6927ce7801da0337a1"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    
    const dados = await axios.get(url)
    console.log(dados)


  }

  return (
    <>
      <div>
        <h1>Previçãoo do Tempo</h1>
        <input type="text" ref={inputRef} placeholder='Digite o nome da cidade' /> <button onClick={searchCity}> Buscar</button>
        

      </div>

    </>
  )
}

export default App


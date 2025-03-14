import { useState, useRef } from 'react'
import axios from 'axios'

import './App.css'
import WeatherInformations from './components/WeatherInformations/WeatherInformations'

function App() {
  const [weather, setWeather] = useState({})
  const inputRef = useRef()

  async function searchCity(){

    const city = inputRef.current.value
    const key = "65170a08c74cad6927ce7801da0337a1"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&leng=pt_br&units=metric`
    
    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)
   


  }

  return (
    <>
      <div>
        <h1>Previçãoo do Tempo</h1>
        <input type="text" ref={inputRef} placeholder='Digite o nome da cidade' /> <button onClick={searchCity}> Buscar</button>
        <WeatherInformations/>
        

      </div>

    </>
  )
}

export default App


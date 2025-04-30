import { useState, useRef } from 'react'
import axios from 'axios'


import './App.css'
import WeatherInformations from './components/WeatherInformations/WeatherInformations'
import WeatherInformations5Days from './components/WeatherInformations5Days/WeatherInformations5Days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()
  const inputRef = useRef()

  async function searchCity(){

    const city = inputRef.current.value
    const key = "65170a08c74cad6927ce7801da0337a1"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&leng=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&leng=pt_br&units=metric`
    
    const apiInfo = await axios.get(url)
    const urlinfodays = await axios.get(url5Days)
    setWeather5Days(urlinfodays.data)

    setWeather(apiInfo.data)
   


  }

  return (
    <>
      <div className='container'>
        <h1 >Previsão do Tempo!</h1>
        <input type="text" ref={inputRef} placeholder='Digite o nome da cidade' /> <button onClick={searchCity}> Buscar</button>
        {weather && <WeatherInformations weather={weather}/>}
        {weather5Days && <WeatherInformations5Days weather5Days={weather5Days}/>}
        

      </div>

    </>
  )
}

export default App
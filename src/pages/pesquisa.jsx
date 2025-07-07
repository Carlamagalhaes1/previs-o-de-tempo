
import WeatherInformations from './components/WeatherInformations/WeatherInformations';
import WeatherInformations5Days from './components/WeatherInformations5Days/WeatherInformations5Days';
import { FaSearch } from 'react-icons/fa';
import { useState, useRef } from 'react';
import axios from 'axios';

export default function Pesquisa ()

  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value.trim();
    if (!city) return;

    const key = "65170a08c74cad6927ce7801da0337a1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    try {
      setLoading(true);
      setError("");
      const [apiInfo, urlinfodays] = await Promise.all([
        axios.get(url),
        axios.get(url5Days),
      ]);

      setWeather(apiInfo.data);
      setWeather5Days(urlinfodays.data);
    } catch (err) {
      console.error(err);
      setError("Cidade não encontrada ou erro na busca.");
      setWeather(undefined);
      setWeather5Days(undefined);
    } finally {
      setLoading(false);
    }
  }


{
    return (
         <div className="container">
      
      <h1 className="title">Previsão do Tempo</h1>

      <div className="search-box">
        <input
          ref={inputRef}
          type="text"
          placeholder="Digite o nome da cidade"
        />
        <button onClick={searchCity}>
          <FaSearch /> Buscar
        </button>
      </div>
      

     
    </div>
     {loading && <p className="loading">Carregando dados...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && weather && <WeatherInformations weather={weather} />}
      {!loading && weather5Days && <WeatherInformations5Days weather5Days={weather5Days} />}
      </div>
    )
    
}
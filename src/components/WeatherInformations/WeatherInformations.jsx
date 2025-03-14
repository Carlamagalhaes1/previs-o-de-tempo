function WeatherInformations({ weather }) {

    if (!weather || !weather.name || !weather.weather || !weather.weather[0] || !weather.main || !weather.main.feels_like || !weather.main.humidity ||!weather.main.pressure) {
      return <p>Carregando dados do clima...</p>;  
    }
  
    console.log(weather);
  
    return (
      <div>
        <h2>{weather.name}</h2>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="Ícone do clima"
          />
          <p>{Math.round(weather.main.temp)}℃</p>
        </div>
        <p>{weather.weather[0].description}</p>
        <div>
            <p>Sensação Termica: {Math.round(weather.main.feels_like)}</p>
            <p>Umidade:{weather.main.humidity}</p>
            <p>Pressão:{weather.main.pressure}</p>
        </div>
      </div>
    );
  }
  
  export default WeatherInformations;
  
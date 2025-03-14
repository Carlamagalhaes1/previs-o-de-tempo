function WeatherInformations({ weather }) {

    if (!weather || !weather.name || !weather.weather || !weather.weather[0] || !weather.main) {
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
            <p></p>
            <p></p>
            <p></p>
        </div>
      </div>
    );
  }
  
  export default WeatherInformations;
  
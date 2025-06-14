import "./WeatherInformations5Days.css";

function WeatherInformations5Days({ weather5Days }) {
  let dailyForecast = {};

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString("pt-BR");
    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const next5DaysForecast = Object.values(dailyForecast).slice(1, 6);

  function convertDate(dateObj) {
    return new Date(dateObj.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
    });
  }

  return (
    <div className="weather5-container">
      <h3>Previsão para os próximos 5 dias</h3>
      <div className="weather5-list">
        {next5DaysForecast.map((forecast) => (
          <div key={forecast.dt} className="weather5-item">
            <p className="forecast-day">{convertDate(forecast)}</p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              alt="Ícone clima"
            />
            <p className="forecast-desc">{forecast.weather[0].description}</p>
            <p>
              {Math.round(forecast.main.temp_min)}℃ min /{" "}
              {Math.round(forecast.main.temp_max)}℃ max
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherInformations5Days;

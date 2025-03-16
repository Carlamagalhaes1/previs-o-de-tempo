import "./WeatherInformations5days.css"


function WeatherInformations5Days ({weather5Days}) {
    
    console.log (weather5Days)

    let dailyForecast = {}

    for(let forecast of weather5Days.list){
        const date = new Date(forecast.dt * 1000).toLocaleDateString('pt-BR')
       

        if(!dailyForecast[date]){
            dailyForecast[date] = forecast

     } 
    
    }

    

   // const next5DaysForecast = Object.values(dailyForecast).slice(1,6)
    //console.log(next5DaysForecast)

   


    return (
        <div className="weather-container">
            <p>5 days</p>
           {/*} {next5DaysForecast.map[forecast => (
                <div key={forecast.dt}>
                    <p>Quarta</p>
                    <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} />
                </div>
            )]}
            <p></p>*/}
          
           
            
           
            
         


        </div>
    )

}

export default WeatherInformations5Days
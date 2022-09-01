import React, {useState} from "react";

const Weather  = () => {

    const apiKey = '30d4741c779ba94c470ca1f63045390a';
    const [weatherInfo, setWeather] = useState([{}]);
    const [city, setCity] = useState("");

    const getWeather = (event) => {
        if(event.key === "Enter"){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                setWeather(data);
            });
        }
    }
    return(
        <div className="container">

            <input 
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={getWeather}
            placeholder="Enter a City Name"
            />

            {typeof weatherInfo.main === 'undefined' ? (
            <div>
                <p className="warning">Please, Enter a City Name.</p>
            </div>
            ) : 
            (
            <div className="weather-info">
                <p className="city">City : {weatherInfo.name}</p>
                <p className="cityTemp">Temp : {Math.round(weatherInfo.main.temp)}F</p>
                <p className="cityWeather">Weather : {weatherInfo.weather[0].main}</p>
            </div>
            )}

            {weatherInfo.cod === '404' ? (
                <p className="error">Please, Enter a Valid City Name!</p>
            ) :
            (
                <></>
            )
            }

        </div>
    );
}
export default Weather;
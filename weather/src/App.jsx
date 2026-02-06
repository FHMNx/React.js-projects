import { useEffect, useState } from 'react';
import './App.css'

/* images*/
import clearIcon from './assets/clear.png';
import moonIcon from './assets/moon.png';
import cloudIcon from './assets/cloud.png';
import drizzleIcon from './assets/drizzle.png';
import humidityIcon from './assets/humidity.svg';
import rainIcon from './assets/rain.png';
import searchIcon from './assets/search.png';
import snowIcon from './assets/snow.png';
import windIcon from './assets/wind.svg';
import seaLevelIcon from './assets/seaLevel.svg';
import dThunderIcon from './assets/11d.png';
import nThunderIcon from './assets/11n.png';

const WeatherDetails = ({ icon, temp, city, country, lat, log, humidity, wind, seaLevel, description }) => {
  return (
    <>
      <div className="image">
        <img src={icon} alt="image" />
      </div>
      <div className="desc">- {description} -</div>
      <div className="temp">{temp}°C</div>
      <div className="location">{city}</div>
      <div className="country">{country}</div>
      <div className="cord">
        <div>
          <span className='lat'>lattitude</span>
          <span>{lat}</span>
        </div>
        <div>
          <span className='log'>longitute</span>
          <span>{log}</span>
        </div>
      </div>

      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="humidity" className='icon' />
          <div className="data">
            <div className="humidity-percent">{humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={seaLevelIcon} alt="wind" className='icon' />
          <div className="data">
            <div className="wind-percent">{seaLevel} m</div>
            <div className="text">Sea Level</div>
          </div>
        </div>

        <div className="element">
          <img src={windIcon} alt="wind" className='icon' />
          <div className="data">
            <div className="wind-percent">{wind} km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  )
}


function App() {

  const api_key = import.meta.env.VITE_WEATHER_API_KEY;
  const [text, setText] = useState("Kandy");


  const [icon, setIcon] = useState(snowIcon);
  const [temp, setTemp] = useState(0);
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [seaLevel, setSeaLevel] = useState(0);

  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const weatherIconMap = {
    "01d": clearIcon,
    "01n": moonIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": drizzleIcon,
    "03n": moonIcon,
    "04d": drizzleIcon,
    "04n": moonIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "11d": dThunderIcon,
    "11n": nThunderIcon,
    "13d": snowIcon,
    "13n": snowIcon,
  };

  const search = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;

    try {
      let response = await fetch(url);
      let data = await response.json();
      if (data.cod === "404") {
        console.error("city not found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }

      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setSeaLevel(data.main.sea_level);
      setTemp(Math.floor(data.main.temp));
      setDescription(data.weather[0].description);
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat)
      setLog(data.coord.lon);
      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIconMap[weatherIconCode] || clearIcon);
      setCityNotFound(false);

    } catch (error) {
      console.error("An Error occurred" + error.message);
      setError("An Error occurred while fetching weather data");
    } finally {
      setLoading(false);
    }

  };



  const handleCity = (e) => {
    setText(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  }

  useEffect(function () {   //call this only one time when render
    search();
  }, []);

  return (
    <>
      <div className='container'>
        <div className="input-container">
          <input type="text"
            className='city-input'
            placeholder='search city'
            onChange={handleCity} value={text}
            onKeyDown={handleKeyDown} />

          <div className="search-icon" onClick={() => search()}>
            <img src={searchIcon} alt="search" />
          </div>
        </div>

        {!loading && !cityNotFound && < WeatherDetails
          icon={icon}
          temp={temp}
          description={description}
          city={city}
          country={country}
          lat={lat}
          log={log}
          humidity={humidity}
          wind={wind}
          seaLevel={seaLevel}
        />}

        {loading && <div className="loading-message">Loading...</div>}
        {error && <div className="error-message">{error}</div>}
        {cityNotFound && <div className="city-not-found">city not found</div>}

        <p className='copyright'>Designed by <span>Fahman</span></p>
      </div>

    </>
  )
}

export default App

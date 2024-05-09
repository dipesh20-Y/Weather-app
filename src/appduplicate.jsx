import { useEffect, useState } from "react";
import "./App.css";
import WeatherCard from "./WeatherCard";
import Trial from "./Trial";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const[display, setDisplay]= useState('')

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log('Latitude:', lat);
        console.log('Longitude:', lon);
  
        // Fetch weather data using obtained latitude and longitude
        fetchWeatherData(lat, lon);
      },
      (error) => {
        console.error('Error getting geolocation:', error);
      }
    );
  }, []);
  
  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
      if (response.ok) {
        const result = await response.json();
        setDisplay(result);
        console.log(result)
      } else {
        console.log('Failed to fetch weather data');
      }
    } catch (error) { setCity("");
      console.error('Error fetching weather data:', error);
    }
  };
  

  const handleSearch = async () => {
    // console.log(city)
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=hourly,daily&units=metric&appid=${apiKey}`
      );
      if (response.ok) {
        const result = await response.json();
        setWeather(result);
        console.log(result)
      } else {
        console.log("failed to fetch data");
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      
     <div className="text-xl ">Weather App</div>
    
    <div className="flex flex-row justify-between">

    {display && (
      <div className="mt-10">
      <WeatherCard
          city={display.name}
          temp={display.main.temp}
          cloud={display.weather[0].description}
          feelsLike={display.main.feels_like}
          max={display.main.temp_max}
          min={display.main.temp_min}
          icon={display.weather[0].icon}
        />
    </div>
    )}
   
      
      <div className="flex flex-row justify-center my-20">
        <div className="mr-4">
          <input
            className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Enter city/town..."
            type="text"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        <div className="ml-2">
          <button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-950"
          onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

    </div>
      

      {weather && (
        <div>
          {console.log(weather)}
          <WeatherCard
            city={weather.name}
            temp={weather.main.temp}
            cloud={weather.weather[0].description}
            feelsLike={weather.main.feels_like}
            max={weather.main.temp_max}
            min={weather.main.temp_min}
          />
        </div>
      )}
    </div>
  );
}

export default App;

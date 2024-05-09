import { useEffect, useState, useRef } from "react";
import "./App.css";
import NewContainer from "./NewContainer";
function App() {
 
  const [weather, setWeather] = useState("");
  const [display, setDisplay] = useState("");
  const [inputClear, setInputClear] = useState(true);

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const city =  useRef()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        // console.log('Latitude:', lat);
        // console.log('Longitude:', lon);

     
        fetchWeatherData(lat, lon);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  }, []);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      );
      if (response.ok) {
        const result = await response.json();
        setDisplay(result);
        // console.log(result)
      } else {
        console.log("Failed to fetch weather data");
      }
    } catch (error) {
      
      console.error("Error fetching weather data:", error);
    }
  };

  const handleSearch = async () => {
    // console.log(city)
    // setIsSearchClicked(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.current.value}&exclude=hourly,daily&units=metric&appid=${apiKey}`
      );
      if (response.ok) {
        const result = await response.json();
        setWeather(result);
      //  setCity(" ")
        // console.log(result)
      } else {
        console.log("failed to fetch data");
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="bg-white/10 backdrop-blur-lg rounded-lg px-8 py-10 w-full max-w-md shadow-lg flex flex-wrap ">
        <div className="flex items-center mb-6 w-full">
          <input
            className="text-gray-900 backdrop-blur-lg rounded-md py-2 px-4 flex-1 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            placeholder="Enter city/town..."
            type="text"
            onChange={(e) => {
             
              if (e.target.value=='') {
                setWeather(null)
                setInputClear(true)
              }else{
                setInputClear(false)
              }
            }}
            ref={city}
            
          />
          <button
            className="ml-4 bg-white/10 backdrop-blur-lg rounded-md py-2 px-4 hover:bg-white/20 transition-colors"
            onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </div>

        <div >
          {inputClear
            ? display && (
                <NewContainer
                  city={display.name}
                  temp={display.main.temp}
                  cloud={display.weather[0].description}
                  icon={display.weather[0].icon}
                />
              )
            :
            //  isSearchClicked
            // ? 
            weather && (
                <NewContainer
                  city={weather.name}
                  temp={weather.main.temp}
                  cloud={weather.weather[0].description}
                  icon={weather.weather[0].icon}
                />
               
              )
            // : display && (
            //     <NewContainer
            //       city={display.name}
            //       temp={display.main.temp}
            //       cloud={display.weather[0].description}
            //       icon={display.weather[0].icon}
            //     />
            //   )
              }
        </div>

        {/* <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-center">
            <div className="text-lg font-bold">Mon</div>
            <img
              alt="Weather Icon"
              className="w-8 h-8 mx-auto my-2"
              height={32}
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width={32}
            />
            <div>
              <span className="font-bold">25°</span>
              <span className="text-gray-400">/18°</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-center">
            <div className="text-lg font-bold">Tue</div>
            <img
              alt="Weather Icon"
              className="w-8 h-8 mx-auto my-2"
              height={32}
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width={32}
            />
            <div>
              <span className="font-bold">22°</span>
              <span className="text-gray-400">/15°</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-center">
            <div className="text-lg font-bold">Wed</div>
            <img
              alt="Weather Icon"
              className="w-8 h-8 mx-auto my-2"
              height={32}
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width={32}
            />
            <div>
              <span className="font-bold">20°</span>
              <span className="text-gray-400">/12°</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;

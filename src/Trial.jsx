import React from "react";
import NewContainer from "./NewContainer";

function Trial() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-500 text-white">
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 w-full max-w-md shadow-lg">
        <div className="flex items-center mb-6">
          <input
            className="bg-white/10 backdrop-blur-lg rounded-md py-2 px-4 flex-1 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            placeholder="Enter city/town..."
            type="text"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <button
            className="ml-4 bg-white/10 backdrop-blur-lg rounded-md py-2 px-4 hover:bg-white/20 transition-colors"
            onClick={handleSearch}
          >
            <svg
              {...props}
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


        {display && (
            <NewContainer
            city={display.name}
          temp={display.main.temp}
          cloud={display.weather[0].description}
          icon={display.weather[0].icon}
            />
        )}
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

export default Trial;

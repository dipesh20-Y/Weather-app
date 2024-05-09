import React from 'react';

function WeatherCard(props) {
  return (
    <div className="bg-[#2d2f36] rounded-lg p-6 text-white w-[300px] mx-auto">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-pink-900  ">{props.city}</h2>
        <p className="text-sm">{props.cloud}</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 mt-2">
      <span className="text-6xl font-bold">{Math.round(props.temp)}°C</span>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Min</span>
          <span className="text-sm">{Math.round(props.min)}°C</span>
          <span className="text-sm">|</span>
          <span className="text-sm">Max</span>
          <span className="text-sm">{Math.round(props.max)}°C</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;





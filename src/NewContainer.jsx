import React from 'react'

function NewContainer(props) {
  return (
    <div className="flex items-center mb-6 min-h-48 w-full ">
            <div className="flex-1 mr-20">
              <div className="text-6xl font-bold mb-2">{Math.round(props.temp)}°C</div>
              <div className="text-lg mb-3">{props.cloud}</div>
              <div className="text-md text-gray-800">{props.city}</div>
            </div>
            <div className='ml-20 p-4'>
            <img
              alt="Weather Icon"
              className="w-16 h-16"
              height={64}
              src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
              style={{
                aspectRatio: "64/64",
                objectFit: "cover",
              }}
              width={64}
            />
            </div>
          </div>
  )
}

export default NewContainer

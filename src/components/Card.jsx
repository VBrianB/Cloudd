import React, { useState } from "react";

import Clouds from '../assets/Icones/scattered clouds.png';
import Clear from '../assets/Icones/clear sky.png'
import Rain from '../assets/Icones/rain.png'
import Drizzle from '../assets/Icones/shower rain.png'
import Snow from '../assets/Icones/snow.png'
import Thunderstorm from '../assets/Icones/thunderstorm.png'
import Fewclouds from '../assets/Icones/few clouds.png'
import WindSpeed from '../assets/windIcon.png'
import RedArrow from '../assets/RedArrow.png'
import BlueArrow from '../assets/BlueArrow.png'
import Humidity from '../assets/humidity.png'
import './Card.css'



function Card({name, wind, humidity, tempAtual, tempMax, tempMin, Dweather }){
  

switch(Dweather){
  case 'Clouds':
    if(tempAtual >= 28){
      Dweather = Fewclouds;
    } 
    else{
      Dweather = Clouds
    }
  break;
  case 'Clear':
    Dweather = Clear
  break;
  case 'Rain':
    Dweather = Rain
  break;
  case 'Drizzle':
    Dweather = Drizzle
  break;
  case 'Snow':
    Dweather = Snow
  break;
  case 'Thunderstorm':
    Dweather = Thunderstorm
  break;
}




  let Hour = new Date().getHours();
  let Min = new Date().getMinutes();
  let dateTime = `${Hour < 10 ? '0' + Hour : Hour}:${Min < 10 ? '0' + Min : Min }`
  
  let dateLocale = new Date().toLocaleDateString();
 

    return(
        <div>
           
             <div  className="card">
            <div className="nomeCidade">
              {name}
            </div>
            <img src={Dweather} className="weather" alt="" />
              <div className="windSpeed">
                <img src={WindSpeed} alt="" /> 
                <p>{wind} km/h</p>
              </div>
              <div className='humidity'>
                <img src={Humidity} alt="" />
                <p>Umidade de {humidity} %</p>
              </div>
            <div className="temperaturaAtual">
              <p className='lx'>{tempAtual}°</p>
              <h6 className='sm'>Temperatura Atual</h6>
              
            </div>
            <div className="temp max">
                <p>{tempMax}°</p>
                <img src={RedArrow} alt="" />
                
            </div>
            <div className="temp min">
              <p>{tempMin}°</p>
                <img src={BlueArrow} alt="" />
                
            </div>
            <div className="date">
              <p className="dateText">{dateLocale} Às {dateTime}</p>
            </div>
         </div>
        </div>
    )
}

export default Card;
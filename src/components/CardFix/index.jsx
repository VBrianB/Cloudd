import React, { useEffect, useState } from "react";
import Card from "../Card"

function CardFix({cidade}){
    const [cityApi, setcityApi] = useState([])
    let APIKEY = `cb1568e028bd39d771d4b277579d4138`;

    useEffect(() => {
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${APIKEY}&lang=en&units=metric`)
        .then(res => res.json())
            .then((data)=>{
                setcityApi([data]);
            } 
            );
      }, []);

    return(
        <div>
            
            {cityApi.map((item,index)=>{
        return(
                <Card name={item.name} key={index} wind={item.wind.speed.toFixed(0)}
                 humidity={item.main.humidity} tempAtual={item.main.temp.toFixed(0)} 
                 tempMax={item.main.temp_max.toFixed(0)} tempMin={item.main.temp_min.toFixed(0)}
                 Dweather={item.weather[0].main} 
                             
                 /> 
        )
            })}
           
        </div>
    )
}

export default CardFix;
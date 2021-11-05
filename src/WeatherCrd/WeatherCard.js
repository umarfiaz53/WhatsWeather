import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const WeatherCard=({actual})=>{
    const [weatherMod, setWeatherMode]=useState();
 const {temp, Mode, name, country, sunset, humidity, pressure, speed}=actual;
 let sec=sunset;
 let miliSec=new Date(sec*1000);
 let Time=`${miliSec.getHours()}:${miliSec.getMinutes()}`;

 useEffect(()=>{
     if(Mode){
         switch (Mode) {
             case "Clouds": setWeatherMode("wi-day-cloudy");
                 break;  
             case "Rain": setWeatherMode("wi-rain");
                 break;    
             case "Haze": setWeatherMode("wi-dust");
                 break;  
             case "Clear": setWeatherMode("wi-day-sunny");
                 break;
             case "Fog": setWeatherMode("wi-day-fog");
                 break;  
             case "Thunderstorm": setWeatherMode("wi-day-thunderstorm");
                 break;    
             case "Storm": setWeatherMode("wi-day-sleet-strom");
                 break;  
             case "Windy": setWeatherMode("wi-day-windy");
                 break;
             case "Snow": setWeatherMode("wi-day-snow");
                 break;
                 case "Sprinkle": setWeatherMode("wi-day-sprinkle");
                 break;  
             case "Hot": setWeatherMode("wi-hot");
                 break;    
             case "Smoke": setWeatherMode("wi-smoke");
                 break;  
             case "Sandstorm": setWeatherMode("wi-sandstorm");
                 break;
             case "Earthquake": setWeatherMode("wi-earthquake");
                 break;  
             case "Tsunami": setWeatherMode("wi-tsunami");
                 break;
             default: setWeatherMode("wi-day-sunny");
                 break;
         }
     }
 },[Mode])
    return(<>
 <div className="weatherCard">

<div className="icon_sec">
  <i style={{  fontSize:"80px"}} className={`wi ${weatherMod}`}></i>
</div>

<div className="cloud_Time">

  <div className="left_sec">

    <div className="temp">
      <span>{temp}&deg;</span>
      </div>

      <div className="descrip">
        <div className="weatherCondition">{Mode}</div>
        <div className="place">{name}, {country}</div>
    </div>
  </div>

  <div className="right_sec">
    <div className="time">
    <h3>{new Date().toLocaleString()}</h3>
    </div>
  </div>
</div>
<div className="weather_info">

  <div className="more_info1">
    <p className="btmIcon" ><i className="wi wi-sunset"></i></p>
    <p className="info">
      {Time}<br />
      sunset</p>
  </div>

  <div className="more_info2">
  <p className="btmIcon" ><i className="wi wi-humidity"></i></p>
    <p className="info">
    {humidity}<br />
    Humidity</p>
  </div>
  
  <div className="more_info3">
    <p className="btmIcon" ><i className="wi wi-cloud-down"></i></p>
    <p className="info">
    {pressure}<br />
    Pressure </p>
  </div>

  <div className="more_info4">
  <p className="btmIcon" ><i className="wi wi-strong-wind"></i></p>
    <p className="info">
    {speed}Km<br />
    Wnid</p>
      
  </div>
</div>
</div>
    </>)
}

export default WeatherCard;
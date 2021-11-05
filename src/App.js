import'weather-icons/css/weather-icons.css';
import React, { useEffect, useState } from "react";
import './App.css';
import WeatherCard from './WeatherCrd/WeatherCard';
const App=()=>{

  const [search, setSearch]=useState("Islamabad");
  const [actual, setActual]=useState({});
  const getWeatherInfo= async()=>{
    try {
      let URL=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1c1f0ee3fd318e7053d27e52729dfdc3`;
      const respon=await fetch(URL);
      const JSDATA=await respon.json();
      const {temp,humidity,pressure}=JSDATA.main;
      const {name}=JSDATA;
      const {main : Mode}=JSDATA.weather[0];
      const {speed}=JSDATA.wind;
      const {country,sunset}=JSDATA.sys;
      const sunSetTime=sunset*1000;
      console.log(sunSetTime);
      const collectAllData={
        Mode,
        temp,
        name,
        country,
        sunset,
        humidity,
        pressure,
        speed,
      }
      // let sec=sunset;
      // let date=new Date(sec*1000);
      // let Str= `${date.getHours()}:${date.getMinutes()}`;
      // console.log(Str);
      setActual(collectAllData);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getWeatherInfo();
  },[])
  return(<>

        <div className="main_body">
          <div className="wrapper">

           <div className="search">
             <input className="searchTerm" type="search" 
             value={search}
             placeholder="Search..." autoFocus onChange={(e)=>setSearch(e.target.value)}/>
             <button className="searchBtn" type='button' onClick={getWeatherInfo}>Search</button>
             </div> 
             <WeatherCard actual={actual}/>


           </div>
         </div>
  </>)
}

export default App;
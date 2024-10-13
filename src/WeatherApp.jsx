import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import {useState} from "react";
import "./WeatherApp.css";

export default function WeatherApp(){
  const[weatherInfo, setWeatherInfo]= useState({
        city:"delhi",
        feelslike: 25,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 23.05,
        humidity: 47,
        weather:"haze",
  });

  let updateInfo= (newInfo)=>{
    setWeatherInfo(newInfo);
  }
    return(
        <div className='tampo'  >
            <h2 > Weather App  ⛅ </h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
       
        </div>
    );
}
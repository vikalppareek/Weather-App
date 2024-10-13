import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import {useState} from "react";
import AddLocationIcon from '@mui/icons-material/AddLocation';
//import location from "../assets/location.png";

export default function SearchBox({updateInfo}){

     let [city, setCity] = useState("");
     let [error, setError]= useState(false);
     
     const API_URL="http://api.openweathermap.org/data/2.5/weather";
     const API_KEY= "0809adb868b6588cddf3195a3794c440";

     let getWeatherInfo = async ()=>{
     try {let response= await fetch(
         `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
     // console.log(jsonResponse);
      let result ={
         city:city,
         temp: jsonResponse.main.temp,
         tempMin:jsonResponse.main.temp_min,
         tempMax:jsonResponse.main.temp_max,
         humidity: jsonResponse.main.humidity,
         feelsLike: jsonResponse.main.feels_like,
         weather: jsonResponse.weather[0].description,
      };
      //console.log(jsonResponse);
      console.log(result);
      return result;
   } catch(err){
      throw err;
   }

   }
    
     let handleChange = (evt) =>{
        setCity(evt.target.value);
     };

     let handleSubmit= async (evt)=>{
       try {evt.preventDefault();
        console.log(city);
        setCity("");
       let newInfo= await getWeatherInfo();
       updateInfo(newInfo);
      }catch(err){
         setError(true);
      }
     };

 return (
    <div className='SearchBox'  >
       
        <form className="form"onSubmit={handleSubmit}>
            <TextField className="text" 
            id="city" 
            label="City Name" 
            variant="outlined" margin="dense"  color="black" focused required value={city}
            onChange={handleChange} 
            />
            <AddLocationIcon/>
            <br></br>
            <Button  variant="contained" type="submit">
               Search
            </Button>
      {error && <p style={{color:"red", fontSize:"20px"}}>No such place exists!</p> }
        </form>
    </div>  
    );
}
//export default SearchBox;
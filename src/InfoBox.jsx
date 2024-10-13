import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
 import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({info}){
 const INIT_URL=
 "https://images.unsplash.com/photo-1436459826008-8fd497f03742?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 const HOT_URL=
 "https://media.istockphoto.com/id/1243760572/photo/heat-wave-concrept.jpg?s=1024x1024&w=is&k=20&c=aNyp4atd-QF1Pf7PG69cP0moyao0Ip2S9iXQIq9Fxls="  
 const COLD_URL=
 "https://images.unsplash.com/photo-1435777940218-be0b632d06db?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 const RAIN_URL=
 "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc="

 return(
        <div className='InfoBox'>
 
        <div className='CardContainer'>
            <Card  sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity >80 ? RAIN_URL:info.temp>15? HOT_URL:COLD_URL}
      
      />
       <div className='hello'> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
    
           {info.city} &nbsp;
            {info.humidity >80 ? < ThunderstormIcon/> :info.temp>15 ?<WbSunnyIcon/>:<AcUnitIcon/> } 
        </Typography>
        <Typography  variant="body2" sx={{ color: 'text.secondary' } }component ={"span"}>
          <div className='col'>
           <p> Temperature = {info.temp}</p>
           <p>Min Temperature= {info.tempMin}</p>
           <p>Max Temperature= {info.tempMax}</p>
           <p>Humidity= {info.humidity}</p>
           <p>
            The weather can be describe as <i>{info.weather}</i> and  feels_like 
            {info.feelsLike}&deg;C
           </p>
           </div>
        </Typography>
      </CardContent>
      </div> 
    </Card>
    </div>

        </div>

    );
}
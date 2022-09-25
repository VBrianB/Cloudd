import { useState } from 'react'
import './App.css'
import Card from './components/Card';
import CardFix from './components/CardFix';
import Footer from './components/Footer'
import Loading from './components/Loading'
import Header from './components/Header'

function App() {

// States

const [weather,  setweather] = useState([])
const [city, setCity] = useState("");
const [loading, setLoading] = useState(false)

// Função onChange Value

function handlecity(e){
  if(e.target.value.length > 2){
    document.querySelector('.searchBTN').classList.remove('disable');

    
  }
  else{
    document.querySelector('.searchBTN').classList.add('disable')
 
    
  }
  setCity(e.target.value) 
}

// Props para Cards Fixos

let rio = `${encodeURI('Rio de Janeiro')}`;
let Fortaleza = `${encodeURI('Fortaleza')}`;
let Gramado = `${encodeURI('Gramado')}`;


// Função pesquisa

async function GetData(){
  let APIKEY = 'cb1568e028bd39d771d4b277579d4138';
  setLoading(true)
  let API = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=${APIKEY}&lang=en&units=metric`);
  let response = await API.json();

  if(response.cod === 200){
    setweather([response, ...weather ])
    setLoading(false);
   
  }
  else{ 
    setLoading(false);
    alert('Algo de errado aconteceu... Recarregue a página e tente novamente.')
  }
 
  
  
}

  return (
    <div className="App">

    {!loading &&
      <Header city={city} handlecity={handlecity}
      GetData={GetData}/>

    }

    {!loading &&
      <div className="card-area">

      {weather.map((item, index)=>{

        return(
         <Card name={item.name} key={index} wind={item.wind.speed.toFixed(0)}
          humidity={item.main.humidity} tempAtual={item.main.temp.toFixed(0)} 
          tempMax={item.main.temp_max.toFixed(0)} tempMin={item.main.temp_min.toFixed(0)}
          Dweather={item.weather[0].main}/> 
        )
      })}
        <CardFix cidade={rio} />
        <CardFix cidade={Fortaleza} />
        <CardFix cidade={Gramado} />
      </div> 

       } 
       {!loading &&
       <Footer />
       }
       {loading &&
        <Loading />
       }
    
      
    </div>
  )
}

export default App;

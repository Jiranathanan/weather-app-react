import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  console.log(process.env.REACT_APP_WEATHER_API)
  const [allData, setAllData] = useState({
    city: '',
    country: '',
    temperature: ''
  })

  useEffect( () => {
    // what we want to happen after rendering
    // fetch the database information the API call of weather
    fetchData('wrexham');
  }, [])

  const fetchData = async(city) => {
    // try catch error handling
    try {
      const APIKEY = process.env.REACT_APP_WEATHER_API
      // axios is a library that makes request to the backend
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
      console.log(result)
      setAllData({
        city: result.data.name,
        country: result.data.sys.country,
        temperature: result.data.main.temp 
      })
    } catch (e) {
      console.log('API not loaded correctly')
    }
  }

  return (
    <div className='App'>
    <h1>Test Successful</h1>
    <h2>API: {process.env.REACT_APP_WEATHER_API}</h2>
    <button onClick={() => console.log("Click!!!!!")}>Click for more</button>
    <h3>City: {allData.city}</h3>
    <h3>Country: {allData.country}</h3>
    <h2>Temp: {allData.temperature} F</h2>
    </div>
  )
}


export default App;
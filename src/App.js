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

  }, [])

  const fetchData = async(city) => {
    const APIKEY = process.env.REACT_APP_WEATHER_API
    // axios is a library that makes request to the backend

  }

  return (
    <div className='App'>
    <h1>Test Successful</h1>
    <h2>API: {process.env.REACT_APP_WEATHER_API}</h2>
    <button onClick={() => console.log("Click!!!!!")}>Click for more</button>
    </div>
  )
}


export default App;
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // console.log(process.env.REACT_APP_WEATHER_API)
  const [search, setSearch] = useState('')
  const [allData, setAllData] = useState({
    city: '',
    country: '',
    temperature: ''
  })

  useEffect( () => {
    // what we want to happen after rendering
    // fetch the database information the API call of weather
    fetchData('bangkok');
  }, [])

  const fetchData = async(city) => {
    // try catch error handling
    try {
      const APIKEY = process.env.REACT_APP_WEATHER_API
      // axios is a library that makes request to the backend
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`)
      // console.log(result)
      setAllData({
        city: result.data.name,
        country: result.data.sys.country,
        temperature: result.data.main.temp 
      })
    } catch (e) {
      console.log('API not loaded correctly')
    }
  }

  const handleSubmit = (e) => {
    console.log(search)
    e.preventDefault()
    fetchData(search)
  }

  const handleChange = (e) => {
    // console.log('this is listening')
    setSearch(e.target.value)
    // console.log(search)
  }

  return (
    <main>
    <div className='App'>
      <h1>Enter City Name</h1>
      <form onSubmit={handleSubmit}>
        <input value={search} type='text' name='city' placeholder='city name' onChange={handleChange} />
        <button style={{marginLeft: 5}}>Search</button>
      </form>
      <section>
        {/* <h2>API: {process.env.REACT_APP_WEATHER_API}</h2> */}
        <h3>City: {allData.city}</h3>
        <h3>Country: {allData.country}</h3>
        <h2>Temp: {allData.temperature}° Celcius</h2>
      </section>
    </div>
   </main>
  )
}


export default App;
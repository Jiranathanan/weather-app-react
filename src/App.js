import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // console.log(process.env.REACT_APP_WEATHER_API)
  const [search, setSearch] = useState('')
  const [allData, setAllData] = useState({
    city: '',
    country: '',
    temperature: '',
    humidity: '',
    minTemperature: '',
    maxTemperature: '',
    icon: [] 
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
        temperature: result.data.main.temp,
        humidity: result.data.main.humidity,
        minTemperature: result.data.main.temp_min,
        maxTemperature: result.data.main.temp_max,
        icon: result.data.weather 
      })
      console.log(allData.icon)
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
    <div className='form'> 
      <h1>Enter City Name</h1>
      <form onSubmit={handleSubmit}>
        <input value={search} type='text' name='city' placeholder='Location' onChange={handleChange} />
        <button >Search</button>
      </form>
      <section>
        { allData.icon ? allData.icon.map((item) => <img key={item.id} src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`} />)
        : null}
        <h3>City: {allData.city}</h3>
        <h3>Country: {allData.country}</h3>
        <h2>Temp: {allData.temperature}° Celcius</h2>

        <div>
          <h4>Min: {allData.minTemperature}</h4>
        </div>
        <div>
          <h4>Max: {allData.maxTemperature}</h4>
        </div>
        <div>
          <h4>humidity: {allData.humidity}</h4>
        </div>
      </section>
    </div>
   </main>
  )
}


export default App;
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  console.log(process.env.REACT_APP_WEATHER_API)
  // const [allData, setAllData] = useState({
  //   city: '',
  //   country: '',
  //   temperature: ''
  // })

  useEffect( () => {
    // what we want to happen after rendering
    // fetch the database information the API call of weather

  }, [])

  return (
    <div className='App'>
    <h1>Test Successful</h1>
    <h2>API: {process.env.REACT_APP_WEATHER_API}</h2>
    <button onClick={() => console.log("Click!!!!!")}>Click for more</button>
    </div>
  )
}


export default App;
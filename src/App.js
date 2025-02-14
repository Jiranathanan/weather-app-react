import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [allData, setAllData] = useState({
    city: '',
    country: '',
    temperature: ''
  })

  useEffect( () => {
    // what we want to happen after rendering
    // fetch the database information the API call of weather
    
  }, [])

  return (
    <div className='App'>
    <h1>Test Successful</h1>
    <button onClick={() => console.log("Click!!!!!")}>Click for more</button>
    </div>
  )
}


export default App;
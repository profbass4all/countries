import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {
  const [country, setCountry]= useState([])
  const [filtered, setFiltered]= useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(response => setCountry(response.data))
    .catch(error => "An error just occured")
  }, [])

  const handleSearch = (e)=> {
    setSearch(e.target.value)
    if(search){
      const regex = new RegExp(search, 'i')
      const findCountry = ()=> country.filter(count => count.name.match(regex))
      setFiltered(findCountry)  
    }

  }
 
  return(<div>
    <h1>List of Countries</h1>
    <Filter value={ search} onchanger={handleSearch}/>
    <Countries orilede={filtered} setOrilede={setFiltered} />
  </div>)
}

export default App;

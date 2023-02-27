import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [cat, setCat] = useState([])
  const url= 'https://aws.random.cat/meow'

const fetchCats=()=>{
axios.get(url).then((res)=> setCat(res.data.file)).catch((err)=>console.log(err))
}


  useEffect(() => {
  fetchCats()
  }, [])
  console.log(cat.length)
  return (
    <div className="App">

<img src={cat} alt="" />
      <button onClick={()=>fetchCats()}>Click</button>
    </div>
  )
}

export default App

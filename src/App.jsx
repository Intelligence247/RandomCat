import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import { Loading } from './Components/Loading'
function App() {
  
   const [cat, setCat] = useState([])
   const url= 'https://aws.random.cat/meow'

 const fetchCats=()=>{
 axios.get(url).then((res)=> setCat(res.data.file)).catch((err)=>console.log(err))
 }

   useEffect(() => {
   fetchCats()
   }, [])

  return (
    <div className="body">

<main>
<section className=''>
  {

  cat.length===0? <Loading/>:<img src={cat} alt=""/>

  }
      </section>
      <button onClick={()=>fetchCats()}>Click to Generate a new Cat</button>

      </main>
    </div>
  )
}

export default App

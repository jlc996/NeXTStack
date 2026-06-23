import { useState } from 'react'
import './App.css'
import './StudentCard'
import StudentCard from './StudentCard'

function App() {

  const names = ['LaTorya', 'Vincent', 'Zoe', 'Cartrell', 'Brennan']

  return (
    <>

      <h1>Hello World</h1>

      <div>
      {names.map(name => ( <StudentCard name={name} key={name} /> ))}


      </div>

    </>
  )
}

export default App

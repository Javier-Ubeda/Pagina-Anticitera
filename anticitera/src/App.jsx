import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnticiteraLanding from './Components/Home01'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AnticiteraLanding />
    </>
  )
}

export default App

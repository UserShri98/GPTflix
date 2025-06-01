import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h2 className='text-lg bg-amber-300'>This is tailwind css</h2>
     </div>
    </>
  )
}

export default App

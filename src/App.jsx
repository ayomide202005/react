import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 style={{color: "white",backgroundColor: "yellow"}}> <marquee behavior="" direction="">hello world</marquee></h1>
    <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ratione unde ad doloremque temporibus, consequuntur alias blanditiis itaque culpa cum tempora explicabo ab molestiae ullam iste rem non ipsum laboriosam!</p>

    <div className='container-fluid shadow-sm  mx-auto'>
      <div className='row'>
        <div className='col border border-warning'></div>
        <div className='col border border-danger'></div>
        <div className='col border border-info'></div>
      </div>
    </div>
    </>
  )
}

export default App

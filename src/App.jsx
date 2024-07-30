import { useState } from 'react'
import './App.css'
import { Calculator } from './components/Calculator'
import { CalculatorBtn } from './components/CalculatorBtn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Calculator/>
      <CalculatorBtn/>
    </div>
  )
}

export default App

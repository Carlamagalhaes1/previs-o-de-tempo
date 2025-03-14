import { useState, useRef } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()

  function searchCity(){}

  return (
    <>
      <div>
        <h1>Previção do Tempo</h1>
        <input type="text" ref={inputRef} placeholder='Digite o nome da cidade' value="" >
          <button onClick={searchCity}>Buscar</button> </input>

      </div>

    </>
  )
}

export default App

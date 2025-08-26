//Se importan recuros necesarios como imagenes y archvos css
import { useState } from 'react'
import './App.css'
import Esponja from './assets/Esponja.jpg'
//preparan el componente para mostrar el contador y los botones 
function App() {
  const [count, setCount] = useState(0)

  return (
//Se agregag un titulo y la imagen con su estilo css, tambien se agregan botones y contador
    <>
      <div>´
        <h1> Aumentar y Disminuir Contador</h1>
        <img src= {Esponja} alt="EsponjaMafioso" className='imagen-esponja' />
      </div>
      <div className="card">       
        <button onClick={() => setCount(count + 1)}>
          Incrementar
        </button>
        <button onClick={() => setCount(count - 1)}>
          Disminuir
        </button>
        <p>
          El contador es: {count}
        </p>
      </div>
      
    </>
  )
}

export default App

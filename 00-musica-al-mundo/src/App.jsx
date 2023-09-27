import './App.css'
import './index.css'
import Principiantes from './Principiantes';
import Intermedios from './Intermedios';
import Avanzados from './Avanzados';
import Expertos from './Expertos';

function App() {
  return (
    <>
    <div className='title'>
      <h1>The Music School</h1>
        <h3>
          Aquí podras encontrar toda la teoría musical <br/>
          que pude recopilar, dividida por niveles
        </h3>
    </div>
      <div className='niveles-conteiner'>
      <Principiantes/>
      <Intermedios/>
      <Avanzados/>
      <Expertos/>
      </div>
      
      
      
      
      
     
    </>
  )
}

export default App

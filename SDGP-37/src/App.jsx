
import './App.css';
import Description from './components/Description/Description';
import NavBar from './components/navBar/navBar';

function App() {
 

  return (
  
    <div className='app'>
       <div className='navBar'>
       <NavBar/>
       </div>
      
      <div>
      <h1 className='topic'>VEHICLE DAMAGE DETECTION <br></br>COST ESTIMATION</h1>
      </div>

      <div>
      <Description/>
      </div>
      
    </div>
   
     
    
  )
}

export default App

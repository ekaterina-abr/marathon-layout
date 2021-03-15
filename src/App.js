import './App.css'
import Header from "./components/Header/Header"
import LeftColumn from "./components/LeftColumn/LeftColumn"
import hexagon_3 from './icons/hexagon-3.svg'
import Hackathons from './components/Hackathons/Hackathons'
import hexagon_1 from './icons/hexagon-1.svg'
import hexagon_gradient_3 from './icons/hexagon-gradient-3.png'

function App() {
  return (
    <div className="App">
      <Header/>
      <LeftColumn/>
      <img src={hexagon_3} className='hexagon_3' alt='hexagon_3'/>      
      <img src={hexagon_gradient_3} className='hexagon_gradient_3' alt='hexagon_gradient_3'/>  
      <Hackathons/>       
      <img src={hexagon_1} className='hexagon_1' alt='hexagon_1'/> 
    </div>
  );
}

export default App;

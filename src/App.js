import {useState} from 'react'
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';


function App() {
  const [data, setData] = useState([])
  async function fetchFood(){
    
    const response = await fetch('https://api.spoonacular.com/recipes/716429/information?apiKey=2d4f563ebff94a8f95bb7a8bf46d3e72');
  const data = await response.json();
  console.log(data)
  }
  fetchFood()

  return (
    <div className="App">
       <NavBar />
       <Home />   
    </div>
  );
}


export default App;

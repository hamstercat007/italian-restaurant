import logo from './logo.svg';
import './App.css';



function App() {
  async function fetchFood(){
    
    const response = await fetch('https://api.spoonacular.com/recipes/716429/information?apiKey=2d4f563ebff94a8f95bb7a8bf46d3e72');
  const data = await response.json();
  console.log(data)
  }
  fetchFood()

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

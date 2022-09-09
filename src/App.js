import logo from './logo.svg';
import './App.css';



function App() {
  async function fetchFood(){
    
    const response = await fetch('https://api.spoonacular.com/food/menuItems/search?query=burger&number=2');
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

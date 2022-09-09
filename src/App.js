import { useState } from 'react';


function App() {
  const [foodImage, setFoodImage] = useState('https://livingstonbagel.com/wp-content/uploads/2016/11/food-placeholder.jpg')
  const [foodData, setFoodData] = useState({})
  const [recipeID, setRecipeID] = useState('716429')
  

  async function fetchFood(){


    const response = await fetch(`https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=e1833e085ad04e5583a2f8409022c612`);
  const data = await response.json();
  console.log('food info', data)
  setFoodData(data)
  console.log(data.)
  }

  useEffect(() => {
    fetchFood()
    
  }, [])
  

  return (
    <div className="App">
      <img src={foodImage}/>
    </div>
  );
}
import { useState, useEffect } from 'react';
import foodData from './data/data.js';

export default function App() {
/*

https://api.spoonacular.com/recipes/637672/information?apiKey=6e9b03c30e5e4bdeaa8e5428fb3062dd

starters 
637672 - Cheesy Picante Beef Macaroni
658753 - Roma Tomato Bruschetta
648320 - Jade Buddha Salmon Tartare

main 
795514 - Spaghetti Squash & Tomato Basil Meat Sauce
632935 - Asparagus Lemon Risotto
664737 - Veggie Lasagna Rolls with Peppery Pecorino Marinara
desert 

663351 - The Ultimate Tiramisu
633415 - Baked Alaska
1697581 - Crème Brûlée
*/ 
  //API Key: 6e9b03c30e5e4bdeaa8e5428fb3062dd
  const [foodImage, setFoodImage] = useState('https://livingstonbagel.com/wp-content/uploads/2016/11/food-placeholder.jpg')
  // const [foodData, setFoodData] = useState({})
  const [recipeID, setRecipeID] = useState('716429')
  
  console.log('food data is......', foodData[0])

  // async function fetchFood(){


  //   const response = await fetch(`https://api.spoonacular.com/recipes/637672/information?apiKey=e1833e085ad04e5583a2f8409022c612`);
  // const data = await response.json();
  // console.log('food info', data)
  // setFoodData(data)
  // console.log(data)
  // }

  // useEffect(() => {
  //   fetchFood()
    
  // }, [])
  

  return (
    <div className="App">
      <img src={foodImage}/>
    </div>
  );
}
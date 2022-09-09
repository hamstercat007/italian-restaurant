import italianFoods from "./italian-foods.jpeg"
import {useState} from 'react'

function Home() {

  return (
    <div>
      <h1>Welcome to HackItalian</h1>
      <img src={italianFoods} alt="Italian Foods" />
      <p>Welcome to HackItalian where you can order home made food.</p>
    </div>
  );
}

export default Home;

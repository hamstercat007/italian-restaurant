import italianFoods from "./italian-foods.jpeg"

function Home() {

  return (
    <div>
      <h1>Welcome to HackItalian where you can order home made food.</h1>
      <img src={italianFoods} alt="Italian Foods" />
    </div>
  );
}

export default Home;

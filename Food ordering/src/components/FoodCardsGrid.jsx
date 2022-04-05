import React from "react";
import FoodCard from "./FoodCard";
import eggs from "../images/fried-egg.png"
import fries from "../images/french-fries.png"
import pizza from "../images/pizza.png"
import hamburger from "../images/hamburger.png"
import grilledFish from "../images/grill.png"
import tomatoSoup from "../images/soup.png"

const FoodCardsGrid = () => {
  // Defined extras with price as object values
  const extras = [
    {Beacon: 3},
    {Ketchup: 1},
    {Bread: 2},
    {Salad: 4},
    {Sauce: 1.5},
    {Lemon: 1}
]

  return <div className="foodCardsGrid">
    {/* Passing data to each food card */}
    <FoodCard img={eggs} price={11} foodName={'Eggs'} ingredients={'Two eggs, 120g'} 
    extras={[extras[0], extras[2], extras[3]]}/>
    <FoodCard img={fries} price={6.5} foodName={'French fries'} ingredients={'200g potatoes'}
    extras={[extras[1], extras[4]]}/>
    <FoodCard img={pizza} price={9} foodName={'Pizza'} ingredients={'Ham, cheese, Tomato'}
    extras={[extras[0], extras[4]]}/>
    <FoodCard img={hamburger} price={10} foodName={'Burger'} ingredients={'100g beef, cheese, onion'}
    extras={[extras[4], extras[3], extras[1]]}/>
    <FoodCard img={grilledFish} price={16.3} foodName={'Grilled fish'} ingredients={'Trout 300g'}
    extras={[extras[2], extras[5]]}/>
    <FoodCard img={tomatoSoup} price={8} foodName={'Tomato soup'} ingredients={'Tomato, garlic, onion'}
    extras={[extras[2], extras[3], extras[5]]}/>
</div>;
};

export default FoodCardsGrid;

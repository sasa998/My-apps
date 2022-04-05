import React from "react";
import './App.css';
import FoodCardsGrid from "./components/FoodCardsGrid";
import ListOfOrders from "./components/ListOfOrders"

export default function App() {
  
  return (
  <div className="main">
    <h1 style={{'textAlign': 'center', 'margin' : '2em 0'}}>Menu</h1>
    <FoodCardsGrid />
    <ListOfOrders />
  </div>
  )
}
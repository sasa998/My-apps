import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import Extras from "./Extras";


const FoodCard = ({img, price, foodName, extras, ingredients}) => {
  // Toggle for showing Extras component when button is clicked
  const [toggle, setToggle] = useState(false)
  // react-spring animation
  const transition = useTransition(toggle, {
    from:{position: 'absolute', opacity: 0},
    enter:{x: 0, y: 0, opacity: 1},
    leave:{opacity: 0}
})

  return <div className="foodCard">
    <img src={img} alt="Food" />
    <div className="foodInformation">
      <h4>{foodName}</h4>
      <p>{ingredients}</p>
    </div>
    <div className="price">
      <p>Price: <span>{price}$</span></p>
      {/* When button is clicked, show div for extras */}
      <button onClick={()=> {setToggle(true)}}>+</button>
    </div>
    {/* If button for showing extras is clicked, animate with react-spring */}
    {transition((style, item) =>
      item && <animated.div className='animated' style={style}>
        <Extras 
          img={img} 
          price={price} 
          extras={extras} 
          setToggle={setToggle}
          nameOfFood={foodName} />
      </animated.div>
)}
</div>
};

export default FoodCard;

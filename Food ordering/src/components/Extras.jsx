import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFood } from '../redux/actions/foodActions';
import { v4 as uuidv4 } from 'uuid'

const Extras = ({img, price, extras, setToggle, nameOfFood}) => {
  // Storing prices from checkboxes in state
  const [sumOfExtras, setSumOfExtras] = useState([])
  const dispatch = useDispatch()

  function handleCheckbox ({target: {checked, value: checkValue}}) {
        if (checked) {
                setSumOfExtras([...sumOfExtras, Number(checkValue)]);
        } else {
                setSumOfExtras(sumOfExtras.filter(e => e !== Number(checkValue)));
        }
  }
  // Sum of all prices from checkboxes + default price of food
  const priceWithExtras = sumOfExtras.reduce((total, sum) => total + sum, price)

  function addFoodToList () {
    // Add chosen food with name, unique id and summed total price with extras
    dispatch(addFood({foodName: nameOfFood, totalPrice: priceWithExtras, id: uuidv4()}))
    setToggle(false)
  }

  return <div className='chooseExtras'>
  <div className="popUp">
    <div className="left">
      <img src={img} alt="Food" />
      <h2>Price: {price}$</h2>
    </div>
    <div className="right">
      <div className="extras">
        <p>Add extra:</p>
        <ul style={{'listStyleType' : 'none'}}>
          {/* Loop through passed extras as props and display each one with its name and price */}
          {extras.map((extra, index) => (
            <li key={index}>
              {Object.keys(extra)}: <span>{Object.values(extra)}$</span>
              <input type='checkbox' onChange={handleCheckbox} value={Object.values(extra)} />
            </li>
          ))}
        </ul>
        <div className="addFoodToList">
          <p>Total price: {priceWithExtras}$</p>
          <button 
            className="order"
            onClick={addFoodToList}>
            Add to list
          </button>
        </div>
      </div>
      <button className="exit" onClick={() => {setToggle(false)}}>X</button>
    </div>
  </div>
</div>
};

export default Extras;

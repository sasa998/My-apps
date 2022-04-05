import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFood } from '../redux/actions/foodActions';
import Form from './Form';
import OrderSubmitted from './OrderSubmitted';

const ListOfOrders = () => {
  const foodFromReducer = useSelector(state => state.addedFoodReducer)
  // if toggle is true, user selected the foods and filled the form correctly
  const [toggle, setToggle] = useState(false)
  // if warning is true, user didn't choose any foods
  const [warning, setWarning] = useState(false)
  const dispatch = useDispatch()
  const pricesFromRedux = []
  // Adding prices of chosen foods to pricesFromRedux array to use reduce later for total sum of all
  foodFromReducer.forEach((item) => pricesFromRedux.push(item.totalPrice))
  const totalPrice = pricesFromRedux.reduce((total, sum) => total + sum, 0)

  return <div className='listOfOrders'>
    <h3>Your orders:</h3>
    {
    // Loop through added foods in redux and display each one
    foodFromReducer.map((food) => (
        <p key={food.id} >
          {food.foodName}: <span>{food.totalPrice}$</span> <button onClick={() => dispatch(removeFood(food.id))}>X</button>
        </p>
      ))
    }
    {/* If nothing is added show message no foods to order, else show sum of all chosen foods */}
    {pricesFromRedux.length > 0 ? <p>Total: <span>{totalPrice}$</span></p> : 'No foods to order'}
    {warning && <div className='warning'>You didn't choose any foods!</div>}
    <Form setToggle={setToggle} setWarning={setWarning} />
    {toggle && <OrderSubmitted price={totalPrice} setToggle={setToggle}/>}
</div>;
};

export default ListOfOrders;

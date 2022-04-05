import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetFood } from '../redux/actions/foodActions';

const OrderSubmitted = ({price, setToggle}) => {
  const nameFromRedux = useSelector(state => state.handleNameReducer)
  const adressFromRedux = useSelector(state => state.handleAdressReducer)
  const dispatch = useDispatch()

  function onExitClick () {
    dispatch(resetFood())
    setToggle(false)
  }

  return <div className='orderSubmitted'>
    <div className="content">
      <h3>{nameFromRedux}, your order is submitted successfully!</h3>
      <p className='orderInfo'>The foods you have ordered will be delivered at {adressFromRedux}. </p>
      <p>Price: {price}$</p>
      <button onClick={onExitClick}>X</button>
    </div>
</div>;
};

export default OrderSubmitted;

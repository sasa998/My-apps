import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onNameChange, onAdressChange } from '../redux/actions/inputHandler';

const Form = ({setToggle, setWarning}) => {
  const [name, setName] = useState('')
  const [adress, setAdress] = useState('')

  // if checkNameInput is true, user didn't fill the form, same for checkAdress
  const [checkNameInput, setCheckNameInput] = useState(false)
  const [checkAdressInput, setCheckAdressInput] = useState(false)
  const foodsFromRedux = useSelector(state => state.addedFoodReducer)
  const dispatch = useDispatch()

  // Setting the inputs of name and adress to redux to acces them in OrderSubmitted component
  dispatch(onNameChange(name))
  dispatch(onAdressChange(adress))
  
  // If inputs are empty, display border bottom red as warning
  function inputWarning (check) {
    if (check === true) {
      return '2px solid rgb(245, 76, 76)';
    } else {
      return '1px solid rgb(68, 67, 67)';
    }
  }
  // Warning messages lasts for amount of seconds and then dissapear
  function warningsTimeout (state, bool, seconds) {
    setTimeout(() => {
      state(bool)
    }, seconds)
  }

  // Handle submit form
  function onSubmit () {
    if (foodsFromRedux.length === 0){
      setWarning(true)
      warningsTimeout(setWarning, false, 4000)
    } else if (name.length === 0) {
      setCheckNameInput(true)
      warningsTimeout(setCheckNameInput, false, 4000)
    } else if (adress.length === 0) {
      setCheckAdressInput(true)
      warningsTimeout(setCheckAdressInput, false, 4000)
    } else {
      warningsTimeout(setToggle, true, 1000)
    }
  }

  return <div className='form'>
    <label> Name:
      <input type="text" name="name" placeholder='Nicole' 
      value={name} onChange={(e) => setName(e.target.value)}
      style={{'borderBottom': inputWarning(checkNameInput)}}/>
    </label>
    <label> Adress:
      <input type="text" name="adress" placeholder='Wall Street 15' 
      value={adress} onChange={(e) => setAdress(e.target.value)}
      style={{'borderBottom': inputWarning(checkAdressInput)}}/>
    </label>
    <input type="submit" value="Order now!" onClick={onSubmit} />
</div>;
};

export default Form;

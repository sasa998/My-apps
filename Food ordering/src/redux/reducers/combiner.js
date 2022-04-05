import addedFoodReducer from "./addedFood";
import handleAdressReducer from "./adress";
import handleNameReducer from "./name";
import { combineReducers } from "redux";


const rootReducers = combineReducers({
  addedFoodReducer,
  handleAdressReducer,
  handleNameReducer,
});

export default rootReducers;
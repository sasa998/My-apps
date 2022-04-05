const addedFoodReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD':
        return [...state, action.payload];
    case 'REMOVE':
      return state.filter((orderedFood) => orderedFood.id !== action.payload)
    case 'RESET':
      return []
    default:
            return state;
    }
}

export default addedFoodReducer;
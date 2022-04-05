export const addFood = (food) => {
  return {
      type: 'ADD',
      payload: food
  }
}

export const removeFood = (food) => {
  return {
      type: 'REMOVE',
      payload: food
  }
}

export const resetFood = () => {
  return {
      type: 'RESET'
  }
}
const handleAdressReducer = (state = '', action) => {
  switch(action.type){
      case 'ON_ADRESS_CHANGE':
          return action.payload;
          default:
              return state;
  }
}

export default handleAdressReducer;
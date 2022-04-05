const handleNameReducer = (state = '', action) => {
  switch(action.type){
      case 'ON_NAME_CHANGE':
          return action.payload;
          default:
              return state;
  }
}

export default handleNameReducer;
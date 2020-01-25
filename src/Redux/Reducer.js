const iState = {
  name: 'anees',
  myArray: ['apple', 'banana', 'orange'],
};

export const reducer = (state = iState, action) => {
  console.log(action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

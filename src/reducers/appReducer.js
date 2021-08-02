const initialState = {
  annaCost: [{ costItem: 's', category: 'ss', description: 'sss' }],
};

function appReducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case 'AddTable':
      return {
        ...state,
        annaCost: [...state.annaCost, action.payload],
      };
    default:
      return state;
  }
}
export default appReducer;

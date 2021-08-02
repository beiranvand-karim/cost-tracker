const initialState = {
  annaCost: [],
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

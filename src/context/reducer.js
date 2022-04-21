export const actionType = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
        // action because it is the action that goes to the server and brings the information
      };
    default:
      return state;
  }
};

export default reducer;

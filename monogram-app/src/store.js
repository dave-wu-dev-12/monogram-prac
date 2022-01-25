const initialState = {
  isLoggedIn: false,
  userName: "",
};

const reducer = (state = initialState, action) => {
  // The initial loggedIn state of false will be used
  // when the app loads and whoever is listening to it

  switch (action.type) {
    case "login":
      return {
        ...state,
        isLoggedIn: true,
        userName: action.userName,
      };

    default:
      return state;
  }
};

export default reducer;

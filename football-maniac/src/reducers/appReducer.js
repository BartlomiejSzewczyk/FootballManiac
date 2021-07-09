export const appState = {
  mainContent: "",
};

const appReducer = (state = appState, action) => {
  switch (action.type) {
    case "SET_MAIN_CONTENT":
      return {
        ...state,
        mainContent: action.value,
      };
    default:
      return state;
  }
};

export default appReducer;

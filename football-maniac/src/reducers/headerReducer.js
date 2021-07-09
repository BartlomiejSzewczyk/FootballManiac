export const headerState = {
  selectedCountry: "",
};

const headerReducer = (state = headerState, action) => {
  switch (action.type) {
    case "SET_SELECTED_COUNTRY":
      return {
        ...state,
        selectedCountry: action.value,
      };
    default:
      return state;
  }
};

export default headerReducer;

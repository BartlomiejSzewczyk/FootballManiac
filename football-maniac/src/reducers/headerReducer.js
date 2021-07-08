export const headerState = {
  fieldSize: 10,
};

const headerReducer = (state = headerState, action) => {
  switch (action.type) {
    case "CHANGE_FIELD_SIZE":
      return {
        ...state,
        fieldSize: action.value,
      };
    default:
      return state;
  }
};

export default headerReducer;

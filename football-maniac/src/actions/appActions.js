export const changeState = (functionName, value) => ({
  type: functionName,
  value: value,
});

export const getTestData = () => (dispatch, getState) => {
  fetch("https://api.football-data.org/v2/competitions/CL/matches", {
    method: "get",
    headers: {
      "X-Auth-Token": process.env.REACT_APP_API_KEY,
    },
  });
};

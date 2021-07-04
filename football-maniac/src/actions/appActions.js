export const changeState = (functionName, value) => ({
  type: functionName,
  value: value,
});

export const getTestData = (setTestData) => (dispatch, getState) => {
  fetch("https://api.football-data.org/v2/competitions/CL/matches", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Auth-Token": "64692aa600a640e3ac179ad7413a6cb4",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setTestData(data);
    });
};

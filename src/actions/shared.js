import API from "goals-todos-api";

// action constants
export const RECEIVE_DATA = "RECEIVE_DATA";

function receiveData(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals,
  };
}

// async action creator
// returning a function
// using Redux Thunk Middleware
export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([API.fetchTodos(), API.fetchGoals()]).then(
      ([todos, goals]) => {
        dispatch(receiveData(todos, goals));
      }
    );
  };
}

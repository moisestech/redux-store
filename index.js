// Library Code
function createStore(reducer) {
  // The store hsould have four parts
  // 1. The State
  // 2. Get the state. (getState)
  // 3. Listen to changes on the state. (subscribe)
  // 4. Update the state (dispatch)

  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}

// APP CODE

// constants
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";

//actionCreators
function addTodoAction(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

function removeTodoAction(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

function toggleTodoAction(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

function addGoalAction(goal) {
  return {
    type: ADD_GOAL,
    goal,
  };
}

function removeGoalAction(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

/*
Characteristics of a Pure Function
1) They always return the same result if the same arguments are passed in.
2) They depend only on the arguments passed into them.
3) Never produce any side effects.
*/

/* REDUCERS */

// Community Standard Switch Statement
// instead of IF ELSE statements
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );
    default:
      return state;
  }
}

function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]);
    case REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.id);
    default:
      return state;
  }
}

/* App Reducer */
// new shape of our store object
// using 2 reducers
function app(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action),
  };
}

// create store
// w/ App Reducer
const store = createStore(app);

// subscribe example
store.subscribe(() => {
  console.log("The new state is:", store.getState());
});

// dispatch example
store.dispatch(
  addTodoAction({
    id: 1,
    name: "Work on resume",
    complete: false,
  })
);

store.dispatch(
  addTodoAction({
    id: 2,
    name: "Clean my room",
    complete: true,
  })
);

store.dispatch(
  addTodoAction({
    id: 2,
    name: "Exercise",
    complete: true,
  })
);

store.dispatch(removeTodoAction(1));

store.dispatch(toggleTodoAction(0));

store.dispatch(
  addGoaActionl({
    id: 0,
    name: "Learn Redux",
  })
);

store.dispatch(
  addGoalAction({
    id: 1,
    name: "Lose 20 pounds",
  })
);

store.dispatch(removeTodoAction(0));

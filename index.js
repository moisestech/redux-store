function createStore() {
  // The store hsould have four parts
  // 1. The State
  // 2. Get the state.
  // 3. Listen to changes on the state.
  // 4. Update the state

  let state;

  const getState = () => state;

  return {
    getState,
  };
}

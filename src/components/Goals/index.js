import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { handleAddGoal, handleDeleteGoal } from "../../actions/goals";

function Goals({ dispatch, goals }) {
  const addItem = (e) => {
    e.preventDefault();

    dispatch(handleAddGoal(this.input.value, () => (this.input.value = "")));
  };

  const removeItem = (goal) => {
    dispatch(handleDeleteGoal(goal));
  };

  return (
    <div>
      <h1>Goals</h1>
      <input
        type="text"
        placeholder="Add Goal"
        ref={(input) => (this.input = input)}
      />
      <button onClick={addItem}>Add Goal</button>

      <List items={goals} remove={removeItem} />
    </div>
  );
}

export default connect((state) => ({
  goals: state.goals,
}))(Goals);

Goals.propTypes = {
  dispatch: PropTypes.func.isRequired,
  goals: PropTypes.array.isRequired,
};

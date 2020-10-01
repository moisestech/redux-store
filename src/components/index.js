import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ConnectedTodos from "./Todos";
import ConnectedGoals from "./Goals";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";

function App({ dispatch, loading }) {
  useEffect(() => {
    dispatch(handleInitialData);
  }, []);

  return (
    <>
      {loading === true ? (
        <h3>Loading</h3>
      ) : (
        <div>
          <ConnectedTodos />
          <ConnectedGoals />
        </div>
      )}
    </>
  );
}

export default connect((state) => ({
  loading: state.loading,
}))(App);

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

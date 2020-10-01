import React, { useEffect } from "react";
import ConnectedTodos from "./Todos";
import ConnectedGoals from "./Goals";
import { useSelector, useDispatch } from "react-redux";
import { handleInitialData } from "../actions/shared";

export default function App() {
  dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

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

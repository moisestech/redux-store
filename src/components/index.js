import React, { useEffect } from "react";
import ConnectedTodos from "./Todos";
import ConnectedGoals from "./Goals";
import { useSelector, useDispatch } from "react-redux";
import { handleInitialData } from "../actions/shared";

import Loading from "./Loading";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div className="app">
      {loading === true ? (
        <Loading />
      ) : (
        <div>
          <ConnectedTodos />
          <ConnectedGoals />
        </div>
      )}
    </div>
  );
}

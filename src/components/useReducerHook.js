import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "text":
      return { ...state, text: action.payload };
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, text: "" });
  return (
    <>
      <h3>Use reducer</h3>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>&nbsp;
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>&nbsp;
      <input
        type="text"
        value={state.test}
        onChange={(e) => dispatch({ type: "text", payload: e.target.value })}
      />
      &nbsp;
      {state.text}
    </>
  );
};

export default UseReducerHook;

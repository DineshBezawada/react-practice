import { useReducer } from "react";

const Reducer = () => {
  const reducerFn = (state, action) => {
    switch (action?.type) {
      case "Dk":
        return action?.payload;
      case "Avi":
        return action?.payload;
      default:
        state;
    }
  };
  const [state, dispatch] = useReducer(reducerFn, "Sai");
  return (
    <>
      <h4>{state}</h4>
      <button
        onClick={() => {
          dispatch({ type: "Dk", payload: "Dinesh" });
        }}
      >
        Dk
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Avi", payload: "Avinash" });
        }}
      >
        Avi
      </button>

    </>
  );
};

export default Reducer;

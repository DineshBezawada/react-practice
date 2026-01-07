const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Action:", action);
  console.log("Before:", store.getState());

  const result = next(action);

  console.log("After:", store.getState());

  return result;
};

export default loggerMiddleware;

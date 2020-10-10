import React, {useReducer, createContext, useContext} from 'react';

function init(initialCount) {
  return {count: initialCount};
}

export function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

const StoreContext = createContext({});

function Demo1() {
  let store = useReducer(reducer, 0, init);

  return (
    <StoreContext.Provider value={store}>
      <div className="Demo1">
        <Counter />
      </div>
    </StoreContext.Provider>
  );
}

function Counter() {
  const [state, dispatch] = useContext(StoreContext);

  return (
    <>
      <h3>Demo1</h3>
      <p>Count: {state.count}</p>
      <div className="button-wrapper">
          <button type="button" onClick={() => dispatch({ type: "increment" })}>
            Plus
          </button>
          <button type="button" onClick={() => dispatch({ type: "decrement" })}>
            Minus
          </button>
          <button type="button" onClick={() => dispatch({type: 'reset', payload: 10})}>
            Reset
          </button>
      </div>
    </>
  );
}

export default Demo1;

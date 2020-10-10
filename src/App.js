import React, {useReducer, createContext, useContext} from 'react';
import logo from './logo.svg';
import './App.css';


export const initialState = { count: 0 };

export function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const AppContext = createContext({});

function App() {
  const store = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={store}>
      <div className="App">
        <TopNavBar />
      </div>
    </AppContext.Provider>
  );
}

function TopNavBar() {
  const [state] = useContext(AppContext);

  return (
    <>
      <p>{state.count}</p>
      <Button />
    </>
  );
}

function Button() {
  const [state, dispatch] = useContext(AppContext);
  return (
    <div className="button-wrapper">
      <button type="button" onClick={() => dispatch({ type: "increment" })}>
        Plus
      </button>
      <button type="button" onClick={() => dispatch({ type: "decrement" })}>
        Minus
      </button>
    </div>
  );
}

export default App;

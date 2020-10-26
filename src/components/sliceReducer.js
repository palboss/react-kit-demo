import React, {createContext, useContext, useReducer} from 'react';

const initstate = {
    count: 0,
    tlist: []
}

function init(initialCount) {
  return {
      count: initialCount,
      tlist: []
  };
}

function countReducer(countstate, action) {
  switch (action.type) {
    case "increment":
      return countstate + 1;
    case "decrement":
      return countstate - 1;
    case 'reset':
      return action.payload;
    default:
      return countstate;
  }
}

function addtlist(tliststate, action) {
    return tliststate.concat([{
        id: action.id,
        text: action.text,
    }]);
}

function tlistReducer(tliststate = [], action) {
    switch (action.type) {
        case "Add_tlist": return addtlist(tliststate, action)
        default: return tliststate
    }
}

function appReducer(state = initstate, action) {
    return {
        count : countReducer(state.count, action),
        tlist : tlistReducer(state.tlist, action)
    };
}

const StoreContext = createContext({});

function Demo2() {
  let store = useReducer(appReducer, 0, init);

  return (
    <StoreContext.Provider value={store}>
      <div className="Demo2">
        <h3>Demo2</h3>
        <Counter/>
        <br/>
        <Tlist />
      </div>
    </StoreContext.Provider>
  );
}

function Counter() {
  const [state, dispatch] = useContext(StoreContext);

  return (
    <>
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

function Tlist() {
  const [state, dispatch] = useContext(StoreContext);
  const plist = state.tlist.map((title, index) => {
        return (<p key={index}> ID: {title.id} Text: {title.text} </p>)
  })

  return (
    <>
      <div className="button-wrapper">
          <button type="button" onClick={() => dispatch({type: "Add_tlist", id: 1, text: 'text222'})}>
            AddList
          </button>
      </div>
      {plist}
    </>
  );
}

export default Demo2;

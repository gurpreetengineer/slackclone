import React, { createContext, useContext, useReducer } from "react";

// It creates a context using which we can either send the data to it or pull stored data from it
const StateContext = createContext();

// Working: StateProvider, here, is an anonymous function which is supplying us
// a provider. This PROVIDER takes in a state which has a reducer() which takes initial state and a reducer
// as arguments.

// This, useReducer, than pass everything that it has in ' value={} ' prop which provides everything
// to its children.
const StateProvider = ({ reducer, initialState, children }) => (
  // StateContext from line 4
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// To directly access the context, below we have made an instance, which is a custom hook,
// of useContext() hook. It's from the line 4 and Merges with the definition at line 14.
// -- Remember -- Hooks can only be called inside a function's bode, so anonymous function below.
const useStateValue = () => useContext(StateContext);

export { StateContext, StateProvider, useStateValue };

import React, { useContext, createContext, useReducer } from "react";

export const StateContext = createContext();

/// this was rendered with a brackets "()" before it could run correctly (it means it must have a return keyword)
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

/// we have a state context, if we use it, we will surely get our state value
export const useStateValue = () => useContext(StateContext);

/// we are creating a context and utilizing that context
/// our component is the context we created, it's provider
/// we are passing the context provider component, a value prop with a useReducer acting on reducer and initial state
/// our state provider is a function, that returns the context provider
/// it is in the state provider that we created and used our context

/// Context is a mechanism designed to store data, and alert consumers when that data has changed.
/// This kind of sounds like state, but isn't quite the same.
/// Context doesn't have any rules around telling the Provider component itself when a change has occurred.

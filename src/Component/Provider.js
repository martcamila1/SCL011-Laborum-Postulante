import React, { useReducer, useContext } from 'react';
import InitialState from './initialState';
import Reducer from './reducer';

const MyContext = React.createContext();

export const ProviderContext = (props) => {
  const contextState = useReducer(Reducer, InitialState);
  return (
    <MyContext.Provider value={contextState}>
      {props.children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const myContext = useContext(MyContext);
  return myContext;
};

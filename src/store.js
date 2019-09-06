import React from 'react';

export const initialState = { 
  showModal1: false,
  tileNumber: 0,
 };

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
  case 'OPEN':
    const openState = {
      ...state,
      showModal1: action.statusHasBeenChanged,
      tileNumber: action.tileNumber,
    };
    return openState;
  case 'CLOSE':
    const closeState = {
      ...state,
      showModal1: action.statusHasBeenChanged,
      tileNumber: action.tileNumber,
    };
    return closeState;
  default:
    return state;
  };
};

export const Context = React.createContext();

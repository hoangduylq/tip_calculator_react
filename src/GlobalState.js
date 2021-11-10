import React, { createContext, useState } from 'react';

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [people, setPeople] = useState('');
  const [isValidBill, setIsValidBill] = useState(false);
  const [isValidPeople, setIsValidPeople] = useState(false);

  const state = {
    bill: [bill, setBill],
    tip: [tip, setTip],
    people: [people, setPeople],
    isValidBill: [isValidBill, setIsValidBill],
    isValidPeople: [isValidPeople, setIsValidPeople],
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};

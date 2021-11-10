import React, { createContext, useState } from 'react';

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [people, setPeople] = useState('');
  const [inputTip, setInputTip] = useState('');
  const [isValidBill, setIsValidBill] = useState(false);
  const [isValidPeople, setIsValidPeople] = useState(false);
  const [isShowBtn, setIsShowBtn] = useState(true);

  const state = {
    bill: [bill, setBill],
    tip: [tip, setTip],
    people: [people, setPeople],
    inputTip: [inputTip, setInputTip],
    isValidBill: [isValidBill, setIsValidBill],
    isValidPeople: [isValidPeople, setIsValidPeople],
    isShowBtn: [isShowBtn, setIsShowBtn],
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};

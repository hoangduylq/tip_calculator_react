import React, { useContext, useRef } from 'react';
import { GlobalState } from '../../GlobalState';

const valueTipBtns = [5, 10, 15, 25, 50];

function CalInput() {
  const state = useContext(GlobalState);
  const [bill, setBill] = state.bill;
  const [tip, setTip] = state.tip;
  const [people, setPeople] = state.people;
  const inputEl = useRef(null);
  const [isValidBill, setIsValidBill] = state.isValidBill;
  const [isValidPeople, setIsValidPeople] = state.isValidPeople;

  const handleBtnTip = (tip) => {
    setTip(parseFloat(tip));
  };

  const handleCustomTipBtn = (e) => {
    e.target.style.display = 'none';
    inputEl.current.style.display = 'block';
  };

  const handleOnBlurInputBill = () => {
    if (bill <= 0 || !bill) {
      setIsValidBill(true);
    }
  };

  const handleOnBlurInputPeople = () => {
    if (people <= 0 || !people) {
      setIsValidPeople(true);
    }
  };

  const handleOnKeyDown = (e) => {
    if (
      !(
        (e.keyCode > 95 && e.keyCode < 106) ||
        (e.keyCode > 47 && e.keyCode < 58) ||
        e.keyCode === 8 ||
        e.keyCode === 37 ||
        e.keyCode === 39 ||
        e.keyCode === 46 ||
        e.keyCode === 110 ||
        e.keyCode === 190
      )
    ) {
      return false;
    }
  };

  return (
    <section className='calculator__input'>
      <div className={`calculator__input__bill ${isValidBill && 'invalid'}`}>
        <div>
          <label htmlFor='bill'>Bill</label>
          <span className='invalid-noti'>Can't be zero</span>
        </div>
        <div className='calculator__input__bill-wrap'>
          <img src='./public/icons/icon-dollar.svg' alt='' />
          <input
            type='number'
            id='bill'
            placeholder='0'
            autoComplete='off'
            value={bill >= 0 ? bill : ''}
            name='bill'
            onBlur={handleOnBlurInputBill}
            onKeyDown={(e) => handleOnKeyDown(e)}
            onChange={(e) => {
              setBill(parseFloat(e.target.value));
              setIsValidBill(false);
            }}
          />
        </div>
      </div>

      <div className='calculator__input__tip'>
        <h5>Select Tip %</h5>
        <div className='calculator__input__tip__list'>
          {valueTipBtns.map((tipValue, index) => (
            <button
              key={index}
              className={`button-tip ${tipValue === tip && 'active'}`}
              data-index={tipValue}
              onClick={() => handleBtnTip(tipValue)}>
              {tipValue}%
            </button>
          ))}
          <button
            className='button-tip'
            id='tip-custom'
            onClick={handleCustomTipBtn}>
            Custom
          </button>
          <input
            ref={inputEl}
            type='number'
            id='tip-custom-input'
            placeholder='0'
            autoComplete='off'
            value={tip >= 0 ? tip : ''}
            onKeyDown={(e) => handleOnKeyDown(e)}
            onChange={(e) => setTip(parseFloat(e.target.value)) || tip}
          />
        </div>
      </div>

      <div
        className={`calculator__input__people ${isValidPeople && 'invalid'}`}>
        <div>
          <label htmlFor='people'>Number of People</label>
          <span className='invalid-noti'>Can't be zero</span>
        </div>
        <div className='calculator__input__people-wrap'>
          <img src='./public/icons/icon-person.svg' alt='' />
          <input
            type='number'
            id='people'
            placeholder='0'
            autoComplete='off'
            name='people'
            value={people >= 0 ? people : ''}
            onBlur={handleOnBlurInputPeople}
            onChange={(e) => {
              setPeople(parseFloat(e.target.value));
              setIsValidPeople(false);
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default CalInput;

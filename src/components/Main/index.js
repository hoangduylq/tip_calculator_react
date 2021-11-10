import React from 'react';
import Logo from './icon/logo.svg';
import CalInput from '../CalInput';
import CalResult from '../CalResult';
import './styles/main.scss';

function Main() {
  return (
    <article className='main grid wide'>
      <section className='logo-wrap'>
        <img src={Logo} alt='' />
      </section>
      <section className='calculator'>
        <CalInput />
        <CalResult />
      </section>
    </article>
  );
}

export default Main;

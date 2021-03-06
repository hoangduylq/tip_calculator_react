import React from 'react';
import { DataProvider } from './GlobalState';
import Main from './components/Main';

function App() {
  return (
    <DataProvider>
      <div className='App'>
        <Main />
      </div>
    </DataProvider>
  );
}

export default App;

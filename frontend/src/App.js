import React from 'react';
import Index from './components/Index';
import Provider from './hooks/provider';
import Routes from './routes';

function App () {
  
  return (
    <>
    <Provider>
      <Routes/>
    </Provider>
    </>
  );
}

export default App;

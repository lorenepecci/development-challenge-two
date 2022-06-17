import React from 'react';
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

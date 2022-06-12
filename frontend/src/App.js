import React from 'react';
import './App.css';
import FormRegister from './components/FormRegister';
import ListOfPatientsCards from './components/ListOfPatientsCards';
import Provider from './hooks/provider';

function App () {
  
  return (
    <Provider>
    <div className="App">
      <h1> medcloud</h1>
      <div className="container-register">
        <FormRegister />
      </div>
      <div>
        <ListOfPatientsCards />    
      </div>
    </div>
    </Provider>
  );
}

export default App;

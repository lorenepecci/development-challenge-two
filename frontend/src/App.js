import React from 'react';
import FormRegister from './components/FormRegister/FormRegister';
import ListOfPatientsCards from './components/ListPatientsCards/ListOfPatientsCards';
import Provider from './hooks/provider';

function App () {
  
  return (
    <Provider>
    <div className="app-container">
      <h1> medcloud</h1>
      <div>
        <FormRegister />
      </div>
      <div className="list-container">
        <ListOfPatientsCards />    
      </div>
    </div>
    </Provider>
  );
}

export default App;

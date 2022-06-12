import './App.css';
import React, { useEffect } from 'react';
import FormRegister from './components/FormRegister';
import axios from 'axios';

function App () {
  useEffect( () => {
    axios.get( 'http://localhost:3000/patient' ).then( ( resp ) => console.log( resp ) );
  }, [] );
  return (
    <div className="App">
      <h1> medcloud</h1>
      <div className="container-register">
        <FormRegister />
      </div>
    </div>
  );
}

export default App;

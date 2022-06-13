import React from 'react'
import FormRegister from '../FormRegister/FormRegister';
import ListOfPatientsCards from '../ListPatientsCards/ListOfPatientsCards';

export default function index() {
  return (
    <div className="app-container">
      <h1> medcloud</h1>
      <div>
        <FormRegister />
      </div>
      <div className="list-container">
        <ListOfPatientsCards />    
      </div>
    </div>
  )
}

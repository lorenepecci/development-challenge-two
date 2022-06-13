import axios from 'axios';
import React, { useContext, useState } from 'react';
import Context from '../../hooks/context';
import './formRegister.css';

export default function FormRegister () {

  const [ register, setRegister ] = useState( {} );
  const { setListPatients } = useContext( Context );
  const { name, birthdate, email, address} = register;
  
  const onInputChange = ( { target } ) => {
    setRegister( ( prev ) => ( {
      ...prev,
      [ target.name ]: target.value,
    } ) );
  };
  
  const onHandleClick = () => {
    axios.post( 'http://localhost:3000/patient', register )
      .then( ( data ) => console.log( data ) )
      .then( setRegister( { name: '', birthdate: '', email: '', address: '' } ) );
      setListPatients( ( prev ) => ( [...prev, register]) 
    ); 
  };

  return (
    <div className="form-container">
      <p className="form-title">Registro de Paciente</p>
      <input
        type="text"
        value={ name }
        name="name"
        placeholder="Name"
        onChange={onInputChange}
      />
      <input
        type="text"
        value={ birthdate }
        name="birthdate"
        placeholder="birthdate"
        onChange={onInputChange}
      />
      <input
        type="text"
        value={ email }
        name="email"
        placeholder="email"
        onChange={onInputChange}
      />
      <input
        type="text"
        value={ address }
        name="address"
        placeholder="address"
        onChange={onInputChange}
      />
      <button
        type="button"
        onClick= {onHandleClick}
      >
        Cadastrar
      </button>
     
    </div>
  )
}

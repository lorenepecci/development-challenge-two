import { Alert } from '@mui/material';
import React, { useContext, useState } from 'react';
import Context from '../../hooks/context';
import api from '../../services';
import './formRegister.css';

export default function FormRegister () {
  const [ register, setRegister ] = useState( {} );
  const [ alert, setalert ] = useState( false );
  const [ isAlert, setisAlert ] = useState( false );
  const [ alertMessage, setalertMessage ] = useState( '' );
  const { setListPatients } = useContext( Context );
  const { name, birthdate, email, address} = register;
  
  const onInputChange = ( { target } ) => {
    setRegister( ( prev ) => ( {
      ...prev,
      [ target.name ]: target.value,
    } ) );
  };

  const onHandleClick = () => {
    setisAlert( true );
    api.post( '/patient', register )
      .then( ( { data } ) => {
        setalert( false );
        setListPatients( ( prev ) => ( [ ...prev, data ] ) );
        setRegister( { name: '', birthdate: '', email: '', address: '' } )
      } )
      .catch( function ( error ) {
        setalertMessage( error.response.data );
        setalert( true );
      });
  };

  return (
    <div className="form-container" >
      <p className="form-title">Registro de Paciente</p>
      <input
        type="text"
        value={ name }
        name="name"
        placeholder="Name"
        onChange={onInputChange}
      />
      <input
        className="dateInput"
        type="date"
        value={ birthdate }
        name="birthdate"
        placeholder="birthdate"
        onChange={onInputChange}
      />
      <input
        type="email"
        value={ email }
        name="email"
        placeholder="Email"
        onChange={onInputChange}
      />
      <input
        type="text"
        value={ address }
        name="address"
        placeholder="Address"
        onChange={onInputChange}
      />
      <button
        type="button"
        onClick= {onHandleClick}
      >
        Cadastrar
      </button>
      { isAlert ? 
    alert ? <Alert severity="error">{alertMessage}</Alert> :  <Alert severity="success">Sucesso!</Alert>
     : ''}
    </div>
  )
}

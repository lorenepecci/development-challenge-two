import { Alert } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import Context from '../../hooks/context';
import api from '../../services';
import './formRegister.css';

export default function FormRegister () {
  let history = useHistory();
  const [ register, setRegister ] = useState( {} );
  const [ alert, setalert ] = useState( false );
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
    api.post( '/patient', register )
      .then( ( { data } ) => {
        setListPatients( ( prev ) => ( [ ...prev, data ] ) );
        setRegister( { name: '', birthdate: '', email: '', address: '' })
        console.log(data.message)
      } )
      
      .catch(function (error) {
        if ( error.message === 'Request failed with status code 500' ) {
          history.push("/erro");
        } else {
          setalertMessage(error.response.data)
          setalert( true );
        }
      });
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
        className="dateInput"
        type="date"
        value={ birthdate }
        name="birthdate"
        placeholder="birthdate"
        onChange={onInputChange}
      />
      <input
        type="text"
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
    { alert ? <Alert severity="error">{alertMessage}</Alert> : '' }
     
    </div>
  )
}

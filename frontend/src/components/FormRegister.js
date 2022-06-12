import axios from 'axios';
import React, { useState } from 'react';

export default function FormRegister () {

  const [ register, setRegister ] = useState( {} );
  const { name, birthdate, email, address} = register;
  
  const onInputChange = ( { target } ) => {
    setRegister( ( prev ) => ( {
      ...prev,
      [target.name]:target.value,
    }))
  }
  
  const onHandleClick = () => {
    axios.post( 'http://localhost:3000/patient', register )
    .then((response)=> console.log(response))
  }

  return (
    <div>
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

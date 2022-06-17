import React, { useState } from 'react';
import FormDialog from '../Dialog';
import './card.css';

export default function Card ( props ) {
  const { name, birthdate, email, address, id } = props.item;
  const [ open, setOpen ] = useState( false );
    return (
    <>
      <FormDialog
        open={open}   
        setOpen={ setOpen }
        name={ name }
        birthdate={ birthdate }
        email={ email }
        address={ address }
        id={id}
      />
    <div className='card-container' role="dialog" onClick={()=> setOpen( true )}>
      <h3>{name}</h3>
      <p data-testid="cardtitle">{ `Birthdate: ${ birthdate }` }</p>
      <p>{ `Email: ${ email  }`}</p>
      <p>{ `Address: ${address }`}</p>
    </div>
    </>
  )
}

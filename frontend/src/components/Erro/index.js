import React, { useContext } from 'react';
import Context from '../../hooks/context';

const Error = ( { match: { params: { item } } } ) => {
  const { errorMessage }   = useContext( Context );
  return (
    <div >
      <h3>That's an error {item}</h3>
      <p style={{display: 'flex', justifyContent: 'center'}}>{errorMessage}. Please try again.</p>
    </div>
  )
}

export default Error;

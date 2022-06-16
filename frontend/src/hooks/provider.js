import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import api from './../services';
import Context from './context';

const Provider = ( { children } ) => {
  const [ listPatients, setListPatients ] = useState( [] );
  const [ errorMessage, setErrorMessage ] = useState( '' );
  
  useEffect( () => {
    api.get( '/patient' ).then( ({data} ) => setListPatients(data) );
  }, [setListPatients] );

  const contextData = {
    listPatients,
    setListPatients,
    errorMessage,
    setErrorMessage,
  };

  return (
    <Context.Provider value={ contextData }>
      { children }
    </Context.Provider>
  );
};
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
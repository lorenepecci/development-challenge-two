import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import api from './../services';
import Context from './context';

const Provider = ( { children } ) => {
  const [ listPatients, setListPatients ] = useState( [] );
  console.log( listPatients );
  
  useEffect( () => {
    api.get( '/patient' ).then( ({data} ) => setListPatients(data) );
  }, [setListPatients] );

  const contextData = {
    listPatients,
    setListPatients,
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
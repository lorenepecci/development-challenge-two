import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe( 'testando o Error', () => {
  describe( 'pagina Error ', () => {
    
    
    it( 'text Please try again.', () => {
      const { history } = renderWithRouter( <App /> );
      history.push()
      const text = screen.getByTestRole( 'p' );
      expect( screen.getByText( text, 'Please try again.' ) ).toBeTruthy();
    } );
  } );
} );
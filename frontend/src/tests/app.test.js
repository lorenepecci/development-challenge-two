import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('testando o App', () => {
  describe( 'pagina App inicial', () => {
    
    it( 'site logo', () => {
      renderWithRouter(<App />); 
      const title = screen.getByRole( 'heading', { name: /medcloud/i } );
      expect(title).toBeInTheDocument();
    } )
    
    it( 'formulario tem titulo e button', () => {
      renderWithRouter(<App />);
      const title = screen.getByText(/registro de paciente/i)
      expect( title ).toBeInTheDocument();
      const button = screen.getByRole( 'button', { name: /cadastrar/i } );
      expect(button ).toBeInTheDocument();
    } )
    
     it( 'se preencho os inputs do cadastro e clico no botao:', async () => {
       renderWithRouter( <App /> );
      const name = screen.getByPlaceholderText(/Name/i)
      const birth = screen.getByPlaceholderText( /birthdate/i )
      const email = screen.getByPlaceholderText( /Email/i )
      const address = screen.getByPlaceholderText( /Address/i )

      userEvent.type( name, 'Nome do Paciente' );
      userEvent.type( birth, '1997-03-23' );
      userEvent.type( email, 'nome@gmail.com' );
      userEvent.type( address, 'rua carvalho' );

      const button = screen.getByRole( 'button', { name: /cadastrar/i } );
      userEvent.click( button );
    
      const iname = await screen.findAllByText( "Nome do Paciente" )
      const iemail = await screen.findAllByText(/nome@gmail.com/i)
      const iaddress = await screen.findAllByText( /rua carvalho/i )
      const ibirth = await screen.findAllByText(/1997-03-23/i )
      expect( iname[0] ).toBeInTheDocument();
      expect(iaddress[0]).toBeInTheDocument();
      expect( iemail[ 0 ] ).toBeInTheDocument();
      expect(ibirth[0]).toBeInTheDocument();
    })
     
  
    
  });
});

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Context from '../../hooks/context';
import api from './../../services';

export default function FormDialog ( props ) {
  let history = useHistory();
  const { open, setOpen } = props;
  const { name, birthdate, email, address, id } = props;
  const { listPatients, setListPatients } = useContext( Context );
  const { setErrorMessage } = useContext( Context );
  const [ editValues, setEditValues ] = useState( {
    id:id,
    name: name,
    birthdate: birthdate,
    email: email,
    address: address
  } );


  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {
      api.put( `/patient/${ id }`, {
        name: editValues.name,
        birthdate: editValues.birthdate,
        email: editValues.email,
        address: editValues.address
      } ).then( () => {
        setListPatients(
          listPatients.map( ( value ) => {
            return value.id == id
              ? {
                id: id,
                name: editValues.name,
                birthdate: editValues.birthdate,
                email: editValues.email,
                address: editValues.address
              }
              : value;
          } )
        );
      } )
        .catch( function ( error ) {
          console.log( error.response )
          setErrorMessage( error.response.data );
        history.push( `/erro/${error.response.status}` );
      });
    handleClose();
  };

  const handleDelete = () => {
    api.delete( `/patient/${ id }` )
      .then( () => {
      const newList= listPatients.filter( ( value ) => value.id !== id )
      setListPatients(
        newList
      )} )
    
      handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            defaultValue={name}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="birthdate"
            label="birthdate"
            defaultValue={birthdate}
            type="date"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="email"
            defaultValue={email}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="address"
            defaultValue={address}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDelete()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEdit()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
} 
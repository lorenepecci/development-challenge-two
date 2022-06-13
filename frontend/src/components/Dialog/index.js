import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Axios from "axios";
import React, { useContext, useState } from "react";
import Context from '../../hooks/context';

export default function FormDialog ( props ) {
  const { open, setOpen } = props;
  const { name, date, email, address, id } = props;
  const { listPatients, setListPatients } = useContext( Context );
  const [ editValues, setEditValues ] = useState( {
    id:id,
    name: name,
    birthdate: date,
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
    console.log(listPatients)
    console.log(id)
    Axios.put(`http://localhost:3000/patient/${id}`, {
      name: editValues.name,
      birthdate: editValues.date,
      email: editValues.email,
      address: editValues.address
    }).then(() => {
      setListPatients(
        listPatients.map((value) => {
          return value.id == id
            ? {
              id: id,
              name: editValues.name,
              birthdate: editValues.date,
              email: editValues.email,
              address: editValues.address
            }
            : value;
        })
      );
    });
    handleClose();
  };

  const handleDelete = () => {
    console.log( id )
    console.log(listPatients)
    Axios.delete( `http://localhost:3000/patient/${id}` ).then( () => {
      const newList= listPatients.filter( ( value ) => value.id !== id )
      setListPatients(
        newList
      );
      handleClose();
    } );
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
            defaultValue={date}
            type="text"
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
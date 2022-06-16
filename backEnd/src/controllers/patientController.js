const express = require( 'express' );
const { validateTypes } = require( '../middlewares/inputValidation' );
const router = express.Router();
const service = require('../services/patientService');

router.post('/', validateTypes, async (req, res) => {
    const response = await service.createPatient(req.body);
    return res.status(200).send(response);
}); 

router.get('/', async (_req, res) => {
    const patients = await service.getPatient();
    return res.status(200).send(patients);
} );

router.get( '/:id', async ( req, res ) => {
    const { id } = req.params;
    const patient = await service.getById(id);
    return res.status(200).send(patient);
} );


router.put('/:id', validateTypes, async (req, res) => {
    const { id } = req.params;
    const isUpdate = await service.updatePatient(id, req.body);
    if (isUpdate) {
        return res.status(200).json({ message: `Registro ${id} atualizado com sucesso!` });
    }
    res.status(404).json({ message: `Erro ao remover o registro ${id}` });
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const isRemoved = await service.removePatient(id);
    if (isRemoved) {
        return res.status(200).json({ message: `Registro ${id} removido com sucesso!` });
    }
    res.status(404).json({ message: `Erro ao remover o registro ${id}` });
});

module.exports = router
const express = require( 'express' );
const router = express.Router();
const service = require('../services/patientService');

router.post('/', async (req, res) => {
    const response = await service.createPatient(req.body);
    return res.status(201).send(response);
}); 

router.get('/', async (_req, res) => {
    const patient = await service.getPatient();
    return res.status(201).send(patient);
} );

router.get( '/:id', async ( req, res ) => {
    const { id } = req.params;
    const patient = await service.getById(id);
    return res.status(201).send(patient);
} );


router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const isUpdate = await service.updatePatient(id, req.body);
    if (isUpdate) {
        return res.status(201).json({ message: `Registro ${id} atualizado com sucesso!` });
    }
    res.status(404).json({ message: `Erro ao remover o registro ${id}` });
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const isRemoved = await service.removePatient(id);
    if (isRemoved) {
        return res.status(201).json({ message: `Registro ${id} removido com sucesso!` });
    }
    res.status(404).json({ message: `Erro ao remover o registro ${id}` });
});

module.exports = router
const { patientRegister } = require('../../database/models'); 

const createPatient = ({
    name,
    birthdate,
    email,
    address
}) => {
    return patientRegister.create({
        name,
        birthdate,
        email,
        address
    });
};

const getPatient = () => {
    return patientRegister.findAll();
};

const updatePatient = async (id, {
    name,
    birthdate,
    email,
    address
}) => {
    const [qtdUpdated] = await patientRegister.update({
        name,
        birthdate,
        email,
        address
    },
        { where: { id } }
    );
    return qtdUpdated > 0;
};

const removePatient = async (id) => {
    const qtdRemoved = await patientRegister.destroy({
        where: { id }
    })
    return qtdRemoved > 0;
};

module.exports = {
    createPatient,
    getPatient,
    updatePatient,
    removePatient
}
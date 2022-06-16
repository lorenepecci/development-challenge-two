const { PatientRegister } = require( '../../database/models' ); 

const createPatient = ({
    name,
    birthdate,
    email,
    address
}) => {
    return PatientRegister.create({
        name,
        birthdate,
        email,
        address
    });
};

const getPatient = () => {
    return PatientRegister.findAll();
};

const updatePatient = async (id, {
    name,
    birthdate,
    email,
    address
}) => {
    const [qtdUpdated] = await PatientRegister.update({
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
    const qtdRemoved = await PatientRegister.destroy({
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
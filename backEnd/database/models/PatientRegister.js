const PatientRegistersSchema = ( sequelize, dataTypes ) => {
  const PatientRegisters = sequelize.define( "PatientRegister", {
    id:{ type: dataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
    name: dataTypes.STRING(255),
    birthdate: dataTypes.DATEONLY,
    email: dataTypes.STRING(255),
    address: dataTypes.STRING(255),
  }, {
    timestamps: false,
  } );

  return PatientRegisters;
}

module.exports = PatientRegistersSchema;
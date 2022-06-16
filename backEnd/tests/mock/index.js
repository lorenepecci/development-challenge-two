const patientsData = require( './data.json' );

const mockCreate = (Instance, data) => {
  if (!data) {
    return;
  };
  Instance.push(data);
  return data;
};

const mockUpdate = ( Instance, data, where) => {
  if (!data || !where) {
    return;
  };
 
  
  const map = Instance.map( ( obj ) => (
    obj.id == where.id ? data : obj
  ))
  Instance = map;
  return { message: `Registro ${id} atualizado com sucesso!` };
};


const mockPatientRegister = {
  create: async (data) => mockCreate( patientsData, data),
  findAll: async () => patientsData,
  update: async (data, {where}) => mockUpdate(patientsData, data, where)
};

module.exports = {
  mockPatientRegister
};
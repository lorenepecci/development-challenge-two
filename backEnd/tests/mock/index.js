const patientsData = require( './data.json' );

const mockCreate = (Instance, data) => {
  if (!data) {
    return;
  };
  Instance.push(data);
  return data;
};

const mockFindOne = (Instance, where) => {
  const whereFields = Object.keys(where);

  const result = Instance.filter(item => {
    const onlyMatch = whereFields.map( key => item[key] === where[key]);
    return onlyMatch.filter(v=>v).length === whereFields.length;
  });

  return result[0];
}

const mockPatientRegister = {
  create: async (data) => mockCreate( patientsData, data),
  findAll: async () =>  patientsData,
  findOne: async ({ where }) => mockFindOne( patientsData, where),
};

module.exports = {
  mockPatientRegister
};
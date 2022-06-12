'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('PatientRegisters', [
      {
        name: 'Lorene ',
        birthdate: '1997-11-21',
        email: 'lorenepecci@gmail.com',
        address: "rua antonio vieira,233, Nova Russia",
      },
      {
        name: 'Luiza ',
        birthdate: '1992-04-02',
        email: 'luizaaa@gmail.com',
        address: "rua carvalho vieira,255, Nova Esperança",
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PatientRegisters', null, {});
  }
};

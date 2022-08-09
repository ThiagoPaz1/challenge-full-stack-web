'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn('students', 'ru', {
      type: Sequelize.INTEGER,
      defaultValue: 10000,
      allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.changeColumn('students', 'ru', {
      type: Sequelize.STRING(5),
      allowNull: false
    });
  }
};

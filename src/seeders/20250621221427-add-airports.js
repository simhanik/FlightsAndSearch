'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports',[
    // {
    //   name:'Kempegowda International Airport',
    //   cityId:2,
    //   createdAt:new Date(),
    //   updatedAt:new Date()

    // },
    // {
    //   name:'Mysuru Airport',
    //   cityId:2,
    //   createdAt:new Date(),
    //   updatedAt:new Date()

    // },
    // {
    //   name:'Chhatrapati Shivaji Maharaj International Airport',
    //   cityId:1,
    //   createdAt:new Date(),
    //   updatedAt:new Date()

    // },
     {
      name:'Indira Gandhi International Airport',
      cityId:12,
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      name:'Devi Ahilya Bai Holkar Airport',
      cityId:14,
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      name:'Chandigarh Inetrnational Airport',
      cityId:17,
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      name:'Swami Vivekanand Airport',
      cityId:13,
      createdAt:new Date(),
      updatedAt:new Date()

    }
  ],{})

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

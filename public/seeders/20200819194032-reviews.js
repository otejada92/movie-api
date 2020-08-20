module.exports.up = (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Reviews', [
    {
      movie_id: 1,
      comment: 'A good movie',
      rate: 5.5,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
}
module.exports.down = (queryInterface, Sequelize) => queryInterface.bulkDelete('Reviews', null, {});
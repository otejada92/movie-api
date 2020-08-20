module.exports.up = (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Movies', [
    {
      title: 'Movie title 1',
      synopsis: 'A bad guy synopsis',
      director: 'Yahn Calep',
      writer: 'Jin Fhillip',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Movie title 2',
      synopsis: 'A good guy synopsis',
      director: 'Tyson Clark',
      writer: 'Peter Derk',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Movie title 3',
      synopsis: 'A good/bad guy synopsis',
      director: 'Mike Sunny',
      writer: 'Will Pomp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Movie title 4',
      synopsis: 'A good/bad guy synopsis',
      director: 'Mike Sunny',
      writer: 'Will Pomp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Movie title 5',
      synopsis: 'A good/bad guy synopsis',
      director: 'Mike Sunny',
      writer: 'Will Pomp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Movie title 6',
      synopsis: 'A good/bad guy synopsis',
      director: 'Mike Sunny',
      writer: 'Will Pomp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Movie title 7',
      synopsis: 'A good/bad guy synopsis',
      director: 'Mike Sunny',
      writer: 'Will Pomp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Movie title 8',
      synopsis: 'A good/bad guy synopsis',
      director: 'Mike Sunny',
      writer: 'Will Pomp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Movie title 9',
      synopsis: 'A good/bad guy synopsis',
      director: 'Mike Sunny',
      writer: 'Will Pomp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Movie title 10',
      synopsis: 'A good/bad guy synopsis',
      director: 'Mike Sunny',
      writer: 'Will Pomp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Movie title 11',
      synopsis: 'A good/bad guy synopsis',
      director: 'Mike Sunny',
      writer: 'Will Pomp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Movie title 12',
      synopsis: 'A good/bad guy synopsis',
      director: 'Mike Sunny',
      writer: 'Will Pomp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Movie title 13',
      synopsis: 'A good/bad guy synopsis',
      director: 'Mike Sunny',
      writer: 'Will Pomp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Movie title 14',
      synopsis: 'A good/bad guy synopsis',
      director: 'Mike Sunny',
      writer: 'Will Pomp',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
}
module.exports.down = (queryInterface, Sequelize) => queryInterface.bulkDelete('Movies', null, {});




module.exports.up = (queryInterface, Sequelize) => {
  return queryInterface.createTable('Movies', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter your title'
        },
        len: {
          arg : [1, 30],
          msg : 'Please enter a title within  1 to 30 characters.'
        } 
      }
    },
    synopsis: {
      type: Sequelize.STRING
    },
    director: {
      type: Sequelize.STRING
    },
    writer: {
      type: Sequelize.STRING
    },
    visible: {
      type: Sequelize.BOOLEAN,
      defaultValue: 1
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  });
}
module.exports.down = (queryInterface, Sequelize) =>  queryInterface.dropTable('Movies');
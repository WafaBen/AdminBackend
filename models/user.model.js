module.exports = (sequelize, Sequelize) => {
  const adminTC = sequelize.define("adminTC", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    nom: {
      type: Sequelize.STRING(30)
    },
    prenom: {
      type: Sequelize.STRING
    },
    adresse: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    motPasse: {
      type: Sequelize.STRING
    }
  },
  {
    freezeTableName: false,
    tableName: 'adminsTC'
  }
  );
  return adminTC;
};
/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('User', {
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    uid: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    first_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    channel: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    region: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    district: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    detail_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gender: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    avatar: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    updated_time: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'User'
  });

  Model.associate = function() {

  }

  return Model;
};

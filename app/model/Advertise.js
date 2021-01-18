/* indent size: 2 */

module.exports = app => {
    const DataTypes = app.Sequelize;

    const Model = app.model.define('Advertise', {
        ad_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        type: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        dog_breed: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        price: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        date: {
            type: DataTypes.TIME,
            allowNull: true
        },
        start_time: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        duration: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        region: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        district: {
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
        tableName: 'Advertise'
    });

    Model.associate = function() {

    }

    return Model;
};
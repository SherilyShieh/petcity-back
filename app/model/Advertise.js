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
            allowNull: false
        },
        price: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date: {
            type: DataTypes.TIME,
            allowNull: false
        },
        start_time: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        duration: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        region: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        district: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        created_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        updated_time: {
            type: DataTypes.TIME,
            allowNull: false
        }
    }, {
        timestamps: false,
        underscored: false,
        freezeTableName: true,
        tableName: 'Advertise'
    });

    Model.associate = function() {

    }

    return Model;
};
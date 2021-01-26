/* indent size: 2 */

module.exports = app => {
    const DataTypes = app.Sequelize;

    const Model = app.model.define('Test', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        info: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: 'Test',
        timestamps: false,
        paranoid: true,
        freezeTableName: true,
        underscored: false
    });

    Model.associate = function() {

    }

    return Model;
};
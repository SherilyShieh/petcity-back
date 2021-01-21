/* indent size: 2 */

module.exports = app => {
    const DataTypes = app.Sequelize;

    const Model = app.model.define('contacted', {
        contacted_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        ad_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        }
    }, {
        timestamps: false,
        paranoid: true,
        freezeTableName: true,
        underscored: false,
        tableName: 'contacted'
    });

    Model.associate = function() {

    }

    return Model;
};
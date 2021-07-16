const {
    DataTypes
} = require('sequelize')

const model = (sequelize) => sequelize.define(
    'users',
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
        },
        surname: {
            type: DataTypes.STRING(50),
        },
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: 'users'
    }
)

module.exports = model
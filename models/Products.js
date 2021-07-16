const {
    DataTypes
} = require('sequelize');

const model = (sequelize) => sequelize.define(
    'products',
    {
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        price: {
            type: DataTypes.FLOAT,
        },
        net_price: {
            type: DataTypes.FLOAT,
        },
        tax: {
            type: DataTypes.ENUM('4', '10', '21'),
        }
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: 'products'
    }
)

module.exports = model
const sequelize = require('../core/db')

const MODELS = {
    Products: require('./Products')(sequelize),
    Users: require('./Users')(sequelize),
}

MODELS.Users.hasMany(MODELS.Products, { foreignKey: "user_id", as: "products" })
MODELS.Products.belongsTo(MODELS.Users, { foreignKey: "user_id", targetKey: "user_id" })

module.exports = {
    ...MODELS
}
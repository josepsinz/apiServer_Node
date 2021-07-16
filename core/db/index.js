const config = require('../config')

const {
    Sequelize
} = require('sequelize');

const sequelize = new Sequelize(config.POSTGRES_DB, config.POSTGRES_USER, config.POSTGRES_PASSWORD, {
    host: config.POSTGRES_HOST,
    port: config.POSTGRES_PORT,
    dialect: 'postgres',
    define: {
        timestamps: false
    },
    logging: false
});

module.exports =
    sequelize
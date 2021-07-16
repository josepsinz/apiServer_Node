const config = {
    PORT: 4000,
    POSTGRES_PASSWORD: process.env.PASSWORD || 'pgadmin',
    POSTGRES_USER: process.env.USUARIO || 'postgres',
    POSTGRES_DB: process.env.DB || 'productsdb',
    POSTGRES_HOST: process.env.HOST || 'localhost',
    POSTGRES_PORT: process.env.PORT || 5432
}

module.exports = config
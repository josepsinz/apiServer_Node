const express = require('express')
const config = require('./core/config')
const app = express()
const sequelize = require('./core/db')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//module.exports = app


async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
    app.use(require('./routes'))
    app.listen(config.PORT, async () => {
        console.log('Server listening on port ' + config.PORT)
    })
    
}

main()




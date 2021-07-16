const request = require("supertest")
const sequelize = require("./core/db")
const config = require("./core/config")
const express = require('express')
var assert = require("assert")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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

let product = {
    "product": {
        "name": "Motorbike",
        "description": "",
        "price": 1,
        "tax": "21",
        "user_id": 1
    }
}

describe("BASIC TESTS", () => {
    it("POST (1) /api/add", (done) => {
        //Check the net_price calculated from a new product inserted
        app.use(require('./routes'))
        request(app)
            .post("/api/add")
            .set({ 'Authorization': 'Bearer admintoken' })
            .send(product)
            .expect(function (res) {
                console.log(res.body)
                assert.deepStrictEqual(res.body.net_price, 1.21)
            })
            .end(done)
    })
    it("POST (2) /api/add", (done) => {
        //Insert new product. Check status code
        //SHOULD FAIL because there is no token
        app.use(require('./routes'))
        request(app)
            .post("/api/add")
            .send(product)
            .expect(200, done)
    })
    it("GET (1) /api/getproducts?", (done) => {
        //Check the length of the products array retrived
        //SHOULD FAIL
        let size = 2
        app.use(require('./routes'))
        request(app)
            .get(`/api/getproducts?page=1&size=${size}`)
            .expect(function (res) {
                assert.deepStrictEqual(res.body.products.length, 3)
            })
            .end(done)
    })
    it("GET (2) /api/getproducts?", (done) => {
        //Check status code from response
        let size = 2
        app.use(require('./routes'))
        request(app)
            .get(`/api/getproducts?page=1&size=${size}`)
            .expect(200, done)
    })
})






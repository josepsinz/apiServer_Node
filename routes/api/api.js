const { CtrlProducts } = require('../../controllers')

exports.getAll = async (req, res) => {
    let result = {}
    const page = +req.query.page
    const size = +req.query.size
    const offset = (page - 1) * size
    try {
        let count = await CtrlProducts.countProducts(req.params.name)
        let total = count % size === 0 ? count / size : Math.ceil(count / size)
        result.pages = total
        if (page > 1 && page <= total) {
            result.previous = {
                page: page - 1,
                size
            }
        }
        if (page < total) {
            result.next = {
                page: page + 1,
                size: page + 1 === total ? count - (size * (total - 1)) : size
            }
        }
        result.products = await CtrlProducts.findAll(offset, size, req.params.name)
        res.status(200).json(result)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

exports.addOne = async (req, res) => {
    let product
    try {
        if (req.headers.authorization === "Bearer admintoken") {
            product = await CtrlProducts.addOne(req.body.product)
            res.status(200).json(product)
        } else {
            res.status(401).json("Unauthorized")
        }
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}
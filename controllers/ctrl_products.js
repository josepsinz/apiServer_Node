const { Products } = require('../models')

exports.findAll = (offset, limit, name) => {
    if (!name) {
        return Products.findAll({
            limit,
            offset,
        })
    } else {
        return Products.findAll({
            limit,
            offset,
            where: { name }
        })
    }
}

exports.countProducts = (name) => {
    if (!name) {
        return Products.count()
    } else {
        return Products.count({ where: { name } })
    }
}

exports.addOne = (product) => {
    let newProduct = { ...product, net_price: (product.price * (1 + +product.tax / 100)).toFixed(3) }
    return Products.create(newProduct)
}
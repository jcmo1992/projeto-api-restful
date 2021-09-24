const ProductsModel = require('../models/products');

async function get(req, res) {
    const { id } = req.params;

    const obj = id ? { _id : id } : null;

    const products = await ProductsModel.find(obj);

   res.send(products); 
}

async function post(req, res) {
    const {
        name,
        brand,
        price
    } = req.body;

    console.log(req.body);

    const product = new ProductsModel({
        name,
        brand,
        price
    });

    product.save();

    res.send(
        {message: "Sucesso"}
    );
}

async function put(req, res) {
    const { id } = req.params;

    const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true});
    res.send({
        messsage: 'Sucesso',
        product
    });

    // const product = await ProductsModel.findById({ _id: id });

    // await product.updateOne(req.body);

    // res.send({
    //     messsage: 'Sucesso',
    //     product
    // });
}


module.exports = {
    get,
    post, 
    put
}
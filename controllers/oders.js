const asyncWrapper = require('../middleware/async')
const Order=require('../models/orders-model');

const getAllOrders = asyncWrapper(async(req,res) =>{
    // res.send('ok')
    const order = await Order.find({});
    res.status(200).json({ order });
});

const createOrder = asyncWrapper(async(req,res) =>{
    const order = await Order.create(req.body);
    res.status(201).json({order});
})

module.exports = {
    getAllOrders,
    createOrder,
}
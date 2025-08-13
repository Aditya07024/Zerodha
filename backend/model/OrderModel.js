const { model } = require("mongoose");
const { OrderSchema } = require("../schemas/OrderSchema"); // Fix: Added object destructuring

const OrderModel = model("Order", OrderSchema);

module.exports = OrderModel;

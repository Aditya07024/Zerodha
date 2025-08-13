const { model } = require("mongoose");
const { positionSchema } = require("../schemas/PositionSchema"); // Fixed path and correct export name

const PositionModel = model("Position", positionSchema);

module.exports = PositionModel;

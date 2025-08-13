const { model } = require("mongoose");
const { userSchema } = require("../schemas/UserSchema"); // Fixed path and correct export name

const UserModel = model("User", userSchema);

module.exports = UserModel;;

const userModel = require("../models/user.model");

const uploadProductPermission = async(userId) => {
    const user = await userModel.findById(userId)

    if(user.role === 'admin'){
        return true
    }
    return false
}


module.exports = uploadProductPermission
const { default: UserModal } = require("../models/user.model");

const userController = {};

userController.getUsers = async () => {
    try {
        const getdata = await UserModal.find();
        return { success: true, data: getdata, message: "GetData succesfully" }
    } catch (error) {
        return { success: false, message: error.message }
    }
}

export default userController;
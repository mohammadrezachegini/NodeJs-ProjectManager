const { UserModel } = require("../../models/user");
const { HashString } = require("../../modules/function");

class AuthControllers{

    async register(req,res,next){

        try {
            const {username,password,email,mobile} = req.body;
            const hash_password = HashString(password);
            const user = await UserModel.create({
                username,email, password: hash_password, mobile
            })
            return res.json(user)
        } catch (error) {
            next(error)
        }
        // return res.json(req.body);
    }

    login(){}

    resetPassword(){}
}

module.exports = {
    authController: new AuthControllers()
}
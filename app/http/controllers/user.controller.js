const { UserModel } = require("../../models/user");

class UserController{



    getProfile(req,res,next){
        try {
            const user = req.user
            return res.status(200).json({
                status: 200,
                success: true,
                user
            })
        } catch (error) {
            next(error);
        }
    }

    async editProfile(req,res,next){

        try {
            let data = {...req.body};
            const userID = req.user._id
            let fields = ["first_name","lst_name", "skills"]
            let badValues = ["", " ", null, undefined, 0, -1, NaN, [], {}]
            Object.entries(data).forEach(([key, value]) => {
                if(!fields.includes(key)) delete data[key]
                if(badValues.includes(value)) delete data[key]
            })
            console.log(data);
            const result = await UserModel.updateOne({_id: userID}, {$set: data})
            if (result.modifiedCount > 0){
                res.status(200).json({
                    status:200,
                    success: true,
                    message: "updated profile successfully"
                })
            }
            throw {status: 400, message: "FAILED update profile"}
        } catch (error) {
            next(error)
        }

    }

    addSkills(){}

    editSkills(){}

    acceptInvitation(){}

    rejectInvitation(){}
}

module.exports = {
    UserController : new UserController()
}
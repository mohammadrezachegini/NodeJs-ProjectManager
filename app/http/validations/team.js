const { body } = require("express-validator")
const { TeamModel } = require("../../models/team")


function createTeamnValidator(){
    return [
        body("name").isLength({min:3}).withMessage("Team should be more than 5 characters"),
        body("description").notEmpty().withMessage("The description shouldn't be empty"),
        body("username").custom(async (username) => {
            const usernameRegep = /^[a-z]+[a-z0-9\_\.]{3,}$/gim
            if(usernameRegep.test(username)){
                const team = await TeamModel.findOne({username});
                if(team) throw "the username for team is already existed"
                return true
            }
            throw "Enter your username correctly"
        })

    ]
}

module.exports = {
    createTeamnValidator
}
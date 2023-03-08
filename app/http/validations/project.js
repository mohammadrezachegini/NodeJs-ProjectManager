const { body } = require("express-validator");

function createProjectValidator(){
    return [
        body("title").notEmpty().withMessage("Project title should't be empty"),
        body("text").notEmpty().isLength({min: 20}).withMessage("Project description should't be empty and it has to be at least 20 characters")
    ]
}

module.exports = {
    createProjectValidator 
}
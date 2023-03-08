const router = require("express").Router();
const {ProjectController} = require("../http//controllers//project.controller");
const { checkLogin } = require("../http/middlewares/autoLogin");
const { expressValidatorMapper } = require("../http/middlewares/CheckErrors");
const { createProjectValidator } = require("../http/validations/project");

router.post("/create", checkLogin ,createProjectValidator(), expressValidatorMapper, ProjectController.createProject)


module.exports = {
    projectRoutes: router
}
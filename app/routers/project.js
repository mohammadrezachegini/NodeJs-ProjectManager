const router = require("express").Router();
const {ProjectController} = require("../http/controllers/project.controller");
const { checkLogin } = require("../http/middlewares/autoLogin");
const { expressValidatorMapper } = require("../http/middlewares/CheckErrors");
const { createProjectValidator } = require("../http/validations/project");
const { uploadFile } = require("../modules/express-fileUpload");
const fileupload = require("express-fileupload");

router.post("/create", fileupload(), checkLogin, uploadFile  ,createProjectValidator(), expressValidatorMapper , ProjectController.createProject)


module.exports = {
    projectRoutes: router
}
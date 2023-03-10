const { UserController } = require("../http/controllers/user.controller");
const { checkLogin } = require("../http/middlewares/autoLogin");
const { expressValidatorMapper } = require("../http/middlewares/CheckErrors");
const { ImageValidator } = require("../http/validations/user");
const { upload_multer } = require("../modules/multer");

const router = require("express").Router();

router.get("/profile", checkLogin, UserController.getProfile);
router.post("/profile", checkLogin, UserController.editProfile);
router.post("/profile-img",  upload_multer.single("image"), ImageValidator() , expressValidatorMapper ,checkLogin, UserController.uploadProfileImage);
router.get("/requests", checkLogin, UserController.getAllRequests)
module.exports = {
    userRoutes: router
}
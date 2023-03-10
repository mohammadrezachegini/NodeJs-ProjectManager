const router = require("express").Router();
const {TeamController} = require("../http/controllers/team.controller")
const {checkLogin} = require("../http/middlewares/autoLogin")
const {createTeamnValidator} = require("../http/validations/team")
const {expressValidatorMapper} = require("../http/middlewares/CheckErrors")

router.post("/create", checkLogin, createTeamnValidator(), expressValidatorMapper, TeamController.createTeam)
router.get("/list", checkLogin, TeamController.getListOfTeam)

// router.get()

module.exports = {
    teamRoutes: router
}
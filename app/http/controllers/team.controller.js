const res = require("express/lib/response");
const { TeamModel } = require("../../models/team");

class TeamController{


    async createTeam(req,res,next){
        try {
            const {name,username,description} = req.body;
            const owner = req.user._id;
            const team = await TeamModel.create({
                name,
                description,
                username,
                owner
            })
            if(!team) throw {status:500, message: "There is a error for create a team"}
            return res.status(201).json({
                status:201,
                success: true,
                message: "created team successfully"
            })
        } catch (error) {
            next(error)
        }
    }


    async getListOfTeam(req,res,next){
        try {
            const teams = await TeamModel.find({})
            return res.status(200).json({
                status: 200,
                success: true,
                teams: teams
            })
        } catch (error) {
            next(error)
        }
    }


    async getTeamById(req,res,next){
        try {
            const teamID = req.params.id
            const team = await TeamModel.findById(teamID)
            if(!team) throw {status : 404, message: "Team is not found"}
            return res.status(200).json({
                status:200,
                success: true,
                team: team
            })
        } catch (error) {
            next(error)
        }
    }

    inviteUserToTeam(){}

    removeTeamById(){}

    updateTeam(){}

    removeUserFromTeam(){} 

}


module.exports = {

    TeamController: new TeamController()
}
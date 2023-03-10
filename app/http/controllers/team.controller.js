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

    async getMyTeam(req,res,next){
        try {
            const userID = req.user._id;
            const teams = await TeamModel.find({
                $or: [
                    {owner: userID},
                    {users: userID}
                ]
            });
            return res.status(200).json({
                status: 200,
                success: true,
                teams: teams
            })         
        } catch (error) {
            next(error)
        }
    }

    inviteUserToTeam(){}

    async removeTeamById(req,res,next){
        try {
            const teamID = req.params.id;
            const team = await TeamModel.findById(teamID);
            if(!team) throw {status: 404, message: "Team is nout found" }
            const result = await TeamModel.deleteOne({_id: teamID});
            if(result.deletedCount == 0) throw {status: 500, message: "Delete team failed"}
            return res.status(200).json({
                status: 200,
                success: true,
                message: "deleted team successfully"
            })

        } catch (error) {
            next(error)
        }
    }

    updateTeam(){}

    removeUserFromTeam(){} 

}


module.exports = {

    TeamController: new TeamController()
}
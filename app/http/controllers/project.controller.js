const {ProjectModel} = require("../../models/project")
class ProjectController{

    async createProject(req,res,next){
        try {
            console.log(req.body)
            const {title, text, image, tags } = req.body;
            // console.log(tags);
            const owner = req.user._id
            const result = await ProjectModel.create({title, text, owner, image, tags})
            if(!result) throw {
                status: 400,
                message: "There is a problem to add a project"
            }
            return res.status(201).json({
                status: 201,
                success: true,
                message: "Added Project successfully"
            })
        } catch (error) {
            next(error)
        }
    }

    async getAllProjects(req,res,next){
        try {
            const owner = req.user._id
            const projects = await ProjectModel.find({owner})
            return res.status(200).json({
                status: 200,
                success: true,
                projects
            })
        } catch (error) {
            next(error)
        }
    }

    getProjectById(){}

    getAllProjectOfTeam(){}

    getProjectofUser(){}

    updateProject(){}

    removeProject(){}


}


module.exports = {
    ProjectController: new ProjectController()
}
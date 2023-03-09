const fileUpload = require("express-fileupload")
const path = require("path")
const {createUploadPath} = require("./function")

const uploadFile = async (req,res,next) => {
    try {
        fileUpload();
        if( req.file || Object.keys(req.files).length == 0) throw {status : 400, message: "pleaswe send the profile picture for project"}
    
        let image = req.files.image
        const image_path = path.join(createUploadPath(), (Date.now() + path.extname(image.name)))
        console.log("req body image " + req.body.image);
        req.files.image = image_path
        console.log(image_path);
        let uploadPath = path.join(__dirname, "..",".." , image_path)
        console.log(uploadPath);
        image.mv(uploadPath, (err) => {
            if(err) throw{status: 500, message: "Upload file is incompleted"}
            next()
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    uploadFile
}
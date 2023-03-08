const path  = require("path")
const multer = require("multer")
const { createUploadPath } = require("./function")



const storage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null,createUploadPath())
    },
    filename: (req,res,cb) => {
        const type = path.extname(req?.file?.originalname || "")
        cb(null, Date.now() + type)
    }
})

const upload_multer = multer({storage: storage})

module.exports = {
    upload_multer
}
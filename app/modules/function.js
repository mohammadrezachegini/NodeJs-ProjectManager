const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
function HashString(str){

    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(str,salt)

}

function tokenGenerator(payload){
    const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "365 days"});
    return token
}

function verifyJwtToken(token){
    const result = jwt.verify(token, process.env.SECRET_KEY);
    if(!result?.username) throw {status: 401, message:"Please Login in to your account"}
    return result
}

module.exports = {
    HashString,
    tokenGenerator,
    verifyJwtToken
}
const Appliction = require("./app/server")
const DB_URL = "mongodb://localhost:27017/ProjectManagerDB"
new Appliction(3000,DB_URL)
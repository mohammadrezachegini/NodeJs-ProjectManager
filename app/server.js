

module.exports = class Appliction{
    #express = require("express")
    #app = this.#express()

    constructor(PORT, DB_URL){
        this.configDatabase(DB_URL)
        this.configApplication(PORT)
        this.createServer
        this.createRoutes()
        this.errorHandler

    }

    configApplication(){
        const path = require("path")

        this.#app.use(this.#express.json())
        this.#app.use(this.#express.urlencoded({extended: true}))
        this.#app.use(this.#express.static(path.join(__dirname, "..", "public")))
    }


    createServer(PORT){
        const http = require("http")
        const server = http.createServer(this.#app);
        server.listen(`Server is running on http://localhost:${PORT}`)
    }

    configDatabase(DB_URL){
        const mongoose = require("mongoose")
        mongoose.connect(DB_URL, (err) => {
            if (err) throw err
            return console.log("Connect to DB is Successful")
        })
    }

    errorHandler(){
        this.#app.use((req,res,next) => {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "Page is Not Found"
            })
        });

        this.#app.use((error,req,res,next) => {
            const status = error?.status || 500;
            const message = error?.message || "Internal Server Error"
            return res.status(status).json({
                status,
                success: false,
                message
            })
        })
    }
    
    createRoutes(){
        this.#app.get("/", (req,res,next) => {
            return res.json({
                message: "This is a new Express Application"
            })
        })
    }


}

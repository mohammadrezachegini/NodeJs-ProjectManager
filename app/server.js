

module.exports = class Application{
    #express = require("express")
    #app = this.#express()

    constructor(PORT, DB_URL){
        this.configDatabase(DB_URL)
        this.configApplication()
        this.createServer(PORT)
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
        server.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    }

    configDatabase(DB_URL){
        const mongoose = require("mongoose")

        mongoose.set("strictQuery", true)
        mongoose.connect(DB_URL).then(()=>{
            console.log("Connect to DB is Successful");
        }).catch((e)=>{
            console.log("No connection " + e);
        });
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
                status:status,
                success: false,
                message:message
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

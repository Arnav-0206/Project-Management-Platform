// in here is all the express code

import express from "express";
import cors from "cors"

const app = express();

// basic configurations
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true ,limit: "16kb"}))
app.use(express.static("public"))


// cors configurations

app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhoat:5137",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))


app.get("/", (req, res) => {
    res.send("welcome to the home page")
})

app.get("/discord", (req, res) => {
    res.send("this is a discord server")
})

export default app;
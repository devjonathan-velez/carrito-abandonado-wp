import express from "express";
import route from "./routes/routes";
const app = express()

app.use(express.json())

app.use("/api",route)


app.listen(3000,()=>{
    console.log("Servidor escuchando en 3000")
})
import express from "express";
import route from "./routes/routes";
import serverlessExpress from "@vendia/serverless-express";
const app = express()

app.use(express.json())

app.use("/api",route)


export const handler = serverlessExpress({ app });

/* app.listen(3000,()=>{
    console.log("Servidor escuchando en 3000")
}) */
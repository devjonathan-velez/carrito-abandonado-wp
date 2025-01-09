import { Router,Response,Request } from "express";
import { handleWebhook, msnPrueba } from "../controllers/carritoControllers";


const route = Router()

route.post("/carrito/webhook",handleWebhook);
route.get("/",msnPrueba)
export default route;
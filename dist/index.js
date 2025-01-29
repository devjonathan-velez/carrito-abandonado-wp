"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const serverless_express_1 = __importDefault(require("@vendia/serverless-express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", routes_1.default);
exports.handler = (0, serverless_express_1.default)({ app });
/* app.listen(3000,()=>{
    console.log("Servidor escuchando en 3000")
}) */ 

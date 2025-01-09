"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carritoControllers_1 = require("../controllers/carritoControllers");
const route = (0, express_1.Router)();
route.post("/carrito/webhook", carritoControllers_1.handleWebhook);
route.get("/", carritoControllers_1.msnPrueba);
exports.default = route;

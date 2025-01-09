"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msnPrueba = exports.handleWebhook = void 0;
const handleWebhook = (req, res) => {
    console.log('Webhook recibido:', req.body);
    res.status(200).json({ message: 'Webhook recibido correctamente' });
};
exports.handleWebhook = handleWebhook;
const msnPrueba = (req, res) => {
    res.send("Recibido");
};
exports.msnPrueba = msnPrueba;

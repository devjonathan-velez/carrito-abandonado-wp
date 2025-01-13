"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.msnPrueba = exports.handleWebhook = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("../utils");
const handleWebhook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { email, homePhone } = req.body;
    if (email === "jvalencias@cuerosvelez.com" && email === "soranny88@gmail.com") {
        console.log(req.body);
        if (homePhone === '') {
            res.status(200).json({
                message: 'Carrito sin telefono',
            });
            return;
        }
        console.log((0, utils_1.removePlusSign)(homePhone));
        try {
            const response = yield axios_1.default.post('https://api.botmaker.com/v2.0/chats-actions/trigger-intent', {
                chat: {
                    channelId: "cuerosvelez-whatsapp-573104486083",
                    contactId: (0, utils_1.removePlusSign)(homePhone)
                },
                intentIdOrName: "carrito_nuevo",
                variables: {
                    nombre: "Jonathan"
                }
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'access-token': 'eyJhbGciOiJIUzUxMiJ9.eyJidXNpbmVzc0lkIjoiY3Vlcm9zdmVsZXoiLCJuYW1lIjoiU2FudGlhZ28gQW5kcmV1IiwiYXBpIjp0cnVlLCJpZCI6IlY2aUVCR0Y2TmljNXBpQlNERmQzSEQ5VGg0VjIiLCJleHAiOjE4ODg1ODUzNTMsImp0aSI6IlY2aUVCR0Y2TmljNXBpQlNERmQzSEQ5VGg0VjIifQ.dVpXmY-7wysGm2yGgj9GHCIZCCQ6JYSLv5nLQX2_Gmb0meTZ2uEkMyDRr7FfQi2vf8cjhd5K8Z8jmoSXBgo0ZQ'
                }
            });
            console.log('Respuesta de Botmaker:', response.data);
            res.status(200).json({
                message: 'Webhook recibido y mensaje enviado correctamente',
                botmakerResponse: response.data
            });
        }
        catch (error) {
            console.error('Error al enviar la petición a Botmaker:', ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
            res.status(500).json({
                message: 'Error al procesar el webhook',
                error: ((_b = error.response) === null || _b === void 0 ? void 0 : _b.data) || error.message
            });
        }
    }
    else {
        res.status(400).json({ message: 'Email no autorizado' });
    }
});
exports.handleWebhook = handleWebhook;
const msnPrueba = (req, res) => {
    res.send("Recibido");
};
exports.msnPrueba = msnPrueba;

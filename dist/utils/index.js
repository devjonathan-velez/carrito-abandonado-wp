"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePlusSign = removePlusSign;
function removePlusSign(phoneNumber) {
    return phoneNumber.startsWith('+') ? phoneNumber.slice(1) : phoneNumber;
}

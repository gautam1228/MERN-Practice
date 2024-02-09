"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = void 0;
const MAX_LEN = 5;
function generateId() {
    let generatedId = "";
    const superSet = '1234567890abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i <= MAX_LEN; i++) {
        generatedId += superSet[Math.floor(Math.random() * superSet.length)];
    }
    return generatedId;
}
exports.generateId = generateId;

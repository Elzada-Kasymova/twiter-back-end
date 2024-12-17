"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTwitDto = void 0;
const zod_1 = require("zod");
exports.createTwitDto = zod_1.z.object({
    text: zod_1.z.string().min(1, 'Text is Required ').max(280),
});

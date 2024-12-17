"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const twit_service_1 = require("./twit.service");
(0, globals_1.describe)("TwitService", () => {
    (0, globals_1.it)("should create a new twit", async () => {
        const twitService = new twit_service_1.TwitService();
        const twit = await twitService.create({
            text: "Hello, world",
        });
        (0, globals_1.expect)(twit).toHaveProperty("id");
        (0, globals_1.expect)(twit.text).toEqual("Hello, world");
    });
});

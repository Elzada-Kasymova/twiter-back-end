"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitRouter = void 0;
const express_1 = require("express");
const twit_service_1 = require("./twit.service");
const auth_middleware_1 = require("../auth.middleware");
const twit_dto_1 = require("./twit.dto");
const router = (0, express_1.Router)();
const twitService = new twit_service_1.TwitService();
router.get('/', async (req, res) => {
    try {
        const twits = await twitService.getAll(); // Метод для получения всех твитов
        res.status(200).json(twits);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
router.post('/', auth_middleware_1.authMiddleware, async (req, res) => {
    const validation = twit_dto_1.createTwitDto.safeParse(req.body);
    if (!validation.success) {
        res.status(400).json({ message: validation });
        return; // Возвращаем из функции, не продолжая выполнение
    }
    try {
        const twit = await twitService.create(req.body);
        res.status(201).json(twit);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.twitRouter = router;

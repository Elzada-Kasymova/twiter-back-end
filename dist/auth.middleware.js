"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).send('Unauthorized'); // отправляем ошибку
        return; // завершаем выполнение, не возвращая Response
    }
    next(); // передаем управление следующему middleware
};
exports.authMiddleware = authMiddleware;

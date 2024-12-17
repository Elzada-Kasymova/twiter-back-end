import { Request, Response, NextFunction } from "express";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).send('Unauthorized'); // отправляем ошибку
        return; // завершаем выполнение, не возвращая Response
    }

    next(); // передаем управление следующему middleware
};

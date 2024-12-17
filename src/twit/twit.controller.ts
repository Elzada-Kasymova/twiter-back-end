import { Router } from "express";
import { TwitService } from "./twit.service";
import { Request, Response } from "express";
import { authMiddleware } from "../auth.middleware";
import { createTwitDto } from "./twit.dto";

const router = Router();
const twitService = new TwitService();

router.get('/', async (req: Request, res: Response) => {
    try {
        const twits = await twitService.getAll(); // Метод для получения всех твитов
        res.status(200).json(twits);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post('/', authMiddleware, async (req: Request, res: Response): Promise<void> => {
    const validation = createTwitDto.safeParse(req.body);

    if (!validation.success) {
        res.status(400).json({ message: validation});
        return; // Возвращаем из функции, не продолжая выполнение
    }

    try {
        const twit = await twitService.create(req.body);
        res.status(201).json(twit);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

export const twitRouter = router;

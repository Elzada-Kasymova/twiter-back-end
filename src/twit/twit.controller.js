import { Router } from "express";
import { TwitService } from "./twit.service.js";

const router = Router();
const twistService = new TwitService();


router.post('/', (req, res) => {
    if (!req.body?.text?.length) {
        return res.status(400).json({ message: 'text is requred ' })
    }
    const twit = twistService.create(req.body)
    res.status(201).json(twit)
})

export const twitRouter = router
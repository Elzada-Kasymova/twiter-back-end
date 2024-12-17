import { z } from 'zod';
export const createTwitDto = z.object({
    text: z.string().min(1, 'Text is Required ').max(280),
});
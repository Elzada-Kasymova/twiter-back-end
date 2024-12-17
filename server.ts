import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { twitRouter } from './src/twit/twit.controller';
import { PrismaClient } from '@prisma/client';
import { logger } from './src/utils/log';
import helmet from 'helmet';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

async function main() {
    try {
        await prisma.$connect();
        app.use(helmet());
        app.use(express.json());

        // Маршрут для твитов
        app.use('/api/twits', twitRouter);

        // Пример маршрута
        app.get('/profile', (req, res) => {
            res.render('profile', {
                user: {
                    name: 'Max',
                    age: 25,
                },
            });
        });

        // Обработка 404
        app.all('*', (req, res) => {
            res.status(404).json({ message: 'Not Found' });
        });

        // Обработка ошибок
        app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            logger.error(err.stack);
            res.status(500).send('Something broke!');
        });

        // Запуск сервера
        const PORT = process.env.PORT || 4200;
        app.listen(PORT, () => {
            logger.info(`Server is running on port ${PORT}`);
        });
    } catch (e) {
        // Если ошибка при подключении к базе данных, выводим ошибку и отключаемся
        logger.error('e');
        await prisma.$disconnect();
        process.exit(1);
    }
}

// Запуск асинхронной функции main()
main();

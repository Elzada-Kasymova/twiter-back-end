import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { twitRouter } from './src/twit/twit.controller.js';

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url); // Исправлено: опечатка _fileame -> _filename
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

async function main() {
    app.use(express.json());

    app.use('/api/twits', twitRouter);

    // Ошибка в синтаксисе. Исправлено:
    app.get('/profile', (req, res) => {
        res.render('profile', {
            user: {
                name: 'Max',
                age: 25,
            },
        });
    });

    app.all('*', (req, res) => {
        res.status(404).json({ message: 'Not Found' });
    });

    const PORT = process.env.PORT || 4200;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

main();

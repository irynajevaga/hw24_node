import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Middleware для парсинга JSON
app.use(express.json());

// GET маршрут
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

// POST маршрут
app.post('/data', (req: Request, res: Response) => {
    const receivedData = req.body;
    res.json({
        message: 'Data received successfully!',
        data: receivedData,
    });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

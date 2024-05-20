const express = require('express');
const app = express();
const port = 3001;

// Налаштування EJS як шаблонного двигуна
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Особисті дані користувачів
const users = [
    {
        login: 'is-21fiot-22-032',
        surname: 'Бєльчик',
        name: 'Софія',
        course: 'Курс2',
        group: 'Група ІС-21'
    },
    {
        login: 'user2_fiot',
        surname: 'Подоляка',
        name: 'Антоніна',
        course: 'Курс3',
        group: 'Група ІК-08'
    },
];

// Маршрут для обробки запиту
app.get('/personal-info', (req, res) => {
    const { login } = req.query;
    const user = users.find(user => user.login === login);

    if (user) {
        res.render('index', { user });
    } else {
        res.status(404).json({ error: 'Невірний логін' });
    }
});
// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


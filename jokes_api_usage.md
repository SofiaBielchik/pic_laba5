# Сценарій використання API Jokes API

## Опис API

Jokes API - це веб-сервіс, який надає смішні жарти з інтернету на різні теми, такі як попкультура, наука, історія та інші дивовижні теми.

## Потрібні кроки

1. Отримати ключ API: Перейдіть на сайт Jokes API (https://api-ninjas.com/api/jokes) та зареєструйтеся, щоб отримати ключ API.

2. Викликати API методи: Використовуйте ключ API для виклику різних методів API для отримання жартів за різними темами або випадкових жартів.

## Приклади використання

### Отримання випадкового жарту(При цьому запиті буде отриманий випадковий жарт зі списку доступних)
GET /jokes/random HTTP/1.1
Host: api-ninjas.com
Authorization: Bearer {hwvFAC+3oOk1ec/Vr++B6A==aEIlgemnxhUEPQeB}

### Отримання випадкового жарту(При цьому запиті буде отриманий жарт з теми науки)
GET /jokes?topic=science HTTP/1.1
Host: api-ninjas.com
Authorization: Bearer {hwvFAC+3oOk1ec/Vr++B6A==aEIlgemnxhUEPQeB}

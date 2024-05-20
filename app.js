const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/jokes', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/jokes',
        headers: {
            'X-Api-Key': 'hwvFAC+3oOk1ec/Vr++B6A==aEIlgemnxhUEPQeB'  
        }
    };
    try {
        const response = await axios(options);
        const jokes = response.data.map(joke => ({
            joke: joke.joke
        }));
        res.render('index', { jokes: jokes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

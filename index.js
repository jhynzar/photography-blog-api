const express = require('express');
const path = require('path');

const app = express();

const Collections = require('./api/Collections');

const PORT = process.env.PORT || 5000;

/**
 * Set Static folder
 * - Folders in 'public' folder are automatically served
 */
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    //res.header("Access-Control-Allow-Origin", "https://jhynzar.github.io");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/**
 * API
 */
app.get('/api/collections', (req, res) => {
    res.json(Collections.list);
});

app.get('/api/collections/:collection', (req, res) => {
    if(Collections.galleries.hasOwnProperty(req.params.collection) === false) {
        res.json(404, { error: 'No such collection' });
    }

    res.json(Collections.galleries[req.params.collection]);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

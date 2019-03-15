const express = require('express');
const path = require('path');

const app = express();

const gallery = require('./api/Gallery');

const PORT = process.env.PORT || 5000;

/**
 * Set Static folder
 * - Folders in 'public' folder are automatically served
 */
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/**
 * API
 */
app.get('/api/gallery', (req, res) => {
    res.json(gallery);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

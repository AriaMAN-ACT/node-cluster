const crypto = require('crypto');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (error, buffer) => {
        res.send('buffer');
    });
});

app.listen(3000);
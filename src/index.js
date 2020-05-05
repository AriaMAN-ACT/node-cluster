process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');
const os = require('os');
const crypto = require('crypto');

if (cluster.isMaster) {
    for (let i = 1; i < os.cpus().length; i++) {
        cluster.fork();
    }
} else {
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (error, buffer) => {
            res.send('buffer');
        });
    });

    app.listen(3000);
}
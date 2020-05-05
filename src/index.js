const cluster = require('cluster');

if (cluster.isMaster) {
    cluster.fork();
} else {
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hi There');
    });

    app.listen(3000);
}
const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        msg: 'REST API'
    });
});

app.listen(3000)
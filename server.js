const express = require('express');

const app = express();

app.use(express.static('./dist/angular-cv'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-cv/'}),
);

app.listen(process.env.PORT || 8080);
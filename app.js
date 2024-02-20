const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hi, I am just testing out this code! and then i want to build something nice, init'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

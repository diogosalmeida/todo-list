const express = require('express');


const app = express();



const ServerConfig = require('./config/server')(app);
const port = 4000;


app.listen(port, () => {
    console.log(`Servidor Ligado na porta ${port}`)
});


exports = app;
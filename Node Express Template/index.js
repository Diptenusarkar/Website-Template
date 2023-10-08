const express = require('express');
const app = express();
const routes=require('./routes/routes')
const PORT =  8000;

app.use(routes)


app.listen(PORT, () => {
    console.log( `Server Started on port:${PORT}`);
});
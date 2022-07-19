const express = require("express");
const modules = require('./modules/index.js')
const path = require('path');
const auth = require('./middlewares/checktoken.js')

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, './uploads')))
// app.use(auth)
app.use(modules)

app.listen(process.env.PORT || 5000, ()=>console.log('http://localhost:5000'));

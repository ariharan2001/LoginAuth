require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const authRoute = require('./api/auth');
const authenticate = require('./api/authenticate');

connection();

// Middlewares
app.use(express.json())
app.use(cors());

// Routes
app.use("/api/auth",authRoute);
app.use("/api/authenticate",authenticate);

const port = process.env.PORT || 8088;
app.listen(port,() => console.log('listening on port '+port+' ...'));


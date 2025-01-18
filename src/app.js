require('./config/dotenv');
require('express-async-errors')

const express = require('express');
const { initDatabase } = require('./config/db');
const cors = require('cors');

const planRoute = require('./routes/planRoute');
const unitsRoute = require('./routes/unitsRoute');
const authRoute = require('./routes/authRoute');

const app = express();

const port = process.env.APP_PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome to Pluto api!');
});

app.use(cors());

app.use(express.json());

app.use('/api/plans', planRoute);
app.use('/api/units', unitsRoute);
app.use('/api/auth', authRoute);


initDatabase();

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send({'erro': err.message});
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    console.log(`Host: ${process.env.DB_HOST}`);
});


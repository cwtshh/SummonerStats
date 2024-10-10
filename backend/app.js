require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');
const PORT = process.env.PORT || 3000;


// instanciando o app
const app = express();

// permitir que o app entenda requisições com corpo em JSON
app.use(express.json());
// permitir que o app entenda requisições com corpo em URL Encoded
app.use(express.urlencoded({ extended: true }));
// permitir que o app entenda requisições com corpo em Multipart Form Data
app.use(cors({
    origin: '*',
    methods: 'GET, POST, PUT, DELETE',
    credentials: true
}));

connectDb();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

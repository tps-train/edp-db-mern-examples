const express = require('express');
// const cors = require('cors');

const app = express();
const PORT = 3000;
// const HOST = '192.168.10.117';
// const HOST = 'localhost';
const HOST = '0.0.0.0';

// app.use(cors());

app.get('/user', (req, res) => {
    res.json({
        username: 'johndoe',
        password: 'secret123',
        email: 'johndoe@example.com',
        dateOfBirth: '1990-01-01'
    });
});

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});
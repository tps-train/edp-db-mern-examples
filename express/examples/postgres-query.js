import { Client } from 'pg';
import express from 'express';
const app = express();
const port = 3000;

app.get('/actors', async (req, res) => {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'dvdrental',
        password: 'secret123',
        port: 5432,
    });
    try {
        await client.connect();
        const result = await client.query('SELECT * FROM actor');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Database query failed' });
    } finally {
        await client.end();
    }
});

app.get('/films', async (req, res) => {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'dvdrental',
        password: 'secret123',
        port: 5432,
    });
    try {
        await client.connect();
        const result = await client.query('SELECT * FROM film');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Database query failed' });
    } finally {
        await client.end();
    }
});

app.get('/films/:id', async (req, res) => {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'dvdrental',
        password: 'secret123',
        port: 5432,
    });
    const { id } = req.params;
    try {
        await client.connect();
        const result = await client.query('SELECT * FROM film WHERE film_id = $1', [id]);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Database query failed' });
    } finally {
        await client.end();
    }
});

app.listen(9000, () => {
    console.log(`Server is running on http://localhost:9000`);
});
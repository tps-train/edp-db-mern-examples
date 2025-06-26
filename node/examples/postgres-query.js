import { Client } from 'pg';

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'dvdrental',
    password: 'secret123',
    port: 5432,
});

async function queryActors() {
    try {
        await client.connect();
        const res = await client.query('SELECT * FROM actor');
        res.rows.forEach(row => {
            console.log(row);
        });
    } catch (err) {
        console.error('Error querying actors:', err);
    } finally {
        await client.end();
    }
}

queryActors();
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: process.env.NODE_ENV === 'production' ? true : false
});


const initDatabase = async () => {

    await pool.query(`
        CREATE TABLE IF NOT EXISTS plans (
            id SERIAL  PRIMARY KEY,
            image VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            titlecolor VARCHAR(7) NOT NULL,
            planvalue INTEGER NOT NULL,
            buttoncolor VARCHAR(7) NOT NULL,
            buttontextcolor VARCHAR(7) NOT NULL,
            buttoniconcolor VARCHAR(7) NOT NULL
        );
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS units (
            id SERIAL  PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            city VARCHAR(255) NOT NULL,
            representative VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            titlecolor VARCHAR(7) NOT NULL,
            textcolor VARCHAR(7) NOT NULL
            );
    `);


    await pool.query(`
    CREATE TABLE IF NOT EXISTS usuarios (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
        );
    `);

    console.log('Banco de dados inicializado com sucesso!');
}


module.exports = { pool, initDatabase };
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'sistema_empleadores',
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432,
});

pool.on('connect', () => {
    console.log('Base de datos conectada exitosamente 📦');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
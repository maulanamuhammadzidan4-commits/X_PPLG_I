require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const mysql = require('mysql2');

// Membuat pool koneksi agar lebih efisien dan tidak mudah terputus
const pool = mysql.createPool({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
})

// Mengubah pool menjadi promise agar bisa menggunakan async/await yang elegan
const db = pool.promise();

module.exports = db;
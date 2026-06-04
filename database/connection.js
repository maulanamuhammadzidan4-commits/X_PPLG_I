const mysql = require('mysql2');

// Membuat pool koneksi agar lebih efisien dan tidak mudah terputus
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', // Sesuaikan dengan password mysql lokal Anda
    database: 'db_kelas' // Sesuaikan dengan nama database yang akan Anda buat di phpMyAdmin/MySQL CLI
});

// Mengubah pool menjadi promise agar bisa menggunakan async/await yang elegan
const db = pool.promise();

module.exports = db;
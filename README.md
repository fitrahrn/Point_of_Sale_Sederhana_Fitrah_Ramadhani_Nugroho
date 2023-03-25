# Point of Sale

Backend - dibuat menggunakan PHP dan framework laravel
Frontend -dibuat menggunakan javascript dan framework React.js

## Cara Menjalankan Web

### Cara Menjalankan server backend

1. Buka Terminal (CMD/Powershell/gitbash)
2. Pindahkan terminal ke folder Assessment_Intern_Fitrah_Ramadhani_Nugroho/laravel
3. Ketik "php artisan serve" di terminal untuk menjalankan server
4. Pastikan server berjalan di link "http:127.0.0.1:8000"
5. Buka server mysql
6. pastikan DB_HOST dan DB_PORT dalam file laravel/.env sesuai dengan server dan port mysql
7. Buat terminal baru dan pindahkan ke folder laravel
8. ketik "php artisan migrate:fresh" di terminal untuk membuat database di mysql
9. ketik "php artisan db:seed --class=MenuTableSeeder" untuk men-seed database dengan data dummy
10. Back end sudah bisa digunakan

### Cara Menjalankan server frontend

1. Buat terminal baru dan pindahkan ke folder Assessment_Intern_Fitrah_Ramadhani_Nugroho/react-app
2. ketik "npm install" untuk menginstal dependency dan library yang dibutuhkan
3. Ketik "npm-start" untuk menjalankan server
4. terminal akan otomatis membuka browser dan membuka web di "localhost:3000"
5. web sudah siap digunakan

# Catatan

1. Untuk membuka menu tambahan untuk menambahkan, mengurangi, mengedit, ataupun menghapus data-data produk/makanan buka link "localhost:3000/menu
2. Untuk tambah/edit menu gambar perlu dipindah secara manual ke folder react-app/public/img agar gambar menu bisa ditampilkan

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Menu;

class MenuTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Menu::create([
            'nama' =>"Cumi Tepung",
            'gambar' =>"cumi_tepung.jpg",
            'harga' =>15000,
        ]);
        Menu::create([
            'nama' =>"Cumi Bakar",
            'gambar' =>"cumi_bakar.jpg",
            'harga' =>16000,
        ]);
        Menu::create([
            'nama' =>"Cumi Cabe Goreng",
            'gambar' =>"cumi_cabe.jpg",
            'harga' =>14000,
        ]);
        Menu::create([
            'nama' =>"Cumi & Kerang",
            'gambar' =>"cumi_kerang.jpg",
            'harga' =>20000,
        ]);
        Menu::create([
            'nama' =>"Cah Kailan",
            'gambar' =>"cah_kailan.jpeg",
            'harga' =>10000,
        ]);
        Menu::create([
            'nama' =>"Tahu Goreng",
            'gambar' =>"tahu_goreng.jpg",
            'harga' =>8000,
        ]);
        Menu::create([
            'nama' =>"Cah Taoge",
            'gambar' =>"cah_taoge.jpg",
            'harga' =>9000,
        ]);
        Menu::create([
            'nama' =>"Sayuran",
            'gambar' =>"sayuran.jpg",
            'harga' =>13000,
        ]);
        Menu::create([
            'nama' =>"Kerang Bakar",
            'gambar' =>"kerang_bakar.jpg",
            'harga' =>16000,
        ]);
        Menu::create([
            'nama' =>"Kepiting Padang",
            'gambar' =>"kepiting_padang.jpg",
            'harga' =>20000,
        ]);
        Menu::create([
            'nama' =>"Gurami Asam Manis",
            'gambar' =>"gurami_asam.jpg",
            'harga' =>25000,
        ]);
        Menu::create([
            'nama' =>"Ikan Bakar",
            'gambar' =>"ikan_bakar.jpg",
            'harga' =>23000,
        ]);
        Menu::create([
            'nama' =>"Udang Bakar",
            'gambar' =>"udang_bakar.jpg",
            'harga' =>18000,
        ]);
        Menu::create([
            'nama' =>"Udang Saos Tiram",
            'gambar' =>"udang_saos.jpg",
            'harga' =>17000,
        ]);
        Menu::create([
            'nama' =>"Udang Mayonaise",
            'gambar' =>"udang_mayonaise.jpeg",
            'harga' =>16000,
        ]);
        Menu::create([
            'nama' =>"Minuman",
            'gambar' =>"minuman.jpg",
            'harga' =>10000,
        ]);
        Menu::create([
            'nama' =>"Iced Tea",
            'gambar' =>"iced_tea.jpg",
            'harga' =>5000,
        ]);
        Menu::create([
            'nama' =>"Es Jeruk Nipis",
            'gambar' =>"es_jeruk.jpg",
            'harga' =>6000,
        ]);
        Menu::create([
            'nama' =>"Nasi Putih",
            'gambar' =>"nasi_putih.jpeg",
            'harga' =>4000,
        ]);
        Menu::create([
            'nama' =>"Happy Hour",
            'gambar' =>"happy_hour.png",
            'harga' =>15000,
        ]);
    }
}

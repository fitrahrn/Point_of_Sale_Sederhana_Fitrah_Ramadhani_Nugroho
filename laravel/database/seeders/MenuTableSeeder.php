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
        $faker = \Faker\Factory::create();
        for($i=0; $i<50;$i++){
            Menu::create([
                'nama' =>$faker->name,
                'gambar' =>$faker->sentence,
                'harga' =>$faker->randomNumber(5,true),
            ]);
        }
    }
}

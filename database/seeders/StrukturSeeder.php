<?php

namespace Database\Seeders;

use App\Models\Struktur;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StrukturSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $strukturs = [
            [
                'no_hp' => '3123456789',
                'keterangan' => 'lorem',
                'name' => "Lukman Abdullah",
                'main' => 1,
                'role' => "Ketua MPD DPD PKS Bulukumba",
                'image' => "image/structur/lukman-abdullah.jpg"
            ],
            [
                'no_hp' => '1123456789',
                'keterangan' => 'lorem',
                'name' => "A. Muh. Sabri Mustari, SS",
                'main' => 1,
                'role' => "Ketua DPD PKS Bulukumba",
                'image' => "image/structur/a-muh-sabri-mustari-ss.JPG"
            ],
            [
                'no_hp' => '2123456789',
                'keterangan' => 'lorem',
                'name' => "Dr. Supriadi, Ph. D",
                'main' => 1,
                'role' => "Sekretaris DPD PKS Bulukumba",
                'image' => "image/structur/dr-supriadi-ph-d.JPG"
            ],
            [
                'no_hp' => '3123456789',
                'keterangan' => 'lorem',
                'name' => "Ahmad Rasyidi",
                'main' => 1,
                'role' => "Bendahara DPD PKS Bulukumba",
                'image' => "image/structur/ahmad-rasyidi.JPG"
            ],
        ];


        foreach ($strukturs as $key => $struktur) {
            Struktur::create([
                'name' => $struktur['name'],
                'no_hp' => $struktur['no_hp'],
                'role' => $struktur['role'],
                'keterangan' => $struktur['keterangan'],
                'main' => $struktur['main'],
                'image' => $struktur['image'],
            ]);
        }
    }
}

<?php

namespace Database\Seeders;

use App\Models\Agenda;
use Illuminate\Database\Seeder;

class AgendaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $agendas = [
            [
                "title"  => "Kampanye Calon Bupati Usungan PKS Kabupaten Bulukumba",
                "time"   => "15:00 WITA",
                "date"   => "2025-07-01",
                "location" => "Lapangan Pemuda, Bulukumba",
                "image"  => "image/agenda/kampanye-calon-bupati-usungan-pks-kabupaten-bulukumba.png"
            ],
            [
                "title"  => "Pawai Pendaftaran Calon Bupati ke KPU oleh PKS dan Koalisi Partai Politik",
                "time"   => "08:00 WITA",
                "date"   => "2025-07-05",
                "location" => "Kantor DPD PKS Bulukumba ke KPU Bulukumba",
                "image"  => "image/agenda/pawai-pengawalan-pendaftaran-calon-bupati-ke-kpu-oleh-pks-dan-koalisi-partai-politik.png"
            ],
            [
                "title"  => "Jalan Sehat Kader PKS se-Sulawesi Selatan",
                "time"   => "06:30 WITA",
                "date"   => "2025-08-10",
                "location" => "Alun-Alun Kota Takalar",
                "image"  => "image/agenda/jalan-sehat-kader-pks-se-sulawesi-selatan.jpg"
            ],
            [
                "title"  => "Pembagian Takjil Menjelang Waktu Berbuka Puasa oleh Pengurus PKS Bulukumba",
                "time"   => "17:15 WITA",
                "date"   => "2025-03-25",
                "location" => "Depan Masjid Agung Bulukumba",
                "image"  => "image/agenda/pembagian-takjil-menjelang-waktu-berbuka-puasa-oleh-pengurus-pks-bulukumba.png"
            ],
            [
                "title"  => "Konsolidasi DPD dan DPC dalam Rangka Persiapan Pendaftaran Calon Bupati",
                "time"   => "13:00 WITA",
                "date"   => "2025-06-20",
                "location" => "Sekretariat DPD PKS Bulukumba",
                "image"  => "image/agenda/konsolidasi-daerah-dalam-rangka-persiapan-pendaftaran-calon-bupati.png"
            ],
            [
                "title"  => "Penyerahan Berkas Pendaftaran Calon Bupati ke PKS Bulukumba",
                "time"   => "10:00 WITA",
                "date"   => "2025-06-10",
                "location" => "Sekretariat DPD PKS Bulukumba",
                "image"  => "image/agenda/penyerahan-mandat-kepada-calon-bupati-usungan-pks-bulukumba.png"
            ],
        ];

        foreach ($agendas as $agenda) {
            Agenda::create([
                'title' => $agenda['title'],
                'time' => $agenda['time'],
                'date' => $agenda['date'],
                'location' => $agenda['location'],
                'image' => $agenda['image']
            ]);
        }
    }
}

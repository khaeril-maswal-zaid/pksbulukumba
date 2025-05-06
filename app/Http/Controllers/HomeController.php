<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
  public function index(): Response
  {
    $data = [
      'slides' => [
        [
          'id' => 1,
          'image' => url("storage/image/assets/hero-1.jpg"),
          'title' => "Bersama PKS Bulukumba Membangun Daerah",
          'description' =>
          "Selamat datang di website resmi Partai Keadilan Sejahtera Bulukumba. Bersama kita wujudkan Bulukumba yang lebih baik, adil, dan sejahtera.",
        ],
        [
          'id' => 2,
          'image' => url("storage/image/assets/hero-2.jpg"),
          'title' => "Berkhidmat Untuk Rakyat",
          'description' =>
          "PKS Bulukumba berkomitmen untuk selalu menghadirkan kebijakan yang pro-rakyat dan membela kepentingan masyarakat Bulukumba.",
        ],
        [
          'id' => 3,
          'image' => url("storage/image/assets/hero-1.jpg"),
          'title' => "Membangun Bulukumba Bermartabat",
          'description' =>
          "Mari bersama-sama membangun Bulukumba yang bermartabat, sejahtera, dan berkeadilan untuk semua lapisan masyarakat.",
        ],
      ],

      'about' => Blog::select(['title', 'body1', 'body2', 'picture1'])->where('slug', 'tentang-pks-bulukumba')->first(),

      'leaders' => [
        ['id' => 3, 'name' => "Lukman Abdullah", 'position' => "Ketua MPD DPD PKS Bulukumba", 'image' => url("storage/image/structur/lukman-abdullah.jpg"),],
        ['id' => 1, 'name' => "A. Muh. Sabri Mustari, SS", 'position' => "Ketua DPD PKS Bulukumba", 'image' => url("storage/image/structur/a-muh-sabri-mustari-ss.jpg"),],
        ['id' => 2, 'name' => "Dr. Supriadi, Ph. D", 'position' => "Sekretaris DPD PKS Bulukumba", 'image' => url("storage/image/structur/dr-supriadi-ph-d.jpg"),],
        ['id' => 3, 'name' => "Ahmad Rasyidi", 'position' => "Bendahara DPD PKS Bulukumba", 'image' => url("storage/image/structur/ahmad-rasyidi.jpg"),],
      ],

      'blogs' => Blog::select(['title', 'excerpt', 'picture1', 'created_at'])->latest()->get(4)
    ];

    return Inertia::render('pks/home', $data);
  }
}

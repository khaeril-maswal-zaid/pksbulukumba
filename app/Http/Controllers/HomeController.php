<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
  public function index(): Response
  {
    $beritaImagesn = Blog::latest('created_at')
      ->skip(6)
      ->take(20) // ambil secukupnya agar tidak terlalu berat
      ->get()
      ->flatMap(function ($berita) {
        return collect([$berita->picture1, $berita->picture2, $berita->picture3])
          ->filter(fn($img) => $img && $img !== 'default.png')
          ->map(fn($img) => [
            'path' => $img,
            'created_at' => $berita->created_at
          ]);
      });

    $agendaImagesn = Agenda::latest('created_at')
      ->skip(4)
      ->take(20)
      ->get()
      ->filter(fn($agenda) => $agenda->image && $agenda->image !== 'default.png')
      ->map(fn($agenda) => [
        'path' =>  $agenda->image,
        'created_at' => $agenda->created_at
      ]);


    // Gabung & ambil 6 gambar terbaru
    $galeri = $beritaImagesn
      ->merge($agendaImagesn)
      ->sortByDesc('created_at')
      ->take(6)
      ->values();

    $data = [
      'about' => Blog::select(['title', 'body1', 'body2', 'picture1'])->where('slug', 'tentang-pks-bulukumba')->first(),

      'leaders' => [
        ['id' => 3, 'name' => "Lukman Abdullah", 'position' => "Ketua MPD DPD PKS Bulukumba", 'image' => "image/structur/lukman-abdullah.jpg"],
        ['id' => 1, 'name' => "A. Muh. Sabri Mustari, SS", 'position' => "Ketua DPD PKS Bulukumba", 'image' => "image/structur/a-muh-sabri-mustari-ss.JPG"],
        ['id' => 2, 'name' => "Dr. Supriadi, Ph. D", 'position' => "Sekretaris DPD PKS Bulukumba", 'image' => "image/structur/dr-supriadi-ph-d.JPG"],
        ['id' => 3, 'name' => "Ahmad Rasyidi", 'position' => "Bendahara DPD PKS Bulukumba", 'image' => "image/structur/ahmad-rasyidi.JPG"],
      ],

      'blogs' => Blog::select(['title', 'slug', 'excerpt', 'category', 'picture1', 'created_at'])->latest()->take(4)->get(),
      'agendas' => Agenda::select(['title', 'image', 'date', 'time', 'location'])->latest()->take(6)->get(),
      'galeri' => $galeri,
    ];

    return Inertia::render('pks/home', $data);
  }

  public function dashboard(): Response
  {
    $ogTags = [
      'title' => 'Panel Admin ' . config('app.name'),
      'description' => 'Pondok Pesantren Ubay Bin Ka’ab Bulukumba berdiri di atas prinsip menjalankan amal ibadah sesuai dengan tuntunan Ahlus Sunnah wal Jamaah, berlandaskan Al-qur`an dan hadist yang sahih.',
      'image' => asset('/storage/image/assets/logo.png'),
      'url' => config('app.url'),
    ];

    request()->attributes->set('og', $ogTags);

    return Inertia::render('dashboard/home');
  }

  public function galery(): Response
  {
    $beritaImagesn = Blog::latest('created_at')
      ->take(4)
      ->get()
      ->flatMap(function ($berita) {
        return collect([$berita->picture1, $berita->picture2, $berita->picture3])
          ->filter(fn($img) => $img && $img !== 'default.png')
          ->map(fn($img) => [
            'path' => $img,
            'created_at' => $berita->created_at->format('F'),
            'title' => $berita->title,
          ]);
      });

    $agendaImagesn = Agenda::latest('created_at')
      ->take(5)
      ->get()
      ->filter(fn($agenda) => $agenda->image && $agenda->image !== 'default.png')
      ->map(fn($agenda) => [
        'path' => $agenda->image,
        'created_at' => $agenda->created_at->format('F'),
        'title' => $agenda->title,
      ]);

    $data = [
      'gallery' => $beritaImagesn
        ->merge($agendaImagesn)
        // ->shuffle()
        ->sortByDesc('created_at')
        ->values()
    ];


    return Inertia::render('pks/galeri/page', $data);
  }
}

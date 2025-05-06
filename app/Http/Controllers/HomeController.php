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
      'about' => Blog::select(['title', 'body1', 'body2', 'picture1'])->where('slug', 'tentang-pks-bulukumba')->first(),

      'leaders' => [
        ['id' => 3, 'name' => "Lukman Abdullah", 'position' => "Ketua MPD DPD PKS Bulukumba", 'image' => "image/structur/lukman-abdullah.jpg"],
        ['id' => 1, 'name' => "A. Muh. Sabri Mustari, SS", 'position' => "Ketua DPD PKS Bulukumba", 'image' => "image/structur/a-muh-sabri-mustari-ss.JPG"],
        ['id' => 2, 'name' => "Dr. Supriadi, Ph. D", 'position' => "Sekretaris DPD PKS Bulukumba", 'image' => "image/structur/dr-supriadi-ph-d.JPG"],
        ['id' => 3, 'name' => "Ahmad Rasyidi", 'position' => "Bendahara DPD PKS Bulukumba", 'image' => "image/structur/ahmad-rasyidi.JPG"],
      ],

      'blogs' => Blog::select(['title', 'slug', 'excerpt', 'picture1', 'created_at'])->latest()->take(4)->get()
    ];

    return Inertia::render('pks/home', $data);
  }
}

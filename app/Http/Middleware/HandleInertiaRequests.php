<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;
use App\Models\Kontak;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        [$message, $author] = str(Inspiring::quotes()->random())->explode('-');

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'contact' =>  Kontak::select("name", 'value', 'link', 'icon')->where('label', 'wa')->orWhere('label', 'email')->get(),
            'alamat' => "Jln. Poros Manyampa - Palangisan Kalikia, Desa Manyampa Kec. Ujung Loe Kab. Bulukumba",
            'quote' => ['message' => trim($message), 'author' => trim($author)],
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn(): array => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',

            'logoPks' => "image/assets/logo-pks.png",
            'slides' => [
                [
                    'id' => 1,
                    'image' => "image/assets/hero-1b.jpg",
                    'title' => "Bersama PKS Bulukumba Membangun Daerah",
                    'description' =>
                    "Selamat datang di website resmi Partai Keadilan Sejahtera Bulukumba. Bersama kita wujudkan Bulukumba yang lebih baik, adil, dan sejahtera.",
                ],
                [
                    'id' => 2,
                    'image' => "image/assets/hero-2c.jpg",
                    'title' => "Berkhidmat Untuk Rakyat",
                    'description' =>
                    "PKS Bulukumba berkomitmen untuk selalu menghadirkan kebijakan yang pro-rakyat dan membela kepentingan masyarakat Bulukumba.",
                ],
                [
                    'id' => 3,
                    'image' => "image/assets/hero-1c.jpg",
                    'title' => "Membangun Bulukumba Bermartabat",
                    'description' =>
                    "Mari bersama-sama membangun Bulukumba yang bermartabat, sejahtera, dan berkeadilan untuk semua lapisan masyarakat.",
                ],
            ],
            'leaders' => [
                ['id' => 1, 'name' => "A. Muh. Sabri Mustari, SS", 'position' => "Ketua DPD PKS Bulukumba", 'image' => "image/structur/a-muh-sabri-mustari-ss.JPG", "description" => 'Memimpin DPD PKS Bulukumba sejak tahun 2025. Aktif dalam berbagai kegiatan sosial dan politik di Kabupaten Bulukumba.',],
                ['id' => 2, 'name' => "Dr. Supriadi, Ph. D", 'position' => "Sekretaris", 'image' => "image/structur/dr-supriadi-ph-d.JPG", "description" => 'Bertanggung jawab atas administrasi dan kesekretariatan DPD PKS Bulukumba. Juga aktif dalam bidang pendidikan dan pemberdayaan perempuan.'],
                ['id' => 3, 'name' => "Ahmad Rasyidi", 'position' => "Bendahara", 'image' => "image/structur/ahmad-rasyidi.JPG", "description" => 'Mengelola keuangan DPD PKS Bulukumba. Seorang pengusaha sukses yang aktif mendukung program pemberdayaan ekonomi masyarakat.'],
            ],
        ];
    }
}

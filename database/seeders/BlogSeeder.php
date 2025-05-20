<?php

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $datas = [
            [
                'user_id' => 1,
                'slug' => 'pks-perkuat-konsolidasi-dan-kinerja-aleg-di-bulukumba-lewat-kunjungan-nasional-dan-regional',
                'title' => 'PKS Perkuat Konsolidasi dan Kinerja Aleg di Bulukumba Lewat Kunjungan Nasional dan Regional',
                'excerpt' => 'Dalam rangka memperkuat sinergi internal partai dan meningkatkan kinerja anggota legislatif, Partai Keadilan Sejahtera (PKS) menggelar kunjungan silaturahmi lintas struktur, mulai dari tingkat pusat hingga daerah, ke Kabupaten Bulukumba.',
                'body1' => '<p class="mb-3">Bulukumba, 19 Mei 2025 — Dalam rangka memperkuat sinergi internal partai dan meningkatkan kinerja anggota legislatif (aleg), Partai Keadilan Sejahtera (PKS) menggelar kunjungan silaturahmi lintas struktur, mulai dari tingkat pusat hingga daerah, ke Kabupaten Bulukumba, Sulawesi Selatan.</p><p></p><p class="mb-3">Kunjungan yang berlangsung pada Senin (19/5) ini dihadiri oleh delegasi dari Dewan Pimpinan Pusat (DPP) PKS, Dewan Pimpinan Wilayah (DPW) PKS Sulawesi Selatan, serta Dewan Pimpinan Daerah (DPD) PKS Kota Makassar. Rombongan diterima langsung oleh Ketua DPRD Bulukumba, Ibu A. Umy Asyiatun Khadijah, bersama jajaran pimpinan dan anggota Fraksi PKS DPRD Bulukumba.</p><p class="mb-3"></p><p class="mb-3">Pertemuan berlangsung dalam suasana hangat dan penuh kekeluargaan di ruang kerja Ketua DPRD Bulukumba. Hadir dalam pertemuan tersebut antara lain Ketua Fraksi PKS Bulukumba H. Safiuddin, Sekretaris DPD PKS Bulukumba Supridi Herman, serta anggota DPRD PKS lainnya seperti Fuad Arafah, Rizal Sahib, dan A. Tenri Ita Maharani.</p><p class="mb-3"></p><p class="mb-3">Wakil Ketua DPRD Kota Makassar, Anwar Faruq, yang turut dalam rombongan, menyampaikan bahwa tujuan utama kunjungan ini adalah untuk memperkuat konsolidasi internal serta memberikan motivasi dan arahan kepada para aleg PKS di Bulukumba. Ia menekankan pentingnya kolaborasi antara anggota legislatif dan masyarakat guna mencapai pelayanan publik yang lebih optimal.</p><p class="mb-3"></p><p class="mb-3">“Sinergi antara struktur partai dan masyarakat adalah kunci dalam membangun daerah secara berkelanjutan,” ujarnya.</p>',
                'body2' => '<p class="mb-3">Ketua Fraksi PKS DPRD Bulukumba, H. Safiuddin, mengapresiasi kunjungan tersebut dan menyampaikan harapannya agar momentum ini menjadi pemacu semangat bagi para kader dan aleg PKS untuk lebih maksimal dalam mengabdi kepada masyarakat. Ia juga berharap silaturahmi ini dapat mempererat hubungan antarstruktur partai sekaligus menjalin komunikasi yang lebih baik dengan elemen masyarakat.</p><p class="mb-3"></p><p class="mb-3">Turut hadir dalam kunjungan ini perwakilan dari DPP PKS, Kasman, serta Ketua Fraksi PKS DPRD Kota Makassar, A. Hadi Baso Ibrahim. Delegasi dari DPW PKS Sulawesi Selatan juga ikut serta dalam rombongan.</p><p class="mb-3"></p><p class="mb-3">Menariknya, pertemuan ini juga dihadiri oleh perwakilan dari Himpunan Da’i Muda Indonesia (HDMI) Bulukumba yang ikut dalam diskusi dan sesi ramah tamah bersama peserta lainnya.</p><p class="mb-3"></p><p class="mb-3">Kunjungan ini bukan hanya bentuk silaturahmi formal, namun merupakan bagian dari strategi besar PKS dalam memperkuat basis dukungan, konsolidasi organisasi, dan kontribusi nyata terhadap pembangunan dan kesejahteraan masyarakat Bulukumba.</p><p class="mb-3">PKS menegaskan komitmennya untuk terus menjalin kolaborasi lintas elemen demi mendorong kemajuan daerah dan memperkuat peran politik yang berpihak kepada rakyat.</p>',
                'picture1' => 'image/blog/682bd61045572-.png',
                'picture2' => 'default.png',
                'picture3' => 'default.png',
                'tags' => ["Konsolidasi Partai", "Kunjungan Politik", "Silaturahmi Legislatif", "Kolaborasi Aleg dan Masyarakat", "Pembangunan Partai"],
                'category' => 'News',
                'visit' => 71,
            ],
            [
                'user_id' => 1,
                'slug' => 'agar-aleg-dicintai-kader-pks',
                'title' => 'AGAR ALEG DICINTAI KADER PKS',
                'excerpt' => 'Menjadi Anggota legislatif (Aleg) adalah nikmat yang Allah SWT anugerahkan kepada hamba-Nya yang terpilih',
                'body1' => '<p class="mb-3">Menjadi anggota legislatif (Aleg) adalah nikmat yang Allah SWT anugerahkan kepada hamba-Nya yang terpilih. Ketika ketetapan-Nya telah berlaku—<em>"Kun fayakun"</em>, maka tak seorang pun dapat menghalanginya. Si Fulan atau Fulanah bisa saja menjadi Aleg, baik di tingkat kabupaten/kota, provinsi, maupun pusat, meski bekalnya mungkin tak seberapa.</p><p class="mb-3">Aleg adalah representasi partai di parlemen—baik DPRD maupun DPR. Mereka mengemban misi dakwah yang mulia di tengah dinamika politik. Setiap kader PKS merasa bangga dan haru ketika ada perwakilan partai yang duduk di parlemen, menyuarakan kebenaran, dan membawa aspirasi umat, khususnya kader PKS dan umumnya masyarakat luas.</p><p class="mb-3">Namun dalam perjalanan, harapan tak selalu sejalan dengan kenyataan. Kader partai kerap merasa ditinggalkan, bak pungguk merindukan bulan. Sementara sang Aleg tampak melenggang gagah, dibalut jas hitamnya, menuju istana parlemen.</p><p class="mb-3">Dalam suasana batin semacam ini, mudah muncul "bisik-bisik tetangga" yang makin merenggangkan cinta antara Aleg dan kader partainya.</p><p class="mb-3">Agar cinta ini tetap terjaga dan hubungan Aleg dengan kader tetap hangat, ada tiga hal penting yang perlu dihindari oleh Aleg PKS:</p>',
                'body2' => '<p class="mb-3"><strong>1. Jangan Seperti Kacang Lupa Kulitnya</strong></p><p class="mb-3">Peribahasa ini bermakna seseorang yang lupa asal-usul atau latar belakangnya setelah meraih kesuksesan. Hal ini mencerminkan sikap sombong dan abai terhadap pihak yang pernah berjasa dalam perjalanan hidupnya. Seorang Aleg PKS sepatutnya terus mengingat siapa yang dulu bersusah payah mendukung dan mendoakannya hingga berhasil menduduki kursi parlemen.</p><p class="mb-3"><strong>2. Jangan Seperti Roda yang Tak Berputar</strong></p><p class="mb-3">Peribahasa ini menggambarkan seseorang yang tidak aktif atau stagnan. PKS adalah partai yang dinamis dan penuh semangat. Kegiatan partai, baik yang bersifat primer maupun sekunder, membutuhkan keterlibatan Aleg. Kehadiran Aleg dalam kegiatan kader bukan sekadar formalitas, tetapi menjadi penanda keakraban dan soliditas. Tanpa kehadiran Aleg, kegiatan terasa hambar—seperti slogan iklan rokok: <em>"Gak ada lo, gak rame!"</em></p><p class="mb-3"><strong>3. Jangan Bagai Kayu Tak Berakar</strong></p><p class="mb-3">Peribahasa ini menggambarkan seseorang yang tak memiliki keterikatan atau kepedulian terhadap sesama. Aleg PKS hendaknya senantiasa mendoakan para kader, konstituen, dan saudara-saudaranya yang telah berkontribusi dalam perjuangannya. Doa adalah bentuk cinta yang tulus. Kesuksesan seorang Aleg bukan hasil usaha pribadi semata, melainkan buah kerja kolektif banyak pihak.</p><p class="mb-3">Akhirnya, marilah kita renungi sabda Nabi Muhammad SAW:</p><p class="mb-3"><em>"Seorang Muslim adalah saudara bagi Muslim lainnya. Janganlah membiarkan saudaramu dalam keadaan salah, tetapi ingatkanlah dia."</em> (Muttafaq `alaih)</p><p class="mb-3">Semoga Aleg PKS tetap dicintai oleh kader-kadernya, dan cinta itu menjadi kekuatan dalam perjuangan dakwah di medan parlemen.</p><p class="mb-3"><em>Oleh: H. Usman Abdul Rasyid, Lc., M.Pd.<br>Ketua DED PKS Bulukumba</em></p>',
                'picture1' => 'image/blog/agar-aleg-dicintai-kader-pks.jpg',
                'picture2' => 'default.png',
                'picture3' => 'default.png',
                'tags' => ["Aleg", "Cinta", "Bulukumba", "PKS"],
                'category' => 'Edukasi Poltik',
                'visit' => 50,
            ],
            [
                'user_id' => 1,
                'slug' => 'pks-bulukumba-membangun-kekuatan-jasadiyah',
                'title' => 'PKS Bulukumba Membangun Kekuatan Jasadiyah',
                'excerpt' => 'Berolahraga secara berjamaah ternyata membawa dampak yang lebih dari sekadar fisik. Ia menjadi ruang tumbuhnya kegembiraan kolektif, mempererat hubungan antara PKS dan masyarakat Bulukumba dalam suasana yang hangat dan bersahabat.',
                'body1' => '<p class="mb-3"><strong>"Mensana in corpore sano"</strong> — Dalam tubuh yang sehat, terdapat jiwa yang kuat.</p><p class="mb-3">Ahad, 11 Mei 2025, suasana pagi di Kota Bulukumba tampak lebih semarak. PKS Bulukumba kembali menggelar kegiatan jalan sehat yang menyusuri ruas-ruas kota, mengajak masyarakat untuk menyatu dalam semangat kebugaran dan kebersamaan.</p><p class="mb-3">Menariknya, kegiatan ini bukan sekadar ajang internal partai. Warga dari berbagai latar belakang—tak hanya kader dan simpatisan—turut ambil bagian. Profesi boleh berbeda, namun langkah mereka seirama, menyatu dalam gerak yang membawa semangat sehat dan silaturahmi.</p>',
                'body2' => '<p class="mb-3">Berolahraga secara berjamaah ternyata membawa dampak yang lebih dari sekadar fisik. Ia menjadi ruang tumbuhnya kegembiraan kolektif, mempererat hubungan antara PKS dan masyarakat Bulukumba dalam suasana yang hangat dan bersahabat.</p><p class="mb-3">Ketua Bidang Kaderisasi PKS Bulukumba, Ustaz Firdaus, menegaskan bahwa kegiatan seperti ini akan terus diagendakan setiap Ahad pagi. <em>"Insya Allah, ini bagian dari dakwah yang menyehatkan, lahir dan batin,"</em> ujarnya penuh optimisme.</p><p class="mb-3">Seperti sabda Nabi Muhammad SAW: <em>"Mukmin yang kuat lebih baik dan lebih dicintai Allah daripada mukmin yang lemah."</em> Maka, mari kita kuatkan tubuh, kuatkan jiwa, dan bangun ukhuwah dalam langkah-langkah penuh berkah.</p>',
                'picture1' => 'image/blog/pks-bulukumba-membangun-kekuatan-jasadiyah-25.jpg',
                'picture2' => 'default.png',
                'picture3' => 'default.png',
                'tags' => ['Jasadiyah', 'Sehat', 'Kader'],
                'category' => 'Inspirasi',
                'visit' => 50,
            ],
            [
                'user_id' => 1,
                'slug' => 'pks-bulukumba-menguatkan-program-pengkaderan',
                'title' => 'PKS Bulukumba Menguatkan Program Pengkaderan',
                'excerpt' => 'Pada malam Jumat, 1 Mei 2025, bertempat di sebuah kafe bernama Koma di Kota Bulukumba, para pimpinan PKS Bulukumba duduk bersama dalam sebuah pertemuan penting.',
                'body1' => '<p class="mb-3" data-start="176" data-end="450">Pada malam Jumat, 1 Mei 2025, bertempat di sebuah kafe bernama Koma di Kota Bulukumba, para pimpinan PKS Bulukumba duduk bersama dalam sebuah pertemuan penting. Hadir dalam kesempatan tersebut Ketua DPD, Sekretaris Umum, Ketua DED, Bendahara, serta Kepala Bidang Kaderisasi.</p><p class="mb-3" data-start="452" data-end="627">Pertemuan ini membahas upaya penguatan program pengkaderan serta strategi merawat pertumbuhan kader agar dapat menjadi penopang utama dalam perjalanan dakwah PKS di Bulukumba.</p><p class="mb-3" data-start="629" data-end="855">Dalam prolognya, Kepala Bidang Kaderisasi, Saudara Muh. Aswad, menjelaskan bahwa fokus pengkaderan ini merupakan arahan langsung dari DPP PKS. Setiap pengurus DPD diminta untuk memberikan perhatian serius terhadap masalah ini.</p>',
                'body2' => '<p class="mb-3" data-start="857" data-end="1133">Salah satu isu utama yang mencuat dalam diskusi adalah mengenai sistem pembinaan di tingkat DPC. Saat ini, terdapat 10 DPC yang berada di bawah binaan DPD PKS Bulukumba, yaitu Kajang, Herlang, Bonto Tiro, Bonto Bahari, Bulukumpa, Rilau Ale, Kindang, Gantarang, dan Ujung Bulu.</p><p class="mb-3" data-start="1135" data-end="1360">Ketua DED PKS Bulukumba, H. Usman Abdul Rasyid, menyampaikan pandangannya bahwa pembinaan di setiap DPC harus dikelola secara serius dan terstruktur agar nantinya bisa terbentuk kepengurusan DPC yang kuat di setiap kecamatan.</p><p class="mb-3" data-start="1362" data-end="1647">Dalam memperkuat program pengkaderan ini, dibutuhkan konsolidasi yang solid di seluruh elemen DPD. Selain itu, keterlibatan anggota legislatif PKS Bulukumba juga dianggap krusial. Mereka diharapkan dapat menyumbang minimal sepuluh orang pendukung untuk dibina sebagai kader masa depan.</p>',
                'picture1' => 'image/blog/pks-bulukumba-menguatkan-program-pengkaderan.jpeg',
                'picture2' => 'default.png',
                'picture3' => 'default.png',
                'tags' => ['Kader', 'Pengkaderan', 'Malam Jumat'],
                'category' => 'News',
                'visit' => 50,
            ],
            [
                'user_id' => 1,
                'slug' => 'anggota-dprd-pks-minta-bulog-bulukumba-ikut-serap-hasil-panenn-jagung-petani',
                'title' => 'Anggota DPRD dari PKS Minta Bulog Bulukumba Ikut Serap Hasil Panen Jagung Petani',
                'excerpt' => 'Anggota DPRD Kabupaten Bulukumba dari Fraksi Partai Keadilan Sejahtera, Dr. Supriadi, meminta Perum Bulog Bulukumba agar tidak mengabaikan penyerapan jagung dari petani lokal.',
                'body1' => '<p class="mb-3"><strong>Bulukumba –</strong> Anggota DPRD Kabupaten Bulukumba dari Fraksi Partai Keadilan Sejahtera (PKS), <strong>Dr. Supriadi</strong>, meminta Perum Bulog Bulukumba agar tidak mengabaikan penyerapan jagung dari petani lokal. Hal ini disampaikannya dalam rapat dengar pendapat antara <strong>Komisi II DPRD Bulukumba</strong> dan pihak Bulog yang berlangsung di Gedung DPRD setempat.</p> <p class="mb-3">Supriadi menegaskan bahwa sikap Bulog yang hingga kini belum melakukan pembelian jagung sangat mengecewakan, apalagi saat ini sejumlah wilayah, khususnya di bagian timur Bulukumba, tengah memasuki masa panen raya.</p> <blockquote> <p class="mb-3">“Jagung jangan dinomorduakan. Petani sedang panen. Kalau Bulog mengabaikan jagung, berarti mengabaikan instruksi negara,” ujar Supriadi dengan nada tegas.</p> </blockquote> <p class="mb-3">Diketahui, pemerintah pusat telah menetapkan <strong>Harga Pembelian Pemerintah (HPP)</strong> untuk komoditas jagung di tingkat petani sebesar <strong>Rp5.500 per kilogram</strong>, melalui <strong>Keputusan Kepala Badan Pangan Nasional Nomor 18 Tahun 2025</strong>. Kebijakan ini bertujuan untuk menjaga stabilitas harga, memperkuat stok <strong>Cadangan Jagung Pemerintah (CJP)</strong>, serta meningkatkan kesejahteraan petani.</p>',
                'body2' => '<p class="mb-3">Namun demikian, hingga saat ini belum ada realisasi penyerapan jagung oleh Bulog Bulukumba. Kepala Bulog Bulukumba, <strong>Farid Nur</strong>, mengakui bahwa pihaknya masih memprioritaskan pengadaan gabah, bukan jagung.</p><blockquote><p class="mb-3">“Kami belum menyerap jagung sama sekali. Fokus kami saat ini masih pada pengadaan gabah,” terang Farid saat menjawab pertanyaan para anggota dewan.</p></blockquote><p class="mb-3">Sikap ini menjadi sorotan mengingat saat ini <strong>harga jagung di tingkat petani jatuh drastis</strong>, hanya berkisar <strong>Rp2.500 per kilogram</strong> — jauh di bawah HPP yang ditetapkan. Sementara itu, <strong>luas lahan jagung di Bulukumba mencapai 13 ribu hektare</strong>, dengan total produksi diperkirakan melebihi <strong>70 ribu ton</strong>, sebagaimana disampaikan oleh <strong>Kepala Dinas Pertanian Bulukumba, Muhammad Tayeb</strong>.</p><p class="mb-3">Kondisi ini memperkuat desakan agar Bulog segera bertindak dalam menyerap jagung lokal sebagai bentuk dukungan terhadap upaya peningkatan kesejahteraan petani dan ketahanan pangan daerah.</p>',
                'picture1' => 'image/blog/anggota-dprd-pks-minta-bulog-bulukumba-ikut-serap-hasil-panenn-jagung-petani.jpg',
                'picture2' => 'default.png',
                'picture3' => 'default.png',
                'tags' => ['Bulog', 'Jagung', 'Panen', 'DPRD'],
                'category' => 'News',
                'visit' => 50,
            ],
            [
                'user_id' => 1,
                'slug' => 'dprd-bulukumba-ukir-sejarah-politisi-perempuan-pks-jadi-ketua',
                'title' => 'DPRD Bulukumba Ukir Sejarah, Politisi Perempuan dari PKS Duduki Kursi Ketua',
                'excerpt' => 'Dewan Perwakilan Rakyat Daerah Kabupaten Bulukumba mencatat sejarah baru dalam dunia politik lokal. Untuk pertama kalinya, jabatan Ketua diemban oleh seorang politisi perempuan dari PKS, Umy Asyiatun Khadijah, untuk masa jabatan 2024-2029.',
                'body1' => '<p class="mb-3" data-start="184" data-end="479"><strong data-start="184" data-end="199">Bulukumba &ndash;</strong>  Dewan Perwakilan Rakyat Daerah (DPRD) Kabupaten Bulukumba mencatat sejarah baru dalam dunia politik lokal. Untuk pertama kalinya, jabatan Ketua DPRD diemban oleh seorang politisi perempuan dari Partai Keadilan Sejahtera (PKS), Umy Asyiatun Khadijah, untuk masa jabatan 2024&ndash;2029.</p><p class="mb-3" data-start="481" data-end="687">Sebanyak 40 anggota DPRD Bulukumba hasil Pemilu 2024 resmi dilantik pada <strong data-start="554" data-end="580">Senin, 19 Agustus 2024</strong>, dalam sebuah sidang paripurna yang dipandu langsung oleh Ketua Pengadilan Negeri Bulukumba, <strong data-start="674" data-end="686">Ernawaty</strong>.</p><p class="mb-3" data-start="689" data-end="914">Pelantikan pimpinan DPRD ini berdasarkan <strong data-start="730" data-end="788">Keputusan Gubernur Sulawesi Selatan Nomor: 1168/X/2024</strong>, tentang peresmian pengangkatan Pimpinan DPRD Kabupaten Bulukumba masa jabatan 2024&ndash;2029, yang tertanggal <strong data-start="895" data-end="913">2 Oktober 2024</strong>.</p>',
                'body2' => '<p class="mb-3" data-start="184" data-end="479"><strong data-start="184" data-end="199">Bulukumba &ndash;</strong> Dewan Perwakilan Rakyat Daerah (DPRD) Kabupaten Bulukumba mencatat sejarah baru dalam dunia politik lokal. Untuk pertama kalinya, jabatan Ketua DPRD diemban oleh seorang politisi perempuan dari Partai Keadilan Sejahtera (PKS), Umy Asyiatun Khadijah, untuk masa jabatan 2024&ndash;2029.</p>    <p class="mb-3" data-start="481" data-end="687">Sebanyak 40 anggota DPRD Bulukumba hasil Pemilu 2024 resmi dilantik pada <strong data-start="554" data-end="580">Senin, 19 Agustus 2024</strong>, dalam sebuah sidang paripurna yang dipandu langsung oleh Ketua Pengadilan Negeri Bulukumba, <strong data-start="674" data-end="686">Ernawaty</strong>.</p><p class="mb-3" data-start="689" data-end="914">Pelantikan pimpinan DPRD ini berdasarkan <strong data-start="730" data-end="788">Keputusan Gubernur Sulawesi Selatan Nomor: 1168/X/2024</strong>, tentang peresmian pengangkatan Pimpinan DPRD Kabupaten Bulukumba masa jabatan 2024&ndash;2029, yang tertanggal <strong data-start="895" data-end="913">2 Oktober 2024</strong>.</p><p class="mb-3" data-start="916" data-end="1061">Dalam sambutannya, Ketua DPRD terpilih, <strong data-start="956" data-end="981">Umy Asyiatun Khadijah</strong>, menyampaikan komitmennya untuk menjalankan amanah dengan penuh tanggung jawab.</p><p class="mb-3" data-start="916" data-end="1061"><em data-start="1065" data-end="1249">&ldquo;Percayalah bapak ibu sekalian, kami yang telah diberikan mandat ini akan bahu-membahu, berkolaborasi dan bersinergi menjaga marwah dan martabat dari kehormatan gedung parlemen ini,&rdquo;</em> ujarnya dalam pidato perdananya.</p><p class="mb-3" data-start="1284" data-end="1515">Terpilihnya Umy Asyiatun Khadijah sebagai Ketua DPRD tidak hanya menjadi representasi dari keterwakilan perempuan dalam politik, tetapi juga simbol kemajuan dan keterbukaan politik daerah dalam memberikan ruang yang lebih inklusif.</p>',
                'picture1' => 'image/blog/dprd-bulukumba-ukir-sejarah-politisi-perempuan-pks-jadi-ketua.jpg',
                'picture2' => 'default.png',
                'picture3' => 'default.png',
                'tags' => ['Perempuan', 'Ketua', 'Pertama', 'DPRD'],
                'category' => 'News',
                'visit' => 50,
            ],
            [
                'user_id' => 1,
                'slug' => 'pks-bulukumba-tegaskan-dukungan-ke-andi-utta-edy-manaf-ini-8-alasannya',
                'title' => 'PKS Bulukumba Tegaskan Dukungan ke Andi Utta–Edy Manaf: Ini 8 Alasannya',
                'excerpt' => 'PKS membawa visi menjadi Partai Islam rahmatan lil ‘alamin yang kokoh dan terdepan dalam melayani rakyat dan Negara Kesatuan Republik Indonesia.',
                'body1' => '<p class="mb-3" data-start="304" data-end="524">DPD Partai Keadilan Sejahtera (PKS) Kabupaten Bulukumba secara resmi menetapkan dukungan kepada pasangan <strong data-start="409" data-end="435">Andi Muchtar Ali Yusuf</strong> dan <strong data-start="440" data-end="458">Andi Edy Manaf</strong> untuk kembali melanjutkan kepemimpinan di Pilkada Bulukumba 2024.</p><p class="mb-3" data-start="526" data-end="832">Sebagai partai pengusul, PKS Bulukumba bertekad untuk berkontribusi maksimal dalam memenangkan pasangan yang dikenal dengan tagline <em data-start="658" data-end="699">&ldquo;Harapan Baru &ndash; Dikerja Bukan Dicerita&rdquo;</em>. Keputusan ini didasarkan pada evaluasi terhadap kinerja dan dampak positif kepemimpinan Andi Utta&ndash;Edy Manaf selama periode pertama.</p><p class="mb-3" data-start="834" data-end="1163">Kepemimpinan keduanya dinilai mampu membawa perubahan signifikan di berbagai sektor, seperti pembangunan infrastruktur, peningkatan kualitas pendidikan dan kesehatan, serta penguatan ekonomi lokal. Perhatian mereka terhadap pemberdayaan UMKM dan generasi muda juga menjadi salah satu alasan utama dalam pengambilan keputusan ini.</p><p class="mb-3" data-start="1165" data-end="1433">Selain itu, pasangan ini dikenal memiliki komitmen terhadap pemerintahan yang bersih, transparan, serta menjunjung tinggi nilai-nilai keagamaan dan moral. Pandangan tersebut sejalan dengan prinsip dan visi PKS dalam membangun daerah yang berkeadilan dan berkelanjutan.</p>',
                'body2' => '<h3 class="" data-start="1440" data-end="1487">8 Alasan PKS Bulukumba Dukung Harapan Baru:</h3><ol data-start="1489" data-end="3049" className="list-decimal ps-5"><li class="" data-start="1489" data-end="1684"><p class="mb-3" data-start="1492" data-end="1684"><strong data-start="1492" data-end="1538">Kepemimpinan yang Berpengalaman dan Teruji</strong><br data-start="1538" data-end="1541" /> Andi Utta dan Edy Manaf memiliki rekam jejak dalam pemerintahan yang membuktikan kapabilitas mereka dalam memimpin Bulukumba secara efektif.</p></li><li class="" data-start="1686" data-end="1895"><p class="mb-3" data-start="1689" data-end="1895"><strong data-start="1689" data-end="1713">Rekam Jejak Prestasi</strong><br data-start="1713" data-end="1716" /> Selama masa jabatan, berbagai pencapaian berhasil diraih, termasuk penghargaan Adipura, serta peningkatan signifikan di sektor infrastruktur, pendidikan, dan layanan kesehatan.</p></li><li class="" data-start="1897" data-end="2083"><p class="mb-3" data-start="1900" data-end="2083"><strong data-start="1900" data-end="1930">Inovasi dalam Pemerintahan</strong><br data-start="1930" data-end="1933" /> Kepemimpinan mereka menghadirkan inovasi melalui pemanfaatan teknologi informasi, yang mendorong transparansi dan efisiensi dalam pelayanan publik.</p></li><li class="" data-start="2085" data-end="2264"><p class="mb-3" data-start="2088" data-end="2264"><strong data-start="2088" data-end="2132">Dukungan terhadap UMKM dan Ekonomi Lokal</strong><br data-start="2132" data-end="2135" /> Program-program yang mendukung pelaku usaha mikro dan kecil menunjukkan keberpihakan terhadap pertumbuhan ekonomi akar rumput.</p></li><li class="" data-start="2266" data-end="2476"><p class="mb-3" data-start="2269" data-end="2476"><strong data-start="2269" data-end="2320">Perhatian terhadap Pendidikan dan Generasi Muda</strong><br data-start="2320" data-end="2323" /> Komitmen terhadap pengembangan potensi anak muda Bulukumba diwujudkan melalui berbagai program kepemudaan di bidang olahraga, seni, dan kewirausahaan.</p></li><li class="" data-start="2478" data-end="2651"><p class="mb-3" data-start="2481" data-end="2651"><strong data-start="2481" data-end="2516">Nilai-Nilai Keagamaan dan Moral</strong><br data-start="2516" data-end="2519" /> Prinsip kepemimpinan yang menjunjung nilai-nilai moral dan integritas menjadikan pasangan ini selaras dengan arah perjuangan PKS.</p></li><li class="" data-start="2653" data-end="2843"><p class="mb-3" data-start="2656" data-end="2843"><strong data-start="2656" data-end="2703">Komitmen terhadap Pembangunan Berkelanjutan</strong><br data-start="2703" data-end="2706" /> Visi pembangunan jangka panjang yang mencakup aspek sosial, ekonomi, dan lingkungan menjadi perhatian khusus dalam kolaborasi bersama.</p></li><li class="" data-start="2845" data-end="3049"><p class="mb-3" data-start="2848" data-end="3049"><strong data-start="2848" data-end="2889">Dorongan untuk Pemerataan Pembangunan</strong><br data-start="2889" data-end="2892" /> Tanggapan positif terhadap masukan terkait pembangunan yang merata di seluruh wilayah kecamatan dan desa menunjukkan keterbukaan terhadap aspirasi publik.</p></li></ol>',
                'picture1' => 'image/blog/pks-bulukumba-tegaskan-dukungan-ke-andi-utta-edy-manaf-ini-8-alasannya.png',
                'picture2' => 'default.png',
                'picture3' => 'default.png',
                'tags' => ['A. Utta', 'Usung', 'Pilkada', 'Mandat'],
                'category' => 'News',
                'visit' => 50,
            ],
            [
                'user_id' => 1,
                'slug' => 'tentang-pks-bulukumba',
                'title' => 'Tentang PKS Bulukumba',
                'excerpt' => 'PKS membawa visi menjadi Partai Islam rahmatan lil ‘alamin yang kokoh dan terdepan dalam melayani rakyat dan Negara Kesatuan Republik Indonesia.',
                'body1' => ' <p class="mb-3">Partai Keadilan Sejahtera (PKS) resmi dideklarasikan pada 20 April 2002 di Monas, Jakarta, dan pada tahun yang sama disahkan sebagai partai politik berbadan hukum oleh Kementerian Kehakiman dan Hak Asasi Manusia. PKS membawa visi menjadi Partai Islam rahmatan lil ‘alamin yang kokoh dan terdepan dalam melayani rakyat dan Negara Kesatuan Republik Indonesia.</p>',
                'body2' => '<p class="mb-3">  Struktur DPD PKS Bulukumba terdiri dari tiga komponen utama. Pertama, unsur penasihat yaitu Majelis Pertimbangan Daerah (MPD) yang dipimpin Lukman, bertugas memberi arahan strategis dan pertimbangan kebijakan. Kedua, unsur pelaksana harian yaitu Dewan Pengurus Daerah (DPD) yang menjalankan program partai, dipimpin A. Muh. Sabri Mustari, S.S. sebagai Ketua, bersama Dr. Supriadi, S.P., M.Si. sebagai Sekretaris dan Ahmad Rasyidi, S.Pd. sebagai Bendahara, serta Muh. Aswad sebagai Ketua Bidang Kaderisasi. Ketiga, unsur pengawas yaitu Dewan Etik Daerah (DED) yang diketuai KH. Usman Abdullah Rasyid, Lc., berperan memastikan etika dan disiplin organisasi dijaga. Sinergi antar ketiga unsur ini menjadi fondasi kokoh dalam mewujudkan pelayanan PKS kepada masyarakat Bulukumba.</p>',
                'picture1' => 'image/assets/logo-pks.png',
                'picture2' => 'default.png',
                'picture3' => 'default.png',
                'tags' => ['Tentang', 'DPD', 'PKD', 'Bulukumba'],
                'category' => 'News',
                'visit' => 50,
            ],
        ];

        foreach ($datas as $data) {
            Blog::create([
                'user_id' => $data['user_id'],
                'slug' => $data['slug'],
                'title' => $data['title'],
                'excerpt' => $data['excerpt'],
                'body1' => $data['body1'],
                'body2' => $data['body2'],
                'picture1' => $data['picture1'],
                'picture2' => $data['picture2'],
                'picture3' => $data['picture3'],
                'tags' => $data['tags'],
                'category' => $data['category'],
                'visit' => $data['visit'],
            ]);
        }
    }
}

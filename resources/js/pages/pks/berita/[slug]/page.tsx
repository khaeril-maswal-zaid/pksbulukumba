import NewsDetail from "@/components/pks/news/news-detail"
import Navbar from "@/components/pks/navbar"
import Footer from "@/components/pks/footer"

// Sample news data - in a real application, this would come from a database or API
const newsItems = [
  {
    id: 1,
    slug: "pks-bulukumba-gelar-bakti-sosial",
    title: "PKS Bulukumba Gelar Bakti Sosial di Desa Terpencil",
    excerpt:
      "PKS Bulukumba mengadakan kegiatan bakti sosial berupa pembagian sembako dan pemeriksaan kesehatan gratis di desa terpencil.",
    content: `
      <p>BULUKUMBA - Dewan Pengurus Daerah (DPD) Partai Keadilan Sejahtera (PKS) Kabupaten Bulukumba menggelar kegiatan bakti sosial di Desa Tanah Toa, Kecamatan Kajang, Sabtu (12/4/2023). Kegiatan ini merupakan bagian dari program rutin PKS Bulukumba dalam rangka membantu masyarakat yang membutuhkan.</p>
      
      <p>Ketua DPD PKS Bulukumba, H. Ahmad Fauzan, S.H., mengatakan bahwa kegiatan bakti sosial ini merupakan bentuk kepedulian PKS terhadap masyarakat, khususnya yang berada di daerah terpencil.</p>
      
      <p>"Kami ingin memastikan bahwa saudara-saudara kita yang berada di daerah terpencil juga mendapatkan perhatian dan bantuan. Ini adalah bentuk komitmen PKS untuk selalu hadir di tengah masyarakat," ujar Ahmad Fauzan.</p>
      
      <p>Dalam kegiatan tersebut, PKS Bulukumba membagikan sembako kepada 200 keluarga kurang mampu. Selain itu, juga diadakan pemeriksaan kesehatan gratis yang diikuti oleh sekitar 150 warga.</p>
      
      <p>"Alhamdulillah, antusiasme masyarakat sangat tinggi. Mereka sangat berterima kasih atas bantuan yang diberikan. Ini membuktikan bahwa kehadiran PKS di tengah masyarakat sangat dirasakan manfaatnya," tambah Ahmad Fauzan.</p>
      
      <p>Sementara itu, Kepala Desa Tanah Toa, Abdul Karim, mengapresiasi kegiatan yang dilakukan oleh PKS Bulukumba. Menurutnya, kegiatan seperti ini sangat membantu masyarakat, terutama yang berada di daerah terpencil.</p>
      
      <p>"Kami sangat berterima kasih kepada PKS Bulukumba yang telah mengadakan kegiatan bakti sosial di desa kami. Semoga kegiatan seperti ini dapat terus dilakukan di masa mendatang," ujar Abdul Karim.</p>
      
      <p>Kegiatan bakti sosial ini juga dihadiri oleh anggota DPRD Kabupaten Bulukumba dari Fraksi PKS, tokoh masyarakat, dan kader PKS Bulukumba.</p>
      
      <p>PKS Bulukumba berencana akan terus menggelar kegiatan serupa di desa-desa lain di Kabupaten Bulukumba sebagai bentuk kepedulian terhadap masyarakat.</p>
    `,
    date: "12 April 2023",
    author: "Admin PKS Bulukumba",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Sosial",
    tags: ["bakti sosial", "kesehatan", "sembako"],
  },
  {
    id: 2,
    slug: "kader-pks-bulukumba-raih-penghargaan",
    title: "Kader PKS Bulukumba Raih Penghargaan Tokoh Inspiratif",
    excerpt: "Salah satu kader PKS Bulukumba berhasil meraih penghargaan sebagai tokoh inspiratif tingkat provinsi.",
    content: `
      <p>MAKASSAR - Kader Partai Keadilan Sejahtera (PKS) Bulukumba, Hj. Siti Rahmah, M.Pd., berhasil meraih penghargaan sebagai Tokoh Inspiratif Tingkat Provinsi Sulawesi Selatan Tahun 2023. Penghargaan tersebut diberikan oleh Gubernur Sulawesi Selatan dalam acara yang digelar di Kantor Gubernur, Makassar, Selasa (28/3/2023).</p>
      
      <p>Hj. Siti Rahmah yang juga menjabat sebagai Sekretaris DPD PKS Bulukumba, mendapatkan penghargaan tersebut atas dedikasinya dalam bidang pendidikan dan pemberdayaan perempuan di Kabupaten Bulukumba.</p>
      
      <p>"Alhamdulillah, saya bersyukur atas penghargaan ini. Ini adalah bentuk apresiasi terhadap kerja keras dan dedikasi kita semua dalam membangun masyarakat, khususnya di bidang pendidikan dan pemberdayaan perempuan," ujar Siti Rahmah saat diwawancarai usai menerima penghargaan.</p>
      
      <p>Siti Rahmah dikenal aktif dalam berbagai kegiatan sosial dan pendidikan di Kabupaten Bulukumba. Ia juga merupakan pendiri Rumah Belajar Cahaya Ilmu yang telah membantu ratusan anak kurang mampu untuk mendapatkan pendidikan yang layak.</p>
      
      <p>Ketua DPD PKS Bulukumba, H. Ahmad Fauzan, S.H., menyampaikan rasa bangganya atas prestasi yang diraih oleh Siti Rahmah.</p>
      
      <p>"Kami sangat bangga dengan prestasi yang diraih oleh Ibu Siti Rahmah. Ini membuktikan bahwa kader-kader PKS tidak hanya aktif dalam politik, tetapi juga memiliki kepedulian dan dedikasi yang tinggi dalam membangun masyarakat," ujar Ahmad Fauzan.</p>
      
      <p>Penghargaan Tokoh Inspiratif Tingkat Provinsi Sulawesi Selatan diberikan kepada tokoh-tokoh yang dinilai memiliki kontribusi signifikan dalam pembangunan masyarakat di berbagai bidang, seperti pendidikan, kesehatan, ekonomi, dan sosial.</p>
      
      <p>Dalam kesempatan tersebut, Gubernur Sulawesi Selatan mengapresiasi dedikasi dan kontribusi para penerima penghargaan dalam membangun masyarakat Sulawesi Selatan.</p>
      
      <p>"Para tokoh inspiratif ini telah menunjukkan dedikasi dan kontribusi yang luar biasa dalam membangun masyarakat. Mereka adalah teladan bagi kita semua," ujar Gubernur Sulawesi Selatan.</p>
      
      <p>Dengan penghargaan ini, Siti Rahmah berjanji akan terus berkontribusi dalam membangun masyarakat, khususnya di bidang pendidikan dan pemberdayaan perempuan.</p>
      
      <p>"Penghargaan ini akan menjadi motivasi bagi saya untuk terus berkontribusi dalam membangun masyarakat. Saya berharap apa yang saya lakukan dapat menginspirasi banyak orang untuk turut serta dalam membangun masyarakat yang lebih baik," tutup Siti Rahmah.</p>
    `,
    date: "28 Maret 2023",
    author: "Admin PKS Bulukumba",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Prestasi",
    tags: ["penghargaan", "tokoh inspiratif", "pendidikan"],
  },
  {
    id: 3,
    slug: "pks-bulukumba-dukung-program-umkm",
    title: "PKS Bulukumba Dukung Program Pemberdayaan UMKM",
    excerpt: "PKS Bulukumba menginisiasi program pemberdayaan UMKM untuk meningkatkan perekonomian masyarakat lokal.",
    content: `
      <p>BULUKUMBA - Dewan Pengurus Daerah (DPD) Partai Keadilan Sejahtera (PKS) Kabupaten Bulukumba menginisiasi program pemberdayaan Usaha Mikro, Kecil, dan Menengah (UMKM) untuk meningkatkan perekonomian masyarakat lokal. Program ini diluncurkan pada Rabu (15/3/2023) di Aula Kantor DPD PKS Bulukumba.</p>
      
      <p>Ketua DPD PKS Bulukumba, H. Ahmad Fauzan, S.H., mengatakan bahwa program pemberdayaan UMKM ini merupakan bentuk komitmen PKS dalam mendukung pertumbuhan ekonomi masyarakat Bulukumba.</p>
      
      <p>"UMKM adalah tulang punggung perekonomian masyarakat. Oleh karena itu, PKS Bulukumba berkomitmen untuk mendukung dan memberdayakan UMKM agar dapat berkembang dan bersaing di pasar yang lebih luas," ujar Ahmad Fauzan dalam sambutannya.</p>
      
      <p>Program pemberdayaan UMKM yang diinisiasi oleh PKS Bulukumba meliputi pelatihan manajemen usaha, pemasaran digital, akses permodalan, dan pendampingan usaha. Program ini akan dilaksanakan secara bertahap di seluruh kecamatan di Kabupaten Bulukumba.</p>
      
      <p>"Kami akan memberikan pelatihan dan pendampingan kepada pelaku UMKM agar mereka dapat mengembangkan usahanya. Selain itu, kami juga akan membantu mereka dalam hal pemasaran produk, terutama melalui platform digital," tambah Ahmad Fauzan.</p>
      
      <p>Bendahara DPD PKS Bulukumba, H. Muhammad Ridwan, S.E., yang juga merupakan pengusaha sukses di Bulukumba, mengatakan bahwa pihaknya juga akan membantu pelaku UMKM dalam hal akses permodalan.</p>
      
      <p>"Salah satu kendala yang dihadapi oleh pelaku UMKM adalah akses permodalan. Oleh karena itu, kami akan membantu mereka untuk mendapatkan akses permodalan, baik melalui program pemerintah maupun lembaga keuangan lainnya," ujar Muhammad Ridwan.</p>
      
      <p>Sementara itu, Kepala Dinas Koperasi dan UMKM Kabupaten Bulukumba, Drs. Andi Syamsul Bahri, yang hadir dalam acara tersebut, mengapresiasi inisiatif yang dilakukan oleh PKS Bulukumba.</p>
      
      <p>"Kami sangat mengapresiasi inisiatif yang dilakukan oleh PKS Bulukumba dalam mendukung pemberdayaan UMKM. Ini sejalan dengan program pemerintah dalam meningkatkan perekonomian masyarakat melalui pemberdayaan UMKM," ujar Andi Syamsul Bahri.</p>
      
      <p>Dalam kesempatan tersebut, PKS Bulukumba juga menandatangani nota kesepahaman dengan beberapa lembaga keuangan dan marketplace untuk mendukung program pemberdayaan UMKM.</p>
      
      <p>"Kami berharap program ini dapat memberikan manfaat yang besar bagi pelaku UMKM di Kabupaten Bulukumba. Dengan demikian, perekonomian masyarakat dapat meningkat dan kesejahteraan masyarakat pun akan terwujud," tutup Ahmad Fauzan.</p>
    `,
    date: "15 Maret 2023",
    author: "Admin PKS Bulukumba",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Ekonomi",
    tags: ["UMKM", "ekonomi", "pemberdayaan"],
  },
  {
    id: 4,
    slug: "fraksi-pks-bulukumba-tolak-kenaikan-bbm",
    title: "Fraksi PKS Bulukumba Tolak Kenaikan Harga BBM",
    excerpt:
      "Fraksi PKS di DPRD Bulukumba menyatakan sikap menolak rencana kenaikan harga BBM yang memberatkan masyarakat.",
    content: `
      <p>BULUKUMBA - Fraksi Partai Keadilan Sejahtera (PKS) di DPRD Kabupaten Bulukumba secara resmi menyatakan sikap menolak rencana kenaikan harga Bahan Bakar Minyak (BBM) yang dinilai akan memberatkan masyarakat. Pernyataan sikap tersebut disampaikan dalam konferensi pers yang digelar di Kantor DPRD Bulukumba, Kamis (2/3/2023).</p>
      
      <p>Ketua Fraksi PKS DPRD Bulukumba, H. Abdul Karim, S.Ag., mengatakan bahwa kenaikan harga BBM akan berdampak pada kenaikan harga kebutuhan pokok dan biaya transportasi yang pada akhirnya akan memberatkan masyarakat, terutama masyarakat menengah ke bawah.</p>
      
      <p>"Kami dari Fraksi PKS DPRD Bulukumba dengan tegas menolak rencana kenaikan harga BBM. Kenaikan harga BBM akan memicu kenaikan harga kebutuhan pokok dan biaya transportasi yang pada akhirnya akan memberatkan masyarakat, terutama masyarakat menengah ke bawah," ujar Abdul Karim.</p>
      
      <p>Abdul Karim menambahkan bahwa pemerintah seharusnya mencari solusi lain untuk mengatasi defisit anggaran, bukan dengan menaikkan harga BBM yang akan berdampak langsung pada masyarakat.</p>
      
      <p>"Pemerintah seharusnya mencari solusi lain untuk mengatasi defisit anggaran, misalnya dengan melakukan efisiensi anggaran, mengurangi impor, atau meningkatkan ekspor. Jangan sampai beban defisit anggaran ditanggung oleh masyarakat melalui kenaikan harga BBM," tambah Abdul Karim.</p>
      
      <p>Anggota Fraksi PKS DPRD Bulukumba lainnya, Hj. Nurhayati, S.Pd., mengatakan bahwa Fraksi PKS akan mengajukan hak interpelasi jika pemerintah tetap menaikkan harga BBM.</p>
      
      <p>"Kami akan menggunakan hak interpelasi untuk meminta penjelasan dari pemerintah jika tetap menaikkan harga BBM. Kami juga akan mengajak fraksi-fraksi lain di DPRD Bulukumba untuk bersama-sama menolak kenaikan harga BBM," ujar Nurhayati.</p>
      
      <p>Sementara itu, Ketua DPD PKS Bulukumba, H. Ahmad Fauzan, S.H., yang juga hadir dalam konferensi pers tersebut, mengatakan bahwa PKS Bulukumba akan terus mengawal dan menyuarakan aspirasi masyarakat.</p>
      
      <p>"PKS Bulukumba akan terus mengawal dan menyuarakan aspirasi masyarakat. Kami akan terus berjuang untuk kepentingan masyarakat, termasuk dalam hal menolak kebijakan yang memberatkan masyarakat seperti kenaikan harga BBM," ujar Ahmad Fauzan.</p>
      
      <p>Dalam kesempatan tersebut, Fraksi PKS DPRD Bulukumba juga mengajak masyarakat untuk bersama-sama menyuarakan penolakan terhadap rencana kenaikan harga BBM.</p>
      
      <p>"Kami mengajak seluruh masyarakat Bulukumba untuk bersama-sama menyuarakan penolakan terhadap rencana kenaikan harga BBM. Mari kita bersatu untuk menolak kebijakan yang memberatkan masyarakat," tutup Abdul Karim.</p>
    `,
    date: "2 Maret 2023",
    author: "Admin PKS Bulukumba",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Politik",
    tags: ["BBM", "DPRD", "kebijakan"],
  },
]

// Function to find news by slug
const getNewsBySlug = (slug: string) => {
  return newsItems.find((news) => news.slug === slug)
}

// Function to get related news (excluding the current one)
const getRelatedNews = (currentSlug: string, limit = 3) => {
  return newsItems.filter((news) => news.slug !== currentSlug).slice(0, limit)
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<String> {
  const news = getNewsBySlug(params.slug)

  if (!news) {
    return {
      title: "Berita Tidak Ditemukan - PKS Bulukumba",
      description: "Berita yang Anda cari tidak ditemukan.",
    }
  }

  return {
    title: `${news.title} - PKS Bulukumba`,
    description: news.excerpt,
  }
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const news = getNewsBySlug(params.slug)
  const relatedNews = getRelatedNews(params.slug)


  return (
    <>
      <Navbar />
      <NewsDetail news={news} relatedNews={relatedNews} />
      <Footer />
    </>
  )
}

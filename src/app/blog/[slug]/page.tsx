'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { KusenButton } from '@/components/KusenButton';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}

const blogPosts: { [key: string]: BlogPost } = {
  'tips-merawat-kusen-kayu': {
    title: 'Tips Merawat Kusen Kayu Agar Awet dan Tahan Lama',
    date: '15 April 2026',
    readTime: '5 menit',
    category: 'Tips & Trik',
    image: 'https://images.pexels.com/photos/2255491/pexels-photo-2255491.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `
      <p class="mb-4">Kusen kayu adalah salah satu elemen penting dalam rumah yang membutuhkan perawatan khusus agar tetap awet dan tahan lama. Berikut adalah beberapa tips merawat kusen kayu yang bisa Anda terapkan:</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">1. Bersihkan Secara Teratur</h3>
      <p class="mb-4">Bersihkan kusen kayu secara teratur menggunakan kain lembut yang sedikit lembab. Hindari penggunaan bahan pembersih yang mengandung bahan kimia keras karena dapat merusak finishing kayu.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">2. Hindari Paparan Air Berlebih</h3>
      <p class="mb-4">Meskipun kayu telah dilapisi finishing, paparan air berlebih tetap dapat merusak kusen. Pastikan area sekitar kusen tetap kering, terutama pada kusen jendela dan pintu kamar mandi.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">3. Lakukan Finishing Ulang</h3>
      <p class="mb-4">Setiap 2-3 tahun, lakukan finishing ulang pada kusen kayu untuk menjaga tampilan dan perlindungan terhadap cuaca. Gunakan cat atau varnish berkualitas tinggi.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">4. Perhatikan Tanda Kerusakan</h3>
      <p class="mb-4">Selalu perhatikan tanda-tanda kerusakan seperti retakan, jamur, atau serangan rayap. Segera lakukan perbaikan jika menemukan masalah tersebut sebelum kerusakan semakin parah.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">5. Gunakan Pelindung Tambahan</h3>
      <p class="mb-4">Untuk kusen yang terpapar sinar matahari langsung, pertimbangkan untuk menggunakan pelindung tambahan seperti tirai atau canopy untuk mengurangi dampak UV.</p>
      
      <p class="mt-6">Dengan merawat kusen kayu secara teratur dan benar, Anda dapat memastikan kusen tetap indah dan fungsional dalam jangka waktu yang lama.</p>
    `,
  },
  'perbedaan-kayu-jati-dan-mahoni': {
    title: 'Perbedaan Kayu Jati dan Mahoni untuk Kusen',
    date: '10 April 2026',
    readTime: '7 menit',
    category: 'Material',
    image: 'https://images.pexels.com/photos/1595811/pexels-photo-1595811.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `
      <p class="mb-4">Kayu jati dan kayu mahoni adalah dua jenis kayu yang paling populer untuk pembuatan kusen. Keduanya memiliki kelebihan dan karakteristik yang berbeda. Berikut adalah perbandingannya:</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">Kayu Jati</h3>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Tahan terhadap cuaca ekstrem dan serangan rayap</li>
        <li>Tekstur kayu yang keras dan padat</li>
        <li>Warna coklat keemasan yang elegan</li>
        <li>Harga lebih mahal dibandingkan kayu lain</li>
        <li>Umur penggunaan bisa mencapai puluhan tahun</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">Kayu Mahoni</h3>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Tekstur kayu yang lebih halus dan mudah diukir</li>
        <li>Warna merah kecoklatan yang hangat</li>
        <li>Harga lebih terjangkau dibandingkan kayu jati</li>
        <li>Kurang tahan terhadap cuaca ekstrem</li>
        <li>Cocok untuk penggunaan indoor</li>
      </ul>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">Kesimpulan</h3>
      <p class="mb-4">Pilih kayu jati untuk kusen outdoor yang membutuhkan ketahanan maksimal terhadap cuaca. Sedangkan kayu mahoni lebih cocok untuk kusen indoor dengan budget lebih terjangkau dan kebutuhan estetika yang tinggi.</p>
    `,
  },
  'tren-desain-pintu-2026': {
    title: 'Tren Desain Pintu Modern di Tahun 2026',
    date: '5 April 2026',
    readTime: '4 menit',
    category: 'Desain',
    image: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `
      <p class="mb-4">Tahun 2026 membawa berbagai tren desain pintu yang modern dan inovatif. Berikut adalah beberapa tren yang sedang populer:</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">1. Pintu Minimalis dengan Garis Bersih</h3>
      <p class="mb-4">Desain minimalis dengan garis-garis bersih dan simpel masih menjadi favorit. Pintu dengan panel datar dan handle minimalis memberikan kesan modern dan elegan.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">2. Pintu dengan Kaca Besar</h3>
      <p class="mb-4">Pintu dengan kaca besar atau full glass memberikan kesan luas dan modern. Kaca tempered dengan frame kayu tipis menjadi kombinasi yang populer.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">3. Warna Natural dan Earthy</h3>
      <p class="mb-4">Warna-warna natural seperti coklat kayu, beige, dan hijau olive menjadi tren. Warna-warna ini memberikan kesan hangat dan natural pada rumah.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">4. Smart Door Technology</h3>
      <p class="mb-4">Integrasi teknologi pintar seperti smart lock, fingerprint scanner, dan video doorbell semakin populer di pintu modern.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">5. Pintu Geser dan Lipat</h3>
      <p class="mb-4">Untuk rumah dengan ruang terbatas, pintu geser dan pintu lipat menjadi solusi praktis yang tetap stylish dan modern.</p>
    `,
  },
  'cara-memilih-kusen-jendela': {
    title: 'Cara Memilih Kusen Jendela yang Tepat',
    date: '1 April 2026',
    readTime: '6 menit',
    category: 'Tips & Trik',
    image: 'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `
      <p class="mb-4">Memilih kusen jendela yang tepat sangat penting untuk kenyamanan dan estetika rumah. Berikut adalah panduan lengkapnya:</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">1. Sesuaikan dengan Gaya Rumah</h3>
      <p class="mb-4">Pilih kusen jendela yang sesuai dengan gaya arsitektur rumah Anda. Rumah modern cocok dengan kusen minimalis, sedangkan rumah klasik cocok dengan kusen berukir.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">2. Pilih Material yang Tepat</h3>
      <p class="mb-4">Kayu jati untuk outdoor, kayu mahoni untuk indoor, atau kayu ulin untuk area lembab. Pertimbangkan juga kombinasi dengan aluminium untuk ketahanan ekstra.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">3. Perhatikan Ukuran dan Proporsi</h3>
      <p class="mb-4">Ukuran kusen harus proporsional dengan dinding dan ruangan. Jangan terlalu besar atau terlalu kecil agar seimbang secara visual.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">4. Pertimbangkan Tipe Jendela</h3>
      <p class="mb-4">Pilih tipe jendela sesuai kebutuhan: casement untuk sirkulasi udara maksimal, sliding untuk hemat ruang, atau awning untuk perlindungan hujan.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">5. Finishing yang Berkualitas</h3>
      <p class="mb-4">Gunakan finishing berkualitas tinggi untuk melindungi kusen dari cuaca dan memperpanjang umur penggunaan.</p>
    `,
  },
  'kelebihan-kayu-ulin': {
    title: 'Kelebihan Kayu Ulin untuk Kusen Outdoor',
    date: '28 Maret 2026',
    readTime: '5 menit',
    category: 'Material',
    image: 'https://images.pexels.com/photos/159838/pexels-photo-159838.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `
      <p class="mb-4">Kayu ulin atau ironwood adalah salah satu jenis kayu terbaik untuk penggunaan outdoor. Berikut adalah kelebihannya:</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">1. Tahan Air dan Kelembaban</h3>
      <p class="mb-4">Kayu ulin memiliki kandungan minyak alami yang membuatnya sangat tahan terhadap air dan kelembaban, ideal untuk area outdoor dan kamar mandi.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">2. Kekerasan Tinggi</h3>
      <p class="mb-4">Dengan kekerasan yang tinggi, kayu ulin tahan terhadap benturan dan goresan, menjaga kusen tetap dalam kondisi baik dalam jangka waktu lama.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">3. Tahan Rayap</h3>
      <p class="mb-4">Kayu ulin secara alami tahan terhadap serangan rayap dan hama kayu lainnya, mengurangi risiko kerusakan struktural.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">4. Warna Elegan</h3>
      <p class="mb-4">Warna coklat gelap keunguan kayu ulin memberikan kesan elegan dan mewah pada kusen.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">5. Umur Panjang</h3>
      <p class="mb-4">Dengan perawatan yang baik, kusen kayu ulin dapat bertahan hingga 50 tahun atau lebih, menjadikannya investasi jangka panjang yang menguntungkan.</p>
    `,
  },
  'inspirasi-kusen-rustic': {
    title: 'Inspirasi Desain Kusen Gaya Rustic',
    date: '20 Maret 2026',
    readTime: '4 menit',
    category: 'Desain',
    image: 'https://images.pexels.com/photos/1092964/pexels-photo-1092964.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `
      <p class="mb-4">Gaya rustic memberikan kesan natural dan hangat pada rumah. Berikut adalah inspirasi desain kusen gaya rustic:</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">1. Kusen dengan Tekstur Kayu Alami</h3>
      <p class="mb-4">Biarkan tekstur alami kayu terlihat dengan finishing yang transparan. Serat kayu yang eksplisit memberikan karakter rustic yang kuat.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">2. Warna Kayu Gelap</h3>
      <p class="mb-4">Gunakan warna kayu gelap seperti coklat tua atau walnut untuk memberikan kesan hangat dan elegan.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">3. Detail Besi Wrought Iron</h3>
      <p class="mb-4">Kombinasikan kusen kayu dengan aksen besi wrought iron untuk handle atau engsel, memberikan sentuhan rustic klasik.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">4. Desain Tebal dan Kokoh</h3>
      <p class="mb-4">Kusen rustic biasanya memiliki dimensi yang lebih tebal dan kokoh, memberikan kesan kuat dan tahan lama.</p>
      
      <h3 class="text-xl font-bold text-[var(--color-walnut)] mt-6 mb-3">5. Kombinasi dengan Batu Alam</h3>
      <p class="mb-4">Padukan kusen kayu rustic dengan dinding batu alam untuk menciptakan tampilan yang harmonis dan natural.</p>
    `,
  },
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    params.then(p => {
      const postData = blogPosts[p.slug];
      if (postData) {
        setPost(postData);
      }
      setLoading(false);
    });
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center">
        <div className="text-2xl font-bold text-[var(--color-walnut)]">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--color-walnut)] mb-4">Artikel Tidak Ditemukan</h1>
          <Link href="/blog">
            <KusenButton>Kembali ke Blog</KusenButton>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <Navbar />
      <main className="pt-24">
        <div className="container-main py-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[var(--color-teak)] hover:text-[var(--color-walnut)] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Blog
          </Link>

          <article className="max-w-4xl mx-auto">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-4 text-sm text-[var(--color-stone)] mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <span className="bg-[var(--color-teak)] text-white text-xs font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl text-[var(--color-walnut)] mb-8">
              {post.title}
            </h1>

            <div 
              className="prose prose-lg max-w-none text-[var(--color-charcoal)] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-[var(--color-mist)]">
              <div className="flex items-center justify-between">
                <Link href="/blog">
                  <KusenButton variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Artikel Lainnya
                  </KusenButton>
                </Link>
                <button className="flex items-center gap-2 text-[var(--color-stone)] hover:text-[var(--color-teak)] transition-colors">
                  <Share2 className="w-5 h-5" />
                  Bagikan
                </button>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

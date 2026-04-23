import { fetchKusenList, Kusen } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let kusenList: Kusen[] = [];
  try {
    kusenList = await fetchKusenList();
  } catch (error) {
    console.error('Failed to fetch products during build:', error);
  }
  const featuredProducts = kusenList.filter(k => k.terjual >= 10).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-amber-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              <span className="text-3xl">🏠</span>
              <span className="bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent font-extrabold">
                Toko Kusen Online
              </span>
            </h1>
            <nav className="hidden md:flex gap-4 text-sm">
              <Link href="/" className="hover:text-amber-200 font-semibold">Beranda</Link>
              <Link href="/produk" className="hover:text-amber-200">Semua Produk</Link>
              <Link href="/kategori/Pintu" className="hover:text-amber-200">Pintu</Link>
              <Link href="/kategori/Jendela" className="hover:text-amber-200">Jendela</Link>
              <Link href="/cart" className="hover:text-amber-200">🛒 Keranjang</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-amber-700 rounded-2xl p-8 md:p-12 text-white mb-12 shadow-2xl">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Kusen Kayu Berkualitas Premium</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Temukan berbagai jenis kusen kayu berkualitas tinggi untuk hunian impian Anda. Dari kayu jati premium hingga kayu ulin tahan air.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/produk" className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-100 transition">
                Lihat Produk
              </Link>
              <Link href="/tentang" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                Tentang Kami
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">{kusenList.length}</div>
                <div className="text-sm opacity-80">Produk Tersedia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">6+</div>
                <div className="text-sm opacity-80">Jenis Kayu</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-80">Pelanggan Puas</div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Kategori Produk</h2>
            <p className="text-gray-600">Pilih kategori sesuai kebutuhan Anda</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/kategori/Pintu" className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition text-center">
              <div className="text-5xl mb-4">🚪</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pintu</h3>
              <p className="text-gray-600 text-sm">Kusen pintu berkualitas dari berbagai jenis kayu</p>
            </Link>
            <Link href="/kategori/Jendela" className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition text-center">
              <div className="text-5xl mb-4">🪟</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Jendela</h3>
              <p className="text-gray-600 text-sm">Jendela kayu dengan desain modern dan klasik</p>
            </Link>
            <Link href="/kategori/Daun Pintu" className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition text-center">
              <div className="text-5xl mb-4">🚪</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Daun Pintu</h3>
              <p className="text-gray-600 text-sm">Daun pintu solid dengan finishing premium</p>
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Produk Unggulan</h2>
            <p className="text-gray-600">Produk terlaris dan paling diminati pelanggan kami</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((kusen) => (
              <div key={kusen.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="relative">
                  {kusen.gambarUrl ? (
                    <Image 
                      src={kusen.gambarUrl} 
                      alt={kusen.nama} 
                      width={400} 
                      height={200} 
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-orange-200 to-amber-300 flex items-center justify-center">
                      <span className="text-6xl">🪵</span>
                    </div>
                  )}
                  {kusen.terjual < 10 && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">Baru</span>
                  )}
                  {kusen.terjual >= 50 && (
                    <span className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">Best Seller</span>
                  )}
                </div>
                <div className="p-4">
                  <span className="text-xs text-orange-600 font-semibold">{kusen.kategori}</span>
                  <h3 className="text-lg font-bold text-gray-800 mt-1 mb-2">{kusen.nama}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-sm text-gray-600">({kusen.rating})</span>
                    <span className="text-sm text-gray-600">{kusen.terjual} terjual</span>
                  </div>
                  <div className="flex gap-2 mb-3 text-xs text-gray-600">
                    <span>{kusen.jenisKayu}</span>
                    <span>•</span>
                    <span>{kusen.panjang} cm</span>
                  </div>
                  <div className="text-xl font-bold text-orange-600 mb-4">
                    Rp {kusen.harga.toLocaleString('id-ID')}
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/produk/${kusen.id}`} className="flex-1 bg-orange-600 text-white py-2 rounded-lg text-center font-semibold hover:bg-orange-700 transition">
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/produk" className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
              Lihat Semua Produk →
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Apa Kata Pelanggan Kami</h2>
            <p className="text-gray-600">Testimoni dari pelanggan yang puas dengan kualitas produk kami</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-yellow-500 text-xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">&ldquo;Kualitas kusen kayu sangat bagus, finishing rapi, dan pengiriman tepat waktu. Sangat recommended untuk yang sedang renovasi rumah.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600"></div>
                <div>
                  <div className="font-semibold text-gray-800">Budi Santoso</div>
                  <div className="text-sm text-gray-600">Jakarta Selatan</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-yellow-500 text-xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">&ldquo;Sudah beli beberapa kali untuk proyek konstruksi saya. Kayu jati yang dijual asli dan berkualitas premium. Harga juga sangat bersaing.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-600"></div>
                <div>
                  <div className="font-semibold text-gray-800">Ahmad Wijaya</div>
                  <div className="text-sm text-gray-600">Bandung</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-yellow-500 text-xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">&ldquo;Pelayanan sangat ramah dan responsif. Konsultasi sebelum pembelian sangat membantu saya memilih jenis kayu yang tepat.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600"></div>
                <div>
                  <div className="font-semibold text-gray-800">Siti Rahayu</div>
                  <div className="text-sm text-gray-600">Surabaya</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🏠 Toko Kusen Online</h3>
              <p className="text-gray-400 text-sm mb-4">Penyedia kusen kayu berkualitas premium untuk segala kebutuhan konstruksi dan renovasi rumah Anda.</p>
              <div className="flex gap-4">
                <a href="#" className="text-2xl hover:text-orange-400 transition">📘</a>
                <a href="#" className="text-2xl hover:text-orange-400 transition">📸</a>
                <a href="#" className="text-2xl hover:text-orange-400 transition">🐦</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kategori</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/kategori/Pintu" className="hover:text-white transition">Pintu</Link></li>
                <li><Link href="/kategori/Jendela" className="hover:text-white transition">Jendela</Link></li>
                <li><Link href="/kategori/Daun Pintu" className="hover:text-white transition">Daun Pintu</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Informasi</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/tentang" className="hover:text-white transition">Tentang Kami</Link></li>
                <li><Link href="/kontak" className="hover:text-white transition">Kontak</Link></li>
                <li><Link href="/pesanan" className="hover:text-white transition">Pesanan Saya</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📍 Jl. Kayu Jati No. 123, Jakarta</li>
                <li>📞 +62 21 1234 5678</li>
                <li>✉️ info@tokokusen.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            &copy; 2024 Toko Kusen Online. Semua hak dilindungi.
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { fetchKusenList, Kusen } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [kusenList, setKusenList] = useState<Kusen[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Kusen[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      const savedWishlist = localStorage.getItem('wishlist');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    }
    return [];
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchKusenList()
      .then(data => {
        setKusenList(data);
        const featured = data.filter(k => k.terjual >= 10).slice(0, 6);
        setFeaturedProducts(featured);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch products during build:', err);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const toggleWishlist = (productId: number) => {
    const newWishlist = wishlist.includes(productId)
      ? wishlist.filter(id => id !== productId)
      : [...wishlist, productId];
    setWishlist(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center">
        <div className="text-2xl font-bold text-orange-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white shadow-xl backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
              <span className="text-4xl drop-shadow-lg">🏠</span>
              <span className="bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent font-extrabold text-2xl md:text-3xl tracking-tight">
                Toko Kusen Online
              </span>
            </Link>
            <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
              <Link href="/" className="hover:text-amber-200 hover:scale-105 transition-all duration-200">Beranda</Link>
              <Link href="/produk" className="hover:text-amber-200 hover:scale-105 transition-all duration-200">Semua Produk</Link>
              <Link href="/kategori/Pintu" className="hover:text-amber-200 hover:scale-105 transition-all duration-200">Pintu</Link>
              <Link href="/kategori/Jendela" className="hover:text-amber-200 hover:scale-105 transition-all duration-200">Jendela</Link>
              <Link href="/wishlist" className="hover:text-amber-200 hover:scale-105 transition-all duration-200 flex items-center gap-1">
                ❤️ Wishlist ({wishlist.length})
              </Link>
              <Link href="/cart" className="hover:text-amber-200 hover:scale-105 transition-all duration-200 flex items-center gap-1">
                🛒 Keranjang
              </Link>
              <form onSubmit={handleSearch} className="relative">
                <input 
                  type="text" 
                  placeholder="Cari..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/20 text-white placeholder-white/70 px-3 py-1 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-white/50 w-32"
                />
              </form>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 rounded-3xl p-8 md:p-16 text-white mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-300/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
          <div className="relative max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Kusen Kayu Berkualitas Premium
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed max-w-2xl">
              Temukan berbagai jenis kusen kayu berkualitas tinggi untuk hunian impian Anda. Dari kayu jati premium hingga kayu ulin tahan air.
            </p>
            <div className="flex gap-4 flex-wrap mb-12">
              <Link href="/produk" className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-amber-100 hover:scale-105 transition-all duration-300 shadow-lg">
                Lihat Produk
              </Link>
              <Link href="/tentang" className="border-2 border-white/50 px-8 py-4 rounded-xl font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300">
                Tentang Kami
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="text-4xl font-bold group-hover:scale-110 transition-transform duration-300">{kusenList.length}</div>
                <div className="text-sm opacity-90 font-medium">Produk Tersedia</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold group-hover:scale-110 transition-transform duration-300">6+</div>
                <div className="text-sm opacity-90 font-medium">Jenis Kayu</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm opacity-90 font-medium">Pelanggan Puas</div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Kategori Produk</h2>
            <p className="text-gray-600 text-lg">Pilih kategori sesuai kebutuhan Anda</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/kategori/Pintu" className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🚪</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">Pintu</h3>
              <p className="text-gray-600">Kusen pintu berkualitas dari berbagai jenis kayu</p>
            </Link>
            <Link href="/kategori/Jendela" className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🪟</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">Jendela</h3>
              <p className="text-gray-600">Jendela kayu dengan desain modern dan klasik</p>
            </Link>
            <Link href="/kategori/Daun Pintu" className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🚪</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">Daun Pintu</h3>
              <p className="text-gray-600">Daun pintu solid dengan finishing premium</p>
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Produk Unggulan</h2>
            <p className="text-gray-600 text-lg">Produk terlaris dan paling diminati pelanggan kami</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((kusen) => (
              <div key={kusen.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="relative overflow-hidden">
                  {kusen.gambarUrl ? (
                    <Image 
                      src={kusen.gambarUrl} 
                      alt={kusen.nama} 
                      width={400} 
                      height={200} 
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-56 bg-gradient-to-br from-orange-200 to-amber-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <span className="text-7xl">🪵</span>
                    </div>
                  )}
                  {kusen.terjual < 10 && (
                    <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">Baru</span>
                  )}
                  {kusen.terjual >= 50 && (
                    <span className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">Best Seller</span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">{kusen.kategori}</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">{kusen.nama}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-yellow-500 text-lg">★★★★★</span>
                    <span className="text-sm text-gray-600 font-medium">({kusen.rating})</span>
                    <span className="text-sm text-gray-600">{kusen.terjual} terjual</span>
                  </div>
                  <div className="flex gap-2 mb-4 text-sm text-gray-600">
                    <span className="bg-gray-100 px-2 py-1 rounded">{kusen.jenisKayu}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">{kusen.panjang} cm</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">{kusen.lebar} cm</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-600 mb-5">
                    Rp {kusen.harga.toLocaleString('id-ID')}
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => toggleWishlist(kusen.id)}
                      className="bg-gray-200 text-gray-700 px-4 py-3 rounded-xl font-bold hover:bg-red-100 hover:text-red-600 transition-all duration-300 flex items-center justify-center"
                    >
                      {wishlist.includes(kusen.id) ? '❤️' : '🤍'}
                    </button>
                    <Link href={`/produk/${kusen.id}`} className="flex-1 bg-gradient-to-r from-orange-600 to-amber-600 text-white py-3 rounded-xl text-center font-bold hover:from-orange-700 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg">
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/produk" className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 text-white px-10 py-4 rounded-xl font-bold hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Lihat Semua Produk →
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Apa Kata Pelanggan Kami</h2>
            <p className="text-gray-600 text-lg">Testimoni dari pelanggan yang puas dengan kualitas produk kami</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-6 leading-relaxed">&ldquo;Kualitas kusen kayu sangat bagus, finishing rapi, dan pengiriman tepat waktu. Sangat recommended untuk yang sedang renovasi rumah.&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg"></div>
                <div>
                  <div className="font-bold text-gray-800">Budi Santoso</div>
                  <div className="text-sm text-gray-600">Jakarta Selatan</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-6 leading-relaxed">&ldquo;Sudah beli beberapa kali untuk proyek konstruksi saya. Kayu jati yang dijual asli dan berkualitas premium. Harga juga sangat bersaing.&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 shadow-lg"></div>
                <div>
                  <div className="font-bold text-gray-800">Ahmad Wijaya</div>
                  <div className="text-sm text-gray-600">Bandung</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-6 leading-relaxed">&ldquo;Pelayanan sangat ramah dan responsif. Konsultasi sebelum pembelian sangat membantu saya memilih jenis kayu yang tepat.&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 shadow-lg"></div>
                <div>
                  <div className="font-bold text-gray-800">Siti Rahayu</div>
                  <div className="text-sm text-gray-600">Surabaya</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">🏠 Toko Kusen Online</h3>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">Penyedia kusen kayu berkualitas premium untuk segala kebutuhan konstruksi dan renovasi rumah Anda.</p>
              <div className="flex gap-4">
                <a href="#" className="text-3xl hover:text-orange-400 transition hover:scale-110 transform duration-200">📘</a>
                <a href="#" className="text-3xl hover:text-orange-400 transition hover:scale-110 transform duration-200">📸</a>
                <a href="#" className="text-3xl hover:text-orange-400 transition hover:scale-110 transform duration-200">🐦</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Kategori</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/kategori/Pintu" className="hover:text-orange-400 hover:translate-x-2 transition-all duration-200 inline-block">Pintu</Link></li>
                <li><Link href="/kategori/Jendela" className="hover:text-orange-400 hover:translate-x-2 transition-all duration-200 inline-block">Jendela</Link></li>
                <li><Link href="/kategori/Daun Pintu" className="hover:text-orange-400 hover:translate-x-2 transition-all duration-200 inline-block">Daun Pintu</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Informasi</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/tentang" className="hover:text-orange-400 hover:translate-x-2 transition-all duration-200 inline-block">Tentang Kami</Link></li>
                <li><Link href="/kontak" className="hover:text-orange-400 hover:translate-x-2 transition-all duration-200 inline-block">Kontak</Link></li>
                <li><Link href="/pesanan" className="hover:text-orange-400 hover:translate-x-2 transition-all duration-200 inline-block">Pesanan Saya</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Hubungi Kami</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">📍 Jl. Kayu Jati No. 123, Jakarta</li>
                <li className="flex items-center gap-2">📞 +62 21 1234 5678</li>
                <li className="flex items-center gap-2">✉️ info@tokokusen.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Toko Kusen Online. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

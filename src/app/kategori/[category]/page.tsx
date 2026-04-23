'use client';

import { useEffect, useState, useMemo } from 'react';
import { fetchKusenByCategory, Kusen } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const [kusenList, setKusenList] = useState<Kusen[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('Terbaru');
  const [filterWood, setFilterWood] = useState('Semua');
  const [filterPrice, setFilterPrice] = useState('Semua');
  const [wishlist, setWishlist] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      const savedWishlist = localStorage.getItem('wishlist');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    }
    return [];
  });
  const [cart, setCart] = useState<{ [key: number]: { kusen: Kusen, quantity: number } }>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : {};
    }
    return {};
  });
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    params.then(p => {
      setCategoryName(p.category);
      fetchKusenByCategory(p.category)
        .then(data => {
          setKusenList(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Failed to fetch products:', err);
          setLoading(false);
        });
    });
  }, [params]);

  const toggleWishlist = (productId: number) => {
    const newWishlist = wishlist.includes(productId)
      ? wishlist.filter(id => id !== productId)
      : [...wishlist, productId];
    setWishlist(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  const addToCart = (kusen: Kusen) => {
    const newCart = { ...cart };
    if (newCart[kusen.id]) {
      newCart[kusen.id].quantity += 1;
    } else {
      newCart[kusen.id] = { kusen, quantity: 1 };
    }
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const filteredKusen = useMemo(() => {
    let filtered = [...kusenList];

    // Filter by wood type
    if (filterWood !== 'Semua') {
      filtered = filtered.filter(k => k.jenisKayu === filterWood);
    }

    // Filter by price
    if (filterPrice !== 'Semua') {
      if (filterPrice === 'Rp 0 - Rp 1.000.000') {
        filtered = filtered.filter(k => k.harga <= 1000000);
      } else if (filterPrice === 'Rp 1.000.000 - Rp 2.000.000') {
        filtered = filtered.filter(k => k.harga > 1000000 && k.harga <= 2000000);
      } else if (filterPrice === 'Rp 2.000.000 - Rp 5.000.000') {
        filtered = filtered.filter(k => k.harga > 2000000 && k.harga <= 5000000);
      } else if (filterPrice === 'Rp 5.000.000+') {
        filtered = filtered.filter(k => k.harga > 5000000);
      }
    }

    // Sort
    if (sortBy === 'Terbaru') {
      filtered.sort((a, b) => b.id - a.id);
    } else if (sortBy === 'Harga Terendah') {
      filtered.sort((a, b) => a.harga - b.harga);
    } else if (sortBy === 'Harga Tertinggi') {
      filtered.sort((a, b) => b.harga - a.harga);
    } else if (sortBy === 'Terlaris') {
      filtered.sort((a, b) => b.terjual - a.terjual);
    } else if (sortBy === 'Rating Tertinggi') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [kusenList, sortBy, filterWood, filterPrice]);

  const categoryTitle = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 flex items-center justify-center">
        <div className="text-2xl font-bold text-slate-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl backdrop-blur-sm sticky top-0 z-50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
              <span className="text-4xl drop-shadow-lg">🏠</span>
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent font-extrabold text-2xl md:text-3xl tracking-tight">
                Toko Kusen Online
              </span>
            </Link>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-slate-300 hover:scale-105 transition-all duration-200">Beranda</Link>
              <Link href="/produk" className="hover:text-slate-300 hover:scale-105 transition-all duration-200">Semua Produk</Link>
              <Link href="/kategori/Pintu" className="hover:text-slate-300 hover:scale-105 transition-all duration-200">Pintu</Link>
              <Link href="/kategori/Jendela" className="hover:text-slate-300 hover:scale-105 transition-all duration-200">Jendela</Link>
              <Link href="/wishlist" className="hover:text-slate-300 hover:scale-105 transition-all duration-200 flex items-center gap-1">
                ❤️ Wishlist ({wishlist.length})
              </Link>
              <Link href="/cart" className="hover:text-slate-300 hover:scale-105 transition-all duration-200 flex items-center gap-1">
                🛒 Keranjang ({Object.values(cart).length})
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 rounded-3xl p-8 md:p-12 text-white mb-12 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryTitle}</h1>
              <p className="text-lg md:text-xl opacity-90">
                {filteredKusen.length} produk tersedia dalam kategori ini
              </p>
            </div>
            <div className="hidden md:block text-8xl">
              {categoryName === 'Pintu' && '🚪'}
              {categoryName === 'Jendela' && '🪟'}
              {categoryName === 'Daun Pintu' && '🚪'}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800">Urutkan:</span>
              <select 
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-500" 
                aria-label="Urutkan produk"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Terbaru</option>
                <option>Harga Terendah</option>
                <option>Harga Tertinggi</option>
                <option>Terlaris</option>
                <option>Rating Tertinggi</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800">Jenis Kayu:</span>
              <select 
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-500" 
                aria-label="Filter berdasarkan jenis kayu"
                value={filterWood}
                onChange={(e) => setFilterWood(e.target.value)}
              >
                <option>Semua</option>
                <option>Kayu Jati</option>
                <option>Kayu Meranti</option>
                <option>Kayu Ulin</option>
                <option>Kayu Mahoni</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800">Harga:</span>
              <select 
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-500" 
                aria-label="Filter berdasarkan harga"
                value={filterPrice}
                onChange={(e) => setFilterPrice(e.target.value)}
              >
                <option>Semua</option>
                <option>Rp 0 - Rp 1.000.000</option>
                <option>Rp 1.000.000 - Rp 2.000.000</option>
                <option>Rp 2.000.000 - Rp 5.000.000</option>
                <option>Rp 5.000.000+</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredKusen.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredKusen.map((kusen) => (
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
                  <div className="w-full h-56 bg-gradient-to-br from-slate-200 to-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-7xl">🪵</span>
                  </div>
                )}
                {kusen.terjual < 10 && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">Baru</span>
                )}
                {kusen.terjual >= 50 && (
                  <span className="absolute top-3 left-3 bg-slate-700 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">Best Seller</span>
                )}
                {!kusen.tersedia && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">Habis</span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">{kusen.kategori}</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3 line-clamp-2 group-hover:text-slate-600 transition-colors">{kusen.nama}</h3>
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
                <div className="text-2xl font-bold text-slate-700 mb-5">
                  Rp {kusen.harga.toLocaleString('id-ID')}
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => toggleWishlist(kusen.id)}
                    className="bg-slate-200 text-slate-700 px-4 py-3 rounded-xl font-bold hover:bg-red-100 hover:text-red-600 transition-all duration-300 flex items-center justify-center"
                  >
                    {wishlist.includes(kusen.id) ? '❤️' : '🤍'}
                  </button>
                  <button 
                    onClick={() => addToCart(kusen)}
                    className="flex-1 bg-gradient-to-r from-slate-700 to-slate-800 text-white py-3 rounded-xl font-bold hover:from-slate-800 hover:to-slate-900 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    + Keranjang
                  </button>
                  <Link href={`/produk/${kusen.id}`} className="flex-1 bg-gradient-to-r from-slate-600 to-slate-700 text-white py-3 rounded-xl text-center font-bold hover:from-slate-700 hover:to-slate-800 transition-all duration-300 shadow-md hover:shadow-lg">
                    Detail
                  </Link>
                </div>
              </div>
            </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-gray-100">
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Produk Tidak Ditemukan</h3>
            <p className="text-gray-600 text-lg mb-8">Belum ada produk dalam kategori ini.</p>
            <Link href="/produk" className="inline-block bg-gradient-to-r from-slate-700 to-slate-800 text-white px-10 py-4 rounded-xl font-bold hover:from-slate-800 hover:to-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Lihat Semua Produk
            </Link>
          </div>
        )}
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

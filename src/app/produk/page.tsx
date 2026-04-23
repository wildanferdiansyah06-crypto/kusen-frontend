'use client';

import { useEffect, useState } from 'react';
import { fetchKusenList, Kusen } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';

export default function ProdukPage() {
  const [kusenList, setKusenList] = useState<Kusen[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchKusenList()
      .then(data => {
        setKusenList(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch products:', err);
        setLoading(false);
      });
  }, []);

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
              <Link href="/" className="hover:text-amber-200">Beranda</Link>
              <Link href="/produk" className="hover:text-amber-200 font-semibold">Semua Produk</Link>
              <Link href="/kategori/Pintu" className="hover:text-amber-200">Pintu</Link>
              <Link href="/kategori/Jendela" className="hover:text-amber-200">Jendela</Link>
              <Link href="/cart" className="hover:text-amber-200">🛒 Keranjang</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Semua Produk</h1>
          <p className="text-gray-600">Koleksi lengkap kusen kayu berkualitas premium</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kusenList.map((kusen) => (
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
                {!kusen.tersedia && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">Habis</span>
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
                  <span>•</span>
                  <span>{kusen.lebar} cm</span>
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

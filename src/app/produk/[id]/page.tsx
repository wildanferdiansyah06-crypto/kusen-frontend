'use client';

import { useEffect, useState } from 'react';
import { fetchKusenById, Kusen } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [kusen, setKusen] = useState<Kusen | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchKusenById(parseInt(params.id))
      .then(data => {
        if (!data) {
          setNotFound(true);
        } else {
          setKusen(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch product:', err);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center">
        <div className="text-2xl font-bold text-orange-600">Loading...</div>
      </div>
    );
  }

  if (notFound || !kusen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Produk Tidak Ditemukan</h1>
          <Link href="/produk" className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
            Kembali ke Produk
          </Link>
        </div>
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
              <Link href="/produk" className="hover:text-amber-200">Semua Produk</Link>
              <Link href="/kategori/Pintu" className="hover:text-amber-200">Pintu</Link>
              <Link href="/kategori/Jendela" className="hover:text-amber-200">Jendela</Link>
              <Link href="/cart" className="hover:text-amber-200">🛒 Keranjang</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm mb-8 text-gray-600">
          <Link href="/" className="hover:text-orange-600">Beranda</Link>
          <span>/</span>
          <Link href="/produk" className="hover:text-orange-600">Produk</Link>
          <span>/</span>
          <span className="text-gray-800 font-semibold">{kusen.nama}</span>
        </nav>

        {/* Product Detail */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
            <div className="relative">
              {kusen.gambarUrl ? (
                <Image 
                  src={kusen.gambarUrl} 
                  alt={kusen.nama} 
                  width={600} 
                  height={400} 
                  className="w-full h-auto rounded-xl"
                />
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-orange-200 to-amber-300 rounded-xl flex items-center justify-center">
                  <span className="text-6xl">🪵</span>
                </div>
              )}
              {kusen.terjual < 10 && (
                <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Baru</span>
              )}
              {kusen.terjual >= 50 && (
                <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Best Seller</span>
              )}
            </div>

            <div>
              <span className="text-sm text-orange-600 font-semibold">{kusen.kategori}</span>
              <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-4">{kusen.nama}</h2>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-yellow-500 text-xl">★★★★★</span>
                <span className="text-gray-600">({kusen.rating})</span>
                <span className="text-gray-600">{kusen.terjual} Terjual</span>
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-6">
                Rp {kusen.harga.toLocaleString('id-ID')}
              </div>

              {/* Specifications */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Spesifikasi Produk</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600">Kategori</div>
                    <div className="font-semibold text-gray-800">{kusen.kategori}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600">Jenis Kayu</div>
                    <div className="font-semibold text-gray-800">{kusen.jenisKayu}</div>
                  </div>
                  {kusen.material && (
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Material</div>
                      <div className="font-semibold text-gray-800">{kusen.material}</div>
                    </div>
                  )}
                  {kusen.warna && (
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Warna</div>
                      <div className="font-semibold text-gray-800">{kusen.warna}</div>
                    </div>
                  )}
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600">Panjang</div>
                    <div className="font-semibold text-gray-800">{kusen.panjang} cm</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600">Lebar</div>
                    <div className="font-semibold text-gray-800">{kusen.lebar} cm</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600">Tebal</div>
                    <div className="font-semibold text-gray-800">{kusen.tebal} cm</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600">Stok</div>
                    <div className="font-semibold text-gray-800">{kusen.stok} unit</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Deskripsi Produk</h3>
                <p className="text-gray-700">{kusen.deskripsi}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button className="flex-1 bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
                  🛒 Tambah ke Keranjang
                </button>
                <Link href="/produk" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
                  ← Kembali
                </Link>
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

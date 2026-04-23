import { fetchKusenById, Kusen } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  let kusen: Kusen | null = null;
  try {
    kusen = await fetchKusenById(parseInt(params.id));
  } catch (error) {
    console.error('Failed to fetch product:', error);
  }

  if (!kusen) {
    notFound();
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
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-amber-200 hover:scale-105 transition-all duration-200">Beranda</Link>
              <Link href="/produk" className="hover:text-amber-200 hover:scale-105 transition-all duration-200">Semua Produk</Link>
              <Link href="/kategori/Pintu" className="hover:text-amber-200 hover:scale-105 transition-all duration-200">Pintu</Link>
              <Link href="/kategori/Jendela" className="hover:text-amber-200 hover:scale-105 transition-all duration-200">Jendela</Link>
              <Link href="/cart" className="hover:text-amber-200 hover:scale-105 transition-all duration-200 flex items-center gap-1">
                🛒 Keranjang
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm mb-10 text-gray-600">
          <Link href="/" className="hover:text-orange-600 font-medium transition-colors">Beranda</Link>
          <span className="text-gray-400">/</span>
          <Link href="/produk" className="hover:text-orange-600 font-medium transition-colors">Produk</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-800 font-semibold">{kusen.nama}</span>
        </nav>

        {/* Product Detail */}
        <section className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-12">
            <div className="relative group">
              {kusen.gambarUrl ? (
                <Image 
                  src={kusen.gambarUrl} 
                  alt={kusen.nama} 
                  width={600} 
                  height={400} 
                  className="w-full h-auto rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-orange-200 to-amber-300 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-7xl">🪵</span>
                </div>
              )}
              {kusen.terjual < 10 && (
                <span className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">Baru</span>
              )}
              {kusen.terjual >= 50 && (
                <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">Best Seller</span>
              )}
            </div>

            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">{kusen.kategori}</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-3 mb-6">{kusen.nama}</h2>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-yellow-500 text-2xl">★★★★★</span>
                <span className="text-gray-600 font-medium">({kusen.rating})</span>
                <span className="text-gray-600">{kusen.terjual} Terjual</span>
              </div>
              <div className="text-5xl font-bold text-orange-600 mb-8">
                Rp {kusen.harga.toLocaleString('id-ID')}
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Spesifikasi Produk</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
                    <div className="text-sm text-gray-600 font-medium">Kategori</div>
                    <div className="font-bold text-gray-800">{kusen.kategori}</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
                    <div className="text-sm text-gray-600 font-medium">Jenis Kayu</div>
                    <div className="font-bold text-gray-800">{kusen.jenisKayu}</div>
                  </div>
                  {kusen.material && (
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
                      <div className="text-sm text-gray-600 font-medium">Material</div>
                      <div className="font-bold text-gray-800">{kusen.material}</div>
                    </div>
                  )}
                  {kusen.warna && (
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
                      <div className="text-sm text-gray-600 font-medium">Warna</div>
                      <div className="font-bold text-gray-800">{kusen.warna}</div>
                    </div>
                  )}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
                    <div className="text-sm text-gray-600 font-medium">Panjang</div>
                    <div className="font-bold text-gray-800">{kusen.panjang} cm</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
                    <div className="text-sm text-gray-600 font-medium">Lebar</div>
                    <div className="font-bold text-gray-800">{kusen.lebar} cm</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
                    <div className="text-sm text-gray-600 font-medium">Tebal</div>
                    <div className="font-bold text-gray-800">{kusen.tebal} cm</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
                    <div className="text-sm text-gray-600 font-medium">Stok</div>
                    <div className="font-bold text-gray-800">{kusen.stok} unit</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Deskripsi Produk</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{kusen.deskripsi}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-orange-600 to-amber-600 text-white py-4 rounded-xl font-bold hover:from-orange-700 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  🛒 Tambah ke Keranjang
                </button>
                <Link href="/produk" className="bg-gray-200 text-gray-800 px-8 py-4 rounded-xl font-bold hover:bg-gray-300 transition">
                  ← Kembali
                </Link>
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

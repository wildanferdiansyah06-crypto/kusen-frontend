import Link from 'next/link';

export default function CheckoutPage() {
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
              <Link href="/cart" className="hover:text-amber-200">🛒 Keranjang</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Checkout</h1>
          <p className="text-gray-600">Lengkapi informasi pemesanan Anda</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <p className="text-gray-600 mb-6">Halaman checkout akan segera tersedia.</p>
          <Link href="/cart" className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
            Kembali ke Keranjang
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🏠 Toko Kusen Online</h3>
              <p className="text-gray-400 text-sm mb-4">Penyedia kusen kayu berkualitas premium untuk segala kebutuhan konstruksi dan renovasi rumah Anda.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kategori</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/kategori/Pintu" className="hover:text-white transition">Pintu</Link></li>
                <li><Link href="/kategori/Jendela" className="hover:text-white transition">Jendela</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Informasi</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/tentang" className="hover:text-white transition">Tentang Kami</Link></li>
                <li><Link href="/kontak" className="hover:text-white transition">Kontak</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📍 Jl. Kayu Jati No. 123, Jakarta</li>
                <li>📞 +62 21 1234 5678</li>
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

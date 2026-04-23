import Link from 'next/link';

export default function CheckoutPage() {
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
              <Link href="/cart" className="hover:text-amber-200 hover:scale-105 transition-all duration-200 flex items-center gap-1">
                🛒 Keranjang
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">Checkout</h1>
          <p className="text-gray-600 text-lg">Lengkapi informasi pemesanan Anda</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-gray-100">
          <div className="text-8xl mb-6">🛍️</div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Halaman Checkout Segera Tersedia</h3>
          <p className="text-gray-600 text-lg mb-8">Fitur checkout sedang dalam pengembangan. Kami akan segera menghadirkannya untuk Anda.</p>
          <Link href="/cart" className="inline-block bg-gradient-to-r from-orange-600 to-amber-600 text-white px-10 py-4 rounded-xl font-bold hover:from-orange-700 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Kembali ke Keranjang
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">🏠 Toko Kusen Online</h3>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">Penyedia kusen kayu berkualitas premium untuk segala kebutuhan konstruksi dan renovasi rumah Anda.</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Kategori</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/kategori/Pintu" className="hover:text-orange-400 hover:translate-x-2 transition-all duration-200 inline-block">Pintu</Link></li>
                <li><Link href="/kategori/Jendela" className="hover:text-orange-400 hover:translate-x-2 transition-all duration-200 inline-block">Jendela</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Informasi</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/tentang" className="hover:text-orange-400 hover:translate-x-2 transition-all duration-200 inline-block">Tentang Kami</Link></li>
                <li><Link href="/kontak" className="hover:text-orange-400 hover:translate-x-2 transition-all duration-200 inline-block">Kontak</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Hubungi Kami</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">📍 Jl. Kayu Jati No. 123, Jakarta</li>
                <li className="flex items-center gap-2">📞 +62 21 1234 5678</li>
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

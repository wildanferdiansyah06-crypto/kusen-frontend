'use client';

import { useState } from 'react';
import { Kusen } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';

export default function CartPage() {
  const [cart, setCart] = useState<{ [key: number]: { kusen: Kusen, quantity: number } }>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : {};
    }
    return {};
  });

  const removeFromCart = (productId: number) => {
    const newCart = { ...cart };
    delete newCart[productId];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    const newCart = { ...cart };
    newCart[productId].quantity = quantity;
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const cartItems = Object.values(cart);
  const total = cartItems.reduce((sum, item) => sum + (item.kusen.harga * item.quantity), 0);

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
              <Link href="/cart" className="hover:text-slate-300 hover:scale-105 transition-all duration-200 flex items-center gap-1">
                🛒 Keranjang ({cartItems.length})
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">Keranjang Belanja</h1>
          <p className="text-gray-600 text-lg">Kelola produk yang ingin Anda beli di sini.</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-gray-100">
            <div className="text-8xl mb-6">🛒</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Keranjang Anda Kosong</h3>
            <p className="text-gray-600 text-lg mb-8">Belum ada produk yang ditambahkan ke keranjang.</p>
            <Link href="/produk" className="inline-block bg-gradient-to-r from-slate-700 to-slate-800 text-white px-10 py-4 rounded-xl font-bold hover:from-slate-800 hover:to-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Lihat Produk
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.kusen.id} className="bg-white rounded-2xl shadow-lg p-6 flex gap-6 border border-gray-100">
                  {item.kusen.gambarUrl ? (
                    <Image 
                      src={item.kusen.gambarUrl} 
                      alt={item.kusen.nama} 
                      width={200} 
                      height={200} 
                      className="w-48 h-48 object-cover rounded-xl"
                    />
                  ) : (
                    <div className="w-48 h-48 bg-gradient-to-br from-slate-200 to-gray-300 rounded-xl flex items-center justify-center">
                      <span className="text-5xl">🪵</span>
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.kusen.nama}</h3>
                    <p className="text-sm text-gray-600 mb-4">{item.kusen.kategori} - {item.kusen.jenisKayu}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl font-bold text-slate-700">
                        Rp {item.kusen.harga.toLocaleString('id-ID')}
                      </span>
                      <span className="text-sm text-gray-600">x {item.quantity}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => updateQuantity(item.kusen.id, item.quantity - 1)}
                          className="w-10 h-10 rounded-full bg-slate-200 text-slate-700 font-bold hover:bg-slate-300 transition-colors"
                        >
                          -
                        </button>
                        <span className="w-10 text-center font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.kusen.id, item.quantity + 1)}
                          className="w-10 h-10 rounded-full bg-slate-200 text-slate-700 font-bold hover:bg-slate-300 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.kusen.id)}
                        className="text-red-600 hover:text-red-700 font-medium transition-colors"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Ringkasan Pesanan</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-gray-800">Rp {total.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ongkos Kirim</span>
                    <span className="font-semibold text-gray-800">Gratis</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <span className="text-xl font-bold text-gray-800">Total</span>
                    <span className="text-2xl font-bold text-slate-700">Rp {total.toLocaleString('id-ID')}</span>
                  </div>
                </div>
                <Link 
                  href="/checkout"
                  className="block w-full bg-gradient-to-r from-slate-700 to-slate-800 text-white py-4 rounded-xl text-center font-bold hover:from-slate-800 hover:to-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Lanjut ke Pembayaran
                </Link>
              </div>
            </div>
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
                <a href="#" className="text-3xl hover:text-slate-400 transition hover:scale-110 transform duration-200">📘</a>
                <a href="#" className="text-3xl hover:text-slate-400 transition hover:scale-110 transform duration-200">📸</a>
                <a href="#" className="text-3xl hover:text-slate-400 transition hover:scale-110 transform duration-200">🐦</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Kategori</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/kategori/Pintu" className="hover:text-slate-400 hover:translate-x-2 transition-all duration-200 inline-block">Pintu</Link></li>
                <li><Link href="/kategori/Jendela" className="hover:text-slate-400 hover:translate-x-2 transition-all duration-200 inline-block">Jendela</Link></li>
                <li><Link href="/kategori/Daun Pintu" className="hover:text-slate-400 hover:translate-x-2 transition-all duration-200 inline-block">Daun Pintu</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Informasi</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/tentang" className="hover:text-slate-400 hover:translate-x-2 transition-all duration-200 inline-block">Tentang Kami</Link></li>
                <li><Link href="/kontak" className="hover:text-slate-400 hover:translate-x-2 transition-all duration-200 inline-block">Kontak</Link></li>
                <li><Link href="/pesanan" className="hover:text-slate-400 hover:translate-x-2 transition-all duration-200 inline-block">Pesanan Saya</Link></li>
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

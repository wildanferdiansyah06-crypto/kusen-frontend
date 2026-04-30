"use client";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { KusenButton } from "@/components/KusenButton";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import toast from "react-hot-toast";
function CartPage() {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : {};
    }
    return {};
  });
  const removeFromCart = (productId) => {
    const newCart = __spreadValues({}, cart);
    delete newCart[productId];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success("Produk dihapus dari keranjang");
  };
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    const newCart = __spreadValues({}, cart);
    newCart[productId].quantity = quantity;
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const cartItems = Object.values(cart);
  const total = cartItems.reduce((sum, item) => sum + item.kusen.harga * item.quantity, 0);
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(price);
  };
  const getImageUrl = (kusen) => {
    if (kusen.gambarUrl) return kusen.gambarUrl;
    const categoryImages = {
      "Pintu": "https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=400",
      "Jendela": "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=400",
      "Daun Pintu": "https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?auto=compress&cs=tinysrgb&w=400"
    };
    return categoryImages[kusen.kategori] || "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400";
  };
  return <div className="min-h-screen bg-[var(--color-cream)]">
      <Navbar />
      <main className="pt-24">
        {
    /* Header */
  }
        <div className="section bg-[var(--color-walnut)]">
          <div className="container-main">
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
              Keranjang Belanja
            </h1>
            <p className="text-[var(--color-mist)] text-lg">
              {cartItems.length} produk di keranjang Anda
            </p>
          </div>
        </div>

        <div className="container-main py-12">
          {cartItems.length === 0 ? <div className="bg-[var(--color-parchment)] rounded-2xl p-12 text-center border border-[var(--color-mist)]">
              <ShoppingBag className="w-24 h-24 text-[var(--color-teak)] mx-auto mb-6" />
              <h3 className="font-heading text-3xl text-[var(--color-walnut)] mb-4">
                Keranjang Anda Kosong
              </h3>
              <p className="text-[var(--color-stone)] text-lg mb-8">
                Belum ada produk yang ditambahkan ke keranjang.
              </p>
              <Link href="/produk">
                <KusenButton size="lg">
                  Lihat Produk
                </KusenButton>
              </Link>
            </div> : <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => <div key={item.kusen.id} className="bg-[var(--color-parchment)] rounded-2xl p-6 flex gap-6 border border-[var(--color-mist)]">
                    <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
                      <Image
    src={getImageUrl(item.kusen)}
    alt={item.kusen.nama}
    fill
    className="object-cover"
  />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-lg text-[var(--color-walnut)] mb-2">
                        {item.kusen.nama}
                      </h3>
                      <p className="text-sm text-[var(--color-stone)] mb-4">
                        {item.kusen.kategori} - {item.kusen.jenisKayu}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-display font-bold text-xl text-[var(--color-gold)]">
                          {formatPrice(item.kusen.harga)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
    onClick={() => updateQuantity(item.kusen.id, item.quantity - 1)}
    className="w-8 h-8 rounded-full border border-[var(--color-mist)] flex items-center justify-center hover:bg-[var(--color-linen)] transition-colors"
  >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
    onClick={() => updateQuantity(item.kusen.id, item.quantity + 1)}
    className="w-8 h-8 rounded-full border border-[var(--color-mist)] flex items-center justify-center hover:bg-[var(--color-linen)] transition-colors"
  >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
    onClick={() => removeFromCart(item.kusen.id)}
    className="text-[var(--color-rust)] hover:text-red-700 font-medium transition-colors flex items-center gap-2"
  >
                          <Trash2 className="w-4 h-4" />
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>)}
              </div>

              <div className="lg:col-span-1">
                <div className="bg-[var(--color-parchment)] rounded-2xl p-6 border border-[var(--color-mist)] sticky top-24">
                  <h3 className="font-heading text-2xl text-[var(--color-walnut)] mb-6">
                    Ringkasan Pesanan
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-[var(--color-stone)]">Subtotal</span>
                      <span className="font-medium text-[var(--color-charcoal)]">
                        {formatPrice(total)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--color-stone)]">Ongkos Kirim</span>
                      <span className="font-medium text-[var(--color-charcoal)]">Gratis</span>
                    </div>
                    <div className="border-t border-[var(--color-mist)] pt-4 flex justify-between">
                      <span className="font-heading font-bold text-xl text-[var(--color-walnut)]">
                        Total
                      </span>
                      <span className="font-display font-bold text-2xl text-[var(--color-gold)]">
                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>
                  <KusenButton size="lg" className="w-full">
                    Lanjut ke Pembayaran
                  </KusenButton>
                  <Link href="/produk" className="block text-center mt-4 text-[var(--color-teak)] hover:text-[var(--color-walnut)] transition-colors">
                    ← Kembali belanja
                  </Link>
                </div>
              </div>
            </div>}
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>;
}
export {
  CartPage as default
};

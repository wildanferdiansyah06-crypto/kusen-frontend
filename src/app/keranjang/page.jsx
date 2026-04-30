"use client";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { useEffect, useState } from "react";
import { fetchKusenList } from "@/lib/api";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { KusenButton } from "@/components/KusenButton";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
function CartPage() {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : {};
    }
    return {};
  });
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (Object.keys(cart).length > 0) {
      fetchKusenList().then((data) => {
        const items = Object.values(cart).map((item) => __spreadProps(__spreadValues({}, item), {
          kusen: data.find((k) => k.id === item.kusen.id) || item.kusen
        }));
        setCartItems(items);
      }).catch((err) => {
        console.error("Failed to fetch products:", err);
      }).finally(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [cart]);
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    const newCart = __spreadValues({}, cart);
    newCart[productId].quantity = newQuantity;
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const removeFromCart = (productId) => {
    const newCart = __spreadValues({}, cart);
    delete newCart[productId];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success("Produk dihapus dari keranjang");
  };
  const clearCart = () => {
    setCart({});
    localStorage.setItem("cart", JSON.stringify({}));
    toast.success("Keranjang dikosongkan");
  };
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
      "Pintu": "https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      "Jendela": "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      "Daun Pintu": "https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    };
    return categoryImages[kusen.kategori] || "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop";
  };
  const subtotal = cartItems.reduce((sum, item) => sum + item.kusen.harga * item.quantity, 0);
  const shipping = subtotal > 0 ? 5e4 : 0;
  const total = subtotal + shipping;
  return <div className="min-h-screen bg-[var(--color-cream)]">
      <Navbar />
      <main className="pt-24">
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

        <div className="container-main py-16">
          {loading ? <div className="text-center py-20">
              <div className="text-2xl font-bold text-[var(--color-stone)]">Loading...</div>
            </div> : <>
              {cartItems.length > 0 ? <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {
    /* Cart Items */
  }
                  <div className="lg:col-span-2 space-y-4">
                    {cartItems.map((item) => <div
    key={item.kusen.id}
    className="bg-[var(--color-parchment)] rounded-2xl p-6 border border-[var(--color-mist)] flex gap-6"
  >
                        {
    /* Product Image */
  }
                        <div className="w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-[var(--color-linen)]">
                          <img
    src={getImageUrl(item.kusen)}
    alt={item.kusen.nama}
    className="w-full h-full object-cover"
  />
                        </div>

                        {
    /* Product Info */
  }
                        <div className="flex-1">
                          <Link
    href={`/produk/${item.kusen.id}`}
    className="font-heading text-xl text-[var(--color-walnut)] hover:text-[var(--color-teak)] transition-colors"
  >
                            {item.kusen.nama}
                          </Link>
                          <p className="text-sm text-[var(--color-stone)] mt-1">
                            {item.kusen.kategori} · {item.kusen.jenisKayu}
                          </p>
                          <p className="text-sm text-[var(--color-stone)]">
                            {item.kusen.panjang}×{item.kusen.lebar}cm
                          </p>
                          <p className="font-heading text-2xl text-[var(--color-gold)] mt-2">
                            {formatPrice(item.kusen.harga)}
                          </p>
                        </div>

                        {
    /* Quantity Controls */
  }
                        <div className="flex flex-col items-end gap-4">
                          <button
    onClick={() => removeFromCart(item.kusen.id)}
    className="p-2 text-[var(--color-rust)] hover:bg-[var(--color-linen)] rounded-full transition-colors"
    aria-label="Remove from cart"
  >
                            <Trash2 className="w-5 h-5" />
                          </button>
                          <div className="flex items-center gap-3 bg-[var(--color-linen)] rounded-full px-4 py-2">
                            <button
    onClick={() => updateQuantity(item.kusen.id, item.quantity - 1)}
    className="p-1 hover:text-[var(--color-teak)] transition-colors"
    aria-label="Decrease quantity"
  >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-medium text-[var(--color-charcoal)] w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
    onClick={() => updateQuantity(item.kusen.id, item.quantity + 1)}
    className="p-1 hover:text-[var(--color-teak)] transition-colors"
    aria-label="Increase quantity"
  >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>)}

                    {
    /* Clear Cart Button */
  }
                    <button
    onClick={clearCart}
    className="text-[var(--color-rust)] hover:text-[var(--color-charcoal)] transition-colors font-medium flex items-center gap-2"
  >
                      <Trash2 className="w-4 h-4" />
                      Kosongkan Keranjang
                    </button>
                  </div>

                  {
    /* Order Summary */
  }
                  <div className="lg:col-span-1">
                    <div className="bg-[var(--color-parchment)] rounded-2xl p-6 border border-[var(--color-mist)] sticky top-24">
                      <h2 className="font-heading text-2xl text-[var(--color-walnut)] mb-6">
                        Ringkasan Pesanan
                      </h2>

                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between text-[var(--color-stone)]">
                          <span>Subtotal</span>
                          <span className="font-medium">{formatPrice(subtotal)}</span>
                        </div>
                        <div className="flex justify-between text-[var(--color-stone)]">
                          <span>Ongkos Kirim</span>
                          <span className="font-medium">{formatPrice(shipping)}</span>
                        </div>
                        <div className="border-t border-[var(--color-mist)] pt-4 flex justify-between">
                          <span className="font-heading text-lg text-[var(--color-walnut)]">Total</span>
                          <span className="font-heading text-2xl text-[var(--color-gold)]">
                            {formatPrice(total)}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Link href="/checkout" className="block">
                          <KusenButton size="lg" className="w-full">
                            Lanjut ke Pembayaran
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </KusenButton>
                        </Link>
                        <Link href="/produk" className="block">
                          <KusenButton variant="outline" size="lg" className="w-full">
                            Lanjut Belanja
                          </KusenButton>
                        </Link>
                      </div>

                      <div className="mt-6 p-4 bg-[var(--color-linen)] rounded-xl">
                        <p className="text-sm text-[var(--color-stone)]">
                          💡 Gratis ongkir untuk pesanan di atas Rp 5.000.000
                        </p>
                      </div>
                    </div>
                  </div>
                </div> : <div className="bg-[var(--color-parchment)] rounded-3xl p-12 text-center border border-[var(--color-mist)]">
                  <div className="w-24 h-24 bg-[var(--color-linen)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag className="w-12 h-12 text-[var(--color-stone)]" />
                  </div>
                  <h3 className="font-heading text-3xl text-[var(--color-walnut)] mb-4">
                    Keranjang Kosong
                  </h3>
                  <p className="text-[var(--color-stone)] text-lg mb-8 max-w-md mx-auto">
                    Belum ada produk di keranjang Anda. Yuk, jelajahi koleksi kusen kayu kami!
                  </p>
                  <Link href="/produk">
                    <KusenButton size="lg">
                      Jelajahi Produk
                    </KusenButton>
                  </Link>
                </div>}
            </>}
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>;
}
export {
  CartPage as default
};

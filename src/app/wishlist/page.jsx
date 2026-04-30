"use client";
import { useEffect, useState } from "react";
import { fetchKusenList } from "@/lib/api";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { KusenButton } from "@/components/KusenButton";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
function WishlistPage() {
  const [wishlist, setWishlist] = useState(() => {
    if (typeof window !== "undefined") {
      const savedWishlist = localStorage.getItem("wishlist");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    }
    return [];
  });
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (wishlist.length > 0) {
      fetchKusenList().then((data) => {
        const wishlistItems = data.filter((k) => wishlist.includes(k.id));
        setWishlistProducts(wishlistItems);
      }).catch((err) => {
        console.error("Failed to fetch products:", err);
      }).finally(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [wishlist]);
  const toggleWishlist = (productId) => {
    const newWishlist = wishlist.includes(productId) ? wishlist.filter((id) => id !== productId) : [...wishlist, productId];
    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    if (wishlist.includes(productId)) {
      toast.success("Dihapus dari wishlist");
    } else {
      toast.success("Ditambahkan ke wishlist \u2661");
    }
  };
  const addToCart = (kusen) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    if (cart[kusen.id]) {
      cart[kusen.id].quantity += 1;
    } else {
      cart[kusen.id] = { kusen, quantity: 1 };
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Produk ditambahkan ke keranjang \u{1F6D2}");
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
      "Pintu": "https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      "Jendela": "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      "Daun Pintu": "https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    };
    return categoryImages[kusen.kategori] || "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop";
  };
  return <div className="min-h-screen bg-[var(--color-cream)]">
      <Navbar />
      <main className="pt-24">
        <div className="section bg-[var(--color-walnut)]">
          <div className="container-main">
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
              Wishlist Saya
            </h1>
            <p className="text-[var(--color-mist)] text-lg">
              {wishlistProducts.length} produk tersimpan
            </p>
          </div>
        </div>

        <div className="container-main py-16">
          {loading ? <div className="text-center py-20">
              <div className="text-2xl font-bold text-[var(--color-stone)]">Loading...</div>
            </div> : <>
              {wishlistProducts.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {wishlistProducts.map((kusen) => <div
    key={kusen.id}
    className="bg-[var(--color-parchment)] rounded-2xl overflow-hidden border border-[var(--color-mist)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
  >
                      {
    /* Image */
  }
                      <div className="relative h-56 overflow-hidden bg-[var(--color-linen)]">
                        <img
    src={getImageUrl(kusen)}
    alt={kusen.nama}
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
  />
                        {kusen.terjual < 10 && <span className="absolute top-3 left-3 bg-[var(--color-forest)] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                            Baru
                          </span>}
                        {kusen.terjual >= 50 && <span className="absolute top-3 left-3 bg-[var(--color-rust)] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                            Terlaris
                          </span>}
                        <button
    onClick={() => toggleWishlist(kusen.id)}
    className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
    aria-label="Remove from wishlist"
  >
                          <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                        </button>
                      </div>

                      {
    /* Content */
  }
                      <div className="p-6">
                        <span className="text-xs font-bold text-[var(--color-stone)] uppercase tracking-wide">
                          {kusen.kategori}
                        </span>
                        <Link
    href={`/produk/${kusen.id}`}
    className="block font-heading text-xl text-[var(--color-walnut)] mt-2 mb-3 line-clamp-2 hover:text-[var(--color-teak)] transition-colors"
  >
                          {kusen.nama}
                        </Link>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-[var(--color-gold)]">⭐</span>
                          <span className="text-sm text-[var(--color-stone)] font-medium">
                            {kusen.rating}
                          </span>
                          <span className="text-sm text-[var(--color-stone)]">
                            ({kusen.terjual} terjual)
                          </span>
                        </div>
                        <div className="flex gap-2 mb-4 text-sm text-[var(--color-stone)]">
                          <span className="bg-[var(--color-linen)] px-2 py-1 rounded">
                            {kusen.jenisKayu}
                          </span>
                          <span className="bg-[var(--color-linen)] px-2 py-1 rounded">
                            {kusen.panjang} cm
                          </span>
                          <span className="bg-[var(--color-linen)] px-2 py-1 rounded">
                            {kusen.lebar} cm
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-[var(--color-gold)] mb-5">
                          {formatPrice(kusen.harga)}
                        </div>
                        <div className="flex gap-3">
                          <button
    onClick={() => toggleWishlist(kusen.id)}
    className="p-3 bg-[var(--color-linen)] text-[var(--color-rust)] rounded-xl font-bold hover:bg-[var(--color-rust)] hover:text-white transition-all duration-300"
    aria-label="Remove from wishlist"
  >
                            <Trash2 className="w-5 h-5" />
                          </button>
                          <button
    onClick={() => addToCart(kusen)}
    className="flex-1 bg-[var(--color-teak)] text-white py-3 rounded-xl font-bold hover:bg-[var(--color-walnut)] transition-all duration-300 flex items-center justify-center gap-2"
  >
                            <ShoppingBag className="w-5 h-5" />
                            Keranjang
                          </button>
                        </div>
                      </div>
                    </div>)}
                </div> : <div className="bg-[var(--color-parchment)] rounded-3xl p-12 text-center border border-[var(--color-mist)]">
                  <div className="w-24 h-24 bg-[var(--color-linen)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-12 h-12 text-[var(--color-stone)]" />
                  </div>
                  <h3 className="font-heading text-3xl text-[var(--color-walnut)] mb-4">
                    Wishlist Kosong
                  </h3>
                  <p className="text-[var(--color-stone)] text-lg mb-8 max-w-md mx-auto">
                    Belum ada produk yang Anda simpan di wishlist. Yuk, jelajahi koleksi kusen kayu kami!
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
  WishlistPage as default
};

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, MessageCircle } from "lucide-react";
import { KusenBadge } from "./KusenBadge";
import toast from "react-hot-toast";
function ProductCard({ kusen }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageError, setImageError] = useState(false);
  const toggleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    if (isWishlisted) {
      const newWishlist = wishlist.filter((id) => id !== kusen.id);
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      toast.error("Dihapus dari wishlist");
    } else {
      wishlist.push(kusen.id);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      toast.success("Ditambahkan ke wishlist \u2661");
    }
  };
  const addToCart = (e) => {
    e.preventDefault();
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
  const getImageUrl = () => {
    if (kusen.gambarUrl) return kusen.gambarUrl;
    const categoryImages = {
      "Pintu": "https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop",
      "Jendela": "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop",
      "Daun Pintu": "https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
    };
    return categoryImages[kusen.kategori] || "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop";
  };
  return <Link href={`/produk/${kusen.id}`} className="group block">
      <div className="product-card overflow-hidden">
        {
    /* Image Container */
  }
        <div className="relative h-[280px] overflow-hidden bg-[var(--color-linen)]">
          {!imageError ? <Image
    src={getImageUrl()}
    alt={kusen.nama}
    fill
    className="object-cover"
    onError={() => setImageError(true)}
    loading="lazy"
  /> : <div className="w-full h-full flex items-center justify-center bg-[var(--color-linen)]">
              <span className="text-6xl">🪵</span>
            </div>}
          
          {
    /* Badges */
  }
          <div className="absolute top-3 left-3 flex gap-2">
            {kusen.terjual >= 50 && <KusenBadge variant="rust">Terlaris</KusenBadge>}
            {kusen.terjual < 10 && <KusenBadge variant="forest">Baru</KusenBadge>}
            {kusen.stok < 5 && kusen.stok > 0 && <KusenBadge variant="warning">Stok Terbatas</KusenBadge>}
          </div>

          {
    /* Wishlist Button */
  }
          <button
    onClick={toggleWishlist}
    className="absolute top-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
    aria-label="Add to wishlist"
  >
            <Heart
    className={`w-5 h-5 ${isWishlisted ? "fill-red-500 text-red-500" : "text-[var(--color-charcoal)]"}`}
  />
          </button>
        </div>

        {
    /* Content */
  }
        <div className="p-5">
          {
    /* Material Tags */
  }
          <div className="flex gap-2 mb-3">
            <span className="text-xs font-medium text-[var(--color-stone)] bg-[var(--color-linen)] px-2 py-1 rounded">
              {kusen.jenisKayu}
            </span>
            <span className="text-xs font-medium text-[var(--color-stone)] bg-[var(--color-linen)] px-2 py-1 rounded">
              Grade A
            </span>
          </div>

          {
    /* Title */
  }
          <h3 className="font-body font-bold text-lg text-[var(--color-charcoal)] mb-2 line-clamp-2 min-h-[56px]">
            {kusen.nama}
          </h3>

          {
    /* Dimensions */
  }
          <p className="font-mono text-xs text-[var(--color-stone)] mb-3">
            {kusen.panjang}×{kusen.lebar}cm · Custom tersedia
          </p>

          {
    /* Rating */
  }
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              <span className="text-[var(--color-gold)]">⭐</span>
              <span className="font-medium text-sm ml-1">{kusen.rating}</span>
            </div>
            <span className="text-xs text-[var(--color-stone)]">
              ({kusen.terjual} terjual)
            </span>
          </div>

          {
    /* Price */
  }
          <div className="mb-4">
            <p className="font-body font-bold text-xl text-[var(--color-gold)]">
              {formatPrice(kusen.harga)}
            </p>
          </div>

          {
    /* Action Buttons */
  }
          <div className="flex gap-2">
            <button
    onClick={addToCart}
    className="flex-1 bg-[var(--color-teak)] text-white py-2.5 rounded-lg font-medium text-sm hover:bg-[var(--color-walnut)] transition-colors flex items-center justify-center gap-2"
  >
              <ShoppingCart className="w-4 h-4" />
              Keranjang
            </button>
            <button className="flex-1 border border-[var(--color-teak)] text-[var(--color-teak)] py-2.5 rounded-lg font-medium text-sm hover:bg-[var(--color-linen)] transition-colors flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Chat
            </button>
          </div>
        </div>
      </div>
    </Link>;
}
export {
  ProductCard
};

"use client";
import { useEffect, useState } from "react";
import { fetchKusenById } from "@/lib/api";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { KusenButton } from "@/components/KusenButton";
import { KusenBadge } from "@/components/KusenBadge";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star, ChevronLeft, Ruler, Layers, Palette } from "lucide-react";
import toast from "react-hot-toast";
function ProductDetailPage({ params }) {
  const [kusen, setKusen] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  useEffect(() => {
    fetchKusenById(parseInt(params.id)).then((data) => {
      setKusen(data);
      setLoading(false);
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setIsWishlisted(wishlist.includes(parseInt(params.id)));
    }).catch((error) => {
      console.error("Failed to fetch product:", error);
      setLoading(false);
    });
  }, [params.id]);
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    if (isWishlisted) {
      const newWishlist = wishlist.filter((id) => id !== parseInt(params.id));
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      toast.error("Dihapus dari wishlist");
    } else {
      wishlist.push(parseInt(params.id));
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      toast.success("Ditambahkan ke wishlist \u2661");
    }
  };
  const addToCart = () => {
    if (!kusen) return;
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    if (cart[kusen.id]) {
      cart[kusen.id].quantity += quantity;
    } else {
      cart[kusen.id] = { kusen, quantity };
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
    if (kusen == null ? void 0 : kusen.gambarUrl) return kusen.gambarUrl;
    const categoryImages = {
      "Pintu": "https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=800",
      "Jendela": "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=800",
      "Daun Pintu": "https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?auto=compress&cs=tinysrgb&w=800"
    };
    return categoryImages[(kusen == null ? void 0 : kusen.kategori) || ""] || "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800";
  };
  if (loading) {
    return <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center">
        <div className="text-2xl font-bold text-[var(--color-walnut)]">Loading...</div>
      </div>;
  }
  if (!kusen) {
    return <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-[var(--color-stone)] mb-4">Produk tidak ditemukan</p>
          <Link href="/produk">
            <KusenButton>Kembali ke Katalog</KusenButton>
          </Link>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-[var(--color-cream)]">
      <Navbar />
      <main className="pt-24">
        {
    /* Breadcrumbs */
  }
        <div className="container-main py-6">
          <nav className="flex items-center gap-2 text-sm text-[var(--color-stone)]">
            <Link href="/" className="hover:text-[var(--color-teak)] transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/produk" className="hover:text-[var(--color-teak)] transition-colors">Produk</Link>
            <span>/</span>
            <span className="text-[var(--color-charcoal)] font-medium">{kusen.nama}</span>
          </nav>
        </div>

        <div className="container-main pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {
    /* Gallery */
  }
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[var(--color-linen)]">
                <Image
    src={getImageUrl()}
    alt={kusen.nama}
    fill
    className="object-cover"
  />
                {kusen.terjual < 10 && <div className="absolute top-4 left-4">
                    <KusenBadge variant="forest">Baru</KusenBadge>
                  </div>}
                {kusen.terjual >= 50 && <div className="absolute top-4 left-4">
                    <KusenBadge variant="rust">Terlaris</KusenBadge>
                  </div>}
              </div>
            </div>

            {
    /* Product Info */
  }
            <div className="space-y-6">
              {
    /* Category */
  }
              <span className="text-sm font-medium text-[var(--color-teak)] uppercase tracking-wide">
                {kusen.kategori}
              </span>

              {
    /* Title */
  }
              <h1 className="font-heading text-4xl md:text-5xl text-[var(--color-walnut)]">
                {kusen.nama}
              </h1>

              {
    /* Rating */
  }
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <Star
    key={i}
    className={`w-5 h-5 ${i < Math.floor(kusen.rating) ? "text-[var(--color-gold)] fill-[var(--color-gold)]" : "text-[var(--color-mist)]"}`}
  />)}
                </div>
                <span className="font-medium text-[var(--color-charcoal)]">{kusen.rating}</span>
                <span className="text-[var(--color-stone)]">({kusen.terjual} terjual)</span>
              </div>

              {
    /* Price */
  }
              <div className="font-display text-4xl font-bold text-[var(--color-gold)]">
                {formatPrice(kusen.harga)}
              </div>

              {
    /* Quick Specs */
  }
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[var(--color-parchment)] rounded-xl p-4 text-center">
                  <Ruler className="w-6 h-6 text-[var(--color-teak)] mx-auto mb-2" />
                  <p className="text-xs text-[var(--color-stone)]">Ukuran</p>
                  <p className="font-medium text-[var(--color-charcoal)]">{kusen.panjang}×{kusen.lebar}cm</p>
                </div>
                <div className="bg-[var(--color-parchment)] rounded-xl p-4 text-center">
                  <Layers className="w-6 h-6 text-[var(--color-teak)] mx-auto mb-2" />
                  <p className="text-xs text-[var(--color-stone)]">Tebal</p>
                  <p className="font-medium text-[var(--color-charcoal)]">{kusen.tebal}cm</p>
                </div>
                <div className="bg-[var(--color-parchment)] rounded-xl p-4 text-center">
                  <Palette className="w-6 h-6 text-[var(--color-teak)] mx-auto mb-2" />
                  <p className="text-xs text-[var(--color-stone)]">Warna</p>
                  <p className="font-medium text-[var(--color-charcoal)]">{kusen.warna || "Natural"}</p>
                </div>
              </div>

              {
    /* Tabs */
  }
              <div className="border-b border-[var(--color-mist)]">
                <div className="flex gap-8">
                  {["description", "specs", "care"].map((tab) => <button
    key={tab}
    onClick={() => setActiveTab(tab)}
    className={`pb-4 font-medium transition-colors ${activeTab === tab ? "text-[var(--color-teak)] border-b-2 border-[var(--color-teak)]" : "text-[var(--color-stone)] hover:text-[var(--color-charcoal)]"}`}
  >
                      {tab === "description" ? "Deskripsi" : tab === "specs" ? "Spesifikasi" : "Perawatan"}
                    </button>)}
                </div>
              </div>

              {
    /* Tab Content */
  }
              <div className="py-4">
                {activeTab === "description" && <p className="text-[var(--color-charcoal)] leading-relaxed">
                    {kusen.deskripsi}
                  </p>}
                {activeTab === "specs" && <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-[var(--color-mist)]">
                      <span className="text-[var(--color-stone)]">Jenis Kayu</span>
                      <span className="font-medium text-[var(--color-charcoal)]">{kusen.jenisKayu}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[var(--color-mist)]">
                      <span className="text-[var(--color-stone)]">Material</span>
                      <span className="font-medium text-[var(--color-charcoal)]">{kusen.material || "-"}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[var(--color-mist)]">
                      <span className="text-[var(--color-stone)]">Panjang</span>
                      <span className="font-medium text-[var(--color-charcoal)]">{kusen.panjang} cm</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[var(--color-mist)]">
                      <span className="text-[var(--color-stone)]">Lebar</span>
                      <span className="font-medium text-[var(--color-charcoal)]">{kusen.lebar} cm</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[var(--color-mist)]">
                      <span className="text-[var(--color-stone)]">Tebal</span>
                      <span className="font-medium text-[var(--color-charcoal)]">{kusen.tebal} cm</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[var(--color-mist)]">
                      <span className="text-[var(--color-stone)]">Stok</span>
                      <span className="font-medium text-[var(--color-charcoal)]">{kusen.stok} unit</span>
                    </div>
                  </div>}
                {activeTab === "care" && <div className="space-y-3 text-[var(--color-charcoal)]">
                    <p>• Bersihkan dengan kain lembut dan kering secara berkala</p>
                    <p>• Hindari paparan langsung sinar matahari berlebihan</p>
                    <p>• Gunakan lem kayu berkualitas untuk perbaikan</p>
                    <p>• Olesi dengan minyak kayu setiap 6-12 bulan</p>
                  </div>}
              </div>

              {
    /* Quantity */
  }
              <div className="flex items-center gap-4">
                <span className="text-[var(--color-stone)]">Jumlah:</span>
                <div className="flex items-center border border-[var(--color-mist)] rounded-lg">
                  <button
    onClick={() => setQuantity(Math.max(1, quantity - 1))}
    className="px-4 py-2 text-[var(--color-charcoal)] hover:bg-[var(--color-linen)] transition-colors"
  >
                    -
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
    onClick={() => setQuantity(Math.min(kusen.stok, quantity + 1))}
    className="px-4 py-2 text-[var(--color-charcoal)] hover:bg-[var(--color-linen)] transition-colors"
  >
                    +
                  </button>
                </div>
              </div>

              {
    /* Actions */
  }
              <div className="flex gap-4">
                <button
    onClick={toggleWishlist}
    className="p-4 border border-[var(--color-mist)] rounded-xl hover:bg-[var(--color-linen)] transition-colors"
  >
                  <Heart className={`w-6 h-6 ${isWishlisted ? "fill-red-500 text-red-500" : "text-[var(--color-charcoal)]"}`} />
                </button>
                <button
    onClick={addToCart}
    className="flex-1 bg-[var(--color-teak)] text-white py-4 rounded-xl font-medium hover:bg-[var(--color-walnut)] transition-colors flex items-center justify-center gap-2"
  >
                  <ShoppingCart className="w-5 h-5" />
                  Tambah ke Keranjang
                </button>
              </div>

              {
    /* Back Button */
  }
              <Link href="/produk">
                <KusenButton variant="outline" size="sm">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Kembali ke Katalog
                </KusenButton>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>;
}
export {
  ProductDetailPage as default
};

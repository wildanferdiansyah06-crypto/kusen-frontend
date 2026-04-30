"use client";
import { useEffect, useState, useMemo } from "react";
import { fetchKusenByCategory } from "@/lib/api";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ProductCard } from "@/components/ProductCard";
import { KusenButton } from "@/components/KusenButton";
import { SlidersHorizontal } from "lucide-react";
function CategoryPage({ params }) {
  const [kusenList, setKusenList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("Terbaru");
  const [filterWood, setFilterWood] = useState("Semua");
  const [filterPrice, setFilterPrice] = useState("Semua");
  const [showFilters, setShowFilters] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  useEffect(() => {
    params.then((p) => {
      setCategoryName(p.category);
      fetchKusenByCategory(p.category).then((data) => {
        setKusenList(data);
        setLoading(false);
      }).catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
    });
  }, [params]);
  const filteredKusen = useMemo(() => {
    let filtered = [...kusenList];
    if (filterWood !== "Semua") {
      filtered = filtered.filter((k) => k.jenisKayu === filterWood);
    }
    if (filterPrice !== "Semua") {
      if (filterPrice === "Rp 0 - Rp 1.000.000") {
        filtered = filtered.filter((k) => k.harga <= 1e6);
      } else if (filterPrice === "Rp 1.000.000 - Rp 2.000.000") {
        filtered = filtered.filter((k) => k.harga > 1e6 && k.harga <= 2e6);
      } else if (filterPrice === "Rp 2.000.000 - Rp 5.000.000") {
        filtered = filtered.filter((k) => k.harga > 2e6 && k.harga <= 5e6);
      } else if (filterPrice === "Rp 5.000.000+") {
        filtered = filtered.filter((k) => k.harga > 5e6);
      }
    }
    if (sortBy === "Terbaru") {
      filtered.sort((a, b) => b.id - a.id);
    } else if (sortBy === "Harga Terendah") {
      filtered.sort((a, b) => a.harga - b.harga);
    } else if (sortBy === "Harga Tertinggi") {
      filtered.sort((a, b) => b.harga - a.harga);
    } else if (sortBy === "Terlaris") {
      filtered.sort((a, b) => b.terjual - a.terjual);
    } else if (sortBy === "Rating Tertinggi") {
      filtered.sort((a, b) => b.rating - a.rating);
    }
    return filtered;
  }, [kusenList, sortBy, filterWood, filterPrice]);
  const categoryTitle = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  const materials = ["Semua", ...new Set(kusenList.map((k) => k.jenisKayu))];
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(price);
  };
  if (loading) {
    return <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center">
        <div className="text-2xl font-bold text-[var(--color-walnut)]">Loading...</div>
      </div>;
  }
  return <div className="min-h-screen bg-[var(--color-cream)]">
      <Navbar />
      <main className="pt-24">
        <div className="section bg-[var(--color-walnut)]">
          <div className="container-main">
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
              {categoryTitle}
            </h1>
            <p className="text-[var(--color-mist)] text-lg">
              {filteredKusen.length} produk tersedia dalam kategori ini
            </p>
          </div>
        </div>

        <div className="container-main py-12">
          <div className="flex items-center justify-between mb-8">
            <p className="text-[var(--color-stone)]">
              Menampilkan {filteredKusen.length} produk
            </p>
            <KusenButton
    variant="outline"
    size="sm"
    onClick={() => setShowFilters(!showFilters)}
    className="md:hidden"
  >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filter
            </KusenButton>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
              <div className="bg-[var(--color-parchment)] rounded-2xl p-6 sticky top-24">
                <h3 className="font-heading text-xl text-[var(--color-walnut)] mb-6">Filter</h3>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-3">
                    Urutkan
                  </label>
                  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="w-full px-4 py-2 rounded-lg border border-[var(--color-mist)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teak)] bg-white"
  >
                    <option>Terbaru</option>
                    <option>Harga Terendah</option>
                    <option>Harga Tertinggi</option>
                    <option>Terlaris</option>
                    <option>Rating Tertinggi</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-3">
                    Jenis Kayu
                  </label>
                  <div className="space-y-2">
                    {materials.map((mat) => <button
    key={mat}
    onClick={() => setFilterWood(mat)}
    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${filterWood === mat ? "bg-[var(--color-teak)] text-white" : "hover:bg-[var(--color-linen)]"}`}
  >
                        {mat}
                      </button>)}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-3">
                    Rentang Harga
                  </label>
                  <select
    value={filterPrice}
    onChange={(e) => setFilterPrice(e.target.value)}
    className="w-full px-4 py-2 rounded-lg border border-[var(--color-mist)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teak)] bg-white"
  >
                    <option>Semua</option>
                    <option>Rp 0 - Rp 1.000.000</option>
                    <option>Rp 1.000.000 - Rp 2.000.000</option>
                    <option>Rp 2.000.000 - Rp 5.000.000</option>
                    <option>Rp 5.000.000+</option>
                  </select>
                </div>

                <KusenButton
    variant="outline"
    size="sm"
    onClick={() => {
      setSortBy("Terbaru");
      setFilterWood("Semua");
      setFilterPrice("Semua");
    }}
    className="w-full"
  >
                  Reset Filter
                </KusenButton>
              </div>
            </div>

            <div className="lg:col-span-3">
              {filteredKusen.length > 0 ? <div className="product-grid">
                  {filteredKusen.map((kusen) => <ProductCard key={kusen.id} kusen={kusen} />)}
                </div> : <div className="bg-[var(--color-parchment)] rounded-2xl p-12 text-center border border-[var(--color-mist)]">
                  <p className="text-[var(--color-stone)] text-lg mb-4">
                    Tidak ada produk yang sesuai dengan filter
                  </p>
                  <KusenButton onClick={() => {
    setSortBy("Terbaru");
    setFilterWood("Semua");
    setFilterPrice("Semua");
  }}>
                    Reset Filter
                  </KusenButton>
                </div>}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>;
}
export {
  CategoryPage as default
};

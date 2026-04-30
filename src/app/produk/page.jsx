"use client";
import { useEffect, useState } from "react";
import { fetchKusenList } from "@/lib/api";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { KusenButton } from "@/components/KusenButton";
import { SlidersHorizontal } from "lucide-react";
function ProdukPage() {
  const [kusenList, setKusenList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMaterial, setSelectedMaterial] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1e7]);
  const [showFilters, setShowFilters] = useState(false);
  useEffect(() => {
    fetchKusenList().then((data) => {
      setKusenList(data);
      setFilteredProducts(data);
      setLoading(false);
    }).catch((error) => {
      console.error("Failed to fetch products:", error);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    const applyFilters = () => {
      let filtered = kusenList;
      if (selectedCategory !== "all") {
        filtered = filtered.filter((k) => k.kategori === selectedCategory);
      }
      if (selectedMaterial !== "all") {
        filtered = filtered.filter((k) => k.jenisKayu === selectedMaterial);
      }
      filtered = filtered.filter((k) => k.harga >= priceRange[0] && k.harga <= priceRange[1]);
      setFilteredProducts(filtered);
    };
    applyFilters();
  }, [selectedCategory, selectedMaterial, priceRange, kusenList]);
  const categories = ["all", ...new Set(kusenList.map((k) => k.kategori))];
  const materials = ["all", ...new Set(kusenList.map((k) => k.jenisKayu))];
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(price);
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
              Katalog Produk
            </h1>
            <p className="text-[var(--color-mist)] text-lg">
              Temukan kusen kayu berkualitas premium untuk rumah impianmu
            </p>
          </div>
        </div>

        <div className="container-main py-12">
          {
    /* Filter Toggle */
  }
          <div className="flex items-center justify-between mb-8">
            <p className="text-[var(--color-stone)]">
              Menampilkan {filteredProducts.length} produk
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
            {
    /* Filters Sidebar */
  }
            <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
              <div className="bg-[var(--color-parchment)] rounded-2xl p-6 sticky top-24">
                <h3 className="font-heading text-xl text-[var(--color-walnut)] mb-6">Filter</h3>

                {
    /* Category Filter */
  }
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-3">
                    Kategori
                  </label>
                  <div className="space-y-2">
                    {categories.map((cat) => <button
    key={cat}
    onClick={() => setSelectedCategory(cat)}
    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedCategory === cat ? "bg-[var(--color-teak)] text-white" : "hover:bg-[var(--color-linen)]"}`}
  >
                        {cat === "all" ? "Semua" : cat}
                      </button>)}
                  </div>
                </div>

                {
    /* Material Filter */
  }
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-3">
                    Jenis Kayu
                  </label>
                  <div className="space-y-2">
                    {materials.map((mat) => <button
    key={mat}
    onClick={() => setSelectedMaterial(mat)}
    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedMaterial === mat ? "bg-[var(--color-teak)] text-white" : "hover:bg-[var(--color-linen)]"}`}
  >
                        {mat === "all" ? "Semua" : mat}
                      </button>)}
                  </div>
                </div>

                {
    /* Price Range */
  }
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-3">
                    Rentang Harga
                  </label>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-[var(--color-stone)]">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                    <input
    type="range"
    min="0"
    max="10000000"
    step="100000"
    value={priceRange[1]}
    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
    className="w-full"
  />
                  </div>
                </div>

                {
    /* Reset Filters */
  }
                <KusenButton
    variant="outline"
    size="sm"
    onClick={() => {
      setSelectedCategory("all");
      setSelectedMaterial("all");
      setPriceRange([0, 1e7]);
    }}
    className="w-full"
  >
                  Reset Filter
                </KusenButton>
              </div>
            </div>

            {
    /* Products Grid */
  }
            <div className="lg:col-span-3">
              {loading ? <div className="product-grid">
                  {[...Array(6)].map((_, i) => <div key={i} className="bg-[var(--color-parchment)] rounded-2xl overflow-hidden">
                      <div className="h-[280px] skeleton" />
                      <div className="p-5 space-y-3">
                        <div className="h-4 skeleton w-20" />
                        <div className="h-6 skeleton w-full" />
                        <div className="h-4 skeleton w-32" />
                        <div className="h-8 skeleton w-24" />
                      </div>
                    </div>)}
                </div> : filteredProducts.length === 0 ? <div className="text-center py-16">
                  <p className="text-[var(--color-stone)] text-lg">
                    Tidak ada produk yang sesuai dengan filter
                  </p>
                </div> : <div className="product-grid">
                  {filteredProducts.map((kusen) => <ProductCard key={kusen.id} kusen={kusen} />)}
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
  ProdukPage as default
};

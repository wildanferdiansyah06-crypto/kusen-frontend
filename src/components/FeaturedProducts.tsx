'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchKusenList, Kusen } from '@/lib/api';
import { ProductCard } from './ProductCard';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { KusenButton } from './KusenButton';

export function FeaturedProducts() {
  const [products, setProducts] = useState<Kusen[]>([]);
  const [loading, setLoading] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    fetchKusenList()
      .then((data) => {
        // Get featured products (most sold)
        const featured = data.filter((k) => k.terjual >= 10).slice(0, 6);
        setProducts(featured);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch products:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="section bg-[var(--color-linen)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl text-[var(--color-walnut)] mb-4">
            Koleksi Pilihan
          </h2>
          <p className="text-[var(--color-stone)] text-lg">
            Kusen terlaris bulan ini
          </p>
        </div>

        {loading ? (
          <div className="product-grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-[var(--color-parchment)] rounded-2xl overflow-hidden">
                <div className="h-[280px] skeleton" />
                <div className="p-5 space-y-3">
                  <div className="h-4 skeleton w-20" />
                  <div className="h-6 skeleton w-full" />
                  <div className="h-4 skeleton w-32" />
                  <div className="h-8 skeleton w-24" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div ref={ref} className="product-grid">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <ProductCard kusen={product} />
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/produk">
                <KusenButton size="lg" className="rounded-full">
                  Lihat Semua Produk →
                </KusenButton>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

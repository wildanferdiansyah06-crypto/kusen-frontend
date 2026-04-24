'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { KusenButton } from '@/components/KusenButton';
import Link from 'next/link';
import { ArrowRight, DoorOpen, Square, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  {
    name: 'Pintu',
    description: 'Kusen pintu kayu berkualitas untuk rumah dan gedung',
    icon: DoorOpen,
    href: '/kategori/Pintu',
    color: 'from-[var(--color-teak)] to-[var(--color-walnut)]',
    image: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 4,
  },
  {
    name: 'Jendela',
    description: 'Kusen jendela dengan desain modern dan klasik',
    icon: Square,
    href: '/kategori/Jendela',
    color: 'from-[var(--color-forest)] to-[var(--color-pine)]',
    image: 'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 4,
  },
  {
    name: 'Daun Pintu',
    description: 'Daun pintu kayu solid dengan berbagai ukiran',
    icon: Layers,
    href: '/kategori/Daun Pintu',
    color: 'from-[var(--color-rust)] to-[var(--color-charcoal)]',
    image: 'https://images.pexels.com/photos/2255491/pexels-photo-2255491.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 4,
  },
];

export default function KategoriPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <Navbar />
      <main className="pt-24">
        <div className="section bg-[var(--color-walnut)]">
          <div className="container-main">
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
              Kategori Produk
            </h1>
            <p className="text-[var(--color-mist)] text-lg max-w-2xl">
              Jelajahi koleksi kusen kayu premium kami. Setiap kategori dirancang untuk memenuhi kebutuhan dan gaya hunian Anda.
            </p>
          </div>
        </div>

        <div className="container-main py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative bg-[var(--color-parchment)] rounded-3xl overflow-hidden border border-[var(--color-mist)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Image Background */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                      
                      {/* Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      {/* Product Count Badge */}
                      <div className="absolute top-4 right-4 bg-white text-[var(--color-walnut)] px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        {category.count} Produk
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-heading text-2xl text-[var(--color-walnut)] mb-2 group-hover:text-[var(--color-teak)] transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-[var(--color-stone)] text-sm leading-relaxed mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center gap-2 text-[var(--color-teak)] font-medium group-hover:gap-3 transition-all">
                        Lihat Koleksi
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-[var(--color-parchment)] rounded-3xl p-8 border border-[var(--color-mist)]">
              <h2 className="font-heading text-2xl text-[var(--color-walnut)] mb-4">
                Butuh Kustomisasi?
              </h2>
              <p className="text-[var(--color-stone)] mb-6 max-w-xl mx-auto">
                Kami juga menerima pesanan kustom sesuai dengan desain dan ukuran yang Anda inginkan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontak">
                  <KusenButton size="lg">
                    Konsultasi Gratis
                  </KusenButton>
                </Link>
                <Link href="/produk">
                  <KusenButton variant="outline" size="lg">
                    Lihat Semua Produk
                  </KusenButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { KusenButton } from '@/components/KusenButton';
import Link from 'next/link';
import { Maximize, Square, Layers } from 'lucide-react';

const categories = [
  {
    name: 'Pintu',
    description: 'Kusen pintu kayu berkualitas untuk rumah dan gedung',
    icon: Maximize,
    href: '/kategori/Pintu',
    color: 'bg-[var(--color-teak)]',
  },
  {
    name: 'Jendela',
    description: 'Kusen jendela dengan desain modern dan klasik',
    icon: Square,
    href: '/kategori/Jendela',
    color: 'bg-[var(--color-forest)]',
  },
  {
    name: 'Daun Pintu',
    description: 'Daun pintu kayu solid dengan berbagai ukiran',
    icon: Layers,
    href: '/kategori/Daun Pintu',
    color: 'bg-[var(--color-rust)]',
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
            <p className="text-[var(--color-mist)] text-lg">
              Pilih kategori untuk melihat koleksi kusen kayu kami
            </p>
          </div>
        </div>

        <div className="container-main py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group"
                >
                  <div className="bg-[var(--color-parchment)] rounded-2xl p-8 border border-[var(--color-mist)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading text-2xl text-[var(--color-walnut)] mb-3">
                      {category.name}
                    </h3>
                    <p className="text-[var(--color-stone)] leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/produk">
              <KusenButton size="lg">
                Lihat Semua Produk
              </KusenButton>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { KusenButton } from './KusenButton';

const materials = [
  {
    id: 'jati',
    name: 'Kayu Jati',
    image: 'https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=800',
    origin: 'Jawa Tengah',
    hardness: 4,
    durability: 5,
    aesthetics: 5,
    description: 'Kayu jati adalah salah satu kayu terbaik di dunia dengan kekuatan dan ketahanan yang luar biasa. Serat kayu yang indah dan warna coklat keemasan membuatnya sangat cocok untuk furnitur dan kusen premium.',
    price: 'Rp 800.000/m²',
  },
  {
    id: 'mahoni',
    name: 'Kayu Mahoni',
    image: 'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=800',
    origin: 'Jawa Barat',
    hardness: 3,
    durability: 4,
    aesthetics: 5,
    description: 'Kayu mahoni dikenal dengan warna merah-coklat yang elegan dan serat yang halus. Sangat mudah dikerjakan dan tahan terhadap cuaca, menjadikannya pilihan populer untuk kusen dan furnitur.',
    price: 'Rp 650.000/m²',
  },
  {
    id: 'merbau',
    name: 'Kayu Merbau',
    image: 'https://images.pexels.com/photos/1148496/pexels-photo-1148496.jpeg?auto=compress&cs=tinysrgb&w=800',
    origin: 'Kalimantan',
    hardness: 5,
    durability: 5,
    aesthetics: 4,
    description: 'Kayu merbau adalah kayu keras dengan ketahanan ekstrem terhadap cuaca dan serangan rayap. Warna coklat kemerahan yang khas memberikan kesan mewah dan elegan.',
    price: 'Rp 750.000/m²',
  },
  {
    id: 'pinus',
    name: 'Kayu Pinus',
    image: 'https://images.pexels.com/photos/4219865/pexels-photo-4219865.jpeg?auto=compress&cs=tinysrgb&w=800',
    origin: 'Sumatera',
    hardness: 2,
    durability: 3,
    aesthetics: 4,
    description: 'Kayu pinus adalah kayu lunak dengan warna kuning pucat yang cerah. Ringan namun cukup kuat, sangat cocok untuk desain modern dan minimalis dengan budget lebih terjangkau.',
    price: 'Rp 450.000/m²',
  },
  {
    id: 'sungkai',
    name: 'Kayu Sungkai',
    image: 'https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&cs=tinysrgb&w=800',
    origin: 'Sumatera',
    hardness: 3,
    durability: 4,
    aesthetics: 5,
    description: 'Kayu sungkai memiliki warna coklat muda dengan serat yang menarik. Tahan terhadap cuaca dan mudah dikerjakan, sering digunakan untuk lantai dan furnitur modern.',
    price: 'Rp 550.000/m²',
  },
];

export function MaterialShowcase() {
  const [activeMaterial, setActiveMaterial] = useState(materials[0]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const renderStars = (count: number) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < count ? 'text-[var(--color-gold)]' : 'text-[var(--color-mist)]'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="section bg-[var(--color-parchment)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl text-[var(--color-walnut)] mb-4">
            Pilihan Material Kami
          </h2>
          <p className="text-[var(--color-stone)] text-lg">
            Setiap jenis kayu punya karakter dan keindahannya sendiri
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tabs */}
          <div className="space-y-2">
            {materials.map((material) => (
              <button
                key={material.id}
                onClick={() => setActiveMaterial(material)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                  activeMaterial.id === material.id
                    ? 'bg-[var(--color-walnut)] text-white border-l-4 border-[var(--color-gold)]'
                    : 'bg-[var(--color-linen)] text-[var(--color-stone)] hover:bg-[var(--color-cream)]'
                }`}
              >
                <span className="font-heading text-lg">{material.name}</span>
              </button>
            ))}
          </div>

          {/* Preview */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMaterial.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Image */}
              <div className="relative h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src={activeMaterial.image}
                  alt={activeMaterial.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-display font-bold text-3xl text-[var(--color-walnut)] mb-2">
                    {activeMaterial.name}
                  </h3>
                  <p className="text-[var(--color-stone)] text-sm">
                    Asal: {activeMaterial.origin}
                  </p>
                </div>

                {/* Ratings */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-[var(--color-stone)] mb-1">Kekerasan</p>
                    <div className="flex gap-0.5">
                      {renderStars(activeMaterial.hardness)}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-stone)] mb-1">Ketahanan</p>
                    <div className="flex gap-0.5">
                      {renderStars(activeMaterial.durability)}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-stone)] mb-1">Estetika</p>
                    <div className="flex gap-0.5">
                      {renderStars(activeMaterial.aesthetics)}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[var(--color-charcoal)] leading-relaxed">
                  {activeMaterial.description}
                </p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-mist)]">
                  <div>
                    <p className="text-sm text-[var(--color-stone)]">Harga mulai dari</p>
                    <p className="font-display font-bold text-xl text-[var(--color-gold)]">
                      {activeMaterial.price}
                    </p>
                  </div>
                  <Link href="/produk">
                    <KusenButton variant="outline" size="sm">
                      Lihat Produk →
                    </KusenButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

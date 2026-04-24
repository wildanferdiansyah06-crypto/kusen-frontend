'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Camera } from 'lucide-react';

const galleryImages = [
  'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3637838/pexels-photo-3637838.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/6970043/pexels-photo-6970043.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/4219865/pexels-photo-4219865.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400',
];

export function GalleryFeed() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl text-[var(--color-walnut)] mb-4">
            Galeri Inspirasi
          </h2>
          <p className="text-[var(--color-stone)] text-lg">
            Ikuti kami di Instagram untuk inspirasi lebih banyak
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[rgba(61,43,31,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-teak)] font-medium hover:text-[var(--color-walnut)] transition-colors"
          >
            <Camera className="w-5 h-5" />
            @kusennusantara
          </a>
        </div>
      </div>
    </section>
  );
}

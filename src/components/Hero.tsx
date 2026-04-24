'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { KusenButton } from './KusenButton';
import { useInView } from 'react-intersection-observer';

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ minHeight: '700px' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Interior dengan kusen kayu mewah"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(61,43,31,0.85)] via-[rgba(61,43,31,0.6)] to-transparent" />
      </div>

      {/* Content */}
      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-[var(--color-gold)] font-medium text-sm tracking-wider uppercase">
              <span className="text-lg">✦</span>
              Pengrajin Kayu Terpercaya Sejak 2005
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6"
          >
            Keindahan Kayu
            <br />
            <span className="text-[var(--color-gold)]">Yang Abadi,</span>
            <br />
            Untuk Rumahmu
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-[var(--color-cream)] leading-relaxed mb-10 max-w-2xl"
          >
            Kusen pintu dan jendela dari kayu pilihan terbaik — dibuat dengan tangan, untuk bertahan seumur hidup.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <KusenButton size="lg" className="rounded-full">
              Lihat Koleksi →
            </KusenButton>
            <KusenButton variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white/10">
              Konsultasi Gratis
            </KusenButton>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap items-center gap-6 text-[var(--color-cream)] text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-[var(--color-gold)] text-lg">⭐</span>
              <span className="font-medium">4.9/5</span>
              <span className="text-[var(--color-mist)]">dari 1.200+ pelanggan</span>
            </div>
            <div className="w-px h-4 bg-[var(--color-mist)]" />
            <div className="flex items-center gap-2">
              <span className="font-medium">15+ tahun</span>
              <span className="text-[var(--color-mist)]">pengalaman</span>
            </div>
            <div className="w-px h-4 bg-[var(--color-mist)]" />
            <div className="flex items-center gap-2">
              <span className="font-medium">Garansi 10 Tahun</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <line
            x1="0"
            y1="100"
            x2="100"
            y2="0"
            stroke="var(--color-gold)"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </section>
  );
}

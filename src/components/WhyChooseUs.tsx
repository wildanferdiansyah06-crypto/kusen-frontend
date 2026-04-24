'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TreeDeciduous, Hammer, Ruler, Shield } from 'lucide-react';

const features = [
  {
    icon: TreeDeciduous,
    title: 'Kayu Premium Grade A',
    description: 'Dipilih langsung dari hutan produksi bersertifikat SVLK',
  },
  {
    icon: Hammer,
    title: 'Handcrafted by Experts',
    description: 'Dibuat tangan oleh pengrajin berpengalaman 15+ tahun',
  },
  {
    icon: Ruler,
    title: 'Custom Ukuran',
    description: 'Kami produksi sesuai dimensi rumahmu, tanpa biaya tambahan',
  },
  {
    icon: Shield,
    title: 'Garansi 10 Tahun',
    description: 'Kualitas terjamin — kami tanggung perbaikan jika ada cacat',
  },
];

export function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-[var(--color-walnut)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-[var(--color-mist)] text-lg">
            Keunggulan yang membuat kami berbeda
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--color-mist)] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="mt-12 hidden lg:block">
          <div className="flex items-center justify-between gap-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-px flex-1 bg-[var(--color-teak)] opacity-40"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

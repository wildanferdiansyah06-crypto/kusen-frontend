'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    id: 1,
    title: 'Seleksi Bahan',
    image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Kami pilih kayu terbaik dari hutan produksi bersertifikat',
  },
  {
    id: 2,
    title: 'Pengeringan',
    image: 'https://images.pexels.com/photos/3637838/pexels-photo-3637838.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Kayu dikeringkan hingga kadar air ideal',
  },
  {
    id: 3,
    title: 'Pemolaan',
    image: 'https://images.pexels.com/photos/6970043/pexels-photo-6970043.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Pola dibuat sesuai pesanan dengan presisi',
  },
  {
    id: 4,
    title: 'Pembentukan',
    image: 'https://images.pexels.com/photos/4219865/pexels-photo-4219865.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Dibentuk dengan kombinasi mesin CNC dan tangan',
  },
  {
    id: 5,
    title: 'Finishing',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Diamplas halus dan difinish dengan natural polish',
  },
  {
    id: 6,
    title: 'Quality Check',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Setiap produk dicek ketat sebelum dikirim',
  },
];

export function ProcessTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl text-[var(--color-walnut)] mb-4">
            Dari Pohon ke Pintu Rumahmu
          </h2>
          <p className="text-[var(--color-stone)] text-lg">
            Proses pembuatan kusen dengan standar kualitas tinggi
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-[var(--color-teak)] opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                {/* Step Circle */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-teak)] text-white font-display font-bold text-lg flex items-center justify-center z-10 relative">
                    {step.id}
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-[160px] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display font-bold text-xl text-[var(--color-walnut)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-stone)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Award, Users, Leaf, Hammer } from 'lucide-react';

const milestones = [
  {
    year: '2009',
    title: 'Berdiri',
    description: 'Kusen Nusantara didirikan di Jepara dengan semangat melestarikan seni ukir kayu tradisional.',
  },
  {
    year: '2012',
    title: 'Ekspansi Pertama',
    description: 'Membuka cabang pertama di Semarang dan mulai melayani pesanan dari seluruh Jawa Tengah.',
  },
  {
    year: '2015',
    title: 'Sertifikasi SVLK',
    description: 'Mendapatkan sertifikasi SVLK (Sistem Verifikasi Legalitas Kayu) untuk jaminan kayu legal.',
  },
  {
    year: '2018',
    title: 'Go Digital',
    description: 'Meluncurkan platform online untuk mempermudah pelanggan memesan dari seluruh Indonesia.',
  },
  {
    year: '2021',
    title: '1000+ Pelanggan',
    description: 'Mencapai milestone 1000 pelanggan puas dari 50 kota di seluruh Indonesia.',
  },
  {
    year: '2024',
    title: '15 Tahun Berkarya',
    description: 'Merayakan 15 tahun dedikasi dalam menyediakan kusen kayu berkualitas premium.',
  },
];

const values = [
  {
    icon: Award,
    title: 'Kualitas Premium',
    description: 'Hanya menggunakan kayu grade A dari hutan produksi bersertifikat',
  },
  {
    icon: Users,
    title: 'Pengrajin Berpengalaman',
    description: 'Tim pengrajin dengan pengalaman 15+ tahun dalam seni ukir kayu',
  },
  {
    icon: Leaf,
    title: 'Ramah Lingkungan',
    description: 'Berkomitmen pada pengelolaan hutan yang berkelanjutan',
  },
  {
    icon: Hammer,
    title: 'Handcrafted',
    description: 'Setiap produk dibuat dengan sentuhan tangan untuk detail sempurna',
  },
];

export default function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="section bg-[var(--color-walnut)]">
          <div className="container-main">
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">
              Tentang Kusen Nusantara
            </h1>
            <p className="text-[var(--color-mist)] text-lg max-w-2xl">
              15 tahun dedikasi dalam menyediakan kusen kayu berkualitas premium untuk hunian impian Anda
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="section bg-[var(--color-cream)]">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-walnut)] mb-6">
                  Cerita Kami
                </h2>
                <p className="text-[var(--color-charcoal)] leading-relaxed mb-4">
                  Kusen Nusantara berdiri pada tahun 2009 di Jepara, Jawa Tengah, dengan visi sederhana namun mulia: melestarikan seni ukir kayu tradisional Indonesia sambil menghadirkan kualitas modern untuk hunian kontemporer.
                </p>
                <p className="text-[var(--color-charcoal)] leading-relaxed mb-4">
                  Dimulai dari bengkel kecil dengan 5 pengrajin, kini kami telah berkembang menjadi perusahaan dengan 50+ pengrajin berpengalaman yang melayani pelanggan dari seluruh Indonesia.
                </p>
                <p className="text-[var(--color-charcoal)] leading-relaxed">
                  Kami percaya bahwa setiap potong kayu memiliki cerita, dan setiap kusen yang kami buat adalah karya seni yang akan menghiasi rumah Anda selama bertahun-tahun.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Pengrajin kayu bekerja"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section bg-[var(--color-linen)]">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-walnut)] mb-4">
                Nilai Kami
              </h2>
              <p className="text-[var(--color-stone)] text-lg">
                Prinsip yang membimbing setiap langkah kami
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-[var(--color-parchment)] rounded-2xl p-6 text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-[var(--color-teak)]" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-[var(--color-walnut)] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-[var(--color-stone)] text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section bg-[var(--color-cream)]">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-walnut)] mb-4">
                Perjalanan Kami
              </h2>
              <p className="text-[var(--color-stone)] text-lg">
                Milestone penting dalam sejarah Kusen Nusantara
              </p>
            </div>

            <div ref={ref} className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-teak)] opacity-30 transform -translate-x-1/2" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Year Badge */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                      <div className="bg-[var(--color-teak)] text-white px-6 py-3 rounded-full font-display font-bold text-lg">
                        {milestone.year}
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="hidden lg:block w-4 h-4 rounded-full bg-[var(--color-gold)] border-4 border-[var(--color-cream)] z-10" />

                    {/* Content */}
                    <div className="lg:w-1/2">
                      <div className="bg-[var(--color-parchment)] rounded-2xl p-6 border border-[var(--color-mist)]">
                        <h3 className="font-display font-bold text-xl text-[var(--color-walnut)] mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-[var(--color-stone)] leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[var(--color-walnut)]">
          <div className="container-main text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
              Siap Berkolaborasi dengan Kami?
            </h2>
            <p className="text-[var(--color-mist)] text-lg mb-8 max-w-2xl mx-auto">
              Hubungi kami untuk konsultasi gratis dan temukan solusi kusen kayu terbaik untuk proyek Anda
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--color-gold)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-teak)] transition-colors"
            >
              Hubungi Kami via WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

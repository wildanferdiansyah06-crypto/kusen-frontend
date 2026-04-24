'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { KusenButton } from '@/components/KusenButton';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast.success('Pesan berhasil dikirim! Kami akan menghubungi Anda segera.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="section bg-[var(--color-walnut)]">
          <div className="container-main">
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">
              Hubungi Kami
            </h1>
            <p className="text-[var(--color-mist)] text-lg max-w-2xl">
              Ada pertanyaan atau ingin konsultasi? Tim kami siap membantu Anda
            </p>
          </div>
        </section>

        <div className="container-main py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl text-[var(--color-walnut)] mb-6">
                  Informasi Kontak
                </h2>
                <p className="text-[var(--color-stone)] leading-relaxed">
                  Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda menemukan solusi kusen kayu terbaik untuk kebutuhan Anda.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-teak)] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-[var(--color-walnut)] mb-1">
                      Alamat
                    </h3>
                    <p className="text-[var(--color-stone)]">
                      Jl. Jember<br />
                      Utara Balai Desa Silo<br />
                      Jember, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-teak)] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-[var(--color-walnut)] mb-1">
                      Telepon
                    </h3>
                    <p className="text-[var(--color-stone)]">
                      <a href="https://wa.me/6281936442406" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-teak)] transition-colors">
                        +62 819 3644 2406 (WhatsApp)
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-teak)] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-[var(--color-walnut)] mb-1">
                      Email
                    </h3>
                    <p className="text-[var(--color-stone)]">
                      info@kusennusantara.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-teak)] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-[var(--color-walnut)] mb-1">
                      Jam Operasional
                    </h3>
                    <p className="text-[var(--color-stone)]">
                      Senin - Sabtu: 08:00 - 17:00<br />
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-[var(--color-parchment)] rounded-2xl overflow-hidden h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5!2d113.853977!3d-8.215410!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd5e5d000000000%3A0x1234567890!2sJl.+Jember%2C+Utara+Balai+Desa+Silo%2C+Jember!5e0!3m2!1sid!2sid!4v1713950000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Kusen Nusantara"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--color-parchment)] rounded-2xl p-8">
              <h2 className="font-heading text-3xl text-[var(--color-walnut)] mb-6">
                Kirim Pesan
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-mist)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teak)] bg-white"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-mist)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teak)] bg-white"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                      No. Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-mist)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teak)] bg-white"
                      placeholder="+62 xxx xxxx xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                    Subjek
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-mist)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teak)] bg-white"
                  >
                    <option value="">Pilih subjek</option>
                    <option value="konsultasi">Konsultasi Produk</option>
                    <option value="pesanan">Pemesanan</option>
                    <option value="kerjasama">Kerjasama</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-mist)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teak)] bg-white resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <KusenButton
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? 'Mengirim...' : 'Kirim Pesan'}
                </KusenButton>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

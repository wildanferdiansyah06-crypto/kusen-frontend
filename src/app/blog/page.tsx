'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { KusenButton } from '@/components/KusenButton';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    slug: 'tips-merawat-kusen-kayu',
    title: 'Tips Merawat Kusen Kayu Agar Awet dan Tahan Lama',
    excerpt: 'Pelajari cara merawat kusen kayu Anda dengan benar untuk menjaga keindahan dan ketahanannya dalam jangka waktu panjang.',
    date: '15 April 2026',
    readTime: '5 menit',
    category: 'Tips & Trik',
    image: 'https://images.pexels.com/photos/2255491/pexels-photo-2255491.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    slug: 'perbedaan-kayu-jati-dan-mahoni',
    title: 'Perbedaan Kayu Jati dan Mahoni untuk Kusen',
    excerpt: 'Kenali perbedaan antara kayu jati dan mahoni untuk memilih material terbaik untuk kusen rumah Anda.',
    date: '10 April 2026',
    readTime: '7 menit',
    category: 'Material',
    image: 'https://images.pexels.com/photos/1595811/pexels-photo-1595811.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    slug: 'tren-desain-pintu-2026',
    title: 'Tren Desain Pintu Modern di Tahun 2026',
    excerpt: 'Temukan tren desain pintu terbaru yang akan membuat rumah Anda terlihat lebih modern dan elegan.',
    date: '5 April 2026',
    readTime: '4 menit',
    category: 'Desain',
    image: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    slug: 'cara-memilih-kusen-jendela',
    title: 'Cara Memilih Kusen Jendela yang Tepat',
    excerpt: 'Panduan lengkap memilih kusen jendela sesuai kebutuhan dan gaya rumah Anda.',
    date: '1 April 2026',
    readTime: '6 menit',
    category: 'Tips & Trik',
    image: 'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    slug: 'kelebihan-kayu-ulin',
    title: 'Kelebihan Kayu Ulin untuk Kusen Outdoor',
    excerpt: 'Kayu ulin terkenal ketahanannya terhadap cuaca ekstrem. Simak kelebihannya untuk penggunaan outdoor.',
    date: '28 Maret 2026',
    readTime: '5 menit',
    category: 'Material',
    image: 'https://images.pexels.com/photos/159838/pexels-photo-159838.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    slug: 'inspirasi-kusen-rustic',
    title: 'Inspirasi Desain Kusen Gaya Rustic',
    excerpt: 'Ide desain kusen dengan gaya rustic yang memberikan kesan natural dan hangat pada rumah Anda.',
    date: '20 Maret 2026',
    readTime: '4 menit',
    category: 'Desain',
    image: 'https://images.pexels.com/photos/1092964/pexels-photo-1092964.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <Navbar />
      <main className="pt-24">
        <div className="section bg-[var(--color-walnut)]">
          <div className="container-main">
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
              Blog & Artikel
            </h1>
            <p className="text-[var(--color-mist)] text-lg max-w-2xl">
              Temukan informasi, tips, dan inspirasi seputar kusen kayu untuk hunian impian Anda.
            </p>
          </div>
        </div>

        <div className="container-main py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-[var(--color-parchment)] rounded-2xl overflow-hidden border border-[var(--color-mist)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[var(--color-teak)] text-white text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-[var(--color-stone)] mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h2 className="font-heading text-xl text-[var(--color-walnut)] mb-3 line-clamp-2 group-hover:text-[var(--color-teak)] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[var(--color-stone)] text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[var(--color-teak)] font-medium text-sm group-hover:gap-3 transition-all">
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

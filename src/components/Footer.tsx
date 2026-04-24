import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-walnut)] text-white">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-[var(--color-gold)]" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl leading-none">
                  KUSEN
                </span>
                <span className="text-xs text-[var(--color-mist)] tracking-wider">
                  NUSANTARA
                </span>
              </div>
            </div>
            <p className="text-[var(--color-mist)] text-sm leading-relaxed mb-6">
              Kusen pintu dan jendela dari kayu pilihan terbaik — dibuat dengan tangan, untuk bertahan seumur hidup. Pengrajin kayu terpercaya sejak 2005.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 hover:bg-[var(--color-teak)] rounded-full transition-colors" aria-label="Facebook">
                <span className="text-sm font-medium">f</span>
              </a>
              <a href="#" className="p-2 hover:bg-[var(--color-teak)] rounded-full transition-colors" aria-label="Instagram">
                <span className="text-sm font-medium">ig</span>
              </a>
              <a href="#" className="p-2 hover:bg-[var(--color-teak)] rounded-full transition-colors" aria-label="Twitter">
                <span className="text-sm font-medium">x</span>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-heading text-lg mb-6 text-[var(--color-gold)]">Produk</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/kategori/Pintu" className="text-[var(--color-mist)] hover:text-white transition-colors inline-block hover:translate-x-2 transform duration-200">
                  Kusen Pintu
                </Link>
              </li>
              <li>
                <Link href="/kategori/Jendela" className="text-[var(--color-mist)] hover:text-white transition-colors inline-block hover:translate-x-2 transform duration-200">
                  Kusen Jendela
                </Link>
              </li>
              <li>
                <Link href="/custom-order" className="text-[var(--color-mist)] hover:text-white transition-colors inline-block hover:translate-x-2 transform duration-200">
                  Custom Order
                </Link>
              </li>
              <li>
                <Link href="/produk" className="text-[var(--color-mist)] hover:text-white transition-colors inline-block hover:translate-x-2 transform duration-200">
                  Katalog Lengkap
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading text-lg mb-6 text-[var(--color-gold)]">Perusahaan</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/tentang-kami" className="text-[var(--color-mist)] hover:text-white transition-colors inline-block hover:translate-x-2 transform duration-200">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[var(--color-mist)] hover:text-white transition-colors inline-block hover:translate-x-2 transform duration-200">
                  Blog & Inspirasi
                </Link>
              </li>
              <li>
                <Link href="/karir" className="text-[var(--color-mist)] hover:text-white transition-colors inline-block hover:translate-x-2 transform duration-200">
                  Karir
                </Link>
              </li>
              <li>
                <Link href="/sertifikasi" className="text-[var(--color-mist)] hover:text-white transition-colors inline-block hover:translate-x-2 transform duration-200">
                  Sertifikasi SVLK
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading text-lg mb-6 text-[var(--color-gold)]">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--color-mist)] text-sm">
                  Jl. Kayu Jati No. 123, Jakarta Selatan, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0" />
                <span className="text-[var(--color-mist)] text-sm">+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0" />
                <span className="text-[var(--color-mist)] text-sm">info@kusennusantara.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-[var(--color-teak)] border-opacity-30">
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--color-mist)] text-sm">
              © 2026 Kusen Nusantara. Semua hak dilindungi.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privasi" className="text-[var(--color-mist)] hover:text-white transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="/syarat" className="text-[var(--color-mist)] hover:text-white transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

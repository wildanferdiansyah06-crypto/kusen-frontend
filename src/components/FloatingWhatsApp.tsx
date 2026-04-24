'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const phoneNumber = '6281936442406';
  const message = encodeURIComponent('Halo, saya ingin konsultasi tentang kusen kayu.');

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
}

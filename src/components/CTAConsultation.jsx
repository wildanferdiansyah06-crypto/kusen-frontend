"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { KusenButton } from "./KusenButton";
import { Phone, Mail, Clock } from "lucide-react";
function CTAConsultation() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section className="section bg-[var(--color-walnut)]">
      <div className="container-main">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {
    /* Image */
  }
          <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
    transition={{ duration: 0.6 }}
    className="relative h-[400px] rounded-2xl overflow-hidden"
  >
            <Image
    src="https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=800"
    alt="Konsultasi gratis dengan ahli kayu"
    fill
    className="object-cover"
  />
          </motion.div>

          {
    /* Content */
  }
          <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="text-white"
  >
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              Konsultasi Gratis dengan Ahli Kayu
            </h2>
            <p className="text-[var(--color-mist)] text-lg mb-8 leading-relaxed">
              Bingung memilih jenis kayu yang tepat untuk rumahmu? Tim ahli kami siap membantu memberikan rekomendasi terbaik sesuai budget dan kebutuhanmu.
            </p>

            {
    /* Contact Info */
  }
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-teak)] flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-mist)]">Telepon / WhatsApp</p>
                  <p className="font-medium">+62 21 1234 5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-teak)] flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-mist)]">Email</p>
                  <p className="font-medium">info@kusennusantara.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-teak)] flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-mist)]">Jam Operasional</p>
                  <p className="font-medium">Senin - Sabtu, 08:00 - 17:00</p>
                </div>
              </div>
            </div>

            {
    /* CTA Button */
  }
            <KusenButton size="lg" className="rounded-full bg-white text-[var(--color-walnut)] hover:bg-[var(--color-cream)]">
              Hubungi Kami Sekarang
            </KusenButton>
          </motion.div>
        </div>
      </div>
    </section>;
}
export {
  CTAConsultation
};

"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";
const testimonials = [
  {
    name: "Budi Santoso",
    location: "Jakarta Selatan",
    rating: 5,
    text: "Kualitas kusen kayu sangat bagus, finishing rapi, dan pengiriman tepat waktu. Sangat recommended untuk yang sedang renovasi rumah.",
    product: "Pintu Kayu Jati Premium"
  },
  {
    name: "Ahmad Wijaya",
    location: "Bandung",
    rating: 5,
    text: "Sudah beli beberapa kali untuk proyek konstruksi saya. Kayu jati yang dijual asli dan berkualitas premium. Harga juga sangat bersaing.",
    product: "Jendela Casement Kayu Jati"
  },
  {
    name: "Siti Rahayu",
    location: "Surabaya",
    rating: 5,
    text: "Pelayanan sangat ramah dan responsif. Konsultasi sebelum pembelian sangat membantu saya memilih jenis kayu yang tepat.",
    product: "Pintu Mahoni Ukir"
  }
];
function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section className="section bg-[var(--color-linen)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl text-[var(--color-walnut)] mb-4">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="text-[var(--color-stone)] text-lg">
            Testimoni dari pelanggan yang puas dengan kualitas produk kami
          </p>
        </div>

        <div
    ref={ref}
    className="grid grid-cols-1 md:grid-cols-3 gap-8"
  >
          {testimonials.map((testimonial, index) => <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    className="bg-[var(--color-parchment)] rounded-2xl p-8 border border-[var(--color-mist)]"
  >
              {
    /* Rating */
  }
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-[var(--color-gold)] fill-[var(--color-gold)]" />)}
              </div>

              {
    /* Text */
  }
              <p className="text-[var(--color-charcoal)] leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {
    /* Divider */
  }
              <div className="h-px bg-[var(--color-mist)] mb-6" />

              {
    /* Author */
  }
              <div>
                <p className="font-display font-bold text-lg text-[var(--color-walnut)]">
                  {testimonial.name}
                </p>
                <p className="text-sm text-[var(--color-stone)] mb-2">
                  {testimonial.location}
                </p>
                <p className="text-xs text-[var(--color-teak)] font-medium">
                  Membeli: {testimonial.product}
                </p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
export {
  Testimonials
};

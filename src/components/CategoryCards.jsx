"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { DoorOpen, Layout, Wind, PenTool } from "lucide-react";
const categories = [
  {
    name: "Kusen Pintu",
    count: "120+ Produk",
    image: "https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/kategori/Pintu",
    icon: DoorOpen
  },
  {
    name: "Kusen Jendela",
    count: "80+ Produk",
    image: "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/kategori/Jendela",
    icon: Layout
  },
  {
    name: "Kusen Ventilasi",
    count: "40+ Produk",
    image: "https://images.pexels.com/photos/5490239/pexels-photo-5490239.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/kategori/Ventilasi",
    icon: Wind
  },
  {
    name: "Custom Order",
    count: "Pesan Sesuai Ukuranmu",
    image: "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/custom-order",
    icon: PenTool
  }
];
function CategoryCards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section className="section bg-[var(--color-cream)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl text-[var(--color-walnut)] mb-4">
            Temukan Kusen Idealmu
          </h2>
          <p className="text-[var(--color-stone)] text-lg">
            Dipilih dari koleksi terbaik kami
          </p>
        </div>

        <div
    ref={ref}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
  >
          {categories.map((category, index) => {
    const Icon = category.icon;
    return <motion.div
      key={category.name}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
                <Link href={category.href} className="group block">
                  <div className="relative h-[280px] rounded-2xl overflow-hidden border border-[var(--color-mist)] transition-all duration-300 hover:shadow-lg">
                    {
      /* Image */
    }
                    <div className="absolute inset-0">
                      <Image
      src={category.image}
      alt={category.name}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(61,43,31,0.8)] via-transparent to-transparent" />
                    </div>

                    {
      /* Content */
    }
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <Icon className="w-8 h-8 text-[var(--color-gold)] mb-3" />
                      <h3 className="font-display font-bold text-2xl text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-[var(--color-cream)] text-sm">
                        {category.count}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>;
  })}
        </div>
      </div>
    </section>;
}
export {
  CategoryCards
};

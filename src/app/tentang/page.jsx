import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Award, Users, Leaf, Hammer, CheckCircle2, ArrowRight } from "lucide-react";
const metadata = {
  title: "Tentang Kami | Kusen Nusantara",
  description: "Kenali cerita, nilai, dan proses kerja Kusen Nusantara dalam menghadirkan kusen kayu premium untuk hunian dan proyek komersial di seluruh Indonesia."
};
const milestones = [
  {
    year: "2009",
    title: "Berdiri",
    description: "Kusen Nusantara didirikan di Jepara dengan semangat melestarikan seni ukir kayu tradisional."
  },
  {
    year: "2012",
    title: "Ekspansi Pertama",
    description: "Membuka cabang pertama di Semarang dan mulai melayani pesanan dari seluruh Jawa Tengah."
  },
  {
    year: "2015",
    title: "Sertifikasi SVLK",
    description: "Mendapatkan sertifikasi SVLK (Sistem Verifikasi Legalitas Kayu) untuk jaminan kayu legal."
  },
  {
    year: "2018",
    title: "Go Digital",
    description: "Meluncurkan platform online untuk mempermudah pelanggan memesan dari seluruh Indonesia."
  },
  {
    year: "2021",
    title: "1000+ Pelanggan",
    description: "Mencapai milestone 1000 pelanggan puas dari 50 kota di seluruh Indonesia."
  },
  {
    year: "2024",
    title: "15 Tahun Berkarya",
    description: "Merayakan 15 tahun dedikasi dalam menyediakan kusen kayu berkualitas premium."
  }
];
const values = [
  {
    icon: Award,
    title: "Kualitas Premium",
    description: "Hanya menggunakan kayu grade A dari hutan produksi bersertifikat"
  },
  {
    icon: Users,
    title: "Pengrajin Berpengalaman",
    description: "Tim pengrajin dengan pengalaman 15+ tahun dalam seni ukir kayu"
  },
  {
    icon: Leaf,
    title: "Ramah Lingkungan",
    description: "Berkomitmen pada pengelolaan hutan yang berkelanjutan"
  },
  {
    icon: Hammer,
    title: "Handcrafted",
    description: "Setiap produk dibuat dengan sentuhan tangan untuk detail sempurna"
  }
];
const processSteps = [
  {
    title: "Konsultasi Kebutuhan",
    description: "Kami memahami gaya hunian, ukuran bukaan, budget, hingga target waktu pemasangan."
  },
  {
    title: "Kurasi Material",
    description: "Setiap kayu dipilih berdasarkan kadar air, stabilitas serat, dan kesesuaian untuk desain Anda."
  },
  {
    title: "Produksi Presisi",
    description: "Pengerjaan oleh pengrajin berpengalaman dengan standar dimensi ketat agar pemasangan rapi."
  },
  {
    title: "QC & Pengiriman",
    description: "Produk melalui inspeksi akhir sebelum dikirim aman ke proyek rumah maupun bangunan komersial."
  }
];
const stats = [
  { value: "15+", label: "Tahun Pengalaman" },
  { value: "1.000+", label: "Pelanggan Puas" },
  { value: "50+", label: "Kota Terlayani" },
  { value: "50+", label: "Pengrajin Ahli" }
];
const team = [
  {
    name: "Tohari",
    role: "Founder & Kepala Produksi",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1000"
  },
  {
    name: "Fardan",
    role: "Head of Design & Konsultasi",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1000"
  },
  {
    name: "Arif Hidayat",
    role: "Quality Control Manager",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1000"
  }
];
const guarantees = [
  "Material legal dan terkurasi sesuai kebutuhan proyek",
  "Ketelitian dimensi untuk meminimalkan revisi lapangan",
  "Progres kerja transparan dari awal hingga pengiriman",
  "Dukungan konsultasi teknis sebelum dan sesudah pembelian"
];
const faqs = [
  {
    question: "Apakah Kusen Nusantara melayani proyek di luar kota?",
    answer: "Ya. Kami melayani pengiriman ke berbagai kota di Indonesia dengan penjadwalan sesuai kebutuhan proyek Anda."
  },
  {
    question: "Berapa lama waktu produksi kusen kayu?",
    answer: "Durasi tergantung jumlah, model, dan material. Setelah brief proyek diterima, kami akan berikan estimasi waktu yang jelas."
  },
  {
    question: "Apakah bisa custom desain sesuai gambar arsitek?",
    answer: "Bisa. Tim desain kami siap menyesuaikan spesifikasi dari gambar arsitek maupun kebutuhan custom lainnya."
  },
  {
    question: "Bagaimana proses konsultasi awal?",
    answer: "Anda dapat mulai dari WhatsApp atau form kontak. Tim kami akan menanyakan kebutuhan dasar lalu memberi rekomendasi awal."
  }
];
function AboutPage() {
  const thisYear = (/* @__PURE__ */ new Date()).getFullYear();
  return <div className="min-h-screen bg-[var(--color-cream)]">
      <Navbar />
      <main className="pt-24">
        {
    /* Hero */
  }
        <section className="section bg-[var(--color-walnut)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,#C8962E_0%,transparent_45%)]" />
          <div className="container-main">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center rounded-full px-4 py-1 text-sm bg-white/10 text-[var(--color-mist)] mb-5">
                  Sejak 2009, berkarya dari Jepara untuk Indonesia
                </span>
                <h1 className="font-heading text-4xl md:text-6xl text-white mb-5">
                  Tentang Kusen Nusantara
                </h1>
                <p className="text-[var(--color-mist)] text-lg max-w-2xl leading-relaxed">
                  Kami memadukan craftsmanship tradisional dengan standar produksi modern untuk
                  menghadirkan kusen kayu premium yang kuat, rapi, dan bernilai estetika tinggi.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
    href="/kontak"
    className="inline-flex items-center gap-2 bg-[var(--color-gold)] text-white px-6 py-3 rounded-full font-medium hover:bg-[var(--color-teak)] transition-colors"
  >
                    Konsultasi Sekarang
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
    href="/produk"
    className="inline-flex items-center border border-[var(--color-mist)] text-[var(--color-mist)] px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
  >
                    Lihat Produk
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((item) => <div key={item.label} className="rounded-2xl border border-white/15 bg-white/10 p-5">
                    <p className="font-display text-3xl text-white">{item.value}</p>
                    <p className="text-sm text-[var(--color-mist)] mt-1">{item.label}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {
    /* Story and Vision */
  }
        <section className="section bg-[var(--color-cream)]">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-walnut)] mb-6">
                  Cerita Kami
                </h2>
                <p className="text-[var(--color-charcoal)] leading-relaxed mb-4">
                  Kusen Nusantara berdiri pada tahun 2009 di Jepara, Jawa Tengah, dengan visi
                  sederhana namun bermakna: melestarikan seni kayu Indonesia sembari menjawab
                  kebutuhan hunian modern.
                </p>
                <p className="text-[var(--color-charcoal)] leading-relaxed mb-4">
                  Dimulai dari bengkel kecil dengan 5 pengrajin, kini kami tumbuh menjadi tim
                  berisi 50+ pengrajin berpengalaman yang melayani pelanggan lintas kota dan
                  provinsi.
                </p>
                <p className="text-[var(--color-charcoal)] leading-relaxed">
                  Kami percaya setiap detail menentukan kualitas akhir. Karena itu, setiap kusen
                  kami kerjakan dengan ketelitian tinggi agar tahan lama, presisi, dan nyaman
                  dipandang selama bertahun-tahun.
                </p>
                <div className="mt-6 space-y-3">
                  {[
    "Fokus pada kekuatan struktur dan estetika serat kayu",
    "Transparansi material, proses, dan estimasi pengerjaan",
    "Pendampingan dari konsultasi hingga purna pemasangan"
  ].map((point) => <div key={point} className="flex items-start gap-3 text-[var(--color-stone)]">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 text-[var(--color-success)]" />
                      <span>{point}</span>
                    </div>)}
                </div>
              </div>
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
                <Image
    src="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1400"
    alt="Pengrajin Kusen Nusantara sedang mengerjakan kusen kayu"
    fill
    sizes="(max-width: 1024px) 100vw, 50vw"
    className="object-cover"
    priority
  />
              </div>
            </div>
          </div>
        </section>

        {
    /* Values */
  }
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
    return <div
      key={value.title}
      className="bg-[var(--color-parchment)] rounded-2xl p-6 text-center border border-[var(--color-mist)] hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all"
      style={{ animationDelay: `${index * 80}ms` }}
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
                  </div>;
  })}
            </div>
          </div>
        </section>

        {
    /* Workflow */
  }
        <section className="section bg-[var(--color-parchment)]">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-walnut)] mb-4">
                Cara Kami Bekerja
              </h2>
              <p className="text-[var(--color-stone)] text-lg">
                Alur kerja yang rapi agar hasil akhir sesuai ekspektasi Anda
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => <div
    key={step.title}
    className="rounded-2xl bg-white p-6 border border-[var(--color-mist)] shadow-sm"
  >
                  <p className="font-display text-2xl text-[var(--color-gold)] mb-2">
                    0{index + 1}
                  </p>
                  <h3 className="font-display font-bold text-xl text-[var(--color-walnut)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-stone)] leading-relaxed text-sm">{step.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {
    /* Timeline */
  }
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

            <div className="relative">
              {
    /* Timeline Line */
  }
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-teak)] opacity-30 transform -translate-x-1/2" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => <div
    key={milestone.year}
    className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
  >
                    {
    /* Year Badge */
  }
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                      <div className="bg-[var(--color-teak)] text-white px-6 py-3 rounded-full font-display font-bold text-lg">
                        {milestone.year}
                      </div>
                    </div>

                    {
    /* Center Dot */
  }
                    <div className="hidden lg:block w-4 h-4 rounded-full bg-[var(--color-gold)] border-4 border-[var(--color-cream)] z-10" />

                    {
    /* Content */
  }
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
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {
    /* Team */
  }
        <section className="section bg-[var(--color-linen)]">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-walnut)] mb-4">
                Tim Inti Kami
              </h2>
              <p className="text-[var(--color-stone)] text-lg">
                Profesional yang memastikan setiap detail proyek Anda tertangani dengan baik
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => <article
    key={member.name}
    className="bg-[var(--color-parchment)] rounded-2xl overflow-hidden border border-[var(--color-mist)] shadow-sm"
  >
                  <div className="relative h-64">
                    <Image
    src={member.image}
    alt={`${member.name} - ${member.role}`}
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
    className="object-cover"
  />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-display text-xl text-[var(--color-walnut)] font-bold">
                      {member.name}
                    </h3>
                    <p className="text-[var(--color-stone)] mt-2">{member.role}</p>
                  </div>
                </article>)}
            </div>
          </div>
        </section>

        {
    /* Brief Lead */
  }
        <section className="section bg-[var(--color-parchment)]">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-walnut)] mb-4">
                  Ceritakan Proyek Anda
                </h2>
                <p className="text-[var(--color-stone)] leading-relaxed mb-6">
                  Untuk estimasi cepat, siapkan informasi dasar proyek Anda. Tim kami akan bantu
                  rekomendasi material, model kusen, dan kisaran waktu pengerjaan.
                </p>
                <div className="space-y-3">
                  {[
    "Jenis proyek: rumah baru, renovasi, atau komersial",
    "Jumlah bukaan pintu/jendela yang dibutuhkan",
    "Gaya desain: minimalis, klasik, atau custom",
    "Target waktu pengerjaan dan pemasangan"
  ].map((item) => <div key={item} className="flex items-start gap-3 text-[var(--color-stone)]">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 text-[var(--color-success)]" />
                      <span>{item}</span>
                    </div>)}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-[var(--color-mist)] p-7 shadow-sm">
                <h3 className="font-display text-2xl text-[var(--color-walnut)] mb-4 font-bold">
                  Mulai Konsultasi Cepat
                </h3>
                <p className="text-[var(--color-stone)] text-sm mb-6">
                  Pilih kanal komunikasi yang paling nyaman. Untuk brief lengkap, gunakan form di
                  halaman kontak.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="rounded-xl border border-[var(--color-mist)] p-4">
                    <p className="text-xs text-[var(--color-stone)]">WhatsApp</p>
                    <p className="text-[var(--color-walnut)] font-semibold">+62 812 3456 7890</p>
                  </div>
                  <div className="rounded-xl border border-[var(--color-mist)] p-4">
                    <p className="text-xs text-[var(--color-stone)]">Email</p>
                    <p className="text-[var(--color-walnut)] font-semibold">sales@kusennusantara.com</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
    href="https://wa.me/6281234567890"
    className="inline-flex items-center gap-2 bg-[var(--color-teak)] text-white px-5 py-3 rounded-full font-medium hover:bg-[var(--color-walnut)] transition-colors"
  >
                    Chat via WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
    href="/kontak"
    className="inline-flex items-center border border-[var(--color-teak)] text-[var(--color-teak)] px-5 py-3 rounded-full font-medium hover:bg-[var(--color-linen)] transition-colors"
  >
                    Isi Form Brief
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {
    /* Guarantee */
  }
        <section className="section bg-[var(--color-cream)]">
          <div className="container-main">
            <div className="max-w-4xl mx-auto bg-[var(--color-walnut)] rounded-3xl p-8 md:p-10">
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-4 text-center">
                Komitmen Layanan Kami
              </h2>
              <p className="text-[var(--color-mist)] text-center mb-8">
                Standar layanan yang kami pegang agar Anda tenang sepanjang proses proyek berjalan
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {guarantees.map((item) => <div
    key={item}
    className="rounded-xl bg-white/10 border border-white/20 p-4 text-[var(--color-mist)] flex items-start gap-3"
  >
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-[var(--color-gold)]" />
                    <span>{item}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {
    /* FAQ */
  }
        <section className="section bg-[var(--color-linen)]">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-walnut)] mb-4">
                Pertanyaan Umum
              </h2>
              <p className="text-[var(--color-stone)] text-lg">
                Jawaban singkat sebelum Anda memulai konsultasi
              </p>
            </div>
            <div className="max-w-4xl mx-auto grid gap-4">
              {faqs.map((item) => <details
    key={item.question}
    className="group rounded-2xl bg-[var(--color-parchment)] border border-[var(--color-mist)] p-6"
  >
                  <summary className="cursor-pointer list-none font-display font-bold text-[var(--color-walnut)] text-lg flex items-center justify-between gap-3">
                    <span>{item.question}</span>
                    <span className="text-[var(--color-teak)] group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[var(--color-stone)] leading-relaxed">{item.answer}</p>
                </details>)}
            </div>
          </div>
        </section>

        {
    /* CTA */
  }
        <section className="section bg-[var(--color-walnut)]">
          <div className="container-main text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
              Siap Berkolaborasi dengan Kami?
            </h2>
            <p className="text-[var(--color-mist)] text-lg mb-8 max-w-2xl mx-auto">
              Hubungi kami untuk konsultasi gratis dan temukan solusi kusen kayu terbaik untuk
              proyek rumah, villa, hingga bangunan komersial Anda
            </p>
            <Link
    href="https://wa.me/6281234567890"
    className="inline-block bg-[var(--color-gold)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-teak)] transition-colors"
  >
              Hubungi Kami via WhatsApp
            </Link>
            <p className="text-xs text-[var(--color-mist)] mt-4">
              Copyright {thisYear} Kusen Nusantara. Komitmen kami: kualitas, ketepatan, dan layanan.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>;
}
export {
  AboutPage as default,
  metadata
};

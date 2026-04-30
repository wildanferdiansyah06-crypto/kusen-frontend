"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, ShoppingBag, Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { KusenButton } from "./KusenButton";
function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsScrolled(currentScrollY > 20);
          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const loadCounts = () => {
      const cart = localStorage.getItem("cart");
      const wishlist = localStorage.getItem("wishlist");
      if (cart) setCartCount(Object.keys(JSON.parse(cart)).length);
      if (wishlist) setWishlistCount(JSON.parse(wishlist).length);
    };
    loadCounts();
    const handleStorageChange = (e) => {
      if (e.key === "cart" || e.key === "wishlist") {
        loadCounts();
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  const navLinks = [
    { href: "/produk", label: "Produk" },
    { href: "/kategori", label: "Kategori" },
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/blog", label: "Blog" },
    { href: "/kontak", label: "Kontak" }
  ];
  return <>
      <motion.nav
    initial={{ y: 0 }}
    animate={{ y: isVisible ? 0 : -72 }}
    transition={{ duration: 0.3 }}
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[rgba(245,239,230,0.92)] backdrop-blur-md border-b border-[var(--color-mist)]" : "bg-[rgba(245,239,230,0.92)] backdrop-blur-md border-b border-[var(--color-mist)]"}`}
    style={{ height: "72px" }}
  >
        <div className="container-main h-full flex items-center justify-between">
          {
    /* Logo */
  }
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Leaf className="w-8 h-8 text-[var(--color-teak)]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl text-[var(--color-walnut)] leading-none">
                KUSEN
              </span>
              <span className="text-xs text-[var(--color-stone)] tracking-wider">
                NUSANTARA
              </span>
            </div>
          </Link>

          {
    /* Desktop Nav Links */
  }
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => <Link
    key={link.href}
    href={link.href}
    className="nav-link text-sm font-medium text-[var(--color-charcoal)] hover:text-[var(--color-teak)] transition-colors"
  >
                {link.label}
              </Link>)}
          </div>

          {
    /* Right Actions */
  }
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-[var(--color-linen)] rounded-full transition-colors">
              <Search className="w-5 h-5 text-[var(--color-charcoal)]" />
            </button>
            
            <Link href="/wishlist" className="relative p-2 hover:bg-[var(--color-linen)] rounded-full transition-colors">
              <Heart className="w-5 h-5 text-[var(--color-charcoal)]" />
              {wishlistCount > 0 && <span className="absolute -top-1 -right-1 bg-[var(--color-rust)] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>}
            </Link>
            
            <Link href="/keranjang" className="relative p-2 hover:bg-[var(--color-linen)] rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5 text-[var(--color-charcoal)]" />
              {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-[var(--color-teak)] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>}
            </Link>
            
            <Link href="/kontak">
              <KusenButton size="sm" className="rounded-full">
                Konsultasi Gratis
              </KusenButton>
            </Link>
          </div>

          {
    /* Mobile Menu Button */
  }
          <button
    className="md:hidden p-2 hover:bg-[var(--color-linen)] rounded-full transition-colors"
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-[var(--color-charcoal)]" /> : <Menu className="w-6 h-6 text-[var(--color-charcoal)]" />}
          </button>
        </div>
      </motion.nav>

      {
    /* Mobile Menu Drawer */
  }
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ type: "spring", damping: 25, stiffness: 200 }}
    className="fixed inset-0 z-50 md:hidden"
  >
            <div
    className="absolute inset-0 bg-black/50"
    onClick={() => setIsMobileMenuOpen(false)}
  />
            <motion.div
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ type: "spring", damping: 25, stiffness: 200 }}
    className="absolute right-0 top-0 bottom-0 w-80 bg-[var(--color-walnut)] p-6 flex flex-col"
  >
              <div className="flex justify-between items-center mb-8">
                <span className="font-display font-bold text-2xl text-white">KUSEN</span>
                <button
    onClick={() => setIsMobileMenuOpen(false)}
    className="p-2 hover:bg-white/10 rounded-full transition-colors"
  >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link) => <Link
    key={link.href}
    href={link.href}
    className={`text-lg font-medium text-white hover:text-[var(--color-gold)] transition-colors py-2 relative ${pathname === link.href ? "text-[var(--color-gold)]" : ""}`}
    onClick={() => setIsMobileMenuOpen(false)}
  >
                    {link.label}
                    {pathname === link.href && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-gold)]" />}
                  </Link>)}
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <Link
    href="/wishlist"
    className="flex items-center gap-3 text-white hover:text-[var(--color-gold)] transition-colors py-2"
    onClick={() => setIsMobileMenuOpen(false)}
  >
                  <Heart className="w-5 h-5" />
                  <span>Wishlist ({wishlistCount})</span>
                </Link>
                <Link
    href="/keranjang"
    className="flex items-center gap-3 text-white hover:text-[var(--color-gold)] transition-colors py-2"
    onClick={() => setIsMobileMenuOpen(false)}
  >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Keranjang ({cartCount})</span>
                </Link>
                <Link href="/kontak" onClick={() => setIsMobileMenuOpen(false)}>
                  <KusenButton variant="primary" className="w-full mt-4">
                    Konsultasi Gratis
                  </KusenButton>
                </Link>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </>;
}
export {
  Navbar
};

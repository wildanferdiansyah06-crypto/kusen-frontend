import { Playfair_Display, DM_Serif_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"]
});
const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: ["400"]
});
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"]
});
const metadata = {
  title: "Kusen Nusantara \u2014 Kusen Kayu Premium Indonesia",
  description: "Kusen pintu dan jendela dari kayu pilihan terbaik \u2014 dibuat dengan tangan, untuk bertahan seumur hidup. Pengrajin kayu terpercaya sejak 2005."
};
function RootLayout({
  children
}) {
  return <html
    lang="id"
    className={`${playfairDisplay.variable} ${dmSerifDisplay.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
  >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>;
}
export {
  RootLayout as default,
  metadata
};

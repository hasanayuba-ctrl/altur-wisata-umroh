import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Amiri } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "PT. Altur Wisata Mulia | Umroh Premium Gorontalo",
  description: "Wujudkan Ibadah Umroh Impian Anda Bersama Kami. Biro perjalanan umroh resmi berbasis di Limboto, Gorontalo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${jakarta.variable} ${amiri.variable} antialiased`}
    >
      <body className="font-sans bg-accent text-dark">
        {children}
      </body>
    </html>
  );
}

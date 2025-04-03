import type { Metadata } from "next";
import PortfolioDock from "@/components/navigation/portfolio-dock";
import "./globals.css";
import { Space_Mono, Roboto } from "next/font/google";

// For headings - Cardo is an elegant serif font
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // Cardo is available in regular and bold
  display: "swap",
  variable: "--font-space-mono",
});

// For body text - Roboto is clean and highly readable
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Alexander Olomukoro",
  description: "A showcase of my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${roboto.variable}`}>
      <body className="relative min-h-screen font-sans">
        {children}
        <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50">
          <PortfolioDock />
        </div>
      </body>
    </html>
  );
}

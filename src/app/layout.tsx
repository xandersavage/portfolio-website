import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import DockDemo from "@/components/navigation/portfolio-dock";
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceMono.variable} ${roboto.variable}`}
    >
      <body className="relative min-h-screen font-sans">
        <ThemeProvider>
          {children}
          <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50">
            <DockDemo />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

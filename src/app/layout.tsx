import type { Metadata } from "next";
import PortfolioDock from "@/components/navigation/portfolio-dock";
import "./globals.css";

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
    <html lang="en">
      <body className="relative min-h-screen antialiased">
        {children}
        <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50">
          <PortfolioDock />
        </div>
      </body>
    </html>
  );
}

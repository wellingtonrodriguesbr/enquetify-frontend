import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
});
const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Pollify | Descobrir, avaliar, medir, validar",
  description:
    "Crie e compartilhe enquetes com facilidade, garantindo decisões validadas por seus clientes para impulsionar o crescimento do seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased text-app-black",
          sans.variable,
          display.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}

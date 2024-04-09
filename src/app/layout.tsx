import type { Metadata } from "next";
import { Inter, Kalam } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import { Toaster } from "@/components/ui/sonner";

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

const logo = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-logo",
});

export const metadata: Metadata = {
  title: "Pollify | Descobrir & Avaliar & Medir & Validar & Engajar",
  description:
    "Crie e compartilhe enquetes com facilidade, garantindo decisões validadas por seus clientes e colaboradores para descobrir, avaliar, medir e engajar. Impulsionando o crescimento do seu negócio.",
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
          "min-h-screen font-sans antialiased text-black",
          sans.variable,
          logo.variable
        )}
      >
        <ReactQueryProvider>
          {children}
          <Toaster richColors />
        </ReactQueryProvider>
      </body>
    </html>
  );
}

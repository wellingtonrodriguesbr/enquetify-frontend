import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Kalam, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import { Toaster } from "@/components/ui/sonner";

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const logo = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-logo",
});

export const metadata: Metadata = {
  title: "Pollify | Crie e compartilhe enquetes gratuitamente",
  description:
    "Crie e compartilhe enquetes com facilidade, garantindo decisões validadas por seus clientes e colaboradores para descobrir, avaliar, medir e engajar. Impulsionando o crescimento do seu negócio.",
  metadataBase: new URL("https://pollify.app"),
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
          <Toaster richColors position="top-center" />
        </ReactQueryProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Bricolage_Grotesque, Kalam } from "next/font/google";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

import "./globals.css";

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
});

const logo = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-logo",
});

export const metadata: Metadata = {
  title: "Enquetify | Crie e compartilhe enquetes gratuitamente",
  description: "Crie e compartilhe enquetes gratuitamente.",
  metadataBase: new URL("https://enquetify.app"),
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

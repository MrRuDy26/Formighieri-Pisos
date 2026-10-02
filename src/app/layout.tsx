import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Formighieri Pisos de Madeira | Alto Padrão em Curitiba",
  description: "Há mais de 70 anos transformando ambientes com pisos de madeira nobre, decks, painéis e projetos exclusivos na CASACOR Paraná.",
  keywords: "pisos de madeira curitiba, piso estruturado carvalho, deck cumaru mercês, formighieri madeiras",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

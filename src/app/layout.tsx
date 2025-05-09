// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";

// Configurando as fontes corretamente
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Definindo o Metadata
export const metadata: Metadata = {
  title: "Curso de Qlik Sense",
  description: "Domine o Qlik Sense com nosso curso completo.",
};

// ÚNICA definição de RootLayout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>© 2023 Curso de Qlik Sense. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}

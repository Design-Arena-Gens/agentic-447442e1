import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FIIs Logística - Preço Teto Dinâmico",
  description:
    "Monitoramento de fundos imobiliários logísticos com cálculo automático de preço teto baseado na Selic."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-100 min-h-screen">{children}</body>
    </html>
  );
}

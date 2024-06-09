import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextJS boilerplate",
  description: "made for new projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

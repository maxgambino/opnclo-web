import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MaterialIcons from "../components/MaterialIcons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Opnclo | Multi-Tenant Platform for Organizational Management",
  description: "A powerful multi-tenant platform to organize your teams, departments, and sites all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-display antialiased bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300`}>
        <MaterialIcons />
        {children}
      </body>
    </html>
  );
}

import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Roboto_Mono } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head />
      <body className="primary">
        <Navbar />

        {children}
      </body>
    </html>
  );
}

import Navbar from "@/components/Navbar";
import { Roboto } from "@next/font/google";
import "./globals.css";

const inter = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <head />
      <body className="primary overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

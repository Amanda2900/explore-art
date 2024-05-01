import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Explore Art",
  description: "App that utilizes the Art Institute of Chicago API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-300">
      
      <body className={inter.className}>
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  );
}

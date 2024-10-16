import type {Metadata} from "next";
import {Inter} from "next/font/google";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const inter = Inter({subsets: ["latin"]});
const rubik = Rubik({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "ENVIT",
  description: "Restoring degraded land for green transition worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </head>
      <body className={rubik.className}>
        <Navbar />
        <main>
          {children}
          <ScrollToTopButton />
        </main>
        <Footer />
      </body>
    </html>
  );
}

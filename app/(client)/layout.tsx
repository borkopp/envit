import type {Metadata} from "next";
import {Inter, Poppins, Lato} from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "../components/ScrollToTopButton";
import {FloatingNavDemo} from "../components/FloatingNavbar";
import {NavbarDemo} from "../components/NewestNavbar";
import {ThemeProvider} from "../components/theme-provider";
import {Navbar} from "@/components/navbar";
import {SimpleFooterWithFourGrids} from "@/components/footer";
import {NewNavbar} from "@/components/new-navbar";

const montserrat = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});
const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </head>
      <body className={`${montserrat.className} ${lato.variable}`}>
        <div className="w-full bg-background relative">
          {/* <NewNavbar /> */}
          <NewNavbar />
          {children}
          <SimpleFooterWithFourGrids />
        </div>
      </body>
    </html>
  );
}

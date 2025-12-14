import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

import { ModalProvider } from "./context/ModalContext";
import ContactModal from "./components/ContactModal";

export const metadata: Metadata = {
  title: "Incubeetor - Affordable Neonatal Care",
  description: "An affordable, transportable neonatal incubator.",
  icons: {
    icon: "/favicon-for-public/web-app-manifest-192x192.png",
    apple: "/favicon-for-public/web-app-manifest-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased text-gray-900 bg-gray-50`}
      >
        <ModalProvider>
          {children}
          <ContactModal />
        </ModalProvider>
      </body>
    </html>
  );
}

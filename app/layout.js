import { Geist, Geist_Mono, Share_Tech, Changa } from "next/font/google";
import "./globals.css";

import { LanguageProvider } from "@/context/LanguageContext";
import ClientLayout from "@/components/ClientLayout";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shareTech = Share_Tech({
  subsets: ["latin"],
  weight: "400",
});

const changa = Changa({
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
});

export const metadata = {
  title: " مسفر الوادعي",
  description: "Personal Client Portfolio",
  icons: [{ rel: "icon", url: "icon.ico" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${shareTech.className} ${changa.className}`}
      >
        {children}
         <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}

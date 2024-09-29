import localFont from "next/font/local";
import "./globals.css";
import { DarkModeProvider } from "@/context/DarkModeContext";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "POTDBase",
  description: "Your one-stop destination for Problem of the Day from various coding platforms.",
};

export default function RootLayout({ children }) {
  return (
    <DarkModeProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
          <Analytics />
        </body>
      </html>
    </DarkModeProvider>
  );
}

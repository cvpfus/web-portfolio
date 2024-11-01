import { Work_Sans } from "next/font/google";
import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";


const workSans = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yusuf Pradityarahman",
  description: "Web Portfolio of Yusuf Pradityarahman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <GoogleTagManager gtmId="GTM-PF3S9F8Z" />
      <body
        className={`${workSans.className} antialiased selection:text-white selection:bg-black`}
      >
        {children}
      </body>
    </html>
  );
}

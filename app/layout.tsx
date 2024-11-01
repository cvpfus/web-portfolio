import { Lato, Work_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

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
      <body
        className={`${workSans.className} antialiased selection:text-white selection:bg-black`}
      >
        {children}
      </body>
    </html>
  );
}

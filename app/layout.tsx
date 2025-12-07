import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Yusuf Praditya Rahman",
  description: "Web Portfolio of Yusuf Praditya Rahman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-PF3S9F8Z" />
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      <Script defer src="https://umami.b8n.xyz/script.js" data-website-id="d22cd6f0-b303-468d-97f9-e43371710a7b"></Script>
      <body
        className={`${plusJakartaSans.className} antialiased selection:text-white selection:bg-black dark:selection:text-black dark:selection:bg-white dark:bg-black`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

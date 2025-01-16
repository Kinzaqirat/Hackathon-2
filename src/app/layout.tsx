import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

import Script from "next/script";

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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      
      <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.5.0/default/snipcart.css" /> 
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
     
        {children}
        <script async src="https://cdn.snipcart.com/themes/v3.5.0/default/snipcart.js"></script>
        <div hidden id="snipcart" data-config-modal-style="side" data-api-key="ZTdjMTk4YTUtMmM5ZC00NGRlLWFkMzUtZmE0YmU3MmE2YjdiNjM4NzE3NjQzNjI5MTE3MTYz"></div>
       
      </body>
    </html>
  );
}

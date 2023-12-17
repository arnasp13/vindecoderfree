import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Script from "next/script";
import "./styles.css";
import { NavBar } from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
      <body className={inter.className}>
        <Providers>
          <NavBar />

          {children}
        </Providers>
      </body>
    </html>
  );
}

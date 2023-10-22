import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Providers from "./providers";
import Script from "next/script";

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
          <div>
            <div>
              <div className="border-b">
                <div className="max-w-[1200px] flex justify-between items-center py-3 m-auto px-3">
                  <Link href="/">
                    <Image src="/logo.png" width={60} height={60} alt="Logo" />
                  </Link>

                  <Link
                    href="mailto:arnaspuidokas6@gmail.com?subject=Request for Google Sheets Add-on&body=Hi! I would like to get an add-on for google sheets."
                    className="no-underline bg-primary-1 px-5 py-4 rounded-[50px] text-white font-semibold"
                  >
                    Install Google Sheet Add-On
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {children}
        </Providers>
      </body>
    </html>
  );
}

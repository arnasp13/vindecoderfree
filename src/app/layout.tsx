import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Providers from "./providers";
import Script from "next/script";
import "./styles.css";

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

                  <div>
                    <Link href="/blog" className="pr-6 no-underline">
                      Blog
                    </Link>
                    <Link
                      href="/google-sheets"
                      target="_blank"
                      className="rounded-[50px] no-underline"
                    >
                      Get Google Sheet Add-On
                    </Link>
                  </div>
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

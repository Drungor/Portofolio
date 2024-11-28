import { ReactNode } from "react";
import Provider from "./providers" ;
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import clsx from "clsx";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

interface RootLayoutProps {
  children: ReactNode;
}

console.log("Rendering the children of RootLayout");

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <html lang="ja" className={clsx(notoSansJP.variable, "font-sans")} suppressHydrationWarning>
        <head>
        </head>
        <body>
        <Provider>{children}</Provider>
        </body>
      </html>
  );
}

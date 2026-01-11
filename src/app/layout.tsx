"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import clsx from "clsx";
import { Noto_Sans_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="ja"
      className={clsx(notoSansJP.variable, "font-sans")}
      suppressHydrationWarning
      title="LM Portofolio"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const systemTheme = prefersDark ? 'dark' : 'light';
                document.documentElement.classList.add(theme || systemTheme);
                document.documentElement.style.colorScheme = theme || systemTheme;
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
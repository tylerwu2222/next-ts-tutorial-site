import type { Metadata } from "next";
// import localFont from "next/font/local";

import NavBar from "./components/NavBar/NavBar";

import { ColorSchemeScript } from '@mantine/core';
import "./globals.css";
import styles from './layout.module.css'
import '@mantine/core/styles/global.css';
import { createTheme, MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
  title: "Next-TS-Prisma",
  description: "My journey learning a modern tech stack",
};

const theme = createTheme({
  white: '#cfdee2'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme='light' theme={theme}>
          {/* navbar visible on all pages */}
          <NavBar />
          <div className={styles.navbarGridContainer}>
            <div className={styles.childrenContainer}>
              {children}
            </div>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}

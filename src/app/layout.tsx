import type { Metadata } from "next";
// import localFont from "next/font/local";

import NavBar from "./components/NavBar/NavBar";

import { ColorSchemeScript } from '@mantine/core';
import "./globals.css";
import styles from './layout.module.css'

// mantine styles
import '@mantine/core/styles/global.css';
import '@mantine/core/styles/ScrollArea.css';
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/VisuallyHidden.css';
import '@mantine/core/styles/Paper.css';
import '@mantine/core/styles/Popover.css';
import '@mantine/core/styles/CloseButton.css';
import '@mantine/core/styles/Group.css';
import '@mantine/core/styles/Loader.css';
import '@mantine/core/styles/Overlay.css';
import '@mantine/core/styles/ModalBase.css';
import '@mantine/core/styles/Input.css';
import '@mantine/core/styles/InlineInput.css';
import '@mantine/core/styles/Flex.css';

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

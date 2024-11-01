import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Footer, Navbar } from '../components';

export const metadata: Metadata = {
  title: 'Isaac Ayodele'
};

// eslint-disable-next-line react/function-component-definition
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

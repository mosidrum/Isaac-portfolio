import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Footer, Navbar } from '../components';

export const metadata: Metadata = {
  title: 'Isaac - Software Engineer'
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
        <div className="layout-container">
          <div className="content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

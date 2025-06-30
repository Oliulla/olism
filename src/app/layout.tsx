import React from "react";
import "../styles/globals.sass";
import { Metadata } from "next";

// export const metadata = {
//   title: "Oli's Portfolio",
//   description: "Mohammad Oliullah",
// };

export const metadata: Metadata = {
  title: "Oli's Portfolio",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

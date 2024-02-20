import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.scss";
import Nav from "./components/Nav";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krystian Załuski",
  description:
    "Hi, I’m Krystian Załuski. Front-end React Developer from Poland, Warsaw ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}

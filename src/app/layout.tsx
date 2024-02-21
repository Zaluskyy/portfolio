import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.scss";
import Nav from "./components/Nav";
import { PortfolioContextProvider } from "./context/context";

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
      <PortfolioContextProvider>
        <body className={quicksand.className}>
          <Nav />
          {children}
        </body>
      </PortfolioContextProvider>
    </html>
  );
}

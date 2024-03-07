import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.scss";
import Nav from "./components/Nav";
import { PortfolioContextProvider } from "./context/context";
import { Toaster } from "react-hot-toast";

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
          {children}
          <Toaster position="bottom-center" />
        </body>
      </PortfolioContextProvider>
    </html>
  );
}

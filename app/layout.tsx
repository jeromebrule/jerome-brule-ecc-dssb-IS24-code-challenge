import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import NavBar from "./NavBar";
import AuthProvider from "./auth/Provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "A Very Real Company",
  description: "A Very Real Company",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" data-theme="wireframe">
      <body className={inter.className}>
        <AuthProvider>
          <NavBar />
          <main className=" p-5">{children}</main>
          <div id="modal-root"></div>
        </AuthProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./element/navbar";

export const metadata: Metadata = {
  title: "MAKARYO Group",
  description:
    "Handphone, Accesories, Service, Sparepart, Pulsa Multi All Operator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          <nav className="sticky top-0 z-50">
            <NavBar />
          </nav>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

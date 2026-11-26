import type { Metadata } from "next";
import Nav from "@/components/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "DN—PRD · Film Director & Production",
  description: "Independent filmmaker and production studio creating cinematic music films, campaigns, and visual stories.",
  metadataBase: new URL("https://donprod.uk"),
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-black text-white selection:bg-white selection:text-black">
        <Nav />
        {children}
      </body>
    </html>
  );
}

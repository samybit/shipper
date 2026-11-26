import type { Metadata } from "next";
import Nav from "@/components/nav";
import Logo from "@/components/logo";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shipper · Video Portfolio",
  description: "Video production portfolio.",
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-white selection:text-black font-sans">
        <div className="flex flex-col flex-1">
          <Nav />
          <div className="flex-1">
            <header className="px-6 py-8 md:px-8 md:py-12 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Logo />
              </div>
            </header>
            <main>{children}</main>
          </div>
        </div>
        <footer className="px-6 py-12 md:px-8 border-t border-white/10">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
            Shipper &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </body>
    </html>
  );
}

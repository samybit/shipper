"use strict";

import Link from "next/link";

const links = [
  { href: "/", label: "WORK" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
] as const;

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-between px-6 py-4 md:px-8 md:py-6">
      <div className="flex items-center gap-8">
        <Link
          href="/archive"
          className="text-xs font-mono font-medium text-zinc-400 uppercase tracking-widest hover:text-white transition-colors"
        >
          Archive
        </Link>
      </div>
      <div className="flex items-center gap-6 md:gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs font-mono font-medium text-zinc-400 uppercase tracking-widest hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

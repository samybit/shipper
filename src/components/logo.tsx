"use strict";

import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
      title="Home"
    >
      <span className="font-mono text-black font-black text-5xl md:text-7xl font-stretched tracking-tighter select-none">
        SHIP
      </span>
      <span className="font-mono text-white font-black text-5xl md:text-7xl font-stretched tracking-tighter select-none">
        PER
      </span>
    </Link>
  );
}

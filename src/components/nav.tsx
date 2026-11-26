import Link from "next/link";

export default function Nav() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <Link className="nav-brand" href="/" aria-label="DN Production home">DN—PRD</Link>
      <div className="nav-links">
        <Link href="/about">ABOUT</Link>
        <Link href="/contact">CONTACT</Link>
        <Link href="/archive">ARCHIVE</Link>
      </div>
    </nav>
  );
}

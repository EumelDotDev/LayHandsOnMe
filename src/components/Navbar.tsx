import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-8 px-8 md:px-16 flex justify-between items-center text-foreground">
      <Link href="/" className="flex items-center gap-2 relative w-40 h-20">
        <Image src="/lhm-logo.png" alt="Lay Hands on Me Logo" fill className="object-contain object-left" />
      </Link>
      <nav className="hidden md:flex gap-12 font-sans tracking-widest text-xs uppercase opacity-80">
        <Link href="/episodes" className="hover:text-caramel hover:opacity-100 transition-colors">Episodes</Link>
        <Link href="/about" className="hover:text-caramel hover:opacity-100 transition-colors">About</Link>
        <Link href="/altar" className="hover:text-caramel hover:opacity-100 transition-colors">The Altar</Link>
      </nav>
      <Link href="/connect" className="hidden md:inline-block font-sans text-xs uppercase tracking-[0.2em] border border-caramel/30 hover:border-caramel px-8 py-4 rounded-full transition-colors text-caramel hover:bg-caramel hover:text-black">
        Connect
      </Link>
    </header>
  );
}

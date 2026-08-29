import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-8 px-8 md:px-16 flex justify-between items-center text-foreground">
      <Link href="/" className="flex items-center gap-4 group">
        <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-sm overflow-hidden shadow-2xl border border-white/10 group-hover:border-caramel/50 transition-colors">
          <Image src="/podcast_logo.jpg" alt="Lay Hands on Me Podcast Cover" fill className="object-cover" />
        </div>
        <div className="font-serif text-lg md:text-xl tracking-wide text-white group-hover:text-caramel transition-colors hidden md:block">
          Lay Hands <span className="italic text-caramel font-light">on Me</span>
        </div>
      </Link>
      <nav className="hidden lg:flex gap-10 font-sans tracking-widest text-[11px] uppercase opacity-80">
        <Link href="/episodes" className="hover:text-caramel hover:opacity-100 transition-colors">Episodes</Link>
        <Link href="/about" className="hover:text-caramel hover:opacity-100 transition-colors">About</Link>
        <Link href="/altar" className="hover:text-caramel hover:opacity-100 transition-colors">The Altar</Link>
        <Link href="/connect" className="hover:text-caramel hover:opacity-100 transition-colors">Connect</Link>
      </nav>
      <Link href="/episodes" className="hidden md:inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.2em] border border-caramel/50 px-8 py-4 rounded-full transition-all text-caramel hover:bg-caramel hover:text-black group">
        <span>Listen Now</span>
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </header>
  );
}

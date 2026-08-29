import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto py-16 px-8 md:px-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="font-serif text-3xl text-caramel">Lay Hands on Me</div>
      <div className="flex gap-8 text-xs opacity-60 font-sans uppercase tracking-widest">
        <Link href="/episodes" className="hover:text-caramel transition-colors">Episodes</Link>
        <Link href="/about" className="hover:text-caramel transition-colors">About</Link>
        <Link href="/altar" className="hover:text-caramel transition-colors">The Altar</Link>
        <Link href="/connect" className="hover:text-caramel transition-colors">Connect</Link>
      </div>
      <div className="text-[10px] opacity-40 font-sans uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Lay Hands on Me.
      </div>
    </footer>
  );
}

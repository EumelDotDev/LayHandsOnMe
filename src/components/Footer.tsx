import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-24 grid grid-cols-1 md:grid-cols-12 gap-16">
        
        {/* Brand & Mission Column */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="font-serif text-4xl text-caramel">Lay Hands on Me</div>
          <p className="font-sans text-sm text-white/60 leading-relaxed max-w-sm">
            Where spiritual depth meets physical intimacy. A podcast dedicated to strengthening the married couple through the vulnerability of touch.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-caramel hover:text-caramel transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-caramel hover:text-caramel transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-white/40">Explore</h4>
          <nav className="flex flex-col gap-4 font-sans text-sm text-white/80">
            <Link href="/" className="hover:text-caramel transition-colors">Home</Link>
            <Link href="/episodes" className="hover:text-caramel transition-colors">Episodes</Link>
            <Link href="/about" className="hover:text-caramel transition-colors">About</Link>
            <Link href="/altar" className="hover:text-caramel transition-colors">The Altar</Link>
            <Link href="/connect" className="hover:text-caramel transition-colors">Connect</Link>
          </nav>
        </div>

        {/* Listen On Column */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-white/40">Listen On</h4>
          <nav className="flex flex-col gap-4 font-sans text-sm text-white/80">
            <a href="#" className="hover:text-caramel transition-colors">Spotify</a>
            <a href="#" className="hover:text-caramel transition-colors">Apple Podcasts</a>
            <a href="#" className="hover:text-caramel transition-colors">SoundCloud</a>
            <a href="#" className="hover:text-caramel transition-colors">Google</a>
          </nav>
        </div>

        {/* Newsletter Column */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-white/40">The Altar</h4>
          <p className="font-sans text-xs text-white/60 leading-relaxed">
            Get exclusive guides, marriage prompts, and new episodes delivered to your inbox.
          </p>
          <form className="flex flex-col gap-3 mt-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/5 border border-white/10 px-4 py-3 font-sans text-sm text-white placeholder-white/30 focus:outline-none focus:border-caramel transition-colors rounded-none"
            />
            <button 
              type="button" 
              className="bg-caramel text-black font-sans text-[11px] uppercase tracking-[0.2em] py-3 hover:bg-white transition-colors border border-caramel"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="border-t border-white/5 px-8 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[10px] opacity-40 font-sans uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Lay Hands on Me. All rights reserved.
        </div>
        <div className="flex gap-6 text-[10px] opacity-40 font-sans uppercase tracking-[0.2em]">
          <Link href="#" className="hover:text-caramel transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-caramel transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

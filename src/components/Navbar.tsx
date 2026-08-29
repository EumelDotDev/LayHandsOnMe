"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 py-6 px-6 md:py-8 md:px-16 flex justify-between items-center text-foreground">
        <Link href="/" className="flex items-center gap-4 group z-50">
          <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-sm overflow-hidden shadow-2xl border border-white/10 group-hover:border-caramel/50 transition-colors">
            <Image src="/podcast_logo.jpg" alt="Lay Hands on Me Podcast Cover" fill className="object-cover" />
          </div>
          <div className="font-serif text-lg md:text-xl tracking-wide text-white group-hover:text-caramel transition-colors hidden md:block">
            Lay Hands <span className="italic text-caramel font-light">on Me</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-10 font-sans tracking-widest text-[11px] uppercase opacity-80">
          <Link href="/" className="hover:text-caramel hover:opacity-100 transition-colors">Home</Link>
          <Link href="/episodes" className="hover:text-caramel hover:opacity-100 transition-colors">Episodes</Link>
          <Link href="/about" className="hover:text-caramel hover:opacity-100 transition-colors">About</Link>
          <Link href="/connect" className="hover:text-caramel hover:opacity-100 transition-colors">Connect</Link>
        </nav>
        
        <div className="flex items-center gap-6">
          <Link href="/episodes" className="hidden md:inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.2em] border border-caramel/50 px-8 py-4 rounded-full transition-all text-caramel hover:bg-caramel hover:text-black group z-50">
            <span>Listen Now</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white z-50 p-2"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-12 font-serif text-3xl text-white">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-caramel transition-colors">Home</Link>
          <Link href="/episodes" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-caramel transition-colors">Episodes</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-caramel transition-colors">About</Link>
          <Link href="/connect" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-caramel transition-colors">Connect</Link>
        </nav>
      </div>
    </>
  );
}

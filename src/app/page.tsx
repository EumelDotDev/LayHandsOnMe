import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen -mt-32">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src="/hero_hands.jpg"
            alt="Intimate connection"
            fill
            className="object-cover object-center opacity-50 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-20">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] leading-none tracking-tight text-white mb-8">
            Lay Hands <br /> <span className="italic text-caramel font-light">on Me</span>
          </h1>
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.4em] text-white/60 mb-12 max-w-xl mx-auto leading-relaxed">
            Where spiritual depth meets physical intimacy. A podcast for the married couple.
          </p>
          <Link
            href="/episodes"
            className="group relative inline-flex items-center justify-center font-sans text-xs uppercase tracking-[0.2em] px-10 py-5 rounded-full overflow-hidden transition-all bg-caramel text-black hover:bg-white"
          >
            <span className="relative z-10 flex items-center gap-4 font-semibold">
              Listen to the Latest
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-40 px-8 md:px-16 max-w-5xl mx-auto text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-caramel/50"></div>
        <h2 className="font-serif text-3xl md:text-5xl text-caramel mb-12 mt-12 font-light">The Altar of Intimacy</h2>
        <p className="font-sans text-xl md:text-3xl leading-relaxed text-white/80 font-light">
          "The altar is not just a place of spiritual healing. It is the space between two people committed to each other. When we lay hands, we connect flesh and spirit, returning to the very foundation of our vows."
        </p>
      </section>

      {/* Recent Episodes */}
      <section className="py-32 px-8 md:px-16 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8 gap-8">
          <h2 className="font-serif text-5xl md:text-6xl font-light">Recent Episodes</h2>
          <Link href="/episodes" className="font-sans text-xs uppercase tracking-[0.2em] text-caramel hover:text-white transition-colors flex items-center gap-2 pb-2">
            View All Archive
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          {/* Episode Row 1 */}
          <div className="group flex flex-col md:flex-row gap-8 md:gap-12 items-center py-10 border-b border-white/5 hover:border-caramel/40 transition-colors">
            <div className="w-20 h-20 rounded-full border border-caramel/30 flex items-center justify-center group-hover:bg-caramel group-hover:text-black transition-all shrink-0 cursor-pointer">
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="flex-grow">
              <div className="font-sans text-[10px] uppercase tracking-[0.3em] text-caramel mb-4 flex items-center gap-4">
                <span>Episode 003</span>
                <span className="w-8 h-px bg-caramel/30"></span>
                <span>Oct 12</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl group-hover:text-caramel transition-colors font-light">The Vulnerability of Touch</h3>
              <p className="font-sans text-sm text-white/50 mt-4 max-w-2xl leading-relaxed">Why non-sexual touch is the missing foundation in modern marriages, and how to reclaim it at the end of a long day when the world has drained you.</p>
            </div>
            <div className="shrink-0 font-sans text-xs tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">
              42 MIN
            </div>
          </div>

          {/* Episode Row 2 */}
          <div className="group flex flex-col md:flex-row gap-8 md:gap-12 items-center py-10 border-b border-white/5 hover:border-caramel/40 transition-colors">
            <div className="w-20 h-20 rounded-full border border-caramel/30 flex items-center justify-center group-hover:bg-caramel group-hover:text-black transition-all shrink-0 cursor-pointer">
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="flex-grow">
              <div className="font-sans text-[10px] uppercase tracking-[0.3em] text-caramel mb-4 flex items-center gap-4">
                <span>Episode 002</span>
                <span className="w-8 h-px bg-caramel/30"></span>
                <span>Oct 05</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl group-hover:text-caramel transition-colors font-light">Sacred vs. Secular Romance</h3>
              <p className="font-sans text-sm text-white/50 mt-4 max-w-2xl leading-relaxed">Deconstructing the religious guilt around intimacy and finding the divine in physical connection without shame or hesitation.</p>
            </div>
            <div className="shrink-0 font-sans text-xs tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">
              38 MIN
            </div>
          </div>
          
          {/* Episode Row 3 */}
          <div className="group flex flex-col md:flex-row gap-8 md:gap-12 items-center py-10 border-b border-white/5 hover:border-caramel/40 transition-colors">
            <div className="w-20 h-20 rounded-full border border-caramel/30 flex items-center justify-center group-hover:bg-caramel group-hover:text-black transition-all shrink-0 cursor-pointer">
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="flex-grow">
              <div className="font-sans text-[10px] uppercase tracking-[0.3em] text-caramel mb-4 flex items-center gap-4">
                <span>Episode 001</span>
                <span className="w-8 h-px bg-caramel/30"></span>
                <span>Sep 28</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl group-hover:text-caramel transition-colors font-light">The Alter Call</h3>
              <p className="font-sans text-sm text-white/50 mt-4 max-w-2xl leading-relaxed">Introducing the thesis of the podcast. What it means to truly lay hands on each other in marriage and why this is our most profound calling.</p>
            </div>
            <div className="shrink-0 font-sans text-xs tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">
              51 MIN
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

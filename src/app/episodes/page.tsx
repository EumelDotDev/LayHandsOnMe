import Link from "next/link";

export default function Episodes() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto w-full px-8 md:px-16 py-24">
      <div className="mb-24">
        <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-6">The Practice</h1>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/50 max-w-2xl">
          Listen to all episodes of the Lay Hands on Me podcast.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {/* Episode Row 3 */}
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
        
        {/* Episode Row 1 */}
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
    </div>
  )
}

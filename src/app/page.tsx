import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen -mt-32">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-visible pt-24 pb-32">
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
          <Image
            src="/hero_intimate.jpg"
            alt="Intimate connection"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-12 md:mt-24">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tight text-white mb-6 relative">
            Lay Hands <br /> 
            <span className="italic text-caramel font-light inline-block transform -translate-y-2 md:-translate-y-8 drop-shadow-xl">on Me</span>
          </h1>
          <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-semibold">
            Where spiritual depth meets physical intimacy. A podcast for the married couple.
          </p>
          
          {/* Platform Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#" className="flex items-center gap-3 bg-caramel hover:bg-white text-black px-6 py-3 rounded-full font-sans text-[11px] uppercase tracking-widest transition-colors font-semibold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.305-1.76-8.786-.963-.335.077-.67-.133-.746-.468-.077-.334.132-.67.467-.746 3.809-.87 7.077-.496 9.715 1.115.293.18.386.563.207.855zM17.81 13.7c-.226.367-.706.482-1.072.257-2.687-1.652-6.785-2.118-9.965-1.156-.422.127-.866-.113-.993-.537-.127-.424.112-.865.536-.992 3.633-1.1 8.133-.585 11.237 1.32.366.226.48.707.257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71c-.493.15-1.016-.129-1.166-.623-.149-.495.13-1.016.624-1.167 3.52-1.07 9.42-.868 13.115 1.332.445.264.59.838.327 1.282-.264.443-.838.59-1.282.326z"/></svg>
              Spotify
            </a>
            <a href="#" className="flex items-center gap-3 bg-caramel hover:bg-white text-black px-6 py-3 rounded-full font-sans text-[11px] uppercase tracking-widest transition-colors font-semibold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.332 10.963c-.021-2.903 2.378-4.305 2.488-4.375-1.348-1.971-3.435-2.24-4.175-2.278-1.782-.178-3.477 1.045-4.385 1.045-.91 0-2.316-1.018-3.791-1.018-1.921 0-3.69 1.116-4.665 2.809-1.976 3.421-.504 8.47 1.423 11.24.945 1.353 2.052 2.871 3.522 2.813 1.425-.058 1.954-.925 3.627-.925 1.67 0 2.155.925 3.628.895 1.517-.028 2.47-1.378 3.4-2.73 1.079-1.579 1.523-3.111 1.545-3.193-.035-.015-2.993-1.147-3.017-4.283M12.019 4.394c.783-.951 1.309-2.274 1.165-3.593-1.134.045-2.51.753-3.313 1.705-.716.845-1.35 2.193-1.185 3.491 1.267.098 2.545-.648 3.333-1.603"/></svg>
              Apple
            </a>
            <a href="#" className="flex items-center gap-3 bg-caramel hover:bg-white text-black px-6 py-3 rounded-full font-sans text-[11px] uppercase tracking-widest transition-colors font-semibold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.593 18.995c-.172 0-.306-.153-.306-.341V8.629c0-.188.134-.341.306-.341.171 0 .307.153.307.341v10.025c0 .188-.136.341-.307.341zm-1.879 0c-.173 0-.306-.153-.306-.341v-8.736c0-.188.133-.341.306-.341.171 0 .306.153.306.341v8.736c0 .188-.135.341-.306.341zm-1.879 0c-.172 0-.306-.153-.306-.341V11.23c0-.188.134-.341.306-.341.17 0 .306.153.306.341v7.424c0 .188-.136.341-.306.341zm-1.88 0c-.171 0-.305-.153-.305-.341v-5.597c0-.188.134-.341.305-.341.172 0 .307.153.307.341v5.597c0 .188-.135.341-.307.341zm-1.878 0c-.172 0-.306-.153-.306-.341v-4.137c0-.188.134-.341.306-.341.17 0 .306.153.306.341v4.137c0 .188-.136.341-.306.341zm-1.879 0c-.172 0-.306-.153-.306-.341v-2.316c0-.188.134-.341.306-.341.17 0 .306.153.306.341v2.316c0 .188-.136.341-.306.341zM.32 18.995c-.172 0-.306-.153-.306-.341v-1.127c0-.188.134-.341.306-.341.17 0 .306.153.306.341v1.127c0 .188-.136.341-.306.341zm15.031 0c-.171 0-.306-.153-.306-.341V6.205c0-.188.135-.341.306-.341.172 0 .307.153.307.341v12.449c0 .188-.135.341-.307.341zm1.88 0c-.172 0-.306-.153-.306-.341v-9.358c0-.188.134-.341.306-.341.17 0 .306.153.306.341v9.358c0 .188-.136.341-.306.341zm1.879 0c-.172 0-.306-.153-.306-.341v-7.155c0-.188.134-.341.306-.341.17 0 .306.153.306.341v7.155c0 .188-.136.341-.306.341zm1.878 0c-.172 0-.306-.153-.306-.341V12.92c0-.188.134-.341.306-.341.17 0 .306.153.306.341v5.734c0 .188-.136.341-.306.341zm1.88 0c-.172 0-.306-.153-.306-.341v-4.144c0-.188.134-.341.306-.341.171 0 .306.153.306.341v4.144c0 .188-.135.341-.306.341z"/></svg>
              SoundCloud
            </a>
          </div>
        </div>
        
        {/* Overlapping Audio Player */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center px-4 md:px-8 transform translate-y-1/2">
          <div className="bg-black/80 backdrop-blur-xl text-white rounded-sm shadow-2xl p-6 md:p-8 w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 border border-caramel/30">
            <button className="w-16 h-16 rounded-full bg-caramel text-black flex items-center justify-center shrink-0 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(198,139,89,0.3)] group">
              <svg className="w-6 h-6 ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </button>
            <div className="flex flex-col flex-grow text-center md:text-left w-full">
              <div className="font-serif text-2xl font-bold text-caramel">The Vulnerability of Touch</div>
              <div className="font-sans text-[10px] text-white/50 mt-2 uppercase tracking-widest font-semibold">Episode 003 &mdash; 42 Min</div>
              <div className="mt-4 flex items-center gap-4 w-full">
                <span className="font-mono text-xs opacity-50">00:00</span>
                <div className="h-1.5 bg-white/10 rounded-full flex-grow relative overflow-hidden cursor-pointer">
                  <div className="absolute top-0 left-0 h-full bg-caramel w-1/3 rounded-full"></div>
                </div>
                <span className="font-mono text-xs opacity-50">42:00</span>
              </div>
            </div>
            <div className="shrink-0 flex gap-4 hidden lg:flex">
              <button className="text-white/40 hover:text-caramel transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to account for overlapping player */}
      <div className="h-32 md:h-24"></div>

      {/* The Philosophy & Resources */}
      <section className="py-32 px-8 md:px-16 max-w-5xl mx-auto text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-caramel/50"></div>
        <h2 className="font-serif text-3xl md:text-5xl text-caramel mb-12 mt-12 font-light">The Altar of Intimacy</h2>
        <p className="font-sans text-xl md:text-3xl leading-relaxed text-white/80 font-light mb-24">
          "The altar is not just a place of spiritual healing. It is the space between two people committed to each other. When we lay hands, we connect flesh and spirit, returning to the very foundation of our vows."
        </p>

        {/* Intimacy Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-12 border border-white/10 hover:border-caramel/40 transition-all duration-500 bg-white/[0.02] group">
            <h3 className="font-serif text-3xl mb-6 group-hover:text-caramel transition-colors font-light">The Intimacy Guide</h3>
            <p className="font-sans text-sm text-white/50 mb-12 leading-relaxed">A 30-day guided journal for couples to explore non-sexual touch, vulnerability, and spiritual alignment outside the bedroom.</p>
            <button className="font-sans text-[10px] uppercase tracking-[0.2em] text-caramel border-b border-caramel/30 pb-2 hover:border-caramel hover:text-white transition-colors w-max">Download PDF</button>
          </div>
          
          <div className="p-12 border border-white/10 hover:border-caramel/40 transition-all duration-500 bg-white/[0.02] group">
            <h3 className="font-serif text-3xl mb-6 group-hover:text-caramel transition-colors font-light">Vows & Intentions</h3>
            <p className="font-sans text-sm text-white/50 mb-12 leading-relaxed">A framework for rewriting your vows not as promises for the future, but as daily, physical practices for the present moment.</p>
            <button className="font-sans text-[10px] uppercase tracking-[0.2em] text-caramel border-b border-caramel/30 pb-2 hover:border-caramel hover:text-white transition-colors w-max">Read Article</button>
          </div>
        </div>
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

      {/* FAQ Section */}
      <section className="py-32 px-8 md:px-16 max-w-4xl mx-auto w-full border-t border-white/10">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-center mb-16">Common Questions</h2>
        <div className="space-y-8">
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-2xl text-caramel mb-4">Who is this podcast for?</h3>
            <p className="font-sans text-sm text-white/60 leading-relaxed">This podcast is explicitly designed for married couples who want to deepen their connection. While it touches on spiritual themes, it is entirely focused on practical, physical intimacy and vulnerability rather than religious dogma.</p>
          </div>
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-2xl text-caramel mb-4">What does "Lay Hands on Me" mean?</h3>
            <p className="font-sans text-sm text-white/60 leading-relaxed">Traditionally, an altar call involves laying hands on someone for spiritual healing. We believe the same physical intention should be brought into your marriage to foster emotional and physical healing through non-sexual and sexual touch.</p>
          </div>
          <div className="border-b border-white/10 pb-8 border-none">
            <h3 className="font-serif text-2xl text-caramel mb-4">When do new episodes release?</h3>
            <p className="font-sans text-sm text-white/60 leading-relaxed">New conversations drop every Thursday morning. You can stream them on Spotify, Apple Podcasts, and SoundCloud.</p>
          </div>
        </div>
      </section>

      {/* Connect CTA Banner */}
      <section className="relative w-full py-32 md:py-48 flex items-center justify-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cta_banner.jpg"
            alt="Let's continue the conversation"
            fill
            className="object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-6 text-white">Let's continue the conversation.</h2>
          <p className="font-sans text-sm md:text-base text-white/60 mb-12 max-w-xl mx-auto leading-relaxed">Have a specific question about intimacy, or want to invite the minister to speak? Reach out directly and join our community.</p>
          <Link href="/connect" className="inline-block bg-caramel hover:bg-white text-black px-12 py-5 rounded-full font-sans text-xs uppercase tracking-widest font-semibold transition-colors shadow-xl">
            Connect With Us
          </Link>
        </div>
      </section>
    </div>
  );
}

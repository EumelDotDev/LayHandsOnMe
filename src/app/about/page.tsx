export default function About() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto w-full px-8 md:px-16 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative w-full aspect-[3/4] bg-white/5 border border-white/10 flex flex-col items-center justify-center p-8 text-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          <span className="font-serif text-3xl text-white/10 z-0">The Minister</span>
          <span className="font-sans text-xs tracking-widest uppercase text-white/30 z-20 mt-4 border border-white/10 px-4 py-2">Portrait Area</span>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-serif text-5xl md:text-7xl font-light text-caramel mb-12">The Minister</h1>
          <div className="space-y-8 font-sans text-lg md:text-xl text-white/70 font-light leading-relaxed">
            <p>
              I am a minister, but my calling goes beyond the pulpit. My calling is to the space between two people who have chosen each other for life.
            </p>
            <p>
              The "lay hands on me" concept stems from the traditional alter call for healing—but I am asking you to bring that healing into your bedroom, your kitchen, your daily life. It is the belief that the body is not separate from the spirit.
            </p>
            <p>
              This isn't about traditional religious dogma. This is about real, intimate connection. A connection that requires vulnerability, physical presence, and the courage to truly touch your partner in an effort to strengthen your marriage.
            </p>
            <div className="pt-8 border-t border-white/10 mt-12">
              <p className="font-serif italic text-2xl text-caramel">"Your marriage is the most sacred alter you will ever attend."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

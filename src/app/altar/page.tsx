export default function Altar() {
  return (
    <div className="flex flex-col max-w-5xl mx-auto w-full px-8 md:px-16 py-32 text-center">
      <h1 className="font-serif text-6xl md:text-8xl font-light text-white mb-8">The Altar</h1>
      <p className="font-sans text-xs tracking-[0.4em] uppercase text-caramel mb-24 max-w-2xl mx-auto">
        Resources, journals, and guides for the married couple
      </p>

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
    </div>
  )
}

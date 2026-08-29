export default function Connect() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto w-full px-8 md:px-16 py-32 text-center">
      <h1 className="font-serif text-6xl md:text-8xl font-light text-white mb-6">Connect</h1>
      <p className="font-sans text-xs tracking-[0.3em] uppercase text-caramel mb-24">
        For speaking engagements, counseling, or podcast inquiries.
      </p>

      <form className="flex flex-col gap-12 text-left">
        <div className="flex flex-col">
          <input type="text" placeholder="Your Name" className="bg-transparent border-b border-white/20 pb-4 font-sans text-lg text-white placeholder-white/30 focus:outline-none focus:border-caramel transition-colors rounded-none" />
        </div>
        <div className="flex flex-col">
          <input type="email" placeholder="Your Email" className="bg-transparent border-b border-white/20 pb-4 font-sans text-lg text-white placeholder-white/30 focus:outline-none focus:border-caramel transition-colors rounded-none" />
        </div>
        <div className="flex flex-col">
          <textarea placeholder="Your Message" rows={4} className="bg-transparent border-b border-white/20 pb-4 font-sans text-lg text-white placeholder-white/30 focus:outline-none focus:border-caramel transition-colors rounded-none resize-none"></textarea>
        </div>
        <button type="button" className="self-center font-sans text-xs uppercase tracking-[0.2em] border border-caramel/50 text-caramel px-16 py-5 rounded-full hover:bg-caramel hover:text-black transition-all duration-300 mt-8">
          Send Message
        </button>
      </form>
    </div>
  )
}

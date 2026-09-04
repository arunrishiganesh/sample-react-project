import historyData from "../Data/history.json";

function History() {
  return (
    <div className="bg-stone-50 text-stone-800">

      {/* SPLIT HERO */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh] sm:min-h-[70vh]">
        <div className="order-2 md:order-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 md:py-0 bg-gray-700">
          <p className="text-amber-500 text-xs sm:text-sm tracking-[4px] font-medium mb-4">HERITAGE</p>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight mb-5">
            {historyData.hero.title}
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-7 max-w-md mb-8">
            {historyData.hero.description}
          </p>
          <span className="text-amber-500 text-sm font-semibold">↓ {historyData.hero.cta}</span>
        </div>
        <div className="order-1 md:order-2">
          <img src={`/images/${historyData.hero.image}`} alt="Historic Madurai" className="w-full h-64 sm:h-80 md:h-full object-cover" />
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center mb-6">{historyData.intro.heading}</h2>
        <p className="text-lg sm:text-2xl font-serif text-amber-700 text-center italic mb-8">
          {historyData.intro.highlight}
        </p>
        {historyData.intro.paragraphs.map((para, i) => (
          <p key={i} className="text-sm sm:text-base text-stone-600 leading-7 mb-4 text-center">
            {para}
          </p>
        ))}
      </section>

      {/* TIMELINE - zig-zag on desktop, vertical on mobile */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-center mb-12 sm:mb-16">The Timeline</h2>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-stone-200 sm:-translate-x-1/2"></div>

            {historyData.timeline.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-10 sm:mb-16 ${
                  index % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-amber-600 -translate-x-1/2 mt-1.5 sm:mt-0"></div>

                <div className={`w-full sm:w-1/2 pl-10 sm:pl-0 ${index % 2 === 1 ? "sm:pl-10" : "sm:pr-10 sm:text-right"}`}>
                  <p className="text-amber-600 text-xs sm:text-sm font-bold tracking-wide mb-1">{item.era}</p>
                  <h3 className="text-base sm:text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-stone-500 leading-6">{item.desc}</p>
                </div>
                <div className="hidden sm:block sm:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RULERS */}
      <section className="max-w-6xl bg-rose-50 rounded-2xl mx-auto px-4 sm:px-6 py-14 sm:py-20 mb-10">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-center mb-3">👑 People Behind the Story</h2>
        <p className="text-stone-500 text-sm text-center mb-10 sm:mb-14">The figures who shaped Madurai's history</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {historyData.rulers.map((ruler) => (
            <div key={ruler.id} className="border-3 border-stone-200 rounded-2xl overflow-hidden hover:shadow-2xl transition  bg-white ">
              <img src={`/images/${ruler.image}`} alt={ruler.name} className="w-full h-48 sm:h-56 object-cover" />
              <div className="p-5 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg mb-1">{ruler.name}</h3>
                <p className="text-amber-600 text-xs sm:text-sm font-semibold mb-3">{ruler.period}</p>
                <p className="text-xs sm:text-sm text-stone-600 leading-6 mb-4">{ruler.desc}</p>
                <span className="text-amber-700 text-xs sm:text-sm font-semibold cursor-pointer">Discover →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE - 2x2 magazine grid */}
      <section className="bg-stone-800 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white text-center mb-12 sm:mb-16">🏛️ Architectural Legacy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {historyData.architecture.map((item) => (
              <div key={item.id} className="relative h-64 sm:h-80 overflow-hidden group">
                <img src={`/images/${item.image}`} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-5 sm:p-6">
                  <h3 className="text-white font-serif font-bold text-lg sm:text-xl mb-1">{item.name}</h3>
                  <p className="text-stone-300 text-xs sm:text-sm leading-6">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DID YOU KNOW */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="border-2 border-amber-700/30 rounded-2xl p-6 sm:p-10">
          <p className="text-center text-amber-700 font-bold text-sm sm:text-base tracking-widest mb-6">💡 DID YOU KNOW?</p>
          <div className="space-y-6">
            {historyData.facts.map((fact) => (
              <p key={fact.id} className="text-center text-sm sm:text-lg font-serif italic text-stone-700 leading-7">
                "{fact.text}"
              </p>
            ))}
          </div>
          <p className="text-right text-amber-700 text-xs sm:text-sm font-semibold mt-6">— MADURAI</p>
        </div>
      </section>

      {/* THEN -> NOW */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-center mb-12">🕰️ Madurai Then → Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 items-center">
            <div className="bg-stone-200 rounded-2xl p-6 sm:p-8">
              <p className="text-stone-400 text-xs font-bold tracking-widest mb-4">{historyData.thenNow.then.label}</p>
              <ul className="space-y-3">
                {historyData.thenNow.then.points.map((point, i) => (
                  <li key={i} className="text-sm sm:text-base text-stone-700">{point}</li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-100 rounded-2xl p-6 sm:p-8 border border-amber-200">
              <p className="text-amber-700 text-xs font-bold tracking-widest mb-4">{historyData.thenNow.now.label}</p>
              <ul className="space-y-3">
                {historyData.thenNow.now.points.map((point, i) => (
                  <li key={i} className="text-sm sm:text-base text-stone-900 font-medium">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
            
            
      

 {/* HISTORY YOU CAN EXPERIENCE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-center mb-10 sm:mb-14">History You Can Still Experience</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {historyData.experiences.map((exp) => (
            <div key={exp.id} className="text-center p-4 sm:p-6 bg-fuchsia-200 border-3 border-stone-200 rounded-2xl hover:border-rose-200 transition ">
              <div className="text-2xl sm:text-3xl mb-2">{exp.icon}</div>
              <p className="text-xs sm:text-sm font-semibold text-stone-700">{exp.text}</p>
            </div>
          ))}
        </div>
      </section>

{/* CLOSING */}
      <section className="bg-stone-900 rounded-2xl lg:mx-20 sm:mx-auto py-16 lg:mb-10 sm:mb-20 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-5">{historyData.closing.title}</h2>
          <p className="text-stone-300 text-sm sm:text-base leading-7 mb-8">{historyData.closing.description}</p>
          <span className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full cursor-pointer transition">
            {historyData.closing.cta}
          </span>
        </div>
      </section>

    </div>
  );
}
export default History;
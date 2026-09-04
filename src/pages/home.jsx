import homeData from "../Data/home.json";
import heroImg from "../assets/hero.png";

function Home() {
  return (
    <div className="bg-slate-50 text-slate-800">

      {/* HERO */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="Madurai" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/65"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            {homeData.hero.title}
          </h1>
          <p className="mt-5 text-sm sm:text-lg text-slate-200 leading-7 max-w-2xl mx-auto">
            {homeData.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8">
            <button className="px-6 py-3 rounded-full bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition text-sm sm:text-base">
              {homeData.hero.primaryBtn}
            </button>
            <button className="px-6 py-3 rounded-full border border-white/60 text-white font-semibold hover:bg-white hover:text-slate-900 transition text-sm sm:text-base">
              {homeData.hero.secondaryBtn}
            </button>
          </div>
        </div>
      </section>

      {/* WHY MADURAI */}
      <section className="py-12 sm:py-16 bg-stone-200 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">Why Madurai?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {homeData.whyMadurai.map((item) => (
              <div key={item.id} className="p-6 rounded-2xl bg-pink-100 border border-slate-200 hover:-translate-y-1 transition">
                <div className="text-3xl sm:text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MUST-VISIT PLACES */}
      <section className="bg-stone-100 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">✨ Must-Visit Places</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {homeData.mustVisit.map((place) => (
              <div key={place.id} className="rounded-2xl overflow-hidden  border border-blue-200 hover:translate-y-1 transition">
                <img src={`/images/${place.image}`} alt={place.name} className="w-full h-40 sm:h-48 object-cover" />
                <div className="p-4 sm:p-5">
                  <p className="text-amber-600 text-xs font-semibold mb-1">{place.category}</p>
                  <h3 className="text-base sm:text-lg font-bold mb-2">{place.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3">{place.desc}</p>
                  <span className="text-amber-600 text-xs sm:text-sm font-semibold cursor-pointer">Explore →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TASTE OF MADURAI */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">🍛 Taste of Madurai</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {homeData.tasteOfMadurai.map((food) => (
              <div key={food.id} className="relative rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition bg-white">
                {food.mustTry && (
                  <span className="absolute top-2 left-2 bg-amber-500 text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full z-10">Must Try</span>
                )}
                <img src={`/images/${food.image}`} alt={food.name} className="w-full h-28 sm:h-36 object-cover" />
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-bold">{food.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">{food.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITY WITH STORIES */}
      <section className="bg-slate-900 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">🏛️ A City With Stories</h2>
          <p className="text-slate-300 text-sm sm:text-base mb-10">{homeData.cityStory.intro}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2">
            {homeData.cityStory.timeline.map((step, index) => (
              <div key={step.id} className="flex items-center gap-2 sm:gap-3">
                <span className="bg-white/10 text-amber-400 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
                  {step.era}
                </span>
                {index !== homeData.cityStory.timeline.length - 1 && (
                  <span className="text-amber-400 hidden sm:inline">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE MADURAI */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">🌅 Experience Madurai</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {homeData.experience.map((slot) => (
              <div key={slot.id} className="bg-sky-50 rounded-2xl border border-gray-100 p-5 sm:p-6 hover:-translate-y-1 transition">
                <div className="text-3xl mb-3">{slot.icon}</div>
                <h3 className="text-base sm:text-lg font-bold mb-3">{slot.time}</h3>
                <ul className="space-y-1.5">
                  {slot.activities.map((activity, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-600">• {activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
        
            {/*  CTA */}
      <section className="bg-slate-900 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-8">{homeData.finalCTA.title}</h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition text-sm sm:text-base">
              {homeData.finalCTA.primaryBtn}
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/60 text-white font-semibold hover:bg-white hover:text-slate-900 transition text-sm sm:text-base">
              {homeData.finalCTA.secondaryBtn}
            </button>
          </div>
        </div>
      </section>

      {/* QUICK TRAVEL GUIDE */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">📍 Quick Travel Guide</h2>
          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {homeData.travelGuide.map((item) => (
              <div key={item.id} className="flex justify-between py-3 sm:py-4">
                <span className="text-sm sm:text-base text-slate-500">{item.label}</span>
                <span className="text-sm sm:text-base font-semibold text-slate-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL TIPS */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">💡 Madurai Travel Tips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {homeData.travelTips.map((tip) => (
              <div key={tip.id} className="p-5 sm:p-6 rounded-2xl bg-amber-50 border border-amber-100">
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 className="text-sm sm:text-base font-bold mb-2">{tip.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-6">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

    </div>
  );
}

export default Home;

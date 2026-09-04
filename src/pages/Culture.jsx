import cultureData from "../Data/culture.json";

function Culture() {
  return (
    <div className="bg-stone-950 text-white">

      {/* HERO */}
      <section className="min-h-[85vh] flex items-center px-5 sm:px-8 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto w-full">

          <p className="text-amber-400 uppercase tracking-[0.3em] text-xs sm:text-sm font-bold mb-5">
            {cultureData.hero.eyebrow}
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none max-w-5xl">
            {cultureData.hero.title}
          </h1>

          <p className="mt-8 text-stone-300 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
            {cultureData.hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full border border-amber-400/40 text-amber-300 text-sm">
              Festivals
            </span>

            <span className="px-4 py-2 rounded-full border border-white/20 text-stone-300 text-sm">
              Traditions
            </span>

            <span className="px-4 py-2 rounded-full border border-white/20 text-stone-300 text-sm">
              Local Life
            </span>
          </div>

        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="px-5 sm:px-8 lg:px-16 py-20 bg-amber-50 text-stone-900">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-amber-700 font-bold">
            Not just a festival
          </p>

          <h2 className="text-4xl sm:text-5xl font-black mt-4">
            Madurai doesn't watch celebrations.
            <span className="block text-amber-600">
              Madurai becomes one.
            </span>
          </h2>

          <p className="mt-7 text-stone-600 leading-relaxed text-base sm:text-lg">
            During major celebrations, temples, streets, markets, music,
            food and people come together. The boundary between everyday
            life and festival life almost disappears.
          </p>

        </div>
      </section>


      {/* CHITHIRAI JOURNEY */}
      <section className="px-5 sm:px-8 lg:px-16 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="text-amber-400 uppercase tracking-[0.3em] text-sm font-bold">
              The grand celebration
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-3">
              Chithirai: A Festival That Moves With the City
            </h2>

            <p className="mt-5 text-stone-400 max-w-2xl leading-relaxed">
              One celebration unfolds through several important moments,
              connecting the Meenakshi temple traditions with Kallazhagar's
              journey towards the Vaigai.
            </p>
          </div>


          {/* TIMELINE */}
          <div className="relative border-l border-amber-400/30 ml-3 sm:ml-8">

            {cultureData.festivalJourney.map((festival) => (
              <div
                key={festival.id}
                className="relative pl-8 sm:pl-12 pb-14 last:pb-0"
              >

                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-amber-400 ring-8 ring-stone-950" />

                <p className="text-amber-400 text-sm font-bold tracking-widest">
                  {festival.number}
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold mt-2">
                  {festival.title}
                </h3>

                <p className="text-amber-300 mt-2 font-medium">
                  {festival.subtitle}
                </p>

                <p className="text-stone-400 mt-4 max-w-2xl leading-relaxed">
                  {festival.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* UNIQUE IMAGE GRID */}
      <section className="px-4 sm:px-6 lg:px-10 py-20 bg-stone-900">

        <div className="max-w-7xl mx-auto">

          <div className="mb-10 px-2">
            <p className="text-amber-400 uppercase tracking-[0.3em] text-sm font-bold">
              Festival frames
            </p>

            <h2 className="text-4xl sm:text-5xl font-black mt-3">
              A City in Celebration
            </h2>
          </div>


          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">

            <div className="col-span-2 row-span-2">
              <img
                src="/images/culture/chithirai-procession.jpg"
                alt="Chithirai festival procession"
                className="w-full h-full min-h-[420px] object-cover rounded-3xl"
              />
            </div>

            <div>
              <img
                src="/images/culture/meenakshi-wedding.jpg"
                alt="Meenakshi Thirukalyanam"
                className="w-full h-52 object-cover rounded-3xl"
              />
            </div>

            <div>
              <img
                src="/images/culture/temple-chariot.jpg"
                alt="Temple chariot festival"
                className="w-full h-52 object-cover rounded-3xl"
              />
            </div>

            <div>
              <img
                src="/images/culture/kallazhagar-vaigai.jpg"
                alt="Kallazhagar entering Vaigai"
                className="w-full h-52 object-cover rounded-3xl"
              />
            </div>

            <div>
              <img
                src="/images/culture/jallikattu.jpg"
                alt="Jallikattu celebration"
                className="w-full h-52 object-cover rounded-3xl"
              />
            </div>

          </div>

        </div>
      </section>


      {/* SEE / HEAR / TASTE / FEEL */}
      <section className="px-5 sm:px-8 lg:px-16 py-24 bg-amber-50 text-stone-900">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-2xl mb-14">
            <p className="text-amber-700 uppercase tracking-[0.3em] text-sm font-bold">
              Experience Madurai
            </p>

            <h2 className="text-4xl sm:text-5xl font-black mt-3">
              Don't just visit.
              <span className="block text-amber-600">
                Experience the celebration.
              </span>
            </h2>
          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {cultureData.experience.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-7 border border-stone-200 hover:-translate-y-2 transition duration-300"
              >
                <div className="text-4xl">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-stone-600 mt-4 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* OTHER CELEBRATIONS */}
      <section className="px-5 sm:px-8 lg:px-16 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="mb-14">
            <p className="text-amber-400 uppercase tracking-[0.3em] text-sm font-bold">
              Beyond Chithirai
            </p>

            <h2 className="text-4xl sm:text-5xl font-black mt-3">
              Four more ways Madurai celebrates
            </h2>
          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {cultureData.otherCelebrations.map((festival) => (
              <div
                key={festival.id}
                className="group border border-white/10 rounded-3xl p-6 hover:bg-white/5 transition"
              >

                <div className="flex items-center justify-between">
                  <span className="text-4xl">
                    {festival.icon}
                  </span>

                  <span className="text-xs tracking-widest text-amber-400">
                    {festival.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mt-8">
                  {festival.title}
                </h3>

                <p className="text-stone-400 mt-4 leading-relaxed">
                  {festival.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="px-5 sm:px-8 lg:px-16 py-24 bg-amber-500 text-stone-950">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-sm font-bold">
            Come during the celebration
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-5">
            Don't come to Madurai only to see it.
          </h2>

          <p className="text-xl sm:text-2xl font-semibold mt-4">
            Come to feel it.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Culture;
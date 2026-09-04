import { useState } from "react";
import placesData from "../Data/places.json";

function Places() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPlaces =
    activeCategory === "All"
      ? placesData.places
      : placesData.places.filter((place) => place.category === activeCategory);

  return (
    <div className="bg-slate-50 text-slate-800">

      {/* PAGE HEADER */}
      <section className="bg-blue-100 py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-black-200 mb-3">Explore Madurai</h1>
          <p className="text-black-200 text-xl sm:text-base mb-8">
            From ancient temples to peaceful hills, discover places that match your travel style.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {placesData.stats.map((stat) => (
              <div key={stat.id}>
                <p className="text-amber-400 text-xl sm:text-3xl font-extrabold">{stat.value}</p>
                <p className="text-slate-400 text-[10px] sm:text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* FEATURED DESTINATION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-10 mt-10 sm:pb-14">
        <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5">Featured Destination</h2>
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 grid grid-cols-1 md:grid-cols-2">
          <img
            src={`/images/${placesData.featured.image}`}
            alt={placesData.featured.name}
            className="w-full h-56 sm:h-full object-cover"
          />
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <span className="text-amber-600 text-xs font-semibold mb-2">{placesData.featured.category}</span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{placesData.featured.name}</h3>
            <span className="inline-block bg-amber-100 text-amber-700 text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
              ★ {placesData.featured.badge}
            </span>
            <p className="text-sm sm:text-base text-slate-600 mb-5 leading-6">{placesData.featured.desc}</p>
            <button className="bg-slate-900 text-white text-sm font-semibold px-5 py-3 rounded-full w-fit hover:bg-amber-500 hover:text-slate-950 transition">
              View Details →
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-1 py-8 sm:py-10">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {placesData.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                activeCategory === cat
                  ? "bg-amber-500 text-slate-950"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-amber-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* MORE PLACES - filtered grid */}
      <section className=" py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5">More Places</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredPlaces.map((place) => (
              <div key={place.id} className="rounded-2xl overflow-hidden bg-white border-3 border-slate-200 hover:-translate-y-1 transition">
                <img src={`/images/${place.image}`} alt={place.name} className="w-full h-32 sm:h-40 object-cover" />
                <div className="p-3 sm:p-4">
                  <span className="text-amber-600 text-[10px] sm:text-xs font-semibold">{place.category}</span>
                  <h3 className="text-sm sm:text-base font-bold mt-1 mb-1">{place.name}</h3>
                  <p className="text-amber-500 text-xs sm:text-sm">{"★".repeat(place.rating)}{"☆".repeat(5 - place.rating)}</p>
                </div>
              </div>
            ))}
          </div>
          {filteredPlaces.length === 0 && (
            <p className="text-center text-slate-400 text-sm mt-6">No places found in this category yet.</p>
          )}
        </div>
      </section>

      {/* FIND YOUR EXPERIENCE */}
      <section className="py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg sm:text-xl font-bold text-center mb-2">🧭 Not Sure Where to Go?</h2>
          <p className="text-slate-500 text-sm text-center mb-8">What kind of Madurai experience are you looking for?</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {placesData.experiences.map((exp) => (
              <div key={exp.id} className="bg-blue-100 border-3 border-blue-100 rounded-2xl p-4 sm:p-6 text-center hover:-translate-y-1 transition">
                <div className="text-2xl sm:text-3xl mb-2">{exp.icon}</div>
                <h3 className="text-xs sm:text-sm font-bold mb-1">{exp.title}</h3>
                <p className="text-[10px] sm:text-xs text-slate-500">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUGGESTED ROUTES */}
      <section className="bg-slate-900 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg sm:text-xl font-bold text-white text-center mb-8">Suggested Routes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {placesData.routes.map((route) => (
              <div key={route.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
                <p className="text-2xl mb-2">{route.icon}</p>
                <h3 className="text-white font-bold text-sm sm:text-base mb-4">{route.title}</h3>
                <ul className="space-y-2">
                  {route.stops.map((stop, i) => (
                    <li key={i} className="text-slate-300 text-xs sm:text-sm">• {stop}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
          
          {/* WHERE TO STAY */}
<section className="max-w-6xl mt-10 bg-blue-200/50 rounded-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
  <h2 className="text-lg sm:text-xl font-bold text-center mb-2">🏨 Where to Stay</h2>
  <p className="text-slate-500 text-sm text-center mb-8">Handpicked hotels near Madurai's main attractions</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
    {placesData.hotels.map((hotel) => (
      <div key={hotel.id} className="rounded-2xl overflow-hidden border border-slate-400 hover:shadow-2xl transition bg-white">
        <img src={`/images/${hotel.image}`} alt={hotel.name} className="w-full h-32 sm:h-36 object-cover" />
        <div className="p-4">
          <span className="text-amber-600 text-[10px] sm:text-xs font-semibold">{hotel.type}</span>
          <h3 className="text-sm sm:text-base font-bold mt-1 mb-1">{hotel.name}</h3>
          <p className="text-[10px] sm:text-xs text-slate-400 mb-1">📍 {hotel.location}</p>
          <p className="text-amber-500 text-xs sm:text-sm mb-2">
            {"★".repeat(hotel.rating)}{"☆".repeat(5 - hotel.rating)}
          </p>
          <p className="text-[11px] sm:text-xs text-slate-500 mb-2">{hotel.highlight}</p>
          <p className="text-xs sm:text-sm font-bold text-slate-900">{hotel.priceRange}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* QUICK COMPARISON */}
      <section className="py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg sm:text-xl font-bold text-center mb-8">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <div className="min-w-[500px]">
              <div className="grid grid-cols-5 text-xs sm:text-sm font-semibold text-slate-500 border-b border-slate-200 pb-3">
                <span>Which place is right for you?</span>
                {placesData.comparison.categories.map((cat, i) => (
                  <span key={i} className="text-center">{cat}</span>
                ))}
              </div>
              {placesData.comparison.rows.map((row) => (
                <div key={row.id} className="grid grid-cols-5 text-xs sm:text-sm py-3 border-b border-slate-100">
                  <span className="font-medium text-slate-800">{row.name}</span>
                  {row.fits.map((fits, i) => (
                    <span key={i} className="text-center">{fits ? "✅" : "—"}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Places;
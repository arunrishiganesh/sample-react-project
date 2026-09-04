import { useState } from "react";
import foodData from "../Data/food.json";

function Food() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [checkedItems, setCheckedItems] = useState([]);

  const filteredFoods =
    activeCategory === "all"
      ? foodData.iconicFoods
      : foodData.iconicFoods.filter((food) => food.category === activeCategory);

  const toggleChecked = (item) => {
    setCheckedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="bg-orange-50 text-stone-800">

      {/* HERO - menu cover style */}
      <section className="relative py-16 sm:py-24 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#d97706_1px,transparent_0)] [background-size:20px_20px] opacity-[0.08]"></div>
        <div className="relative">
          <p className="text-amber-700 text-xs sm:text-sm tracking-[4px] font-bold mb-4">MADURAI FOOD GUIDE</p>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold mb-3">{foodData.hero.title}</h1>
          <p className="text-stone-600 text-sm sm:text-lg mb-8">{foodData.hero.subtitle}</p>
          <img
            src={`/images/${foodData.hero.image}`}
            alt="Madurai food"
            className="w-40 h-40 sm:w-56 sm:h-56 object-cover rounded-full mx-auto border-4 border-white shadow-xl mb-6"
          />
          <p className="text-amber-700 text-xs sm:text-sm font-semibold tracking-widest">{foodData.hero.tagline}</p>
        </div>
      </section>

      {/* MADURAI ON A PLATE */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
        <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4">{foodData.intro.heading}</h2>
        <p className="text-sm sm:text-base text-stone-600 leading-7 mb-8">{foodData.intro.description}</p>
        <div className="grid grid-cols-3 gap-4 sm:gap-8">
          {foodData.intro.stats.map((stat) => (
            <div key={stat.id}>
              <p className="text-amber-700 text-xl sm:text-3xl font-extrabold">{stat.value}</p>
              <p className="text-stone-500 text-[10px] sm:text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOD CATEGORIES - interactive filter */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-xl p-3 sm:p-4 text-center transition ${
              activeCategory === "all" ? "bg-amber-600 text-white" : "bg-white border border-stone-200 hover:border-amber-400"
            }`}
          >
            <div className="text-xl sm:text-2xl mb-1">🍽️</div>
            <p className="text-[10px] sm:text-xs font-semibold">All</p>
          </button>
          {foodData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-xl p-3 sm:p-4 text-center transition ${
                activeCategory === cat.id ? "bg-amber-600 text-white" : "bg-white border border-stone-200 hover:border-amber-400"
              }`}
            >
              <div className="text-xl sm:text-2xl mb-1">{cat.icon}</div>
              <p className="text-[10px] sm:text-xs font-semibold">{cat.label}</p>
            </button>
          ))}
        </div>
      </section>

      {/* ICONIC FOODS - filtered scroll showcase */}
      <section className="py-8 sm:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg sm:text-xl font-serif font-bold mb-5">⭐ Icons of Madurai Food</h2>
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-3">
            {filteredFoods.map((food) => (
              <div key={food.id} className="flex-shrink-0 w-64 sm:w-72 bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
                <img src={`/images/${food.image}`} alt={food.name} className="w-full h-40 sm:h-48 object-cover" />
                <div className="p-4 sm:p-5">
                  <span className="text-amber-600 text-[10px] sm:text-xs font-bold">⭐ MUST TRY</span>
                  <h3 className="text-base sm:text-lg font-bold mt-1 mb-2">{food.name}</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-6 mb-3">{food.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {food.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] sm:text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT SHOULD I EAT - time of day journey */}
      <section className="bg-stone-900 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg sm:text-xl font-serif font-bold text-white text-center mb-10">🌅 What Should I Eat?</h2>
          <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-3">
            {foodData.timeOfDay.map((slot, index) => (
              <div key={slot.id} className="flex-1 flex flex-row sm:flex-col items-center gap-4 sm:gap-0">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-center w-full">
                  <div className="text-2xl sm:text-3xl mb-2">{slot.icon}</div>
                  <h3 className="text-white font-bold text-sm sm:text-base mb-3">{slot.time}</h3>
                  <p className="text-stone-400 text-xs sm:text-sm">{slot.foods.join(" / ")}</p>
                </div>
                {index !== foodData.timeOfDay.length - 1 && (
                  <span className="text-amber-500 text-lg hidden sm:block">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR FLAVOUR */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-lg sm:text-xl font-serif font-bold text-center mb-2">🌶️ Choose Your Flavour</h2>
        <p className="text-stone-500 text-sm text-center mb-10">What are you in the mood for?</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {foodData.flavours.map((flavour) => (
            <div key={flavour.id} className="bg-white border border-stone-200 rounded-2xl p-5 text-center hover:shadow-md transition">
              <div className="text-2xl sm:text-3xl mb-2">{flavour.icon}</div>
              <h3 className="font-bold text-sm sm:text-base mb-3">{flavour.label}</h3>
              <ul className="space-y-1">
                {flavour.foods.map((f, i) => (
                  <li key={i} className="text-[11px] sm:text-xs text-stone-500">{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAMOUS FOODS - grouped sections */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg sm:text-xl font-serif font-bold text-center mb-10">🍽️ Famous Foods of Madurai</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            {foodData.famousFoods.map((group) => (
              <div key={group.id}>
                <h3 className="text-amber-700 font-bold text-sm sm:text-base mb-3 border-b border-amber-200 pb-2">{group.title}</h3>
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-xs sm:text-sm text-stone-600">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD STORIES - alternating */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg sm:text-xl font-serif font-bold text-center mb-10 sm:mb-14">🥘 Madurai Food Stories</h2>
          {foodData.foodStories.map((story, index) => (
            <div
              key={story.id}
              className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mb-10 sm:mb-14 ${
                index % 2 === 1 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <img src={`/images/${story.image}`} alt={story.name} className="w-full sm:w-1/2 h-48 sm:h-56 object-cover rounded-2xl" />
              <div className="sm:w-1/2 text-center sm:text-left">
                <p className="text-2xl mb-2">{story.icon}</p>
                <h3 className="font-bold text-lg sm:text-xl mb-2">{story.name}</h3>
                <p className="text-amber-700 italic text-sm sm:text-base mb-3">"{story.quote}"</p>
                <p className="text-xs sm:text-sm text-stone-600 leading-6">{story.story}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOD TRAIL */}
      <section className="bg-stone-900 py-12 sm:py-16 lg:mb-10  sm:mb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg sm:text-xl font-serif font-bold text-white text-center mb-10">🧭 Local Food Trail</h2>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2">
            {foodData.foodTrail.map((stop, index) => (
              <div key={stop.id} className="flex flex-row sm:flex-col items-center gap-3 sm:gap-2 w-full sm:w-auto">
                <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl flex-shrink-0">
                  {stop.icon}
                </div>
                <div className="text-center sm:mt-2">
                  <p className="text-white text-xs sm:text-sm font-bold">{stop.time}</p>
                  <p className="text-stone-400 text-[10px] sm:text-xs">{stop.food}</p>
                </div>
                {index !== foodData.foodTrail.length - 1 && (
                  <span className="text-amber-500 hidden sm:block mx-2">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MUST-TRY CHECKLIST - interactive */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:mb-10 sm:mb-20">
        <h2 className="text-lg sm:text-xl font-serif font-bold text-center mb-2">⭐ Must-Try Before You Leave</h2>
        <p className="text-stone-500 text-sm text-center mb-8">Tap each item as you try it</p>
        <div className="bg-white border border-stone-200 rounded-2xl p-5 sm:p-6 space-y-3">
          {foodData.checklist.map((item, i) => (
            <div
              key={i}
              onClick={() => toggleChecked(item)}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <span
                className={`w-5 h-5 rounded border flex items-center justify-center text-xs transition ${
                  checkedItems.includes(item)
                    ? "bg-amber-600 border-amber-600 text-white"
                    : "border-stone-300 text-transparent group-hover:border-amber-400"
                }`}
              >
                ✓
              </span>
              <span className={`text-sm sm:text-base ${checkedItems.includes(item) ? "line-through text-stone-400" : "text-stone-700"}`}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOD TIPS */}
      <section className="max-w-5xl mx-auto px-10 sm:px-10 bg-amber-100  py-10 sm:py-14 lg:mb-10 sm:mb-20">
        
          <h2 className="text-lg sm:text-xl font-serif font-bold text-center mb-8">💡 Food Tips</h2>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8">
            {foodData.tips.map((tip) => (
              <div key={tip.id} className="flex items-center gap-2">
                <span className="text-lg sm:text-xl">{tip.icon}</span>
                <span className="text-xs sm:text-sm font-medium text-stone-700">{tip.text}</span>
              </div>
            ))}
          
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-stone-900 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-4">{foodData.closing.title}</h2>
          <p className="text-stone-300 text-sm sm:text-base leading-7 mb-8">{foodData.closing.description}</p>
          <span className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full cursor-pointer transition">
            {foodData.closing.cta}
          </span>
        </div>
      </section>

    </div>
  );
}

export default Food;
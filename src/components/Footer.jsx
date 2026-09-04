import footerData from "../Data/footer.json";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-12 sm:pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

        {/* Brand column */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🧭</span>
            <p className="text-white font-extrabold text-lg">
              Madurai <span className="text-amber-400">Compass</span>
            </p>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm leading-6">
            {footerData.brand.tagline}
          </p>
          <div className="flex gap-4 text-white text-lg mt-5">
            {footerData.brand.socials.map((icon, index) => (
              <span key={index}>{icon}</span>
            ))}
          </div>
        </div>

        {/* Explore + Plan Your Trip columns */}
        {footerData.columns.map((column) => (
          <div key={column.id}>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-4">{column.title}</h4>
            <ul className="space-y-2 text-slate-400 text-xs sm:text-sm">
              {column.links.map((link, index) => (
                <li key={index} className="hover:text-amber-400 cursor-pointer transition">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact column */}
        <div>
          <h4 className="text-white font-semibold text-sm sm:text-base mb-4">{footerData.contact.title}</h4>
          <ul className="space-y-2 text-slate-400 text-xs sm:text-sm">
            {footerData.contact.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        
        <p className="text-slate-500 text-[11px] sm:text-xs">{footerData.bottomBar.note}</p>
      </div>
    </footer>
  );
}

export default Footer;
"use client";

export default function Footer() {
  return (
    <footer className="bg-[#02040a] border-t border-white/[0.05] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-white font-black text-lg mb-1">A&G Klempner</div>
            <div className="text-cyan-500 text-xs font-medium mb-4">24/7 Notdienst</div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Professionelle Rohr- und Kanalreinigung in Ingolstadt und Umgebung. Schnell, sauber, zuverlässig.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="text-white font-bold text-sm mb-4">Leistungen</div>
            <ul className="space-y-2 text-slate-500 text-sm">
              {["Rohrreinigung", "Kanalreinigung", "Notdienst 24/7", "Leckortung", "Abflussreinigung"].map((s) => (
                <li key={s} className="hover:text-slate-300 transition-colors cursor-default">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white font-bold text-sm mb-4">Kontakt</div>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-cyan-500">📞</span>
                <a href="tel:+4984112345678" className="hover:text-white transition-colors">+49 841 123 456 78</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">💬</span>
                <a href="https://wa.me/4984112345678" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-500">📍</span>
                <span>Ingolstadt & Umgebung</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-500">🕐</span>
                <span>24/7 – auch Feiertage</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-xs">
          <span>© {new Date().getFullYear()} A&G Rohr- und Kanalreinigung & Klempner 24/7 Notdienst. Alle Rechte vorbehalten.</span>
          <div className="flex gap-4">
            <a href="/impressum" className="hover:text-slate-400 transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-slate-400 transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

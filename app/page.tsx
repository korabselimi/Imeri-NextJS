
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* NAVBAR */}
      <header className="absolute left-0 top-0 z-50 w-full">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
          <Link href="/" className="text-3xl font-extrabold tracking-tight text-white">
            IMERI<span className="text-blue-400">.</span>
          </Link>

          <div className="hidden items-center gap-9 text-sm font-semibold text-white md:flex">
            <Link href="/" className="hover:text-blue-300">Startseite</Link>
            <Link href="#services" className="hover:text-blue-300">Leistungen</Link>
            <Link href="#about" className="hover:text-blue-300">Über uns</Link>
            <Link href="#contact" className="hover:text-blue-300">Kontakt</Link>
          </div>

          <div className="flex items-center gap-3 text-xs font-bold text-white">
            <button className="text-blue-300">DE</button>
            <span className="opacity-40">/</span>
            <button className="hover:text-blue-300">AL</button>
            <span className="opacity-40">/</span>
            <button className="hover:text-blue-300">EN</button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section
        className="relative flex min-h-screen items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(8,20,40,0.92), rgba(8,20,40,0.35)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800')",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 pt-24 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
              Bau & Gebäudeservice · Karlsruhe
            </p>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
              Wir bauen mit
              <br />
              <span className="text-blue-300">Qualität & Vertrauen.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-200">
              Ihr zuverlässiger Partner für Trockenbau,
              Bauhilfsarbeiten, Kabelverlegung, Bodenverlegung
              und professionelle Gebäudereinigung.
            </p>

            <Link
              href="#services"
              className="mt-10 inline-flex items-center rounded-sm bg-blue-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-blue-600"
            >
              Unsere Leistungen →
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-6 hidden items-center gap-4 text-xs font-semibold uppercase tracking-widest text-white/70 md:flex lg:left-12">
          <span className="h-px w-10 bg-blue-300" />
          Scrollen & entdecken
        </div>
      </section>

{/* SERVICES */}
<section id="services" className="bg-slate-50 py-24 md:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-12">
    <div className="mb-14 max-w-2xl">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
        Was wir anbieten
      </p>

      <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
        Unsere Leistungen<span className="text-blue-500">.</span>
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        Von der Planung bis zur Umsetzung – wir stehen für
        zuverlässige Arbeit, höchste Sorgfalt und professionelle Ergebnisse.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Trockenbau",
          description: "Moderne Innenausbau-Lösungen mit Präzision und Qualität.",
          href: "/drywall",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900",
        },
        {
          title: "Bauhilfsarbeiten",
          description: "Zuverlässige Unterstützung für Ihr Bauprojekt.",
          href: "/support",
          image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900",
        },
        {
          title: "Kabelverlegung",
          description: "Fachgerechte Verlegung von Kabeln und Leitungen.",
          href: "/cables",
          image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900",
        },
        {
          title: "Bodenverlegung",
          description: "Hochwertige Bodenlösungen für jeden Raum.",
          href: "/flooring",
          image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900",
        },
        {
          title: "Gebäudereinigung",
          description: "Professionelle Reinigung für gepflegte Gebäude.",
          href: "/cleaning",
          image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900",
        },
      ].map((service) => (
        <Link
          key={service.title}
          href={service.href}
          className="group overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="h-64 overflow-hidden">
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url("${service.image}")` }}
            />
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold text-slate-900">
              {service.title}
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              {service.description}
            </p>

            <span className="mt-6 inline-block text-sm font-bold uppercase tracking-wider text-blue-600">
              Mehr erfahren →
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>


{/* ABOUT US */}
<section id="about" className="bg-white py-24 md:py-32">
  <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">

    {/* LOGO */}
    <div className="flex min-h-96 items-center justify-center">
      <img
        src="/images/imeri-logo.jpg"
        alt="IMERI Bau und Gebäudeservice Logo"
        className="w-full max-w-md object-contain"
      />
    </div>

    {/* CONTENT */}
    <div>
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
        Wer wir sind
      </p>

      <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
        Über IMERI<span className="text-blue-500">.</span>
      </h2>

      <p className="mt-8 text-lg leading-relaxed text-slate-600">
        IMERI ist Ihr zuverlässiger Partner für Bau- und
        Gebäudedienstleistungen in Karlsruhe und Umgebung.
        Wir legen großen Wert auf Qualität, Präzision und
        eine vertrauensvolle Zusammenarbeit.
      </p>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        Ob Trockenbau, Bauhilfsarbeiten, Kabelverlegung,
        Bodenverlegung oder professionelle Gebäudereinigung –
        wir unterstützen unsere Kunden mit Engagement,
        Sorgfalt und einem hohen Qualitätsanspruch.
      </p>

      {/* FEATURES */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="border-l-4 border-blue-500 pl-5">
          <h3 className="text-lg font-bold text-slate-900">
            Qualität
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Sorgfältige Arbeit und professionelle Ergebnisse.
          </p>
        </div>

        <div className="border-l-4 border-blue-500 pl-5">
          <h3 className="text-lg font-bold text-slate-900">
            Zuverlässigkeit
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Verlässliche Zusammenarbeit bei jedem Projekt.
          </p>
        </div>
      </div>

      <a
        href="#contact"
        className="mt-10 inline-flex bg-blue-600 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-blue-700"
      >
        Kontakt aufnehmen →
      </a>
    </div>
  </div>
</section>


{/* CONTACT */}
<section id="contact" className="bg-[#0b1729] py-24 text-white md:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-12">
    <div className="max-w-3xl">
      <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
        Kontakt
      </p>

      <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
        Lassen Sie uns gemeinsam
        <span className="text-blue-400"> etwas schaffen.</span>
      </h2>

      <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300">
        Sie planen ein Bauprojekt oder benötigen professionelle
        Gebäudedienstleistungen? Kontaktieren Sie uns –
        wir freuen uns auf Ihre Anfrage.
      </p>

      <a
        href="mailto:IHRE-EMAIL@BEISPIEL.DE"
        className="mt-10 inline-flex bg-blue-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-blue-600"
      >
        Jetzt Kontakt aufnehmen →
      </a>
    </div>
  </div>
</section>


{/* FOOTER */}
<footer className="bg-[#07101e] py-14 text-slate-300">
  <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3 lg:px-12">
    <div>
      <Link href="/" className="text-3xl font-extrabold tracking-tight text-white">
        IMERI<span className="text-blue-400">.</span>
      </Link>
      <p className="mt-4 max-w-xs text-sm leading-relaxed">
        Ihr Partner für Bau- und Gebäudedienstleistungen
        in Karlsruhe und Umgebung.
      </p>
    </div>

    <div>
      <h3 className="mb-5 font-bold text-white">Navigation</h3>
      <div className="flex flex-col gap-3 text-sm">
        <Link href="/">Startseite</Link>
        <Link href="#services">Leistungen</Link>
        <Link href="#about">Über uns</Link>
        <Link href="#contact">Kontakt</Link>
      </div>
    </div>

    <div>
      <h3 className="mb-5 font-bold text-white">Unsere Leistungen</h3>
      <div className="flex flex-col gap-3 text-sm">
        <Link href="/drywall">Trockenbau</Link>
        <Link href="/support">Bauhilfsarbeiten</Link>
        <Link href="/cables">Kabelverlegung</Link>
        <Link href="/flooring">Bodenverlegung</Link>
        <Link href="/cleaning">Gebäudereinigung</Link>
      </div>
    </div>
  </div>

  <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 px-6 pt-7 text-sm text-slate-500 lg:px-12">
    <p>
      &copy; {new Date().getFullYear()} IMERI. Alle Rechte vorbehalten.
    </p>
  </div>
</footer>
    </main>
  );
}

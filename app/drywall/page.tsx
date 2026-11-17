
import Link from "next/link";

export default function DrywallPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}
      <header className="absolute left-0 top-0 z-50 w-full">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">

          <Link
            href="/"
            className="text-3xl font-extrabold tracking-tight text-white"
          >
            IMERI<span className="text-blue-400">.</span>
          </Link>

          <Link
            href="/"
            className="text-sm font-semibold text-white transition hover:text-blue-300"
          >
            ← Zurück zur Startseite
          </Link>

        </nav>
      </header>

      {/* HERO */}
      <section
        className="relative flex min-h-[65vh] items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(8,20,40,0.95), rgba(8,20,40,0.45)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800')",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 pt-20 lg:px-12">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
            Unsere Leistungen
          </p>

          <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl">
            Trockenbau<span className="text-blue-400">.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-200">
            Moderne Lösungen für den Innenausbau.
            Präzise Umsetzung, hochwertige Ergebnisse
            und zuverlässige Zusammenarbeit.
          </p>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Professioneller Innenausbau
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Räume neu gestalten<span className="text-blue-500">.</span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              Mit modernen Trockenbaulösungen lassen sich
              Innenräume flexibel und funktional gestalten.
              Wir unterstützen Sie bei der Umsetzung
              individueller Raumkonzepte.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Unser Fokus liegt auf sorgfältiger Arbeit,
              einer zuverlässigen Durchführung und
              einem hochwertigen Endergebnis.
            </p>
          </div>

          <div
            className="min-h-[400px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000')",
            }}
          />
        </div>
      </section>

      {/* SERVICES DETAILS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Was wir bieten
          </p>

          <h2 className="mb-12 text-4xl font-extrabold text-slate-900">
            Unsere Trockenbauleistungen
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {[
              {
                title: "Trennwände",
                text: "Flexible Raumaufteilung mit modernen Trockenbauwänden.",
              },
              {
                title: "Deckenverkleidungen",
                text: "Individuelle Lösungen für moderne Deckengestaltung.",
              },
              {
                title: "Innenausbau",
                text: "Funktionale und ästhetische Gestaltung von Innenräumen.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-slate-200 bg-white p-8 transition hover:shadow-lg"
              >
                <div className="mb-6 h-1 w-12 bg-blue-500" />

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#0b1729] py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">

          <h2 className="text-3xl font-extrabold md:text-5xl">
            Planen Sie ein Projekt?
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            Kontaktieren Sie uns für weitere Informationen
            zu unseren Trockenbauleistungen.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-flex bg-blue-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-blue-600"
          >
            Kontakt aufnehmen →
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#07101e] py-8 text-center text-sm text-slate-400">
        <p>
          &copy; {new Date().getFullYear()} IMERI.
          Alle Rechte vorbehalten.
        </p>
      </footer>

    </main>
  );
}


import Link from "next/link";

export default function FlooringPage() {
  const services = [
    {
      title: "Laminatverlegung",
      description:
        "Sorgfältige Verlegung von Laminatböden für moderne und funktionale Räume.",
    },
    {
      title: "Vinylbodenverlegung",
      description:
        "Moderne Vinylbodenlösungen für Wohn- und Gewerberäume.",
    },
    {
      title: "Bodenvorbereitung",
      description:
        "Vorbereitung des Untergrunds für eine saubere und zuverlässige Bodenverlegung.",
    },
  ];

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
            "linear-gradient(90deg, rgba(8,20,40,0.95), rgba(8,20,40,0.45)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800')",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 pt-20 lg:px-12">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
            Unsere Leistungen
          </p>

          <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl">
            Bodenverlegung
            <span className="text-blue-400">.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-200">
            Hochwertige Bodenlösungen für moderne Räume.
            Sorgfältige Verarbeitung, präzise Ausführung
            und ein Ergebnis, das überzeugt.
          </p>
        </div>
      </section>

      {/* ABOUT SERVICE */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Qualität von Grund auf
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Die Basis für schöne Räume
              <span className="text-blue-500">.</span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              Der richtige Bodenbelag prägt die Atmosphäre
              eines Raumes und trägt zu Komfort und
              Funktionalität bei. Wir unterstützen Sie
              bei der Umsetzung moderner Bodenlösungen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Von der Vorbereitung des Untergrunds bis
              zur sorgfältigen Verlegung legen wir Wert
              auf saubere Arbeit und ein hochwertiges
              Erscheinungsbild.
            </p>
          </div>

          <div
            className="min-h-100 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000')",
            }}
          />
        </div>
      </section>

      {/* SERVICE DETAILS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Was wir bieten
          </p>

          <h2 className="mb-12 text-4xl font-extrabold text-slate-900">
            Unsere Bodenleistungen
            <span className="text-blue-500">.</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 h-1 w-12 bg-blue-500" />

                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[#0b1729] py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-extrabold md:text-5xl">
            Planen Sie einen neuen Boden?
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            Kontaktieren Sie uns für weitere Informationen
            zu unseren Bodenverlegungsarbeiten.
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

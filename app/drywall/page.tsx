
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Language } from "../../lib/translations";

const content = {
  de: {
    back: "← Zurück zur Startseite",
    services: "Unsere Leistungen",
    title: "Trockenbau",
    hero: "Moderne Lösungen für den Innenausbau. Präzise Umsetzung, hochwertige Ergebnisse und zuverlässige Zusammenarbeit.",
    label: "Professioneller Innenausbau",
    heading: "Räume neu gestalten",
    paragraph1:
      "Mit modernen Trockenbaulösungen lassen sich Innenräume flexibel und funktional gestalten. Wir unterstützen Sie bei der Umsetzung individueller Raumkonzepte.",
    paragraph2:
      "Unser Fokus liegt auf sorgfältiger Arbeit, einer zuverlässigen Durchführung und einem hochwertigen Endergebnis.",
    offer: "Was wir bieten",
    offerTitle: "Unsere Trockenbauleistungen",
    cards: [
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
    ],
    ctaTitle: "Planen Sie ein Projekt?",
    ctaText:
      "Kontaktieren Sie uns für weitere Informationen zu unseren Trockenbauleistungen.",
    ctaButton: "Kontakt aufnehmen",
    rights: "Alle Rechte vorbehalten.",
  },

  al: {
    back: "← Kthehu në ballinë",
    services: "Shërbimet tona",
    title: "Ndërtim i brendshëm",
    hero: "Zgjidhje moderne për ndërtimin e brendshëm. Realizim i saktë, rezultate cilësore dhe bashkëpunim i besueshëm.",
    label: "Ndërtim profesional i brendshëm",
    heading: "Transformojmë hapësirat",
    paragraph1:
      "Me zgjidhje moderne të ndërtimit të brendshëm, hapësirat mund të organizohen në mënyrë fleksibile dhe funksionale. Ne ju ndihmojmë të realizoni idetë tuaja.",
    paragraph2:
      "Fokusi ynë është puna e kujdesshme, realizimi i besueshëm dhe rezultatet me cilësi të lartë.",
    offer: "Çfarë ofrojmë",
    offerTitle: "Shërbimet tona të ndërtimit të brendshëm",
    cards: [
      {
        title: "Mure ndarëse",
        text: "Ndarje fleksibile e hapësirave me mure moderne.",
      },
      {
        title: "Veshje tavanesh",
        text: "Zgjidhje individuale për dizajn modern të tavaneve.",
      },
      {
        title: "Rregullim i brendshëm",
        text: "Organizim funksional dhe estetik i hapësirave të brendshme.",
      },
    ],
    ctaTitle: "Po planifikoni një projekt?",
    ctaText:
      "Na kontaktoni për më shumë informacione rreth shërbimeve tona të ndërtimit të brendshëm.",
    ctaButton: "Na kontaktoni",
    rights: "Të gjitha të drejtat e rezervuara.",
  },

  en: {
    back: "← Back to Home",
    services: "Our Services",
    title: "Drywall",
    hero: "Modern interior construction solutions. Precise execution, high-quality results and reliable cooperation.",
    label: "Professional Interior Construction",
    heading: "Transforming Spaces",
    paragraph1:
      "Modern drywall solutions make it possible to create flexible and functional interiors. We help you bring your individual space concepts to life.",
    paragraph2:
      "Our focus is on careful workmanship, reliable execution and high-quality results.",
    offer: "What We Offer",
    offerTitle: "Our Drywall Services",
    cards: [
      {
        title: "Partition Walls",
        text: "Flexible room layouts with modern drywall partitions.",
      },
      {
        title: "Ceiling Cladding",
        text: "Individual solutions for modern ceiling designs.",
      },
      {
        title: "Interior Construction",
        text: "Functional and aesthetic interior design solutions.",
      },
    ],
    ctaTitle: "Planning a Project?",
    ctaText:
      "Contact us for more information about our drywall services.",
    ctaButton: "Contact Us",
    rights: "All rights reserved.",
  },
};

export default function DrywallPage() {
  const [language, setLanguage] = useState<Language>("de");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("imeri-language");

    if (
      savedLanguage === "de" ||
      savedLanguage === "al" ||
      savedLanguage === "en"
    ) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("imeri-language", lang);
  };

  const t = content[language];

  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}
      <header className="absolute left-0 top-0 z-50 w-full">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6 lg:px-12">
          <Link
            href="/"
            className="text-3xl font-extrabold tracking-tight text-white"
          >
            IMERI<span className="text-blue-400">.</span>
          </Link>

          <div className="flex items-center gap-4 md:gap-7">
            <div className="flex items-center gap-2">
              {(["de", "al", "en"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => changeLanguage(lang)}
                  className={`text-xs font-bold uppercase transition ${
                    language === lang
                      ? "text-blue-400"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <Link
              href="/"
              className="text-xs font-semibold text-white transition hover:text-blue-300 md:text-sm"
            >
              {t.back}
            </Link>
          </div>
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
            {t.services}
          </p>

          <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl">
            {t.title}<span className="text-blue-400">.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-200">
            {t.hero}
          </p>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              {t.label}
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              {t.heading}<span className="text-blue-500">.</span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              {t.paragraph1}
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {t.paragraph2}
            </p>
          </div>

          <div
            className="min-h-100 bg-cover bg-center"
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
            {t.offer}
          </p>

          <h2 className="mb-12 text-4xl font-extrabold text-slate-900">
            {t.offerTitle}
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {t.cards.map((item) => (
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
            {t.ctaTitle}
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            {t.ctaText}
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-flex bg-blue-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-blue-600"
          >
            {t.ctaButton} →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#07101e] py-8 text-center text-sm text-slate-400">
        <p>
          &copy; {new Date().getFullYear()} IMERI. {t.rights}
        </p>
      </footer>
    </main>
  );
}

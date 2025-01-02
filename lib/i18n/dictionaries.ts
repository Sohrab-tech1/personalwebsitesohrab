export const dictionaries = {
  en: {
    services: {
      title: "Services & Expertise",
      subtitle: "Transform your business with AI-driven solutions through workshops, coaching, and implementation programs.",
      cta: "Schedule a Consultation",
      services: [
        {
          title: "AI Strategy Workshops",
          description: "Intensive workshops helping businesses integrate AI effectively into their operations.",
          features: [
            "Full-day or half-day sessions",
            "Customized for your industry",
            "Hands-on exercises with AI tools",
            "Implementation roadmap creation"
          ],
          price: "From $2,500",
          duration: "4-8 hours"
        },
        // ... other services
      ]
    }
  },
  sv: {
    services: {
      title: "Tjänster & Expertis",
      subtitle: "Transformera din verksamhet med AI-drivna lösningar genom workshops, coaching och implementeringsprogram.",
      cta: "Boka Konsultation",
      services: [
        {
          title: "AI-Strategiworkshops",
          description: "Intensiva workshops som hjälper företag att effektivt integrera AI i sin verksamhet.",
          features: [
            "Hel- eller halvdagssessioner",
            "Anpassad för din bransch",
            "Praktiska övningar med AI-verktyg",
            "Skapande av implementeringsplan"
          ],
          price: "Från 25 000 kr",
          duration: "4-8 timmar"
        },
        // ... other services in Swedish
      ]
    }
  }
}

export type Language = keyof typeof dictionaries
export type Dictionary = typeof dictionaries.en 
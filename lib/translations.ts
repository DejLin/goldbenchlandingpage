export type Language = 'en' | 'de' | 'fr' | 'it';

export const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'it', label: 'IT', flag: '🇮🇹' },
];

export const translations = {
  en: {
    // Hero
    hero: {
      title1: "Your hands craft the gold.",
      title2: "Your voice runs the business.",
      subtitle: "GoldBench is the first voice-powered workspace built exclusively for goldsmiths. Dictate quotes, track materials, and manage clients in seconds—without ever putting down your tools.",
      cta: "Request Early Access",
      ctaSubtext: "Limited spots available for independent goldsmiths.",
      scroll: "Scroll",
      commands: [
        "Log 14 grams of 18k gold, Miller ring",
        "Draft an invoice for the sapphire setting",
        "What did I quote Mrs. Weber in March?",
        "Add 6 hours of labor to the signet ring",
      ],
    },
    // Video Showcase
    videoShowcase: {
      label: "The Product",
      title: "Watch a voice note become an invoice.",
      subtitle: "Ninety seconds inside GoldBench — no keyboard touched.",
    },
    // Bench Loss Calculator
    calculator: {
      label: "The Bench Loss",
      title: "What is your admin really costing you?",
      subtitle: "Move the sliders. This is the gold you leave on the table every year.",
      hoursLabel: "Admin hours per week",
      rateLabel: "Your bench rate per hour",
      hoursPerYear: "hours lost per year",
      moneyPerYear: "of bench time burned on paperwork",
      reclaimTitle: "GoldBench gives you back",
      reclaimUnit: "hours a year",
      footnote: "Based on 46 working weeks. Early users automate roughly 8 of every 10 admin hours.",
    },
    // Friction section
    friction: {
      label: "Pain Points",
      title: "The Limits of the Traditional Goldsmith.",
      subtitle: "Your physical tools are precise. Your admin should be effortless.",
      points: [
        {
          title: "The Bench Loss",
          description: "Every unlogged grain of gold is profit lost. But stepping away from the loupe to manually record alloy weights breaks your concentration.",
        },
        {
          title: "The Midnight Paperwork",
          description: "Spending your evenings calculating material costs and generating PDFs instead of resting your hands or sketching your next bespoke commission.",
        },
        {
          title: "The Marketing Burden",
          description: "Updating your portfolio and managing clients keeps you away from the torch. Sharing your finished pieces shouldn't feel like an exhausting second job.",
        },
        {
          title: "Constant Interruptions",
          description: "When the torch is hot and the solder is flowing, answering messages or logging client details ruins your rhythm. You shouldn't have to break your flow state to manage your business.",
        },
      ],
    },
    // Revenue Engine / Features
    features: {
      label: "Features",
      title: "Built for the Reality of the Bench.",
      comingSoon: "Coming Soon",
      items: [
        {
          title: "Voice-to-Inventory",
          description: "Speak the weights. Log every gram of 18k gold, platinum, and sweeps instantly. No keyboards. No breaking your flow.",
        },
        {
          title: "Instant Quotes & Invoices",
          description: '"Draft a quote for Miller: 14g platinum, custom sapphire setting." Done. A pristine PDF is created with current metal prices while your hands are still at the bench.',
        },
        {
          title: "The Bench Vault",
          description: "Your digital memory, perfected. Securely store client ring sizes, exact custom alloy ratios, and repair histories in one private database.",
        },
        {
          title: "1-Click Portfolio",
          description: 'Toggle a piece from "Private Bench" to "Public Gallery" in a single click. Your online catalog syncs instantly without writing a single line of web copy.',
        },
        {
          title: "Smart Clienteling",
          description: "The system remembers past commissions and automatically drafts personalized messages to top clients—like suggesting matching opal earrings for a previously crafted ring.",
        },
      ],
    },
    // Workflow Demo
    workflow: {
      label: "How It Works",
      title: "From Voice to Ledger. Instantly.",
      subtitle: "Speak into Telegram. Watch your dashboard update in real-time.",
      voiceMessage: "Voice Message",
      playDemo: "Play Demo",
      processing: "Processing...",
      clickToSee: "Click below to see the workflow",
      invoiceReady: "Invoice ready in 12 seconds",
      assistant: "GoldBench Voice Assistant",
      dashboard: {
        title: "Your GoldBench Workspace",
        live: "Live",
        inventoryLabel: "Inventory — 18K Gold",
        inventoryUnit: "g in stock",
        projectLabel: "Active Commission",
        projectName: "Miller Engagement Ring",
        materialCost: "Material cost",
        laborLabel: "Labor",
        invoiceLabel: "Invoice INV-2847",
        invoiceReady: "PDF ready to send",
        waiting: "Waiting for your voice…",
      },
    },
    // Mid CTA
    midCta: {
      cta: "Request Early Access",
      subtitle: "Ditch the keyboard. Get back to the bench.",
    },
    // Use Cases
    useCases: {
      label: "Use Cases",
      title: "The Master's Workflow.",
      subtitle: "Precision administration, without ever leaving the loupe.",
      items: [
        { title: "Voice Logging", description: "Log materials and time with a simple voice command" },
        { title: "Instant Invoicing", description: "Generate professional invoices in seconds" },
        { title: "Material Tracking", description: "Keep precise records of every gram" },
        { title: "Client Gallery", description: "Share curated pieces with one click" },
      ],
    },
    // Security
    security: {
      label: "Data Sovereignty",
      title: "Swiss-Grade Data Integrity",
      description: "Custom alloy formulas. Elite client lists. Pricing structures. Everything locked in your sovereign Swiss database. You own the data. Bank-grade encryption. GDPR compliant.",
      tagline: "Your assets are yours alone.",
      badges: ["256-bit Encryption", "Swiss Hosted", "GDPR Compliant", "Daily Backups"],
    },
    // Final CTA
    finalCta: {
      title1: "Reclaim your time.",
      title2: "Protect your craft.",
      subtitle: "Let GoldBench handle the admin so your hands can stay at the bench.",
      cta: "Secure Your Early Access",
      ctaSubtext: "Join the exclusive waitlist for independent goldsmiths.",
      location: "Nesslau, Switzerland",
    },
    // Footer
    footer: {
      label: "Exclusive Access",
      title: "Ready to Elevate Your Atelier?",
      subtitle: "Join the select goldsmiths who have transformed their workflow.",
      cta: "Request Access",
      privacy: "Privacy",
      terms: "Terms",
      contact: "Contact",
    },
    // Early Access Page
    earlyAccess: {
      backToHome: "Back to Home",
      title: "Join the",
      titleHighlight: "GoldBench",
      titleEnd: "Waitlist",
      subtitle: "We are onboarding a limited number of independent goldsmiths for our early access beta. Secure your spot to reclaim your bench time.",
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email Address",
      emailPlaceholder: "you@atelier.com",
      atelierLabel: "Name of Atelier / Workshop",
      atelierOptional: "(Optional)",
      atelierPlaceholder: "Your workshop or business name",
      submitButton: "Request My Invitation",
      submitting: "Submitting...",
      privacyNote: "Your information is secure and will never be shared.",
      captchaLabel: "Security Check",
      captchaQuestion: "What is {num1} + {num2}?",
      captchaPlaceholder: "Your answer",
      captchaError: "Incorrect answer, please try again",
      successTitle: "You're on the List",
      successMessage: "Thank you, {name}. We'll be in touch soon with your exclusive early access invitation.",
      returnHome: "Return to Homepage",
    },
    common: {
      backToHome: "Back to Home",
      lastUpdated: "Last updated: May 2026",
    },
    privacy: {
      title: "Privacy Policy",
    },
    terms: {
      title: "Terms of Service",
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Ready to transform your atelier workflow? We'd love to hear from you.",
      contactInfo: "Contact Information",
      email: "Email",
      responseTime: "Response Time",
      responseTimeValue: "We typically respond within 24 hours",
      betaProject: "Beta Project",
      betaDescription: "GoldBench is currently a free, non-commercial beta testing environment.",
      sendMessage: "Send a Message",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      companyLabel: "Atelier / Company",
      companyPlaceholder: "Your atelier or company name",
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your atelier and how we can help...",
      sendButton: "Send Message",
      sending: "Sending...",
      privacyAgree: "By submitting, you agree to our",
      messageSent: "Message Sent",
      thankYou: "Thank you for reaching out. We'll be in touch shortly.",
    },
  },
  de: {
    // Hero
    hero: {
      title1: "Deine Hände formen das Gold.",
      title2: "Deine Stimme führt das Geschäft.",
      subtitle: "GoldBench ist der erste sprachgesteuerte Arbeitsplatz, der exklusiv für Goldschmiede entwickelt wurde. Diktiere Angebote, verfolge Materialien und verwalte Kunden in Sekunden – ohne jemals dein Werkzeug aus der Hand zu legen.",
      cta: "Frühzugang anfragen",
      ctaSubtext: "Begrenzte Plätze für unabhängige Goldschmiede.",
      scroll: "Scrollen",
      commands: [
        "Erfasse 14 Gramm 18k Gold, Ring Miller",
        "Erstelle eine Rechnung für die Saphir-Fassung",
        "Was habe ich Frau Weber im März offeriert?",
        "Füge 6 Stunden Arbeit zum Siegelring hinzu",
      ],
    },
    // Video Showcase
    videoShowcase: {
      label: "Das Produkt",
      title: "Sieh zu, wie eine Sprachnachricht zur Rechnung wird.",
      subtitle: "Neunzig Sekunden in GoldBench – ohne eine Tastatur zu berühren.",
    },
    // Bench Loss Calculator
    calculator: {
      label: "Der Werkbank-Verlust",
      title: "Was kostet dich deine Verwaltung wirklich?",
      subtitle: "Bewege die Regler. So viel Gold lässt du jedes Jahr liegen.",
      hoursLabel: "Admin-Stunden pro Woche",
      rateLabel: "Dein Stundensatz an der Werkbank",
      hoursPerYear: "verlorene Stunden pro Jahr",
      moneyPerYear: "an Werkbank-Zeit, verbrannt für Papierkram",
      reclaimTitle: "GoldBench gibt dir zurück",
      reclaimUnit: "Stunden pro Jahr",
      footnote: "Basierend auf 46 Arbeitswochen. Frühe Nutzer automatisieren rund 8 von 10 Admin-Stunden.",
    },
    // Friction section
    friction: {
      label: "Schmerzpunkte",
      title: "Die Grenzen des traditionellen Goldschmieds.",
      subtitle: "Deine Werkzeuge sind präzise. Deine Verwaltung sollte mühelos sein.",
      points: [
        {
          title: "Der Werkbank-Verlust",
          description: "Jedes nicht erfasste Gramm Gold ist verlorener Gewinn. Aber das Verlassen der Lupe, um Legierungsgewichte manuell zu erfassen, unterbricht deine Konzentration.",
        },
        {
          title: "Die Mitternachts-Papierkram",
          description: "Abende damit verbringen, Materialkosten zu berechnen und PDFs zu erstellen, anstatt die Hände auszuruhen oder die nächste Auftragsarbeit zu skizzieren.",
        },
        {
          title: "Die Marketing-Last",
          description: "Das Aktualisieren deines Portfolios und die Kundenverwaltung halten dich vom Brenner fern. Das Teilen deiner fertigen Stücke sollte sich nicht wie ein erschöpfender Zweitjob anfühlen.",
        },
        {
          title: "Ständige Unterbrechungen",
          description: "Wenn der Brenner heiss ist und das Lot fliesst, ruiniert das Beantworten von Nachrichten oder das Erfassen von Kundendetails deinen Rhythmus. Du solltest deinen Flow nicht unterbrechen müssen, um dein Geschäft zu führen.",
        },
      ],
    },
    // Revenue Engine / Features
    features: {
      label: "Funktionen",
      title: "Gebaut für die Realität der Werkbank.",
      comingSoon: "Bald verfügbar",
      items: [
        {
          title: "Sprache-zu-Inventar",
          description: "Sprich die Gewichte. Erfasse jedes Gramm 18k Gold, Platin und Abfälle sofort. Keine Tastaturen. Kein Unterbrechen deines Flows.",
        },
        {
          title: "Sofortige Angebote & Rechnungen",
          description: '"Erstelle ein Angebot für Müller: 14g Platin, individuelle Saphir-Fassung." Erledigt. Ein makelloses PDF wird mit aktuellen Metallpreisen erstellt, während deine Hände noch an der Werkbank sind.',
        },
        {
          title: "Der Werkbank-Tresor",
          description: "Dein digitales Gedächtnis, perfektioniert. Speichere Kundenringgrössen, exakte Legierungsrezepturen und Reparaturhistorien sicher in einer privaten Datenbank.",
        },
        {
          title: "1-Klick Portfolio",
          description: 'Schalte ein Stück mit einem Klick von "Private Werkbank" zu "Öffentliche Galerie". Dein Online-Katalog synchronisiert sich sofort, ohne eine einzige Zeile Webtext zu schreiben.',
        },
        {
          title: "Intelligente Kundenbetreuung",
          description: "Das System merkt sich vergangene Aufträge und entwirft automatisch personalisierte Nachrichten an Top-Kunden – wie den Vorschlag passender Opal-Ohrringe zu einem zuvor gefertigten Ring.",
        },
      ],
    },
    // Workflow Demo
    workflow: {
      label: "So funktioniert's",
      title: "Von der Stimme zum Hauptbuch. Sofort.",
      subtitle: "Sprich in Telegram. Beobachte, wie sich dein Dashboard in Echtzeit aktualisiert.",
      voiceMessage: "Sprachnachricht",
      playDemo: "Demo abspielen",
      processing: "Verarbeitung...",
      clickToSee: "Klicke unten, um den Ablauf zu sehen",
      invoiceReady: "Rechnung bereit in 12 Sekunden",
      assistant: "GoldBench Sprachassistent",
      dashboard: {
        title: "Dein GoldBench Arbeitsplatz",
        live: "Live",
        inventoryLabel: "Inventar – 18K Gold",
        inventoryUnit: "g an Lager",
        projectLabel: "Aktiver Auftrag",
        projectName: "Verlobungsring Miller",
        materialCost: "Materialkosten",
        laborLabel: "Arbeit",
        invoiceLabel: "Rechnung INV-2847",
        invoiceReady: "PDF bereit zum Versand",
        waiting: "Warte auf deine Stimme…",
      },
    },
    // Mid CTA
    midCta: {
      cta: "Frühzugang anfragen",
      subtitle: "Weg mit der Tastatur. Zurück an die Werkbank.",
    },
    // Use Cases
    useCases: {
      label: "Anwendungsfälle",
      title: "Der Arbeitsablauf des Meisters.",
      subtitle: "Präzise Verwaltung, ohne jemals die Lupe zu verlassen.",
      items: [
        { title: "Sprach-Erfassung", description: "Erfasse Materialien und Zeit mit einem einfachen Sprachbefehl" },
        { title: "Sofortige Rechnungsstellung", description: "Erstelle professionelle Rechnungen in Sekunden" },
        { title: "Materialverfolgung", description: "Führe präzise Aufzeichnungen über jedes Gramm" },
        { title: "Kundengalerie", description: "Teile kuratierte Stücke mit einem Klick" },
      ],
    },
    // Security
    security: {
      label: "Datensouveränität",
      title: "Schweizer Datenintegrität",
      description: "Individuelle Legierungsformeln. Elite-Kundenlisten. Preisstrukturen. Alles gesichert in deiner souveränen Schweizer Datenbank. Du besitzt die Daten. Bankgrad-Verschlüsselung. DSGVO-konform.",
      tagline: "Deine Werte gehören dir allein.",
      badges: ["256-Bit Verschlüsselung", "Schweizer Hosting", "DSGVO-konform", "Tägliche Backups"],
    },
    // Final CTA
    finalCta: {
      title1: "Gewinne deine Zeit zurück.",
      title2: "Schütze dein Handwerk.",
      subtitle: "Lass GoldBench die Verwaltung übernehmen, damit deine Hände an der Werkbank bleiben können.",
      cta: "Sichere deinen Frühzugang",
      ctaSubtext: "Tritt der exklusiven Warteliste für unabhängige Goldschmiede bei.",
      location: "Nesslau, Schweiz",
    },
    // Footer
    footer: {
      label: "Exklusiver Zugang",
      title: "Bereit, dein Atelier zu verbessern?",
      subtitle: "Schliesse dich den ausgewählten Goldschmieden an, die ihren Arbeitsablauf transformiert haben.",
      cta: "Zugang anfragen",
      privacy: "Datenschutz",
      terms: "AGB",
      contact: "Kontakt",
    },
    // Early Access Page
    earlyAccess: {
      backToHome: "Zurück zur Startseite",
      title: "Tritt der",
      titleHighlight: "GoldBench",
      titleEnd: "Warteliste bei",
      subtitle: "Wir nehmen eine begrenzte Anzahl unabhängiger Goldschmiede für unsere Early-Access-Beta auf. Sichere dir deinen Platz, um deine Werkbank-Zeit zurückzugewinnen.",
      nameLabel: "Name",
      namePlaceholder: "Dein vollständiger Name",
      emailLabel: "E-Mail-Adresse",
      emailPlaceholder: "du@atelier.com",
      atelierLabel: "Name des Ateliers / Werkstatt",
      atelierOptional: "(Optional)",
      atelierPlaceholder: "Dein Werkstatt- oder Firmenname",
      submitButton: "Einladung anfragen",
      submitting: "Wird gesendet...",
      privacyNote: "Deine Daten sind sicher und werden niemals weitergegeben.",
      captchaLabel: "Sicherheitsüberprüfung",
      captchaQuestion: "Was ist {num1} + {num2}?",
      captchaPlaceholder: "Deine Antwort",
      captchaError: "Falsche Antwort, bitte versuche es erneut",
      successTitle: "Du bist auf der Liste",
      successMessage: "Danke, {name}. Wir melden uns bald mit deiner exklusiven Frühzugangs-Einladung.",
      returnHome: "Zurück zur Startseite",
    },
    common: {
      backToHome: "Zurück zur Startseite",
      lastUpdated: "Zuletzt aktualisiert: Mai 2026",
    },
    privacy: {
      title: "Datenschutzrichtlinie",
    },
    terms: {
      title: "Nutzungsbedingungen",
    },
    contact: {
      title: "Kontakt aufnehmen",
      subtitle: "Bereit, den Arbeitsablauf Ihres Ateliers zu transformieren? Wir freuen uns von Ihnen zu hören.",
      contactInfo: "Kontaktinformationen",
      email: "E-Mail",
      responseTime: "Antwortzeit",
      responseTimeValue: "Wir antworten in der Regel innerhalb von 24 Stunden",
      betaProject: "Beta-Projekt",
      betaDescription: "GoldBench ist derzeit eine kostenlose, nicht-kommerzielle Beta-Testumgebung.",
      sendMessage: "Nachricht senden",
      nameLabel: "Name",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "ihre@email.com",
      companyLabel: "Atelier / Unternehmen",
      companyPlaceholder: "Ihr Atelier- oder Firmenname",
      messageLabel: "Nachricht",
      messagePlaceholder: "Erzählen Sie uns von Ihrem Atelier und wie wir helfen können...",
      sendButton: "Nachricht senden",
      sending: "Wird gesendet...",
      privacyAgree: "Mit dem Absenden stimmen Sie unserer",
      messageSent: "Nachricht gesendet",
      thankYou: "Vielen Dank für Ihre Kontaktaufnahme. Wir melden uns in Kürze.",
    },
  },
  fr: {
    // Hero
    hero: {
      title1: "Vos mains façonnent l'or.",
      title2: "Votre voix gère l'entreprise.",
      subtitle: "GoldBench est le premier espace de travail vocal conçu exclusivement pour les orfèvres. Dictez des devis, suivez les matériaux et gérez vos clients en quelques secondes, sans jamais poser vos outils.",
      cta: "Demander un accès anticipé",
      ctaSubtext: "Places limitées pour les orfèvres indépendants.",
      scroll: "Défiler",
      commands: [
        "Enregistre 14 grammes d'or 18k, bague Miller",
        "Prépare une facture pour le sertissage saphir",
        "Qu'ai-je proposé à Mme Weber en mars ?",
        "Ajoute 6 heures de travail à la chevalière",
      ],
    },
    // Video Showcase
    videoShowcase: {
      label: "Le Produit",
      title: "Regardez un message vocal devenir une facture.",
      subtitle: "Quatre-vingt-dix secondes dans GoldBench — sans toucher un clavier.",
    },
    // Bench Loss Calculator
    calculator: {
      label: "La perte à l'établi",
      title: "Combien votre administration vous coûte-t-elle vraiment ?",
      subtitle: "Déplacez les curseurs. Voici l'or que vous laissez sur la table chaque année.",
      hoursLabel: "Heures d'administration par semaine",
      rateLabel: "Votre taux horaire à l'établi",
      hoursPerYear: "heures perdues par an",
      moneyPerYear: "de temps d'établi brûlé en paperasse",
      reclaimTitle: "GoldBench vous rend",
      reclaimUnit: "heures par an",
      footnote: "Basé sur 46 semaines de travail. Les premiers utilisateurs automatisent environ 8 heures d'administration sur 10.",
    },
    // Friction section
    friction: {
      label: "Points de friction",
      title: "Les limites de l'orfèvre traditionnel.",
      subtitle: "Vos outils physiques sont précis. Votre administration devrait être sans effort.",
      points: [
        {
          title: "La perte à l'établi",
          description: "Chaque grain d'or non enregistré est un profit perdu. Mais quitter la loupe pour enregistrer manuellement les poids d'alliage brise votre concentration.",
        },
        {
          title: "La paperasse de minuit",
          description: "Passer vos soirées à calculer les coûts des matériaux et à générer des PDF au lieu de reposer vos mains ou d'esquisser votre prochaine commande sur mesure.",
        },
        {
          title: "Le fardeau du marketing",
          description: "Mettre à jour votre portfolio et gérer vos clients vous éloigne du chalumeau. Partager vos pièces terminées ne devrait pas ressembler à un deuxième emploi épuisant.",
        },
        {
          title: "Interruptions constantes",
          description: "Quand le chalumeau est chaud et que la soudure coule, répondre aux messages ou enregistrer les détails des clients ruine votre rythme. Vous ne devriez pas avoir à briser votre état de flow pour gérer votre entreprise.",
        },
      ],
    },
    // Revenue Engine / Features
    features: {
      label: "Fonctionnalités",
      title: "Conçu pour la réalité de l'établi.",
      comingSoon: "Bientôt disponible",
      items: [
        {
          title: "Voix vers inventaire",
          description: "Prononcez les poids. Enregistrez chaque gramme d'or 18k, de platine et de déchets instantanément. Pas de clavier. Pas d'interruption de votre flow.",
        },
        {
          title: "Devis & factures instantanés",
          description: '"Créer un devis pour Martin : 14g platine, sertissage saphir sur mesure." Fait. Un PDF impeccable est créé avec les prix des métaux actuels pendant que vos mains sont encore à l\'établi.',
        },
        {
          title: "Le coffre-fort de l'établi",
          description: "Votre mémoire numérique, perfectionnée. Stockez en toute sécurité les tailles de bagues des clients, les ratios d'alliages personnalisés exacts et les historiques de réparation dans une base de données privée.",
        },
        {
          title: "Portfolio en 1 clic",
          description: 'Basculez une pièce de "Établi privé" à "Galerie publique" en un seul clic. Votre catalogue en ligne se synchronise instantanément sans écrire une seule ligne de texte web.',
        },
        {
          title: "Clienteling intelligent",
          description: "Le système se souvient des commissions passées et rédige automatiquement des messages personnalisés aux meilleurs clients, comme suggérer des boucles d'oreilles en opale assorties à une bague précédemment fabriquée.",
        },
      ],
    },
    // Workflow Demo
    workflow: {
      label: "Comment ça marche",
      title: "De la voix au grand livre. Instantanément.",
      subtitle: "Parlez dans Telegram. Regardez votre tableau de bord se mettre à jour en temps réel.",
      voiceMessage: "Message vocal",
      playDemo: "Lancer la démo",
      processing: "Traitement...",
      clickToSee: "Cliquez ci-dessous pour voir le flux de travail",
      invoiceReady: "Facture prête en 12 secondes",
      assistant: "Assistant vocal GoldBench",
      dashboard: {
        title: "Votre espace GoldBench",
        live: "En direct",
        inventoryLabel: "Inventaire — Or 18K",
        inventoryUnit: "g en stock",
        projectLabel: "Commande en cours",
        projectName: "Bague de fiançailles Miller",
        materialCost: "Coût des matériaux",
        laborLabel: "Main-d'œuvre",
        invoiceLabel: "Facture INV-2847",
        invoiceReady: "PDF prêt à envoyer",
        waiting: "En attente de votre voix…",
      },
    },
    // Mid CTA
    midCta: {
      cta: "Demander un accès anticipé",
      subtitle: "Abandonnez le clavier. Retournez à l'établi.",
    },
    // Use Cases
    useCases: {
      label: "Cas d'utilisation",
      title: "Le flux de travail du maître.",
      subtitle: "Administration précise, sans jamais quitter la loupe.",
      items: [
        { title: "Enregistrement vocal", description: "Enregistrez les matériaux et le temps avec une simple commande vocale" },
        { title: "Facturation instantanée", description: "Générez des factures professionnelles en quelques secondes" },
        { title: "Suivi des matériaux", description: "Gardez des registres précis de chaque gramme" },
        { title: "Galerie client", description: "Partagez des pièces sélectionnées en un clic" },
      ],
    },
    // Security
    security: {
      label: "Souveraineté des données",
      title: "Intégrité des données de qualité suisse",
      description: "Formules d'alliages personnalisées. Listes de clients d'élite. Structures de prix. Tout est verrouillé dans votre base de données suisse souveraine. Vous possédez les données. Cryptage de niveau bancaire. Conforme au RGPD.",
      tagline: "Vos actifs n'appartiennent qu'à vous.",
      badges: ["Cryptage 256 bits", "Hébergé en Suisse", "Conforme RGPD", "Sauvegardes quotidiennes"],
    },
    // Final CTA
    finalCta: {
      title1: "Récupérez votre temps.",
      title2: "Protégez votre métier.",
      subtitle: "Laissez GoldBench gérer l'administration pour que vos mains puissent rester à l'établi.",
      cta: "Sécurisez votre accès anticipé",
      ctaSubtext: "Rejoignez la liste d'attente exclusive pour les orfèvres indépendants.",
      location: "Nesslau, Suisse",
    },
    // Footer
    footer: {
      label: "Accès exclusif",
      title: "Prêt à élever votre atelier ?",
      subtitle: "Rejoignez les orfèvres sélectionnés qui ont transformé leur flux de travail.",
      cta: "Demander l'accès",
      privacy: "Confidentialité",
      terms: "Conditions",
      contact: "Contact",
    },
    // Early Access Page
    earlyAccess: {
      backToHome: "Retour à l'accueil",
      title: "Rejoignez la liste d'attente",
      titleHighlight: "GoldBench",
      titleEnd: "",
      subtitle: "Nous intégrons un nombre limité d'orfèvres indépendants pour notre bêta en accès anticipé. Réservez votre place pour récupérer votre temps à l'établi.",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom complet",
      emailLabel: "Adresse e-mail",
      emailPlaceholder: "vous@atelier.com",
      atelierLabel: "Nom de l'atelier",
      atelierOptional: "(Optionnel)",
      atelierPlaceholder: "Le nom de votre atelier ou entreprise",
      submitButton: "Demander mon invitation",
      submitting: "Envoi en cours...",
      privacyNote: "Vos informations sont sécurisées et ne seront jamais partagées.",
      captchaLabel: "Vérification de sécurité",
      captchaQuestion: "Combien font {num1} + {num2} ?",
      captchaPlaceholder: "Votre réponse",
      captchaError: "Réponse incorrecte, veuillez réessayer",
      successTitle: "Vous êtes sur la liste",
      successMessage: "Merci, {name}. Nous vous contacterons bientôt avec votre invitation d'accès anticipé exclusive.",
      returnHome: "Retour à la page d'accueil",
    },
    common: {
      backToHome: "Retour à l'accueil",
      lastUpdated: "Dernière mise à jour : Mai 2026",
    },
    privacy: {
      title: "Politique de confidentialité",
    },
    terms: {
      title: "Conditions d'utilisation",
    },
    contact: {
      title: "Nous contacter",
      subtitle: "Prêt à transformer le flux de travail de votre atelier ? Nous serions ravis de vous entendre.",
      contactInfo: "Coordonnées",
      email: "E-mail",
      responseTime: "Temps de réponse",
      responseTimeValue: "Nous répondons généralement dans les 24 heures",
      betaProject: "Projet Beta",
      betaDescription: "GoldBench est actuellement un environnement de test bêta gratuit et non commercial.",
      sendMessage: "Envoyer un message",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "votre@email.com",
      companyLabel: "Atelier / Entreprise",
      companyPlaceholder: "Le nom de votre atelier ou entreprise",
      messageLabel: "Message",
      messagePlaceholder: "Parlez-nous de votre atelier et comment nous pouvons vous aider...",
      sendButton: "Envoyer le message",
      sending: "Envoi en cours...",
      privacyAgree: "En soumettant, vous acceptez notre",
      messageSent: "Message envoyé",
      thankYou: "Merci de nous avoir contactés. Nous vous répondrons bientôt.",
    },
  },
  it: {
    // Hero
    hero: {
      title1: "Le tue mani forgiano l'oro.",
      title2: "La tua voce gestisce l'attività.",
      subtitle: "GoldBench è il primo spazio di lavoro vocale costruito esclusivamente per orafi. Detta preventivi, traccia i materiali e gestisci i clienti in pochi secondi, senza mai posare i tuoi strumenti.",
      cta: "Richiedi accesso anticipato",
      ctaSubtext: "Posti limitati per orafi indipendenti.",
      scroll: "Scorri",
      commands: [
        "Registra 14 grammi di oro 18k, anello Miller",
        "Prepara una fattura per l'incastonatura zaffiro",
        "Cosa ho preventivato alla signora Weber a marzo?",
        "Aggiungi 6 ore di lavoro all'anello con sigillo",
      ],
    },
    // Video Showcase
    videoShowcase: {
      label: "Il Prodotto",
      title: "Guarda un messaggio vocale diventare una fattura.",
      subtitle: "Novanta secondi dentro GoldBench — senza toccare una tastiera.",
    },
    // Bench Loss Calculator
    calculator: {
      label: "La perdita al banco",
      title: "Quanto ti costa davvero l'amministrazione?",
      subtitle: "Muovi i cursori. Questo è l'oro che lasci sul tavolo ogni anno.",
      hoursLabel: "Ore di amministrazione a settimana",
      rateLabel: "La tua tariffa oraria al banco",
      hoursPerYear: "ore perse all'anno",
      moneyPerYear: "di tempo al banco bruciato in scartoffie",
      reclaimTitle: "GoldBench ti restituisce",
      reclaimUnit: "ore all'anno",
      footnote: "Basato su 46 settimane lavorative. I primi utenti automatizzano circa 8 ore di amministrazione su 10.",
    },
    // Friction section
    friction: {
      label: "Punti dolenti",
      title: "I limiti dell'orafo tradizionale.",
      subtitle: "I tuoi strumenti fisici sono precisi. La tua amministrazione dovrebbe essere senza sforzo.",
      points: [
        {
          title: "La perdita al banco",
          description: "Ogni grammo d'oro non registrato è profitto perso. Ma allontanarsi dalla lente per registrare manualmente i pesi delle leghe interrompe la tua concentrazione.",
        },
        {
          title: "Le scartoffie di mezzanotte",
          description: "Passare le serate a calcolare i costi dei materiali e generare PDF invece di riposare le mani o abbozzare la prossima commissione su misura.",
        },
        {
          title: "Il peso del marketing",
          description: "Aggiornare il portfolio e gestire i clienti ti tiene lontano dalla fiamma. Condividere i tuoi pezzi finiti non dovrebbe sembrare un secondo lavoro estenuante.",
        },
        {
          title: "Interruzioni costanti",
          description: "Quando la fiamma è calda e la saldatura scorre, rispondere ai messaggi o registrare i dettagli dei clienti rovina il tuo ritmo. Non dovresti dover interrompere il tuo stato di flow per gestire la tua attività.",
        },
      ],
    },
    // Revenue Engine / Features
    features: {
      label: "Funzionalità",
      title: "Costruito per la realtà del banco.",
      comingSoon: "Prossimamente",
      items: [
        {
          title: "Voce-a-Inventario",
          description: "Pronuncia i pesi. Registra ogni grammo di oro 18k, platino e scarti istantaneamente. Niente tastiere. Nessuna interruzione del tuo flow.",
        },
        {
          title: "Preventivi e fatture istantanei",
          description: '"Crea un preventivo per Rossi: 14g platino, incastonatura zaffiro personalizzata." Fatto. Un PDF impeccabile viene creato con i prezzi dei metalli attuali mentre le tue mani sono ancora al banco.',
        },
        {
          title: "Il caveau del banco",
          description: "La tua memoria digitale, perfezionata. Conserva in modo sicuro le misure degli anelli dei clienti, i rapporti esatti delle leghe personalizzate e le storie delle riparazioni in un database privato.",
        },
        {
          title: "Portfolio in 1 clic",
          description: 'Passa un pezzo da "Banco privato" a "Galleria pubblica" con un solo clic. Il tuo catalogo online si sincronizza istantaneamente senza scrivere una singola riga di testo web.',
        },
        {
          title: "Clienteling intelligente",
          description: "Il sistema ricorda le commissioni passate e redige automaticamente messaggi personalizzati ai migliori clienti, come suggerire orecchini di opale abbinati a un anello precedentemente realizzato.",
        },
      ],
    },
    // Workflow Demo
    workflow: {
      label: "Come funziona",
      title: "Dalla voce al registro. Istantaneamente.",
      subtitle: "Parla su Telegram. Guarda la tua dashboard aggiornarsi in tempo reale.",
      voiceMessage: "Messaggio vocale",
      playDemo: "Avvia demo",
      processing: "Elaborazione...",
      clickToSee: "Clicca sotto per vedere il flusso di lavoro",
      invoiceReady: "Fattura pronta in 12 secondi",
      assistant: "Assistente vocale GoldBench",
      dashboard: {
        title: "Il tuo spazio GoldBench",
        live: "In diretta",
        inventoryLabel: "Inventario — Oro 18K",
        inventoryUnit: "g in magazzino",
        projectLabel: "Commissione attiva",
        projectName: "Anello di fidanzamento Miller",
        materialCost: "Costo materiali",
        laborLabel: "Manodopera",
        invoiceLabel: "Fattura INV-2847",
        invoiceReady: "PDF pronto da inviare",
        waiting: "In attesa della tua voce…",
      },
    },
    // Mid CTA
    midCta: {
      cta: "Richiedi accesso anticipato",
      subtitle: "Abbandona la tastiera. Torna al banco.",
    },
    // Use Cases
    useCases: {
      label: "Casi d'uso",
      title: "Il flusso di lavoro del maestro.",
      subtitle: "Amministrazione precisa, senza mai lasciare la lente.",
      items: [
        { title: "Registrazione vocale", description: "Registra materiali e tempo con un semplice comando vocale" },
        { title: "Fatturazione istantanea", description: "Genera fatture professionali in pochi secondi" },
        { title: "Tracciamento materiali", description: "Mantieni registri precisi di ogni grammo" },
        { title: "Galleria clienti", description: "Condividi pezzi curati con un clic" },
      ],
    },
    // Security
    security: {
      label: "Sovranità dei dati",
      title: "Integrità dei dati di grado svizzero",
      description: "Formule di leghe personalizzate. Liste clienti d'élite. Strutture di prezzo. Tutto bloccato nel tuo database svizzero sovrano. Tu possiedi i dati. Crittografia di livello bancario. Conforme al GDPR.",
      tagline: "I tuoi beni sono solo tuoi.",
      badges: ["Crittografia 256 bit", "Hosting svizzero", "Conforme GDPR", "Backup giornalieri"],
    },
    // Final CTA
    finalCta: {
      title1: "Riconquista il tuo tempo.",
      title2: "Proteggi il tuo mestiere.",
      subtitle: "Lascia che GoldBench gestisca l'amministrazione così le tue mani possono restare al banco.",
      cta: "Assicurati l'accesso anticipato",
      ctaSubtext: "Unisciti alla lista d'attesa esclusiva per orafi indipendenti.",
      location: "Nesslau, Svizzera",
    },
    // Footer
    footer: {
      label: "Accesso esclusivo",
      title: "Pronto a elevare il tuo atelier?",
      subtitle: "Unisciti agli orafi selezionati che hanno trasformato il loro flusso di lavoro.",
      cta: "Richiedi accesso",
      privacy: "Privacy",
      terms: "Termini",
      contact: "Contatto",
    },
    // Early Access Page
    earlyAccess: {
      backToHome: "Torna alla home",
      title: "Unisciti alla lista d'attesa",
      titleHighlight: "GoldBench",
      titleEnd: "",
      subtitle: "Stiamo accogliendo un numero limitato di orafi indipendenti per la nostra beta ad accesso anticipato. Assicurati il tuo posto per riconquistare il tuo tempo al banco.",
      nameLabel: "Nome",
      namePlaceholder: "Il tuo nome completo",
      emailLabel: "Indirizzo e-mail",
      emailPlaceholder: "tu@atelier.com",
      atelierLabel: "Nome dell'atelier / laboratorio",
      atelierOptional: "(Opzionale)",
      atelierPlaceholder: "Il nome del tuo laboratorio o attività",
      submitButton: "Richiedi il mio invito",
      submitting: "Invio in corso...",
      privacyNote: "Le tue informazioni sono sicure e non saranno mai condivise.",
      captchaLabel: "Verifica di sicurezza",
      captchaQuestion: "Quanto fa {num1} + {num2}?",
      captchaPlaceholder: "La tua risposta",
      captchaError: "Risposta errata, riprova",
      successTitle: "Sei nella lista",
      successMessage: "Grazie, {name}. Ti contatteremo presto con il tuo invito esclusivo per l'accesso anticipato.",
      returnHome: "Torna alla homepage",
    },
    common: {
      backToHome: "Torna alla home",
      lastUpdated: "Ultimo aggiornamento: Maggio 2026",
    },
    privacy: {
      title: "Informativa sulla privacy",
    },
    terms: {
      title: "Termini di servizio",
    },
    contact: {
      title: "Contattaci",
      subtitle: "Pronto a trasformare il flusso di lavoro del tuo atelier? Ci piacerebbe sentirti.",
      contactInfo: "Informazioni di contatto",
      email: "E-mail",
      responseTime: "Tempo di risposta",
      responseTimeValue: "Di solito rispondiamo entro 24 ore",
      betaProject: "Progetto Beta",
      betaDescription: "GoldBench è attualmente un ambiente di test beta gratuito e non commerciale.",
      sendMessage: "Invia un messaggio",
      nameLabel: "Nome",
      namePlaceholder: "Il tuo nome",
      emailPlaceholder: "tua@email.com",
      companyLabel: "Atelier / Azienda",
      companyPlaceholder: "Il nome del tuo atelier o azienda",
      messageLabel: "Messaggio",
      messagePlaceholder: "Raccontaci del tuo atelier e come possiamo aiutarti...",
      sendButton: "Invia messaggio",
      sending: "Invio in corso...",
      privacyAgree: "Inviando, accetti la nostra",
      messageSent: "Messaggio inviato",
      thankYou: "Grazie per averci contattato. Ti risponderemo presto.",
    },
  },
} as const;

export type Translations = typeof translations.en;

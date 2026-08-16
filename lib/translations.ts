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
      title: "Snap a photo. Speak your notes. Watch your inventory update.",
      subtitle: "",
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
          title: "Lost Profits",
          description: "Fluctuating gold prices mean slow quotes and outdated spreadsheets can quickly eat up your hard-earned margins.",
        },
        {
          title: "Endless Admin",
          description: "Writing quotes, capturing receipts, and sorting out accounting steals the time you should spend actually making jewelry.",
        },
        {
          title: "The Photo Trap",
          description: "Getting professional, clean photos of your pieces takes hours you don't have, so your best work stays hidden on your phone.",
        },
        {
          title: "Scattered Client Details",
          description: "Keeping track of customer repairs, ring sizes, and preferences across paper notebooks and chat apps makes you look disorganized.",
        },
      ],
    },
    // Revenue Engine / Features
    features: {
      label: "Features",
      title: "Built for the Reality of the Bench.",
      categories: [
        {
          category: "Capture & Admin",
          items: [
            {
              title: "Voice-to-Data Entry",
              description: "Send a quick voice note to log a task, update a client, or check your stock. GoldBench listens and does the typing for you.",
            },
            {
              title: "Snap Your Receipts",
              description: "Take a photo of any receipt and GoldBench reads the shop, amount, and VAT automatically. It only asks one thing: cash or card?",
            },
            {
              title: "Instant PDFs",
              description: "Ask for a valuation, invoice, or letter and get a polished, branded PDF back in seconds—ready to send straight to your client.",
            },
            {
              title: "Just Ask Your Numbers",
              description: 'Ask "How much cash do I have?" or "What did I sell this month?" and get an exact answer—no spreadsheets to open.',
            },
            {
              title: "One-Tap Corrections",
              description: "Every time GoldBench logs something for you, it gives you a direct link to open it and fine-tune the details yourself.",
            },
          ],
        },
        {
          category: "Photography & Marketing",
          items: [
            {
              title: "One-Tap Background Removal",
              description: "Automatically cut your jewelry out of messy workbench photos into clean, professional images with a transparent background.",
            },
            {
              title: "Beautiful Backgrounds",
              description: "Drop your piece onto stunning backdrops—marble, velvet, wood, rose petals—for instant, share-ready social media photos.",
            },
            {
              title: "Cinematic Videos",
              description: "Upload a single photo of a ring and get a polished reveal video with movement, lighting, and sparkle—ready for Instagram Reels.",
            },
            {
              title: "Instagram Made Easy",
              description: 'GoldBench writes on-brand captions and prepares your posts from a photo. Nothing ever goes live until you tap "Yes."',
            },
          ],
        },
        {
          category: "Inventory & Pricing",
          items: [
            {
              title: "Automatic Pricing",
              description: "Enter the cost of gold, stones, and labor, set your markup, and GoldBench calculates the suggested retail price for you.",
            },
            {
              title: "Effortless Stone Tracking",
              description: "Register your small stones once and add them to any piece. Prices stay locked in to protect your future margins.",
            },
            {
              title: "Smart Materials List",
              description: "Link stones from your inventory to each piece. Remove a stone or delete a piece and it returns to your stock automatically.",
            },
            {
              title: "Copy a Piece",
              description: "Duplicate any design in one tap—materials, weights, and descriptions included—to quickly create variations of your best sellers.",
            },
            {
              title: "Keep Custom Work Private",
              description: "Flag bespoke commissions as private so they never accidentally show up on your public-facing catalog.",
            },
          ],
        },
        {
          category: "Bookkeeping & Finance",
          items: [
            {
              title: "Full Cashbook",
              description: "Track your cash till and bank balance together—sales, deposits, vouchers, private drawings, and transfers all in one place.",
            },
            {
              title: "Easy Till Counts",
              description: "Count your physical cash, type in the number, and GoldBench works out and records any difference for you.",
            },
            {
              title: "Review Before You Approve",
              description: "Expenses you captured on your phone wait for you in the app. Check the photo, then approve them with one click.",
            },
            {
              title: "Ready for Your Accountant",
              description: "Export a clean file mapped to Swiss accounting standards and VAT codes—ready to hand straight to your accountant.",
            },
          ],
        },
        {
          category: "Clients & Records",
          items: [
            {
              title: "Private Client Lookbooks",
              description: "Pick a selection of pieces and send your client a secure link—then see exactly when they've viewed it.",
            },
            {
              title: "Service & Repair History",
              description: "Track every cleaning, repair, and engraving across the full life of a customer's jewelry, including outside partner work.",
            },
            {
              title: "Document Vault",
              description: "Keep appraisals, certificates, and heirloom documents attached to each client's profile for instant retrieval.",
            },
          ],
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
      title: "100% Private. 100% Swiss.",
      description: "Your clients, your pricing, and your designs are the heart of your business. We keep them locked safely in Switzerland.",
      tagline: "You own your information, period.",
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
      title: "Mach ein Foto. Sprich deine Notizen. Sieh dein Inventar sich aktualisieren.",
      subtitle: "",
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
          title: "Verlorene Gewinne",
          description: "Schwankende Goldpreise bedeuten langsame Angebote, und veraltete Tabellen können deine hart erarbeiteten Margen schnell auffressen.",
        },
        {
          title: "Endlose Verwaltung",
          description: "Angebote schreiben, Belege erfassen und die Buchhaltung erledigen stiehlt dir die Zeit, die du eigentlich mit dem Anfertigen von Schmuck verbringen solltest.",
        },
        {
          title: "Die Foto-Falle",
          description: "Professionelle, saubere Fotos deiner Stücke zu machen kostet Stunden, die du nicht hast, sodass deine beste Arbeit auf deinem Handy verborgen bleibt.",
        },
        {
          title: "Verstreute Kundendaten",
          description: "Reparaturen, Ringgrössen und Vorlieben deiner Kunden über Papiernotizbücher und Chat-Apps hinweg im Blick zu behalten, lässt dich unorganisiert wirken.",
        },
      ],
    },
    // Revenue Engine / Features
    features: {
      label: "Funktionen",
      title: "Gebaut für die Realität der Werkbank.",
      comingSoon: "Bald verfügbar",
      categories: [
        {
          category: "Erfassen & Verwaltung",
          items: [
            {
              title: "Spracheingabe von Daten",
              description: "Sende eine kurze Sprachnachricht, um eine Aufgabe zu erfassen, einen Kunden zu aktualisieren oder deinen Bestand zu prüfen. GoldBench hört zu und tippt für dich.",
            },
            {
              title: "Belege einfach abfotografieren",
              description: "Fotografiere einen beliebigen Beleg und GoldBench erkennt Geschäft, Betrag und MWST automatisch. Es fragt nur eines: bar oder Karte?",
            },
            {
              title: "Sofortige PDFs",
              description: "Fordere eine Schätzung, Rechnung oder einen Brief an und erhalte in Sekunden ein sauberes, gebrandetes PDF – bereit, direkt an deinen Kunden zu senden.",
            },
            {
              title: "Frag einfach nach deinen Zahlen",
              description: 'Frage "Wie viel Bargeld habe ich?" oder "Was habe ich diesen Monat verkauft?" und erhalte eine exakte Antwort – ganz ohne Tabellen.',
            },
            {
              title: "Korrekturen mit einem Klick",
              description: "Jedes Mal, wenn GoldBench etwas für dich erfasst, erhältst du einen direkten Link, um es zu öffnen und die Details selbst anzupassen.",
            },
          ],
        },
        {
          category: "Fotografie & Marketing",
          items: [
            {
              title: "Hintergrund mit einem Tipp entfernen",
              description: "Schneide deinen Schmuck automatisch aus unruhigen Werkbank-Fotos frei – zu sauberen, professionellen Bildern mit transparentem Hintergrund.",
            },
            {
              title: "Wunderschöne Hintergründe",
              description: "Setze dein Stück auf beeindruckende Hintergründe – Marmor, Samt, Holz, Rosenblätter – für sofort teilbare Social-Media-Fotos.",
            },
            {
              title: "Kinoreife Videos",
              description: "Lade ein einziges Foto eines Rings hoch und erhalte ein poliertes Enthüllungsvideo mit Bewegung, Licht und Funkeln – bereit für Instagram Reels.",
            },
            {
              title: "Instagram leicht gemacht",
              description: 'GoldBench schreibt markengerechte Bildtexte und bereitet deine Beiträge aus einem Foto vor. Nichts geht online, bevor du auf "Ja" tippst.',
            },
          ],
        },
        {
          category: "Bestand & Preisgestaltung",
          items: [
            {
              title: "Automatische Preisberechnung",
              description: "Gib die Kosten für Gold, Steine und Arbeit ein, lege deinen Aufschlag fest, und GoldBench berechnet den empfohlenen Verkaufspreis für dich.",
            },
            {
              title: "Mühelose Steinverwaltung",
              description: "Erfasse deine kleinen Steine einmal und füge sie jedem Stück hinzu. Die Preise bleiben fixiert, um deine künftigen Margen zu schützen.",
            },
            {
              title: "Intelligente Materialliste",
              description: "Verknüpfe Steine aus deinem Bestand mit jedem Stück. Entfernst du einen Stein oder löschst ein Stück, kehrt er automatisch in deinen Bestand zurück.",
            },
            {
              title: "Ein Stück kopieren",
              description: "Dupliziere jedes Design mit einem Tipp – inklusive Materialien, Gewichte und Beschreibungen – um schnell Varianten deiner Bestseller zu erstellen.",
            },
            {
              title: "Auftragsarbeiten privat halten",
              description: "Markiere massgefertigte Auftragsarbeiten als privat, damit sie niemals versehentlich in deinem öffentlichen Katalog erscheinen.",
            },
          ],
        },
        {
          category: "Buchhaltung & Finanzen",
          items: [
            {
              title: "Vollständiges Kassenbuch",
              description: "Verwalte Kasse und Bankguthaben zusammen – Verkäufe, Anzahlungen, Gutscheine, Privatentnahmen und Überweisungen an einem Ort.",
            },
            {
              title: "Einfache Kassenzählung",
              description: "Zähle dein Bargeld, gib die Zahl ein, und GoldBench berechnet und protokolliert etwaige Differenzen für dich.",
            },
            {
              title: "Prüfen, bevor du freigibst",
              description: "Auf dem Handy erfasste Ausgaben warten in der App auf dich. Prüfe das Foto und gib sie dann mit einem Klick frei.",
            },
            {
              title: "Bereit für deinen Treuhänder",
              description: "Exportiere eine saubere Datei, abgestimmt auf den Schweizer Kontenrahmen und die MWST-Codes – bereit zur direkten Übergabe an deinen Treuhänder.",
            },
          ],
        },
        {
          category: "Kunden & Dokumente",
          items: [
            {
              title: "Private Kunden-Lookbooks",
              description: "Wähle eine Auswahl an Stücken aus und sende deinem Kunden einen sicheren Link – und sieh genau, wann er ihn angesehen hat.",
            },
            {
              title: "Service- & Reparaturverlauf",
              description: "Verfolge jede Reinigung, Reparatur und Gravur über die gesamte Lebensdauer des Kundenschmucks, inklusive externer Partnerarbeit.",
            },
            {
              title: "Dokumententresor",
              description: "Bewahre Schätzungen, Zertifikate und Erbstück-Dokumente direkt im Profil jedes Kunden auf – für sofortigen Zugriff.",
            },
          ],
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
      title: "100% Privat. 100% Schweizerisch.",
      description: "Deine Kunden, deine Preise und deine Designs sind das Herz deines Geschäfts. Wir bewahren sie sicher in der Schweiz auf.",
      tagline: "Deine Daten gehören dir, Punkt.",
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
      title: "Prenez une photo. Dictez vos notes. Regardez votre inventaire se mettre à jour.",
      subtitle: "",
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
          title: "Profits perdus",
          description: "Les prix de l'or fluctuants entraînent des devis lents, et des tableurs obsolètes peuvent vite grignoter vos marges durement gagnées.",
        },
        {
          title: "Administration sans fin",
          description: "Rédiger des devis, saisir les reçus et gérer la comptabilité vous vole le temps que vous devriez consacrer à créer des bijoux.",
        },
        {
          title: "Le piège de la photo",
          description: "Obtenir des photos professionnelles et nettes de vos pièces prend des heures que vous n'avez pas, alors votre meilleur travail reste caché sur votre téléphone.",
        },
        {
          title: "Données clients éparpillées",
          description: "Suivre les réparations, les tailles de bague et les préférences de vos clients entre carnets papier et applications de messagerie vous fait paraître désorganisé.",
        },
      ],
    },
    // Revenue Engine / Features
    features: {
      label: "Fonctionnalités",
      title: "Conçu pour la réalité de l'établi.",
      comingSoon: "Bientôt disponible",
      categories: [
        {
          category: "Saisie & Administration",
          items: [
            {
              title: "Saisie de données par la voix",
              description: "Envoyez une courte note vocale pour enregistrer une tâche, mettre à jour un client ou vérifier votre stock. GoldBench écoute et tape à votre place.",
            },
            {
              title: "Photographiez vos reçus",
              description: "Prenez en photo n'importe quel reçu et GoldBench lit le commerce, le montant et la TVA automatiquement. Il ne pose qu'une question : espèces ou carte ?",
            },
            {
              title: "PDF instantanés",
              description: "Demandez une estimation, une facture ou une lettre et recevez en quelques secondes un PDF soigné à votre marque, prêt à envoyer directement à votre client.",
            },
            {
              title: "Demandez simplement vos chiffres",
              description: 'Demandez "Combien d\'espèces ai-je ?" ou "Qu\'ai-je vendu ce mois-ci ?" et obtenez une réponse exacte, sans ouvrir de tableur.',
            },
            {
              title: "Corrections en un clic",
              description: "Chaque fois que GoldBench enregistre quelque chose pour vous, il vous donne un lien direct pour l'ouvrir et ajuster les détails vous-même.",
            },
          ],
        },
        {
          category: "Photographie & Marketing",
          items: [
            {
              title: "Suppression d'arrière-plan en un geste",
              description: "Détourez automatiquement vos bijoux de photos d'établi encombrées en images nettes et professionnelles à fond transparent.",
            },
            {
              title: "De magnifiques arrière-plans",
              description: "Placez votre pièce sur de superbes décors — marbre, velours, bois, pétales de rose — pour des photos réseaux sociaux prêtes à partager.",
            },
            {
              title: "Vidéos cinématographiques",
              description: "Téléversez une seule photo d'une bague et obtenez une vidéo de présentation soignée avec mouvement, lumière et éclat, prête pour Instagram Reels.",
            },
            {
              title: "Instagram en toute simplicité",
              description: 'GoldBench rédige des légendes fidèles à votre marque et prépare vos publications à partir d\'une photo. Rien n\'est publié tant que vous n\'avez pas tapé "Oui".',
            },
          ],
        },
        {
          category: "Inventaire & Tarification",
          items: [
            {
              title: "Tarification automatique",
              description: "Saisissez le coût de l'or, des pierres et de la main-d'œuvre, définissez votre marge, et GoldBench calcule le prix de vente conseillé pour vous.",
            },
            {
              title: "Suivi des pierres sans effort",
              description: "Enregistrez vos petites pierres une seule fois et ajoutez-les à n'importe quelle pièce. Les prix restent fixés pour protéger vos marges futures.",
            },
            {
              title: "Liste de matériaux intelligente",
              description: "Reliez les pierres de votre inventaire à chaque pièce. Retirez une pierre ou supprimez une pièce, et elle retourne automatiquement dans votre stock.",
            },
            {
              title: "Copier une pièce",
              description: "Dupliquez n'importe quel modèle en un geste — matériaux, poids et descriptions compris — pour créer rapidement des variations de vos best-sellers.",
            },
            {
              title: "Gardez le sur-mesure privé",
              description: "Marquez les commandes sur mesure comme privées afin qu'elles n'apparaissent jamais par accident dans votre catalogue public.",
            },
          ],
        },
        {
          category: "Comptabilité & Finances",
          items: [
            {
              title: "Livre de caisse complet",
              description: "Suivez votre caisse et votre solde bancaire ensemble — ventes, acomptes, bons, prélèvements privés et virements, le tout au même endroit.",
            },
            {
              title: "Comptage de caisse facile",
              description: "Comptez vos espèces, saisissez le montant, et GoldBench calcule et enregistre toute différence pour vous.",
            },
            {
              title: "Vérifiez avant de valider",
              description: "Les dépenses saisies sur votre téléphone vous attendent dans l'application. Vérifiez la photo, puis validez-les en un clic.",
            },
            {
              title: "Prêt pour votre fiduciaire",
              description: "Exportez un fichier propre adapté au plan comptable suisse et aux codes TVA — prêt à remettre directement à votre fiduciaire.",
            },
          ],
        },
        {
          category: "Clients & Documents",
          items: [
            {
              title: "Lookbooks clients privés",
              description: "Sélectionnez un ensemble de pièces et envoyez à votre client un lien sécurisé — puis voyez exactement quand il l'a consulté.",
            },
            {
              title: "Historique service & réparation",
              description: "Suivez chaque nettoyage, réparation et gravure tout au long de la vie du bijou d'un client, y compris le travail des partenaires externes.",
            },
            {
              title: "Coffre à documents",
              description: "Conservez estimations, certificats et documents d'héritage directement dans le profil de chaque client, pour une récupération instantanée.",
            },
          ],
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
      title: "100% Privé. 100% Suisse.",
      description: "Vos clients, vos prix et vos créations sont le cœur de votre entreprise. Nous les gardons en sécurité en Suisse.",
      tagline: "Vos informations vous appartiennent, point final.",
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
      title: "Scatta una foto. Detta le tue note. Guarda il tuo inventario aggiornarsi.",
      subtitle: "",
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
          title: "Profitti persi",
          description: "I prezzi dell'oro in continua oscillazione rendono i preventivi lenti, e i fogli di calcolo obsoleti possono divorare rapidamente i margini guadagnati con fatica.",
        },
        {
          title: "Amministrazione infinita",
          description: "Scrivere preventivi, registrare ricevute e sistemare la contabilità ti ruba il tempo che dovresti dedicare a creare gioielli.",
        },
        {
          title: "La trappola delle foto",
          description: "Ottenere foto professionali e pulite dei tuoi pezzi richiede ore che non hai, così il tuo lavoro migliore resta nascosto sul telefono.",
        },
        {
          title: "Dati dei clienti sparsi",
          description: "Tenere traccia di riparazioni, misure degli anelli e preferenze dei clienti tra quaderni cartacei e app di messaggistica ti fa sembrare disorganizzato.",
        },
      ],
    },
    // Revenue Engine / Features
    features: {
      label: "Funzionalità",
      title: "Costruito per la realtà del banco.",
      comingSoon: "Prossimamente",
      categories: [
        {
          category: "Acquisizione & Amministrazione",
          items: [
            {
              title: "Inserimento dati con la voce",
              description: "Invia una breve nota vocale per registrare un compito, aggiornare un cliente o controllare il magazzino. GoldBench ascolta e scrive al posto tuo.",
            },
            {
              title: "Fotografa le tue ricevute",
              description: "Scatta una foto di qualsiasi ricevuta e GoldBench legge il negozio, l'importo e l'IVA automaticamente. Chiede solo una cosa: contanti o carta?",
            },
            {
              title: "PDF istantanei",
              description: "Richiedi una valutazione, una fattura o una lettera e ricevi in pochi secondi un PDF curato e brandizzato, pronto da inviare direttamente al cliente.",
            },
            {
              title: "Chiedi semplicemente i tuoi numeri",
              description: 'Chiedi "Quanti contanti ho?" o "Quanto ho venduto questo mese?" e ottieni una risposta esatta, senza aprire un foglio di calcolo.',
            },
            {
              title: "Correzioni con un tocco",
              description: "Ogni volta che GoldBench registra qualcosa per te, ti fornisce un link diretto per aprirlo e regolare i dettagli da solo.",
            },
          ],
        },
        {
          category: "Fotografia & Marketing",
          items: [
            {
              title: "Rimozione sfondo con un tocco",
              description: "Ritaglia automaticamente i tuoi gioielli da foto di banco disordinate, ottenendo immagini pulite e professionali con sfondo trasparente.",
            },
            {
              title: "Sfondi meravigliosi",
              description: "Posiziona il tuo pezzo su sfondi splendidi — marmo, velluto, legno, petali di rosa — per foto social pronte da condividere.",
            },
            {
              title: "Video cinematografici",
              description: "Carica una singola foto di un anello e ottieni un video di presentazione curato con movimento, luce e scintillii, pronto per Instagram Reels.",
            },
            {
              title: "Instagram semplificato",
              description: 'GoldBench scrive didascalie in linea con il tuo brand e prepara i post da una foto. Nulla viene pubblicato finché non tocchi "Sì".',
            },
          ],
        },
        {
          category: "Magazzino & Prezzi",
          items: [
            {
              title: "Prezzi automatici",
              description: "Inserisci il costo di oro, pietre e manodopera, imposta il tuo ricarico e GoldBench calcola il prezzo di vendita consigliato per te.",
            },
            {
              title: "Tracciamento pietre senza sforzo",
              description: "Registra le tue piccole pietre una sola volta e aggiungile a qualsiasi pezzo. I prezzi restano bloccati per proteggere i tuoi margini futuri.",
            },
            {
              title: "Distinta materiali intelligente",
              description: "Collega le pietre dal tuo magazzino a ogni pezzo. Rimuovi una pietra o elimina un pezzo e questa torna automaticamente in magazzino.",
            },
            {
              title: "Copia un pezzo",
              description: "Duplica qualsiasi design con un tocco — materiali, pesi e descrizioni inclusi — per creare rapidamente varianti dei tuoi best seller.",
            },
            {
              title: "Mantieni privato il su misura",
              description: "Contrassegna le commissioni su misura come private, così non appariranno mai per errore nel tuo catalogo pubblico.",
            },
          ],
        },
        {
          category: "Contabilità & Finanze",
          items: [
            {
              title: "Libro cassa completo",
              description: "Tieni traccia di cassa e saldo bancario insieme — vendite, acconti, buoni, prelievi privati e trasferimenti, tutto in un unico posto.",
            },
            {
              title: "Conteggio cassa facile",
              description: "Conta i tuoi contanti, digita il numero e GoldBench calcola e registra qualsiasi differenza per te.",
            },
            {
              title: "Controlla prima di approvare",
              description: "Le spese registrate dal telefono ti aspettano nell'app. Controlla la foto, poi approvale con un clic.",
            },
            {
              title: "Pronto per il tuo commercialista",
              description: "Esporta un file pulito mappato sul piano dei conti svizzero e sui codici IVA — pronto da consegnare direttamente al tuo commercialista.",
            },
          ],
        },
        {
          category: "Clienti & Documenti",
          items: [
            {
              title: "Lookbook privati per i clienti",
              description: "Seleziona un insieme di pezzi e invia al tuo cliente un link sicuro — poi vedi esattamente quando lo ha visualizzato.",
            },
            {
              title: "Storico servizio e riparazioni",
              description: "Tieni traccia di ogni pulizia, riparazione e incisione lungo tutta la vita del gioiello di un cliente, incluso il lavoro dei partner esterni.",
            },
            {
              title: "Cassaforte documenti",
              description: "Conserva perizie, certificati e documenti di cimeli direttamente nel profilo di ogni cliente, per un recupero immediato.",
            },
          ],
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
      title: "100% Privato. 100% Svizzero.",
      description: "I tuoi clienti, i tuoi prezzi e i tuoi design sono il cuore della tua attività. Li custodiamo al sicuro in Svizzera.",
      tagline: "Le tue informazioni sono tue, punto.",
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

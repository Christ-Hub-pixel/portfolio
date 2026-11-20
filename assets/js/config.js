/**
 * =========================================================================
 * CONFIGURATION DU PORTFOLIO - EZOUA EMIAN CHRIST ESLI
 * =========================================================================
 * Données réelles extraites et synchronisées avec le Curriculum Vitae officiel.
 * Format : L'Odyssée Technologique d'Esli (Aventure & Journal de bord d'ingénierie)
 */

const PORTFOLIO_CONFIG = {
  // Identité personnelle & Titre
  personne: {
    nomComplet: "EZOUA EMIAN CHRIST ESLI",
    initiales: "EECE",
    age: "20 ans",
    titre: "Étudiant en génie logiciel | Développement web, mobile et IA",
    sousTitre: "Portfolio de projets, de prototypes et d'expériences en développement logiciel.",
    ville: "Grand-Bassam, Comoé",
    pays: "Côte d’Ivoire",
    disponibilite: "À l'écoute de nouvelles opportunités • Abidjan (Sur site · Hybride · À distance)",
    statutCourt: "À l'écoute d'opportunités • Sur site · Hybride · À distance",
    formationActuelle: "Licence 2 — Génie Logiciel (2026 - 2027)",
    etablissement: "Institut Ivoirien de Technologie (IIT) — Côte d'Ivoire",
  },

  // Chapitres de l'Aventure Technologique (Journal de Bord & Cartographie de l'Odyssée)
  odyssee: {
    titreGlobal: "L'Odyssée Technologique d'Esli",
    sousTitre: "Suivez le parcours immersif d'un ingénieur de 20 ans : du sanctuaire académique aux arènes de hackathons et aux grandes missions logicielles.",
    chapitres: [
      { id: "hero", numero: "00", acte: "PROLOGUE", label: "Le Pilote", desc: "Carnet de bord & vision" },
      { id: "a-propos", numero: "01", acte: "ACTE I", label: "L'Origine", desc: "Le sanctuaire de l'IIT" },
      { id: "workflow", numero: "02", acte: "ACTE II", label: "Le Rituel", desc: "La forge d'ingénierie" },
      { id: "distinctions", numero: "03", acte: "ACTE III", label: "Les Arènes", desc: "Hackathons 2026" },
      { id: "projets", numero: "04", acte: "ACTE IV", label: "Les projets", desc: "6 artefacts concrets" },
      { id: "competences", numero: "05", acte: "ACTE V", label: "L'Arsenal", desc: "Les 4 planètes tech" },
      { id: "contact", numero: "06", acte: "ÉPILOGUE", label: "L'Alliance", desc: "Transmettre & embarquer" }
    ]
  },

  // Coordonnées & Liens externes officiels
  contacts: {
    telephone1: "+225 0161407064",
    telephone1Affiche: "+225 01 61 40 70 64",
    telephone2: "+225 0797515190",
    telephone2Affiche: "+225 07 97 51 51 90",
    whatsappNumero: "2250161407064",
    whatsappMessage: "Bonjour M. EZOUA, j'ai parcouru votre Odyssée Technologique et votre CV. J'aimerais échanger avec vous pour une opportunité de stage / projet.",
    email: "ez.emian77@gmail.com",
    github: "https://github.com/Christ-Hub-pixel",
    githubPseudo: "Christ-Hub-pixel",
    linkedin: "https://linkedin.com/in/emian-ezoua",
    linkedinPseudo: "emian-ezoua",
    linkedinRelations: "500+ relations",
    cvFichier: "cv_EZOUA_EMIAN.pdf",
  },

  // Objectif professionnel & Présentation de la quête
  objectifStage: "Je recherche un stage en génie logiciel pour contribuer à des projets concrets, renforcer mon expérience en développement web et mobile et continuer à explorer l'intelligence artificielle.",

  biographie: [
    "Étudiant en Licence 2 de génie logiciel à l'Institut Ivoirien de Technologie (IIT), à Grand-Bassam, je m'intéresse à la création de solutions numériques utiles.",
    "Je travaille sur des projets web et mobiles avec Flutter, Dart, Python, JavaScript, Firebase et PostgreSQL. Je m'intéresse aussi à l'IA, à l'UI/UX et à la conception logicielle.",
    "Les projets d'équipe et les hackathons m'ont permis de pratiquer le prototypage, la conception d'interfaces et le développement collaboratif."
  ],

  // Statistiques clés (Indicateurs de bord)
  statistiques: [
    { valeur: "L2", libelle: "Génie Logiciel", detail: "Sanctuaire IIT Grand-Bassam" },
    { valeur: "02", libelle: "Arènes Remportées", detail: "2ᵉ Place IIT & 3ᵉ Place Vibeathon 2026" },
    { valeur: "06", libelle: "Projets présentés", detail: "Projets, concepts et prototypes web et mobiles" },
    { valeur: "L2", libelle: "Parcours actuel", detail: "Génie logiciel à l’IIT" }
  ],

  // Distinctions & Hackathons 2026 (Les Arènes)
  distinctions: [
    {
      id: "hackathon-iit-2026",
      place: "2ᵉ Place",
      missionCode: "DÉFI // 01",
      titre: "Hackathon IIT 2026",
      organisation: "Institut Ivoirien de Technologie",
      annee: "2026",
      badge: "2ᵉ Place • Argent",
      epreuve: "48 Heures d'Innovation & Prototypage",
      description: "Confrontation dans l'arène de l'Institut Ivoirien de Technologie. Prototypage sous haute contrainte, architecture logicielle résiliente et coordination d'équipe pour décrocher la 2ᵉ place sur le podium."
    },
    {
      id: "vibeathon-2026",
      place: "3ᵉ Place",
      missionCode: "DÉFI // 02",
      titre: "VIBEATHON 2026",
      organisation: "Challenge Technologique National",
      annee: "2026",
      badge: "3ᵉ Place • Bronze",
      epreuve: "Sprint National d'Ingénierie",
      description: "Défi d'ingénierie national face à des équipes aguerries. Conception d'une solution numérique innovante, présentation devant jury d'experts et consécration à la 3ᵉ place."
    }
  ],

  // Compétences techniques détaillées par catégorie (L'Arsenal)
  competences: {
    developpement: ["Flutter", "Dart", "Python", "JavaScript", "HTML / CSS"],
    backendDonnees: ["Firebase", "PostgreSQL", "API REST", "Modélisation UML"],
    outilsCloud: ["Git / GitHub", "Figma (UI/UX)", "VS Code", "Cloudflare", "WordPress"],
    specialites: ["Intelligence Artificielle (IA)", "UI/UX Design", "Architecture logicielle", "Déploiement web"],
    langues: [
      { langue: "Français", niveau: "Courant / Langue Maternelle" },
      { langue: "Anglais", niveau: "Intermédiaire / Anglais Technique & Docs" }
    ],
    atouts: ["Autonome", "Curieux", "Esprit d'équipe", "Créatif", "Apprentissage rapide", "Initiative"]
  },

  // Projets majeurs officiels du CV (Les Grandes Expéditions & Artefacts)
  projets: [
    {
      id: "codelingo",
      missionCode: "EXPÉDITION // 01",
      titre: "Codelingo",
      sousTitre: "L'Académie Mobile du Code",
      categorie: "Education & Mobile",
      tag: "Flutter & Firebase",
      badge: "Mission Éducative",
      annee: "2024 - 2026",
      architecture: "Application mobile éducative",
      devMetric: "Flutter • Dart • Firebase",
      roleDev: "Développement mobile & conception UI",
      descriptionCourte: "Projet d'application mobile pour rendre l'apprentissage de la programmation plus accessible.",
      descriptionLongue: "Codelingo est un projet d'application éducative réalisé avec Flutter et Firebase. Le travail porte sur l'interface mobile, les parcours d'apprentissage et la conception de l'expérience utilisateur.",
      aventureExplication: "L'objectif du projet est de proposer un parcours guidé pour découvrir la programmation sur mobile.",
      pointsForts: [
        "Interface mobile développée avec Flutter et Dart",
        "Parcours de découverte de la programmation",
        "Firebase utilisé dans le projet",
        "Conception de l'expérience utilisateur avec Figma"
      ],
      stack: ["Flutter", "Dart", "Firebase", "Clean Arch", "Figma"],
      statut: "Projet mobile"
    },
    {
      id: "agrivo",
      missionCode: "EXPÉDITION // 02",
      titre: "Agrivo",
      sousTitre: "La Passerelle AgriTech & Données",
      categorie: "AgriTech & IA",
      tag: "AgriTech & IA",
      badge: "Mission Terre & Data",
      annee: "2025 - 2026",
      architecture: "Services numériques pour l'agriculture",
      devMetric: "Conception produit • UI/UX",
      roleDev: "Conception & développement",
      descriptionCourte: "Projet AgriTech autour de services numériques destinés aux acteurs agricoles.",
      descriptionLongue: "Agrivo explore des pistes pour faciliter l'accès des acteurs agricoles à des informations et services utiles. Le projet porte notamment sur les besoins utilisateurs et la conception d'une expérience web et mobile.",
      aventureExplication: "Le travail consiste à réfléchir aux besoins des producteurs et à la façon dont un service numérique peut y répondre.",
      pointsForts: [
        "Réflexion sur les besoins des acteurs agricoles",
        "Conception d'une expérience utilisateur pour le web et le mobile",
        "Exploration de fonctionnalités d'aide à la décision",
        "Pistes d'intégration de l'intelligence artificielle"
      ],
      stack: ["AgriTech", "Intelligence Artificielle", "UI/UX", "Web & Mobile"],
      statut: "Conception & prototype"
    },
    {
      id: "agrios-koa-ai",
      missionCode: "EXPÉDITION // 03",
      titre: "AgriOS / KÔA AI",
      sousTitre: "Le Copilote Décisionnel par IA",
      categorie: "IA & Flutter",
      tag: "IA & Flutter",
      badge: "Intelligence Artificielle",
      annee: "2026",
      badgeStatus: "EXPÉDITION PHARE",
      architecture: "Plateforme agricole & aide à la décision",
      devMetric: "IA • Flutter • conception logicielle",
      roleDev: "Conception de solution & exploration IA",
      descriptionCourte: "Projet de plateforme agricole avec un assistant d'aide à la décision envisagé autour de KÔA AI.",
      descriptionLongue: "AgriOS / KÔA AI explore l'intégration d'un assistant numérique dans une solution destinée au secteur agricole. Le projet couvre la réflexion sur les besoins, l'expérience utilisateur, l'architecture et une application Flutter.",
      aventureExplication: "L'objectif est d'étudier comment l'intelligence artificielle peut compléter une expérience mobile utile aux acteurs agricoles.",
      pointsForts: [
        "Réflexion sur un assistant numérique pour les besoins agricoles",
        "Exploration de cas d'usage possibles de l'intelligence artificielle",
        "Travail sur l'architecture et l'expérience utilisateur",
        "Application mobile envisagée avec Flutter"
      ],
      stack: ["Intelligence Artificielle", "Flutter", "Python FastAPI", "Computer Vision", "Figma"],
      statut: "Projet en conception"
    },
    {
      id: "bread-plus",
      missionCode: "EXPÉDITION // 04",
      titre: "Bread+ (Boulangerie de Babi)",
      sousTitre: "La Digitalisation du Commerce Urbain",
      categorie: "Commandes & B2B",
      tag: "E-commerce & B2B",
      badge: "Commerce & Logistique",
      annee: "2025 - 2026",
      architecture: "Commande en ligne & commerce de proximité",
      devMetric: "Parcours client • modélisation UML",
      roleDev: "Conception UI/UX & modélisation",
      descriptionCourte: "Prototype de service de commande en ligne pour boulangeries et commerces de proximité.",
      descriptionLongue: "Bread+ est un projet de conception autour de la commande en ligne et de la gestion des commandes pour les boulangeries. Il comprend la réflexion sur les parcours clients, les données et l'interface.",
      aventureExplication: "Le projet étudie comment simplifier la prise de commande et la gestion des informations pour un commerce de proximité.",
      pointsForts: [
        "Réflexion sur le parcours de commande",
        "Modélisation des principales données métier",
        "Conception d'interfaces et de parcours sur Figma",
        "Prototype pensé pour les commerces de proximité"
      ],
      stack: ["E-commerce", "PostgreSQL", "UI/UX Design", "Figma", "Web"],
      statut: "Prototype & Architecture"
    },
    {
      id: "synerpay",
      missionCode: "EXPÉDITION // 05",
      titre: "Synerpay",
      sousTitre: "Concept de paiement mobile",
      categorie: "Fintech Mobile",
      tag: "Fintech & Sécurité",
      badge: "Fintech & Sécurité",
      annee: "2025 - 2026",
      architecture: "Application de transfert d'argent",
      devMetric: "Flutter • PostgreSQL • sécurité étudiée",
      roleDev: "Conception mobile & modélisation des données",
      descriptionCourte: "Projet de conception d'une application mobile de transfert d'argent et de paiement numérique.",
      descriptionLongue: "Synerpay est un projet fintech qui explore les parcours de transfert d'argent et de paiement depuis une application mobile. La réflexion porte sur l'expérience utilisateur, les données et les mesures de sécurité à prévoir.",
      aventureExplication: "Ce projet m'a amené à réfléchir aux besoins de confiance, de clarté et de protection des données dans une expérience de paiement.",
      pointsForts: [
        "Identification des étapes d'un parcours de paiement",
        "Réflexion sur la modélisation des données avec PostgreSQL",
        "Prise en compte des enjeux de sécurité et de confiance",
        "Conception d'une expérience mobile avec Flutter"
      ],
      stack: ["Fintech", "Flutter", "PostgreSQL", "Sécurité des données"],
      statut: "Concept en exploration"
    },
    {
      id: "global-tech-synergie",
      missionCode: "EXPÉDITION // 06",
      titre: "Global Tech Synergie",
      sousTitre: "Création et adaptation de sites web",
      categorie: "Entrepreneuriat / Digital",
      tag: "Déploiement & Web",
      badge: "Infrastructure & Web",
      annee: "2024 - 2026",
      architecture: "Création de sites & déploiement web",
      devMetric: "HTML • CSS • JavaScript • outils cloud",
      roleDev: "Développement web & accompagnement",
      descriptionCourte: "Expérience de création de sites web et d'accompagnement technique pour des projets numériques.",
      descriptionLongue: "Cette expérience rassemble des activités de développement de sites, d'accompagnement technique et de mise en ligne. Les outils mentionnés comprennent HTML, CSS, JavaScript, WordPress, Cloudflare et GitHub.",
      aventureExplication: "L'objectif est de transformer un besoin numérique en une présence web accessible et maintenable.",
      pointsForts: [
        "Création et adaptation de sites web",
        "Utilisation d'outils web comme WordPress et Cloudflare",
        "Suivi du code et des versions avec Git et GitHub",
        "Accompagnement technique autour de projets numériques"
      ],
      stack: ["Déploiement Web", "Cloudflare", "Git / GitHub", "HTML / CSS / JS", "DevOps"],
      statut: "Expérience web & accompagnement"
    }
  ]
};

if (typeof window !== "undefined") {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}

/**
 * =========================================================================
 * CONFIGURATION DU PORTFOLIO - EZOUA EMIAN CHRIST ESLI
 * =========================================================================
 * Données réelles extraites et synchronisées avec le Curriculum Vitae officiel.
 * Format : L'Odyssée Technologique d'Esli (Aventure & Journal de bord d'ingénierie)
 */

const _secDecode = (val) => {
  try {
    return typeof atob === "function" ? atob(val) : "";
  } catch (_e) {
    return "";
  }
};

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

  // Coordonnées & Liens externes officiels (obfusqués anti-scraping)
  contacts: {
    telephone1: _secDecode("KzIyNSAwMTYxNDA3MDY0"),
    telephone1Affiche: _secDecode("KzIyNSAwMSA2MSA0MCA3MCA2NA=="),
    telephone2: _secDecode("KzIyNSAwNzk3NTE1MTkw"),
    telephone2Affiche: _secDecode("KzIyNSAwNyA5NyA1MSA1MSA5MA=="),
    whatsappNumero: _secDecode("MjI1MDE2MTQwNzA2NA=="),
    whatsappMessage: "Bonjour M. EZOUA, j'ai parcouru votre Odyssée Technologique et votre CV. J'aimerais échanger avec vous pour une opportunité de stage / projet.",
    email: _secDecode("ZXouZW1pYW43N0BnbWFpbC5jb20="),
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
      missionCode: "HACKATHON // 01",
      titre: "Hackathon IIT 2026",
      organisation: "Institut Ivoirien de Technologie (Grand-Bassam)",
      annee: "2026",
      badge: "2ᵉ Place • Argent",
      epreuve: "48h de prototypage en équipe",
      thematique: "Innovation numérique & impact local",
      role: "Conception UI/UX, architecture & développement du prototype",
      problemeResolu: "Passer d'un besoin terrain identifié à un prototype démontrable et structuré en 48 heures.",
      resultat: "2ᵉ place sur le podium devant le jury de l'IIT.",
      description: "Participation au hackathon organisé à l'Institut Ivoirien de Technologie : cadrage du problème, conception d'un prototype fonctionnel sous contrainte de temps et présentation devant le jury pour décrocher la 2ᵉ place."
    },
    {
      id: "vibeathon-2026",
      place: "3ᵉ Place",
      missionCode: "HACKATHON // 02",
      titre: "VIBEATHON 2026",
      organisation: "Challenge Technologique",
      annee: "2026",
      badge: "3ᵉ Place • Bronze",
      epreuve: "Sprint d'ingénierie & pitch jury",
      thematique: "Prototypage rapide & solutions numériques",
      role: "Développement applicatif, structuration produit & démonstration",
      problemeResolu: "Concevoir, développer et pitcher une solution fonctionnelle dans un délai très court en coordination d'équipe.",
      resultat: "3ᵉ place décernée par le jury technique.",
      description: "Conception rapide d'une solution numérique en équipe, développement du prototype et démonstration devant un jury technique pour obtenir la 3ᵉ place."
    }
  ],

  // Compétences techniques détaillées en 5 catégories (niveaux réels & preuves projets)
  competences: {
    developpement: ["Flutter", "Dart", "Python", "JavaScript", "HTML / CSS"],
    backendDonnees: ["Firebase", "PostgreSQL", "API REST", "Modélisation UML"],
    outilsCloud: ["Git / GitHub", "Figma (UI/UX)", "VS Code", "Cloudflare", "WordPress"],
    specialites: ["Concepts IA", "UI/UX Design", "Architecture logicielle", "Déploiement web"],
    categories: [
      {
        id: "mobile",
        titre: "Mobile",
        sousTitre: "Applications multiplateformes & UI mobile",
        items: [
          {
            nom: "Flutter",
            niveau: "Pratique régulière",
            niveauCode: "core",
            construit: "Écrans mobiles responsives, navigation multi-vues, composants réutilisables et prototypes fonctionnels.",
            preuve: "Projet : CodeLingo",
            preuveHref: "#projets"
          },
          {
            nom: "Dart",
            niveau: "Pratique régulière",
            niveauCode: "core",
            construit: "Logique applicative Flutter, gestion d'état et structuration de modèles de données.",
            preuve: "Dépôt : codelingo6",
            preuveHref: "https://github.com/Christ-Hub-pixel/codelingo6"
          }
        ]
      },
      {
        id: "web",
        titre: "Web",
        sousTitre: "Interfaces modernes & déploiement",
        items: [
          {
            nom: "HTML5 & CSS3",
            niveau: "Pratique régulière",
            niveauCode: "core",
            construit: "Sites vitrines et portfolios responsives, animations CSS et mise en page adaptée mobile/desktop.",
            preuve: "Projet : Portfolio & YODO",
            preuveHref: "https://github.com/Christ-Hub-pixel/YODO"
          },
          {
            nom: "JavaScript",
            niveau: "Intermédiaire",
            niveauCode: "mid",
            construit: "Interactions dynamiques, filtres, modales accessibles, validation de formulaires et intégration WebGL.",
            preuve: "Projet : Portfolio & Global Tech Synergie",
            preuveHref: "#projets"
          },
          {
            nom: "WordPress & Cloudflare",
            niveau: "Intermédiaire",
            niveauCode: "mid",
            construit: "Adaptation de sites web, mise en ligne, DNS et maintenance de présence numérique.",
            preuve: "Expérience : Global Tech Synergie",
            preuveHref: "#projets"
          }
        ]
      },
      {
        id: "backend",
        titre: "Backend",
        sousTitre: "Logique serveur, scripts & conception",
        items: [
          {
            nom: "Python",
            niveau: "Intermédiaire",
            niveauCode: "mid",
            construit: "Scripts d'automatisation, analyse comparative de données et logique métier backend.",
            preuve: "Dépôt : AnalyseComparativeMarche",
            preuveHref: "https://github.com/Christ-Hub-pixel/AnalyseComparativeMarche"
          },
          {
            nom: "API REST & UML",
            niveau: "Bases solides",
            niveauCode: "solid",
            construit: "Conception de endpoints REST, diagrammes de cas d'utilisation / classes et cahiers fonctionnels.",
            preuve: "Projets : Bread+ & Synerpay",
            preuveHref: "#projets"
          }
        ]
      },
      {
        id: "donnees",
        titre: "Données",
        sousTitre: "Modélisation relationnelle & services cloud",
        items: [
          {
            nom: "PostgreSQL",
            niveau: "Bases solides",
            niveauCode: "solid",
            construit: "Schémas relationnels normalisés, requêtes SQL et structuration des données métier.",
            preuve: "Formation IIT & Bread+ / Synerpay",
            preuveHref: "#a-propos"
          },
          {
            nom: "Firebase",
            niveau: "Intermédiaire",
            niveauCode: "mid",
            construit: "Authentification, stockage de données et synchronisation pour prototypes mobiles Flutter.",
            preuve: "Projet : CodeLingo",
            preuveHref: "#projets"
          }
        ]
      },
      {
        id: "ia",
        titre: "Intelligence Artificielle",
        sousTitre: "Usages concrets, assistants & exploration",
        items: [
          {
            nom: "Concepts IA & Prompting",
            niveau: "En exploration active",
            niveauCode: "explore",
            construit: "Conception de compétences pour assistants IA, cadrage de cas d'usage et intégration d'outils IA.",
            preuve: "Dépôt : skill-IA",
            preuveHref: "https://github.com/Christ-Hub-pixel/skill-IA"
          },
          {
            nom: "Prototypage produit IA",
            niveau: "En exploration active",
            niveauCode: "explore",
            construit: "Conception d'un assistant numérique d'aide à la décision agricole et parcours utilisateur associé.",
            preuve: "Projet : AgriOS / KÔA AI",
            preuveHref: "#projets"
          }
        ]
      }
    ],
    enApprentissage: [
      "FastAPI & architectures backend Python",
      "Tests automatisés (unitaires & intégration)",
      "Intégration d'API IA en production",
      "CI/CD & déploiement cloud avancé"
    ],
    langues: [
      { langue: "Français", niveau: "Courant / Langue Maternelle" },
      { langue: "Anglais", niveau: "Intermédiaire / Technique & Documentation" }
    ],
    atouts: ["Autonomie", "Curiosité", "Esprit d'équipe", "Créativité", "Apprentissage rapide", "Sens de l'initiative"]
  },

  // Projets majeurs officiels du CV (Études de cas structurées)
  projets: [
    {
      id: "codelingo",
      missionCode: "EXPÉDITION // 01",
      titre: "CodeLingo",
      sousTitre: "Application mobile d'apprentissage de la programmation",
      categorie: "EdTech & Mobile",
      tag: "Flutter & Firebase",
      badge: "Application Mobile",
      annee: "2024 - 2026",
      architecture: "Flutter + Firebase",
      devMetric: "Flutter • Dart • Firebase",
      roleDev: "Développement mobile Flutter & conception UI",
      githubUrl: "https://github.com/Christ-Hub-pixel/codelingo6",
      descriptionCourte: "Application mobile conçue avec Flutter et Firebase pour rendre l'apprentissage de la programmation plus progressif et accessible sur téléphone.",
      descriptionLongue: "CodeLingo est un projet d'application mobile éducative développé avec Flutter, Dart et Firebase. Il propose une approche progressive pour découvrir les bases du code depuis un smartphone.",
      probleme: "Beaucoup d'étudiants débutants souhaitent pratiquer les bases de la programmation sur téléphone, mais trouvent les ressources classiques trop denses ou peu adaptées au format mobile.",
      objectif: "Proposer une application mobile claire, découpée en étapes courtes, avec un suivi de progression simple et motivant.",
      architectureDetail: "Application multiplateforme Flutter (widgets modulaires par écran et parcours) couplée à Firebase pour la gestion des utilisateurs et des données de progression.",
      difficultes: "Concevoir une navigation fluide sur petits écrans et structurer les écrans d'exercices sans surcharger l'interface.",
      solutions: "Prototypage préalable des parcours sur Figma, découpage en composants Flutter réutilisables et organisation claire des états d'écran.",
      resultat: "Prototype mobile fonctionnel publié sur GitHub (dépôt codelingo6) servant de base d'évolution continue.",
      pointsForts: [
        "Interface mobile multiplateforme développée avec Flutter et Dart",
        "Parcours guidé de découverte de la programmation",
        "Intégration Firebase pour les données applicatives",
        "Maquettage UX/UI préalable réalisé sur Figma"
      ],
      stack: ["Flutter", "Dart", "Firebase", "Figma"],
      statut: "Prototype fonctionnel"
    },
    {
      id: "agrivo",
      missionCode: "EXPÉDITION // 02",
      titre: "Agrivo",
      sousTitre: "Services numériques pour les acteurs agricoles",
      categorie: "AgriTech & Produit",
      tag: "AgriTech & UX",
      badge: "AgriTech",
      annee: "2025 - 2026",
      architecture: "Web & Mobile • Conception Produit",
      devMetric: "UX • Parcours terrain",
      roleDev: "Conception produit, parcours utilisateurs & prototypage",
      githubUrl: "https://github.com/Christ-Hub-pixel",
      descriptionCourte: "Projet AgriTech explorant comment faciliter l'accès des acteurs agricoles à des informations et services numériques utiles.",
      descriptionLongue: "Agrivo porte sur l'analyse des besoins d'information dans le secteur agricole et la conception d'une expérience web et mobile simple d'utilisation sur le terrain.",
      probleme: "Les acteurs agricoles disposent rarement d'outils numériques centralisés, lisibles et adaptés à un usage mobile rapide.",
      objectif: "Structurer une interface claire réunissant informations utiles, suivi et pistes d'aide à la décision.",
      architectureDetail: "Approche orientée produit : cartographie des besoins utilisateurs, maquettes responsives web/mobile et structuration des données métier.",
      difficultes: "Concevoir une expérience suffisamment simple pour des profils non techniques tout en restant utile au quotidien.",
      solutions: "Hiérarchisation stricte de l'information, parcours courts en quelques actions et tests de lisibilité sur écran mobile.",
      resultat: "Concept et prototypes d'interfaces formalisés pour orienter les développements suivants.",
      pointsForts: [
        "Analyse des besoins concrets des acteurs agricoles",
        "Conception d'une expérience adaptée au web et au mobile",
        "Exploration de fonctionnalités d'aide à la décision",
        "Pistes d'intégration progressive de l'intelligence artificielle"
      ],
      stack: ["AgriTech", "UI/UX Design", "Figma", "Web & Mobile"],
      statut: "Conception & prototype"
    },
    {
      id: "agrios-koa-ai",
      missionCode: "EXPÉDITION // 03",
      titre: "AgriOS / KÔA AI",
      sousTitre: "Plateforme AgriTech avec assistant intelligent",
      categorie: "AgriTech & IA",
      tag: "IA & Flutter",
      badge: "Projet IA",
      annee: "2026",
      architecture: "Flutter + Assistant IA (en conception)",
      devMetric: "IA • Flutter • Architecture",
      roleDev: "Conception de la solution, architecture & exploration IA",
      githubUrl: "https://github.com/Christ-Hub-pixel/skill-IA",
      descriptionCourte: "Plateforme agricole en conception intégrant un assistant intelligent (KÔA AI) pour accompagner la prise de décision.",
      descriptionLongue: "AgriOS / KÔA AI explore comment intégrer un assistant numérique dans une application mobile Flutter destinée aux utilisateurs agricoles, du cadrage produit jusqu'à l'architecture.",
      probleme: "Obtenir rapidement un conseil contextualisé face à une question agricole reste complexe sans accompagnement technique permanent.",
      objectif: "Imaginer un assistant conversationnel accessible sur mobile, capable de guider l'utilisateur étape par étape.",
      architectureDetail: "Interface mobile envisagée sous Flutter reliée à une couche backend Python / API REST pour orchestrer les requêtes vers l'assistant IA.",
      difficultes: "Définir des cas d'usage réalistes et fiables avant d'engager un développement lourd de modèles.",
      solutions: "Cadrage par scénarios prioritaires, prototypage de compétences d'assistant IA et séparation claire entre UI mobile et logique IA.",
      resultat: "Architecture fonctionnelle, maquettes et socle d'exploration IA documentés.",
      pointsForts: [
        "Cadrage d'un assistant numérique orienté terrain agricole",
        "Exploration concrète des cas d'usage de l'IA",
        "Réflexion complète sur l'architecture et l'expérience utilisateur",
        "Conception pensée pour une application mobile Flutter"
      ],
      stack: ["Intelligence Artificielle", "Flutter", "Python", "Figma"],
      statut: "Projet en conception"
    },
    {
      id: "bread-plus",
      missionCode: "EXPÉDITION // 04",
      titre: "Bread+ (Boulangerie de Babi)",
      sousTitre: "Réservation de produits et gestion des commandes",
      categorie: "Mobile & Commerce",
      tag: "E-commerce & SQL",
      badge: "Commerce Local",
      annee: "2025 - 2026",
      architecture: "UML • PostgreSQL • Parcours commande",
      devMetric: "UML • PostgreSQL • Figma",
      roleDev: "Modélisation des données (UML/SQL) & conception UI/UX",
      githubUrl: "https://github.com/Christ-Hub-pixel",
      descriptionCourte: "Prototype de réservation en ligne et de gestion des commandes pensé pour les boulangeries et commerces de proximité.",
      descriptionLongue: "Bread+ (Boulangerie de Babi) étudie la digitalisation de la prise de commande et du suivi client pour les boulangeries urbaines, de la modélisation PostgreSQL jusqu'aux maquettes Figma.",
      probleme: "Les commandes en boulangerie se font souvent de manière manuelle (appels, messages dispersés), ce qui génère des oublis et des files d'attente aux heures de pointe.",
      objectif: "Simplifier la réservation de produits, clarifier le suivi des commandes et structurer les données côté commerçant.",
      architectureDetail: "Modélisation UML (clients, produits, commandes, statuts) traduite en schéma relationnel PostgreSQL, accompagnée d'un parcours client conçu sur Figma.",
      difficultes: "Garder le tunnel de commande très rapide (moins de quelques clics) tout en couvrant les statuts nécessaires au commerçant.",
      solutions: "Simplification des étapes de panier/réservation et normalisation du schéma de base de données pour suivre chaque commande proprement.",
      resultat: "Prototype UX/UI et modèle relationnel complets prêts pour l'implémentation.",
      pointsForts: [
        "Parcours de réservation et suivi de commande structuré",
        "Modélisation UML et schéma relationnel PostgreSQL",
        "Maquettes d'interfaces réalisées sur Figma",
        "Pensé pour les réalités des commerces de proximité"
      ],
      stack: ["PostgreSQL", "Modélisation UML", "UI/UX Design", "Figma"],
      statut: "Prototype & Architecture"
    },
    {
      id: "synerpay",
      missionCode: "EXPÉDITION // 05",
      titre: "Synerpay",
      sousTitre: "Concept de parcours de paiement mobile",
      categorie: "Fintech Mobile",
      tag: "Fintech & Données",
      badge: "Fintech",
      annee: "2025 - 2026",
      architecture: "Flutter • PostgreSQL • Sécurité étudiée",
      devMetric: "Parcours paiement • SQL",
      roleDev: "Conception mobile & modélisation des données",
      githubUrl: "https://github.com/Christ-Hub-pixel",
      descriptionCourte: "Concept d'application mobile de transfert et de paiement numérique mettant l'accent sur la clarté du parcours et l'intégrité des données.",
      descriptionLongue: "Synerpay explore la conception d'une interface mobile de paiement : étapes de vérification, journalisation des opérations et modélisation relationnelle des transactions.",
      probleme: "Les erreurs de saisie ou le manque de lisibilité lors d'un transfert mobile réduisent la confiance des utilisateurs.",
      objectif: "Concevoir un parcours de paiement clair en 3 étapes (choix, vérification, confirmation) appuyé sur une structure de données rigoureuse.",
      architectureDetail: "Modélisation des comptes et journaux d'opérations sous PostgreSQL et maquettage d'écrans Flutter orientés lisibilité.",
      difficultes: "Prendre en compte les exigences de traçabilité et de validation avant confirmation sans alourdir l'écran.",
      solutions: "Écran récapitulatif explicite avant validation et modélisation stricte des statuts de transaction.",
      resultat: "Concept fonctionnel et modèle de données documentés (sans traitement de paiements réels).",
      pointsForts: [
        "Parcours de paiement clair avec étape de vérification explicite",
        "Modélisation relationnelle des opérations avec PostgreSQL",
        "Attention portée à la confiance utilisateur et aux statuts d'erreur",
        "Conception pensée pour Flutter"
      ],
      stack: ["Fintech", "Flutter", "PostgreSQL", "Modélisation UML"],
      statut: "Concept en exploration"
    },
    {
      id: "global-tech-synergie",
      missionCode: "EXPÉDITION // 06",
      titre: "Global Tech Synergie",
      sousTitre: "Création de sites web et déploiement",
      categorie: "Web & Déploiement",
      tag: "Web & Cloud",
      badge: "Expérience Web",
      annee: "2024 - 2026",
      architecture: "HTML/CSS/JS • WordPress • Cloudflare",
      devMetric: "Mise en ligne • Maintenance",
      roleDev: "Développement web, adaptation & mise en ligne",
      githubUrl: "https://github.com/Christ-Hub-pixel/YODO",
      descriptionCourte: "Expérience concrète de création et d'adaptation de sites web, mise en ligne via Cloudflare et suivi de versions sous GitHub.",
      descriptionLongue: "Cette activité regroupe des réalisations web concrètes : intégration HTML/CSS/JS, adaptation de sites WordPress, configuration de mise en ligne Cloudflare et suivi technique.",
      probleme: "De nombreux projets ou petites structures ont besoin d'une présence web rapide, responsive et simple à maintenir sans budget d'infrastructure complexe.",
      objectif: "Livrer des sites propres, rapides à charger sur mobile et faciles à mettre à jour.",
      architectureDetail: "Développement front-end léger (HTML/CSS/JS) ou WordPress selon le besoin, versionné sur GitHub et servi via Cloudflare.",
      difficultes: "Assurer un affichage cohérent sur différents formats d'écrans mobiles et garder des temps de chargement rapides.",
      solutions: "Optimisation des ressources, tests responsives multi-écrans et déploiement propre avec gestion de versions Git.",
      resultat: "Sites web adaptés et déployés en ligne avec suivi technique régulier.",
      pointsForts: [
        "Création et adaptation de sites web responsives",
        "Mise en ligne et configuration avec Cloudflare",
        "Gestion de versions et déploiement via Git / GitHub",
        "Accompagnement technique orienté besoin client"
      ],
      stack: ["HTML / CSS / JS", "WordPress", "Cloudflare", "Git / GitHub"],
      statut: "Expérience web réelle"
    }
  ]
};

if (typeof window !== "undefined") {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}

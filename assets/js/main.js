/**
 * =========================================================================
 * MOTEUR D'EXPÉRIENCE ULTRA-HAUTE COUTURE & 3D WEBGL
 * EZOUA EMIAN CHRIST ESLI — IIT GRAND-BASSAM
 * Three.js 3D Golden Torus • Telemetry HUD • 3D Tilt Physics • Web Audio
 * =========================================================================
 */

// Préférences utilisateur (UI/UX Pro Max §7 : respecter prefers-reduced-motion ; §2 : pas d'effets hover sur tactile)
const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE_POINTER = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

document.addEventListener("DOMContentLoaded", () => {
  const config = window.PORTFOLIO_CONFIG;
  if (!config) return;

  // 1. Initialisation des données CV vérifiées
  initDynamicContent(config);

  // 2. Moteur 3D WebGL Three.js (Sphère Géodésique & Torus d'Or Chromé)
  initThreeJSScene();

  // 2b. Commutateur Avatar 3D / Portrait Studio Réel
  initAvatarToggle();

  // 2c. Avatar Vivant & Interactif (Regard 3D, dialogues & physique haptique)
  initLivingAvatar();

  // 2d. Animation de l’avatar sur canvas
  initAvatarVideoCanvas();

  // 2e. Tilt 3D Holographique sur la Carte Profil
  initHologramCardTilt();

  // 3. Télémétrie HUD Temps Réel (Horloge UTC, Coordonnées Grand-Bassam, Ping)
  initHUDTelemetry();

  // 3b. HUD de Progression de l'Odyssée & Contrôles 3D
  initOdysseyHUD();

  // 4. Curseur Magnétique Intelligent
  initCustomCursor();

  // 5. Machine à écrire cinétique Hero
  initKineticTypewriter();

  // 7. Synthétiseur Audio Haptique (Web Audio API)
  initAudioSynthesizer();

  // 8. Rendu des Projets avec 3D Tilt & reflets
  initProjects(config);

  // 9. Workflow d'Ingénierie Logicielle
  initWorkflow();

  // 10. Distinctions & Hackathons 2026
  initDistinctions(config);

  // 11. Compétences du CV
  initSkills(config);

  // 12. Modale Projet
  initProjectModal(config);

  // 13. Boutons Copie & Toast
  initClipboardButtons();

  // 14. Formulaire Contact WhatsApp
  initContactForm(config);

  // 15. ScrollSpy & Sticky Header
  initScrollEffects();

  // 16. Menu mobile accessible (jQuery)
  initMobileMenu();

  // 16b. Interactions jQuery complémentaires (défilement fluide & feedback)
  initJQueryInteractions();

  // 17. Révélation progressive au défilement (stagger 60ms, 300-500ms)
  initScrollReveal();

  // 18. Icônes décoratives masquées aux lecteurs d'écran
  hideDecorativeIcons(document);
});

/**
 * Les SVG purement décoratifs ne doivent pas être annoncés (UI/UX Pro Max : "decorative icon aria hidden").
 */
function hideDecorativeIcons(root) {
  root.querySelectorAll("svg.svg-icon, svg.marquee-icon").forEach((svg) => {
    if (!svg.hasAttribute("aria-label")) {
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");
    }
  });
}

/**
 * Remplissage dynamique des données officielles du CV
 */
function initDynamicContent(config) {
  const bindMap = {
    nomComplet: config.personne.nomComplet,
    titre: config.personne.titre,
    ville: config.personne.ville,
    pays: config.personne.pays,
    age: config.personne.age,
    etablissement: config.personne.etablissement,
    formationActuelle: config.personne.formationActuelle,
    disponibilite: config.personne.disponibilite,
    objectifStage: config.objectifStage,
    telephone1Affiche: config.contacts.telephone1Affiche,
    telephone2Affiche: config.contacts.telephone2Affiche,
    email: config.contacts.email,
    githubPseudo: config.contacts.githubPseudo,
    linkedinPseudo: config.contacts.linkedinPseudo
  };

  Object.entries(bindMap).forEach(([key, val]) => {
    document.querySelectorAll(`[data-bind='${key}']`).forEach((el) => (el.textContent = val));
  });

  const waUrl = `https://wa.me/${config.contacts.whatsappNumero}?text=${encodeURIComponent(
    config.contacts.whatsappMessage
  )}`;
  document.querySelectorAll("[data-link='whatsapp']").forEach((el) => (el.href = waUrl));
  document.querySelectorAll("[data-link='telephone1']").forEach((el) => (el.href = `tel:${config.contacts.telephone1}`));
  document.querySelectorAll("[data-link='telephone2']").forEach((el) => (el.href = `tel:${config.contacts.telephone2}`));
  document.querySelectorAll("[data-link='email']").forEach((el) => (el.href = `mailto:${config.contacts.email}`));
  document.querySelectorAll("[data-link='github']").forEach((el) => (el.href = config.contacts.github));
  document.querySelectorAll("[data-link='linkedin']").forEach((el) => (el.href = config.contacts.linkedin));
  document.querySelectorAll("[data-link='cv']").forEach((el) => {
    el.href = config.contacts.cvFichier;
    el.setAttribute("download", "CV_EZOUA_EMIAN_CHRIST_ESLI.pdf");
  });
}

/**
 * =========================================================================
 * 1. MOTEUR 3D WEBGL THREE.JS — LA GALAXIE DU CODE & PLANÈTES INFORMATIQUES
 *    Étoiles en extraits de code 3D, Nébuleuse Voie Lactée, Météores,
 *    Planètes 3D Stylisées (Python, Flutter, IA Neura-Core, PostgreSQL)
 * =========================================================================
 */
function initThreeJSScene() {
  const canvas = document.getElementById("webglCanvas");
  if (!canvas || typeof THREE === "undefined") {
    console.warn("Three.js non chargé, passage au mode dégradé fluide.");
    return;
  }

  const isSmallScreen = window.innerWidth < 768;
  const mobileXScale = () => (window.innerWidth < 768 ? Math.max(0.45, Math.min(0.72, window.innerWidth / 640)) : 1);
  const getRelicScale = () => {
    const w = window.innerWidth;
    const aspect = w / Math.max(1, window.innerHeight);
    if (w <= 480 || aspect < 0.65) return 0.44;
    if (w <= 768 || aspect < 0.85) return 0.58;
    if (w <= 1024) return 0.78;
    return 1;
  };
  const getGalaxyScale = () => (window.innerWidth <= 480 ? 0.52 : window.innerWidth <= 768 ? 0.68 : 1);
  const getBaseCameraZ = () => (window.innerWidth <= 480 ? 44 : window.innerWidth <= 768 ? 40 : 34);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x030406, 0.0055);

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  let baseCameraZ = getBaseCameraZ();
  camera.position.set(0, 3, baseCameraZ);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: !isSmallScreen,
    powerPreference: isSmallScreen ? "low-power" : "high-performance"
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isSmallScreen ? 1.25 : 1.75));

  // --- ÉCLAIRAGE STELLAIRE & NÉBULEUSE COSMIQUE ---
  const ambientLight = new THREE.AmbientLight(0x0E111C, 2.0);
  scene.add(ambientLight);

  // Lumière Cœur Galactique (Or Impérial Vibrant)
  const coreLight = new THREE.PointLight(0xFACC15, 5.2, 110);
  coreLight.position.set(0, 0, 0);
  scene.add(coreLight);

  // Lumière Principale Directionnelle Or Haute Couture (Reflets et spécularité sur l'or)
  const dirLight = new THREE.DirectionalLight(0xFFF1D0, 2.6);
  dirLight.position.set(16, 22, 26);
  scene.add(dirLight);

  // Spotlight Nébuleuse Rubis (Inspiré du Portrait Studio)
  const rubyLight = new THREE.PointLight(0xFF1E56, 4.5, 95);
  rubyLight.position.set(-18, 12, 10);
  scene.add(rubyLight);

  // Lumière Spéculaire Bleutée (Cyan Flutter & Postgres)
  const cyanLight = new THREE.PointLight(0x38BDF8, 3.8, 90);
  cyanLight.position.set(20, -14, 12);
  scene.add(cyanLight);

  // =========================================================================
  // FONCTIONS GÉNÉRATRICES DE TEXTURES PROCÉDURALES (0 Requête HTTP)
  // =========================================================================

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  // 1. Texture de particule stellaire sous forme de symbole de code {}
  function createCodeStarTexture() {
    const c = document.createElement("canvas");
    c.width = 64;
    c.height = 64;
    const ctx = c.getContext("2d");

    const rad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
    rad.addColorStop(0, "rgba(255, 255, 255, 1)");
    rad.addColorStop(0.35, "rgba(250, 204, 21, 0.85)");
    rad.addColorStop(0.7, "rgba(225, 29, 72, 0.35)");
    rad.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = rad;
    ctx.fillRect(0, 0, 64, 64);

    ctx.font = "bold 26px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("{}", 32, 32);

    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    return tex;
  }

  // 2. Texture de badge holographique flottant au-dessus des planètes
  function createPlanetBadgeSprite(title, role, colorHex) {
    const c = document.createElement("canvas");
    c.width = 384;
    c.height = 96;
    const ctx = c.getContext("2d");

    ctx.fillStyle = "rgba(7, 9, 15, 0.86)";
    roundRect(ctx, 4, 4, 376, 88, 16);
    ctx.fill();

    ctx.lineWidth = 2.5;
    ctx.strokeStyle = colorHex || "#D4AF37";
    roundRect(ctx, 4, 4, 376, 88, 16);
    ctx.stroke();

    ctx.fillStyle = colorHex || "#D4AF37";
    ctx.beginPath();
    ctx.arc(32, 48, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.font = "bold 26px 'Syne', sans-serif";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "left";
    ctx.fillText(title, 52, 42);

    ctx.font = "600 16px 'JetBrains Mono', monospace";
    ctx.fillStyle = colorHex || "#FACC15";
    ctx.fillText(role, 52, 68);

    const tex = new THREE.CanvasTexture(c);
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      opacity: 0.92,
      depthWrite: false
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(6.8, 1.7, 1);
    return sprite;
  }

  // 3. Texture de planète stylisée selon le langage
  function createPlanetTexture(type) {
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 256;
    const ctx = c.getContext("2d");

    if (type === "python") {
      // Dégradé bicolore emblématique Python (Or et Bleu nuit)
      const grad = ctx.createLinearGradient(0, 0, 0, 256);
      grad.addColorStop(0, "#306998");
      grad.addColorStop(0.35, "#1F425F");
      grad.addColorStop(0.5, "#FFD43B");
      grad.addColorStop(0.75, "#FFE873");
      grad.addColorStop(1, "#306998");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 256);

      ctx.fillStyle = "rgba(255, 255, 255, 0.16)";
      for (let i = 0; i < 256; i += 18) {
        ctx.fillRect(0, i, 512, 3);
      }

      ctx.font = "bold 36px 'JetBrains Mono', monospace";
      ctx.fillStyle = "rgba(255, 255, 255, 0.38)";
      ctx.fillText("PYTHON • DEF • ASYNC • AI • TORCH", 20, 135);

    } else if (type === "flutter") {
      // Ondulations géométriques Cyan / Bleu Dart
      const grad = ctx.createLinearGradient(0, 0, 512, 256);
      grad.addColorStop(0, "#02569B");
      grad.addColorStop(0.35, "#0175C2");
      grad.addColorStop(0.65, "#54C5F8");
      grad.addColorStop(1, "#29B6F6");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 256);

      ctx.fillStyle = "rgba(255, 255, 255, 0.22)";
      ctx.beginPath();
      ctx.moveTo(0, 40); ctx.lineTo(512, 170); ctx.lineTo(512, 210); ctx.lineTo(0, 80);
      ctx.fill();

      ctx.font = "bold 36px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = "rgba(255, 255, 255, 0.42)";
      ctx.fillText("FLUTTER • DART • WIDGETS • MOBILE", 25, 140);

    } else if (type === "ai") {
      // Nébuleuse synaptique Rouge Rubis & Or
      ctx.fillStyle = "#120207";
      ctx.fillRect(0, 0, 512, 256);

      ctx.strokeStyle = "rgba(255, 30, 86, 0.55)";
      ctx.lineWidth = 2.5;
      for (let x = 30; x < 512; x += 60) {
        for (let y = 30; y < 256; y += 60) {
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = "#FF1E56";
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + 60, y + 30);
          ctx.stroke();
        }
      }
      ctx.font = "bold 36px 'JetBrains Mono', monospace";
      ctx.fillStyle = "rgba(255, 223, 0, 0.45)";
      ctx.fillText("NEURAL CORE • PYTORCH • VISION • NLP", 20, 135);

    } else if (type === "postgres") {
      // Bleu saphir avec coordonnées de tables relationnelles
      const grad = ctx.createLinearGradient(0, 0, 0, 256);
      grad.addColorStop(0, "#1A2E46");
      grad.addColorStop(0.5, "#336791");
      grad.addColorStop(1, "#0C1B2A");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 256);

      ctx.strokeStyle = "rgba(212, 175, 55, 0.35)";
      ctx.lineWidth = 1.5;
      for (let x = 0; x < 512; x += 32) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 256); ctx.stroke();
      }
      for (let y = 0; y < 256; y += 32) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(512, y); ctx.stroke();
      }
      ctx.font = "bold 34px 'JetBrains Mono', monospace";
      ctx.fillStyle = "rgba(255, 255, 255, 0.42)";
      ctx.fillText("POSTGRESQL • SQL • RELATIONAL DB", 20, 135);
    }

    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    return tex;
  }

  // 4. Sprites de code 3D flottant (extraits réels de programmation avec reflets néon)
  function createCodeSnippetSprite(codeText, tagColor) {
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 104;
    const ctx = c.getContext("2d");

    // Fond verre cybernétique haute joaillerie avec gradient
    const grad = ctx.createLinearGradient(0, 0, 512, 104);
    grad.addColorStop(0, "rgba(16, 20, 36, 0.94)");
    grad.addColorStop(1, "rgba(8, 10, 20, 0.90)");
    ctx.fillStyle = grad;
    roundRect(ctx, 4, 4, 504, 96, 16);
    ctx.fill();

    // Bordure lumineuse holographique
    ctx.lineWidth = 2.4;
    ctx.strokeStyle = tagColor || "#D4AF37";
    ctx.shadowColor = tagColor || "#D4AF37";
    ctx.shadowBlur = 10;
    roundRect(ctx, 4, 4, 504, 96, 16);
    ctx.stroke();
    ctx.shadowBlur = 0; // reset

    // Pastilles Terminal Mac stylisées
    ctx.fillStyle = "#FF5F56";
    ctx.beginPath(); ctx.arc(28, 52, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#FFBD2E";
    ctx.beginPath(); ctx.arc(46, 52, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#27C93F";
    ctx.beginPath(); ctx.arc(64, 52, 6, 0, Math.PI * 2); ctx.fill();

    // Texte Code lumineux
    ctx.font = "bold 24px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.shadowColor = tagColor || "#D4AF37";
    ctx.shadowBlur = 6;
    ctx.fillText(codeText, 90, 52);

    const tex = new THREE.CanvasTexture(c);
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(7.2, 1.45, 1);
    return sprite;
  }

  // =========================================================================
  // MODÈLE 1 : DISQUE D'ACCRÉTION & SINGULARITÉ DORÉE
  // =========================================================================
  const galaxyGroup = new THREE.Group();
  scene.add(galaxyGroup);
  galaxyGroup.rotation.x = 0.55;
  galaxyGroup.rotation.z = -0.32;
  galaxyGroup.position.set(0, -2, -2);

  // Disque d'accrétion d'énergie dorée
  const accretionGeo = new THREE.RingGeometry(11.0, 16.5, 96);
  const accretionMat = new THREE.MeshBasicMaterial({
    color: 0xFACC15,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.18,
    blending: THREE.AdditiveBlending
  });
  const accretionRing = new THREE.Mesh(accretionGeo, accretionMat);
  accretionRing.rotation.x = Math.PI / 2;
  galaxyGroup.add(accretionRing);

  // Disque secondaire rubis
  const rubyRingGeo = new THREE.RingGeometry(17.0, 18.2, 96);
  const rubyRingMat = new THREE.MeshBasicMaterial({
    color: 0xFF1E56,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.22,
    blending: THREE.AdditiveBlending
  });
  const rubyRing = new THREE.Mesh(rubyRingGeo, rubyRingMat);
  rubyRing.rotation.x = Math.PI / 2;
  galaxyGroup.add(rubyRing);

  // =========================================================================
  // MODÈLE 2 : EXTRAITS DE CODE 3D FLOTTANTS DANS L'ESPACE (CODE PARTICLES)
  // =========================================================================
  const codeSnippetsGroup = new THREE.Group();
  scene.add(codeSnippetsGroup);

  const snippetsData = [
    { code: "def __init__(self):", color: "#FFD43B" },
    { code: "Widget build(BuildContext ctx)", color: "#54C5F8" },
    { code: "SELECT * FROM users JOIN...", color: "#38BDF8" },
    { code: "import torch.nn as nn", color: "#FF1E56" },
    { code: "async function trainAI()", color: "#FACC15" },
    { code: "setState(() => isReady = true)", color: "#00F5D4" },
    { code: "class NeuralEngine:", color: "#FF5E7E" },
    { code: "git push origin main", color: "#E2E8F0" },
    { code: "[x**2 for x in dataset]", color: "#FFE873" },
    { code: "Firebase.initializeApp()", color: "#FFCA28" },
    { code: "01001001 01001001 01010100", color: "#A78BFA" },
    { code: "Stream<List<Hackathon>>", color: "#38BDF8" },
    { code: "lambda state: state.ready()", color: "#FCD34D" },
    { code: "CREATE INDEX idx_perf ON...", color: "#60A5FA" },
    { code: "await model.predict(inputs)", color: "#FF3366" },
    { code: "Future<void> runPipeline()", color: "#54C5F8" },
    { code: "while (learning): evolve()", color: "#4ADE80" },
    { code: "const [model, setModel] =", color: "#FBBF24" }
  ];

  const floatingSnippets = [];
  snippetsData.forEach((item, index) => {
    const sprite = createCodeSnippetSprite(item.code, item.color);
    
    // Répartition spatiale en 3D autour du visiteur
    const angle = (index / snippetsData.length) * Math.PI * 2;
    const distance = 16 + Math.random() * 24;
    const y = (Math.random() - 0.5) * 32;
    const z = (Math.random() - 0.5) * 28 - 6;

    sprite.position.set(
      Math.cos(angle) * distance,
      y,
      Math.sin(angle) * distance * 0.6 + z
    );

    codeSnippetsGroup.add(sprite);
    floatingSnippets.push({
      sprite: sprite,
      baseY: y,
      speed: 0.008 + Math.random() * 0.012,
      phase: Math.random() * Math.PI * 2
    });
  });

  // =========================================================================
  // MODÈLE 3 : 4 PLANÈTES TECHNOLOGIQUES EN ORBITE (Python, Flutter, IA, Postgres)
  // =========================================================================
  const techPlanetsGroup = new THREE.Group();
  scene.add(techPlanetsGroup);
  const languagePlanets = [];

  const planetConfigs = [
    {
      key: "python",
      title: "PYTHON 3.12",
      role: "DATA • ALGO • FASTAPI",
      color: "#FFD43B",
      ringColor: 0xFFD43B,
      radius: isSmallScreen ? 1.85 : 2.35,
      pos: isSmallScreen ? [-11, 10, -14] : [-22, 9.5, -12],
      rotSpeed: 0.0055,
      hasSatellite: true,
      hasDualRing: false,
      hasCage: false
    },
    {
      key: "flutter",
      title: "FLUTTER & DART",
      role: "DÉVELOPPEMENT MOBILE",
      color: "#38BDF8",
      ringColor: 0x38BDF8,
      radius: isSmallScreen ? 1.75 : 2.2,
      pos: isSmallScreen ? [11, 7, -15] : [22.5, 7, -14],
      rotSpeed: -0.006,
      hasSatellite: false,
      hasDualRing: true,
      hasCage: false
    },
    {
      key: "ai",
      title: "KÔA NEURAL AI",
      role: "PYTORCH • VISION • VOICE",
      color: "#FF1E56",
      ringColor: 0xFF1E56,
      radius: isSmallScreen ? 1.9 : 2.45,
      pos: isSmallScreen ? [-10, -11, -16] : [-23, -10, -15],
      rotSpeed: 0.0048,
      hasSatellite: false,
      hasDualRing: false,
      hasCage: true
    },
    {
      key: "postgres",
      title: "POSTGRESQL 16",
      role: "3NF • ACID • INDEX B-TREE",
      color: "#7DBBE6",
      ringColor: 0xD4AF37,
      radius: isSmallScreen ? 1.7 : 2.1,
      pos: isSmallScreen ? [10, -11, -13] : [21, -10.5, -11],
      rotSpeed: -0.0045,
      hasSatellite: false,
      hasDualRing: false,
      hasCage: false
    }
  ];

  planetConfigs.forEach((cfg) => {
    const pGroup = new THREE.Group();
    const xScale = mobileXScale();
    pGroup.position.set(cfg.pos[0] * xScale, cfg.pos[1], cfg.pos[2]);

    const pGeo = new THREE.SphereGeometry(cfg.radius, isSmallScreen ? 24 : 36, isSmallScreen ? 24 : 36);
    const pMat = new THREE.MeshStandardMaterial({
      map: createPlanetTexture(cfg.key),
      roughness: 0.32,
      metalness: 0.35,
      emissive: new THREE.Color(cfg.color),
      emissiveIntensity: 0.14
    });
    const pMesh = new THREE.Mesh(pGeo, pMat);
    pGroup.add(pMesh);

    const pRingGeo = new THREE.TorusGeometry(cfg.radius * 1.52, 0.06, 12, 72);
    const pRingMat = new THREE.MeshBasicMaterial({
      color: cfg.ringColor,
      transparent: true,
      opacity: 0.58
    });
    const pRing = new THREE.Mesh(pRingGeo, pRingMat);
    pRing.rotation.x = Math.PI / 2.3;
    pRing.rotation.y = 0.35;
    pGroup.add(pRing);

    let pRing2 = null;
    if (cfg.hasDualRing) {
      const pRing2Geo = new THREE.TorusGeometry(cfg.radius * 1.8, 0.045, 12, 72);
      const pRing2Mat = new THREE.MeshBasicMaterial({
        color: 0xFACC15,
        transparent: true,
        opacity: 0.42
      });
      pRing2 = new THREE.Mesh(pRing2Geo, pRing2Mat);
      pRing2.rotation.x = -Math.PI / 2.6;
      pRing2.rotation.z = 0.5;
      pGroup.add(pRing2);
    }

    let pWire = null;
    if (cfg.hasCage) {
      const pWireGeo = new THREE.IcosahedronGeometry(cfg.radius * 1.24, 1);
      const pWireMat = new THREE.MeshBasicMaterial({
        color: 0xFF4D6D,
        wireframe: true,
        transparent: true,
        opacity: 0.38,
        blending: THREE.AdditiveBlending
      });
      pWire = new THREE.Mesh(pWireGeo, pWireMat);
      pGroup.add(pWire);
    }

    let pSat = null;
    const satRadius = cfg.radius * 1.95;
    if (cfg.hasSatellite) {
      const moonGeo = new THREE.SphereGeometry(0.34, 14, 14);
      const moonMat = new THREE.MeshBasicMaterial({ color: 0xFFE873 });
      pSat = new THREE.Mesh(moonGeo, moonMat);
      pGroup.add(pSat);
    }

    const badge = createPlanetBadgeSprite(cfg.title, cfg.role, cfg.color);
    badge.position.set(0, cfg.radius + 1.55, 0);
    if (isSmallScreen) badge.scale.set(5.2, 1.3, 1);
    pGroup.add(badge);

    techPlanetsGroup.add(pGroup);
    languagePlanets.push({
      key: cfg.key,
      group: pGroup,
      mesh: pMesh,
      material: pMat,
      ring: pRing,
      ring2: pRing2,
      wire: pWire,
      sat: pSat,
      satRadius,
      baseX: cfg.pos[0],
      baseY: cfg.pos[1],
      rotSpeed: cfg.rotSpeed,
      pulse: 0
    });
  });

  // =========================================================================
  // MODÈLE 4 : CHAMP D'ÉTOILES GALACTIQUE & ÉTOILES FILANTES
  // =========================================================================
  const starCount = isSmallScreen ? 420 : 1050;
  const starPositions = new Float32Array(starCount * 3);
  const starColors = new Float32Array(starCount * 3);
  const paletteColors = [
    new THREE.Color(0xFFFFFF),
    new THREE.Color(0xFACC15),
    new THREE.Color(0x38BDF8),
    new THREE.Color(0xFF1E56)
  ];

  for (let i = 0; i < starCount; i++) {
    const i3 = i * 3;
    if (i < starCount * 0.55) {
      // Bras spiraux de la galaxie
      const arm = i % 3;
      const radius = 10 + Math.random() * 52;
      const spinAngle = radius * 0.12 + (arm * Math.PI * 2) / 3;
      const scatter = (Math.random() - 0.5) * 6;
      starPositions[i3] = Math.cos(spinAngle) * radius + scatter;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 16;
      starPositions[i3 + 2] = Math.sin(spinAngle) * radius - 14 + scatter;
    } else {
      // Volume stellaire profond
      starPositions[i3] = (Math.random() - 0.5) * 130;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 90;
      starPositions[i3 + 2] = (Math.random() - 0.5) * 90 - 15;
    }
    const c = paletteColors[i % paletteColors.length];
    starColors[i3] = c.r;
    starColors[i3 + 1] = c.g;
    starColors[i3 + 2] = c.b;
  }

  const starFieldGeo = new THREE.BufferGeometry();
  starFieldGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
  starFieldGeo.setAttribute("color", new THREE.BufferAttribute(starColors, 3));
  const starFieldMat = new THREE.PointsMaterial({
    size: isSmallScreen ? 0.75 : 0.9,
    map: createCodeStarTexture(),
    vertexColors: true,
    transparent: true,
    opacity: 0.78,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const starFieldPoints = new THREE.Points(starFieldGeo, starFieldMat);
  scene.add(starFieldPoints);

  const shootingStars = [];
  function triggerShootingStar(star) {
    star.active = true;
    star.progress = 0;
    const startX = (Math.random() - 0.5) * 60;
    const startY = 18 + Math.random() * 18;
    const startZ = -18 - Math.random() * 20;
    star.pos.set(startX, startY, startZ);
    star.vel.set(
      (Math.random() > 0.5 ? 1 : -1) * (0.45 + Math.random() * 0.4),
      -(0.32 + Math.random() * 0.35),
      0.18 + Math.random() * 0.25
    );
  }

  const shootingCount = isSmallScreen ? 3 : 5;
  const shootingColors = [0xFACC15, 0x38BDF8, 0xFF4D6D];
  for (let i = 0; i < shootingCount; i++) {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(6);
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.LineBasicMaterial({
      color: shootingColors[i % shootingColors.length],
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });
    const line = new THREE.Line(geo, mat);
    scene.add(line);
    shootingStars.push({
      line,
      geo,
      mat,
      pos: new THREE.Vector3(),
      vel: new THREE.Vector3(),
      active: false,
      progress: 0,
      cooldown: 30 + i * 75
    });
  }

  // =========================================================================
  // MODÈLE 5 : STATION RELIQUE ORBITALE MONUMENTALE (Torus d'Or & Cœur Rubis)
  // =========================================================================
  const relicGroup = new THREE.Group();
  scene.add(relicGroup);
  relicGroup.position.set(0, 0, 4);

  // 1. Torus Knot monumental en Or Pur Chromé (Corps solide métallique)
  const torusGeometry = new THREE.TorusKnotGeometry(
    9.4,
    2.3,
    isSmallScreen ? 100 : 160,
    isSmallScreen ? 20 : 32,
    2,
    3
  );
  const torusMaterial = new THREE.MeshStandardMaterial({
    color: 0xD4AF37,
    roughness: 0.22,
    metalness: 0.94,
    transparent: true,
    opacity: 0.88,
    side: THREE.DoubleSide
  });
  const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
  relicGroup.add(torusMesh);

  // 2. Grillage d'énergie d'Or Stellaire (Wireframe holographique doré en surimpression)
  const torusWireMat = new THREE.MeshBasicMaterial({
    color: 0xFFF070,
    wireframe: true,
    transparent: true,
    opacity: 0.42,
    blending: THREE.AdditiveBlending
  });
  const torusWireMesh = new THREE.Mesh(torusGeometry, torusWireMat);
  relicGroup.add(torusWireMesh);

  // 3. Cristal de Cœur Rubis Énergétique (Focal central)
  const crystalGeo = new THREE.IcosahedronGeometry(5.2, 1);
  const crystalMat = new THREE.MeshStandardMaterial({
    color: 0xE11D48,
    roughness: 0.12,
    metalness: 0.45,
    emissive: 0x991B1B,
    emissiveIntensity: 0.65,
    transparent: true,
    opacity: 0.72,
    flatShading: true
  });
  const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
  relicGroup.add(crystalMesh);

  // 4. Cage synaptique rubis + Cœur quantique intérieur
  const crystalWireMat = new THREE.MeshBasicMaterial({
    color: 0xFF4D6D,
    wireframe: true,
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending
  });
  const crystalWireMesh = new THREE.Mesh(crystalGeo, crystalWireMat);
  crystalMesh.add(crystalWireMesh);

  const innerCoreGeo = new THREE.OctahedronGeometry(2.55, 0);
  const innerCoreMat = new THREE.MeshBasicMaterial({
    color: 0xFFDF00,
    wireframe: true,
    transparent: true,
    opacity: 0.78,
    blending: THREE.AdditiveBlending
  });
  const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
  crystalMesh.add(innerCoreMesh);

  // 5. Anneaux gyroscopiques orbitaux (Or, Rubis, Azur)
  const ring1Geo = new THREE.TorusGeometry(14.6, 0.12, 16, 140);
  const ring1Mat = new THREE.MeshBasicMaterial({ color: 0xFACC15, transparent: true, opacity: 0.55 });
  const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
  ring1.rotation.x = Math.PI / 3.4;
  ring1.rotation.y = Math.PI / 5.5;
  relicGroup.add(ring1);

  const ring2Geo = new THREE.TorusGeometry(16.5, 0.12, 16, 140);
  const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xFF1E56, transparent: true, opacity: 0.50 });
  const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
  ring2.rotation.x = -Math.PI / 3.8;
  ring2.rotation.z = Math.PI / 4.6;
  relicGroup.add(ring2);

  const ring3Geo = new THREE.TorusGeometry(18.4, 0.08, 16, 140);
  const ring3Mat = new THREE.MeshBasicMaterial({ color: 0x38BDF8, transparent: true, opacity: 0.45 });
  const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
  ring3.rotation.x = Math.PI / 2.2;
  relicGroup.add(ring3);

  // 6. Balises d'énergie orbitales (Satellites)
  const satGeo = new THREE.SphereGeometry(0.38, 16, 16);
  const satGold = new THREE.Mesh(satGeo, new THREE.MeshBasicMaterial({ color: 0xFFDF00 }));
  const satRed = new THREE.Mesh(satGeo, new THREE.MeshBasicMaterial({ color: 0xFF1E56 }));
  const satCyan = new THREE.Mesh(satGeo, new THREE.MeshBasicMaterial({ color: 0x38BDF8 }));
  relicGroup.add(satGold);
  relicGroup.add(satRed);
  relicGroup.add(satCyan);

  // Mise à l'échelle adaptative des anneaux & du torus sur mobile / portrait
  function applyResponsive3DScale() {
    relicGroup.scale.setScalar(getRelicScale());
    galaxyGroup.scale.setScalar(getGalaxyScale());
    baseCameraZ = getBaseCameraZ();
  }
  applyResponsive3DScale();

  // =========================================================================
  // PARALLAXE, DÉFILEMENT & VOYAGE INTERSTELLAIRE
  // =========================================================================
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;
  let scrollY = 0;
  let targetScrollY = 0;

  if (FINE_POINTER) {
    window.addEventListener("mousemove", (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0006;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0006;
    }, { passive: true });
  }

  window.addEventListener("scroll", () => {
    targetScrollY = window.scrollY;
  }, { passive: true });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    applyResponsive3DScale();
    const xScale = mobileXScale();
    languagePlanets.forEach((planet) => {
      planet.group.position.x = planet.baseX * xScale;
    });
    if (REDUCED_MOTION) renderer.render(scene, camera);
  });

  if (REDUCED_MOTION) {
    renderer.render(scene, camera);
    return;
  }

  // Boucle d'animation WebGL 60FPS
  let rafId = null;
  let clockTime = 0;
  let warpEnergy = 0;
  let planetYawOffset = 0;

  window.__portfolio3D = {
    triggerWarp() {
      warpEnergy = 1.0;
      const idleStar = shootingStars.find((s) => !s.active);
      if (idleStar) triggerShootingStar(idleStar);
    },
    focusPlanet(key) {
      const target = languagePlanets.find((p) => p.key === key);
      if (target) {
        target.pulse = 1.0;
        planetYawOffset = target.baseX < 0 ? 0.18 : -0.18;
        const idleStar = shootingStars.find((s) => !s.active);
        if (idleStar) triggerShootingStar(idleStar);
      }
    }
  };

  function animate() {
    rafId = requestAnimationFrame(animate);
    warpEnergy = Math.max(0, warpEnergy - 0.015);
    const speedMult = 1 + warpEnergy * 4.5;
    clockTime += 0.014 * speedMult;

    targetX += (mouseX - targetX) * 0.045;
    targetY += (mouseY - targetY) * 0.045;
    scrollY += (targetScrollY - scrollY) * 0.06;

    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const scrollRatio = Math.min(1, Math.max(0, scrollY / maxScroll));

    // 1. Rotation de la Nébuleuse, Champ d'Étoiles & Singularité d'Accrétion
    galaxyGroup.rotation.y += 0.0008 * speedMult;
    starFieldPoints.rotation.y += 0.00045 * speedMult;
    starFieldPoints.rotation.x = Math.sin(clockTime * 0.12) * 0.06;
    accretionRing.rotation.z += 0.0035 * speedMult;
    rubyRing.rotation.z -= 0.0025 * speedMult;

    // 2. Dérive orbitale des extraits de code 3D
    floatingSnippets.forEach((item) => {
      item.sprite.position.y = item.baseY + Math.sin(clockTime * 0.8 + item.phase) * 1.5;
      item.sprite.position.x += Math.cos(clockTime * 0.3 + item.phase) * 0.02;
    });

    // 3. Rotation des Planètes Informatiques & Pulse Interactif
    languagePlanets.forEach((planet, idx) => {
      planet.pulse = Math.max(0, (planet.pulse || 0) - 0.025);
      const scaleTarget = 1 + planet.pulse * 0.24;
      planet.group.scale.setScalar(scaleTarget);
      if (planet.material) {
        planet.material.emissiveIntensity = 0.14 + planet.pulse * 0.55;
      }

      planet.mesh.rotation.y += planet.rotSpeed * speedMult;
      if (planet.ring) planet.ring.rotation.z += 0.003 * speedMult;
      if (planet.ring2) planet.ring2.rotation.z -= 0.0025 * speedMult;
      if (planet.wire) planet.wire.rotation.y -= 0.004 * speedMult;

      // Oscillation antigravitationnelle en apesanteur
      planet.group.position.y = planet.baseY + Math.sin(clockTime * 0.7 + idx * 1.5) * 1.2;

      // Satellite de Python
      if (planet.sat) {
        const satAng = clockTime * 1.8;
        planet.sat.position.set(
          Math.cos(satAng) * planet.satRadius,
          Math.sin(satAng * 0.5) * 1.2,
          Math.sin(satAng) * planet.satRadius
        );
      }
    });

    // 4. Étoiles filantes
    shootingStars.forEach((star) => {
      if (star.active) {
        star.pos.add(star.vel);
        star.progress += 1;

        const positions = star.geo.attributes.position.array;
        positions[0] = star.pos.x;
        positions[1] = star.pos.y;
        positions[2] = star.pos.z;
        positions[3] = star.pos.x - star.vel.x * 6;
        positions[4] = star.pos.y - star.vel.y * 6;
        positions[5] = star.pos.z - star.vel.z * 6;
        star.geo.attributes.position.needsUpdate = true;

        star.mat.opacity = Math.max(0, 0.95 - (star.progress / 40));

        if (star.progress > 40) {
          star.active = false;
          star.mat.opacity = 0;
          star.cooldown = 120 + Math.random() * 320;
        }
      } else {
        star.cooldown -= 1;
        if (star.cooldown <= 0) {
          triggerShootingStar(star);
        }
      }
    });

    // 5. Station Relique centrale monumentale
    torusMesh.rotation.x += 0.0024 * speedMult;
    torusMesh.rotation.y += 0.0038 * speedMult;
    torusWireMesh.rotation.x = torusMesh.rotation.x;
    torusWireMesh.rotation.y = torusMesh.rotation.y;

    crystalMesh.rotation.x -= 0.0032 * speedMult;
    crystalMesh.rotation.y -= 0.0024 * speedMult;
    innerCoreMesh.rotation.y += 0.009 * speedMult;
    innerCoreMesh.rotation.z += 0.006 * speedMult;
    const corePulse = 1 + Math.sin(clockTime * 2.4) * 0.1 + warpEnergy * 0.25;
    innerCoreMesh.scale.setScalar(corePulse);

    ring1.rotation.z += 0.0035 * speedMult;
    ring2.rotation.y += 0.0028 * speedMult;
    ring3.rotation.x -= 0.0022 * speedMult;

    // Respiration lumineuse du Cœur Galactique & Chorégraphie par chapitre
    coreLight.intensity = 5.2 + Math.sin(clockTime * 2.2) * 1.8 + warpEnergy * 4.5;
    rubyLight.intensity = 4.2 + Math.sin(scrollRatio * Math.PI * 2) * 1.4 + warpEnergy * 2.0;
    cyanLight.intensity = 3.5 + Math.cos(scrollRatio * Math.PI * 2) * 1.3 + warpEnergy * 2.0;
    relicGroup.position.x = Math.sin(scrollRatio * Math.PI * 2) * 3.5;
    relicGroup.position.y = Math.cos(scrollRatio * Math.PI * 2) * 1.4;
    planetYawOffset *= 0.96;
    techPlanetsGroup.rotation.y = Math.sin(scrollRatio * Math.PI) * 0.22 + planetYawOffset;

    const sat1Angle = clockTime * 0.75;
    satGold.position.set(
      Math.cos(sat1Angle) * 14.6 * Math.cos(Math.PI / 5.5),
      Math.sin(sat1Angle) * 14.6 * Math.cos(Math.PI / 3.4),
      Math.sin(sat1Angle) * 14.6 * Math.sin(Math.PI / 3.4)
    );

    const sat2Angle = -clockTime * 0.55 + Math.PI;
    satRed.position.set(
      Math.sin(sat2Angle) * 16.5 * Math.cos(Math.PI / 4.6),
      Math.cos(sat2Angle) * 16.5 * Math.cos(Math.PI / 3.8),
      -Math.cos(sat2Angle) * 16.5 * Math.sin(Math.PI / 3.8)
    );

    const sat3Angle = clockTime * 0.45 + Math.PI * 0.5;
    satCyan.position.set(
      Math.cos(sat3Angle) * 18.4,
      Math.sin(sat3Angle * 0.8) * 4.2,
      Math.sin(sat3Angle) * 18.4
    );

    // 6. Navigation par scroll, parallaxe & effet Warp
    const scrollTravel = (scrollY * 0.008);
    const targetFov = 60 + warpEnergy * 9;
    if (Math.abs(camera.fov - targetFov) > 0.05) {
      camera.fov += (targetFov - camera.fov) * 0.12;
      camera.updateProjectionMatrix();
    }
    camera.position.x += (targetX * 28 - camera.position.x) * 0.045;
    camera.position.y += (3 - targetY * 22 - (scrollY * 0.004) - camera.position.y) * 0.045;
    camera.position.z += (baseCameraZ + Math.sin(scrollTravel) * 4 - warpEnergy * 5 - camera.position.z) * 0.04;

    camera.rotation.z = -targetX * 0.12;
    camera.lookAt(0, -scrollY * 0.005, 0);

    renderer.render(scene, camera);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(rafId);
      rafId = null;
    } else if (rafId === null) {
      animate();
    }
  });

  animate();
}

function initAvatarToggle() {
  const btn3D = document.getElementById("btnViewAvatar3D");
  const btnPhoto = document.getElementById("btnViewPhotoReal");
  const avatarVideo = document.getElementById("heroAvatarVideo");
  const photoImg = document.getElementById("heroPhotoImg");
  const halo = document.querySelector(".avatar-spotlight-halo");
  const videoCanvas = document.getElementById("avatarVideoCanvas");
  const videoHud = document.querySelector(".avatar-video-hud");
  const liveStatus = document.querySelector(".avatar-live-status");

  if (!btn3D || !btnPhoto) return;

  const setView = (mode) => {
    const targetOut = mode === "photo" ? avatarVideo : photoImg;
    if (targetOut) {
      targetOut.style.opacity = "0.2";
      targetOut.style.transform = "scale(0.94)";
    }

    setTimeout(() => {
      if (mode === "photo") {
        if (avatarVideo) {
          avatarVideo.style.display = "none";
          try { avatarVideo.pause(); } catch (_) {}
        }
        if (photoImg) {
          photoImg.style.display = "block";
          photoImg.style.opacity = "1";
          photoImg.style.transform = "scale(1)";
        }
        btnPhoto.classList.add("active");
        btnPhoto.setAttribute("aria-pressed", "true");
        btn3D.classList.remove("active");
        btn3D.setAttribute("aria-pressed", "false");
        if (halo) halo.classList.add("mode-photo");
        if (videoCanvas) videoCanvas.style.opacity = "0";
        if (videoHud) videoHud.style.opacity = "0";
        if (liveStatus) liveStatus.style.opacity = "0";
      } else {
        if (photoImg) {
          photoImg.style.display = "none";
        }
        if (avatarVideo) {
          avatarVideo.style.display = "block";
          avatarVideo.style.opacity = "1";
          avatarVideo.style.transform = "scale(1)";
          try { avatarVideo.play().catch(() => {}); } catch (_) {}
        }
        btn3D.classList.add("active");
        btn3D.setAttribute("aria-pressed", "true");
        btnPhoto.classList.remove("active");
        btnPhoto.setAttribute("aria-pressed", "false");
        if (halo) halo.classList.remove("mode-photo");
        if (videoCanvas) videoCanvas.style.opacity = "1";
        if (videoHud) videoHud.style.opacity = "1";
        if (liveStatus) liveStatus.style.opacity = "1";
      }
    }, 160);
  };

  btn3D.addEventListener("click", () => setView("3d"));
  btnPhoto.addEventListener("click", () => setView("photo"));
}

/**
 * =========================================================================
 * 2c. AVATAR VIVANT & INTERACTIF (Regard 3D, dialogues & physique haptique)
 * =========================================================================
 */
function initLivingAvatar() {
  const container = document.getElementById("avatarHeroContainer");
  const frame = document.getElementById("avatarFrame");
  const speechBubble = document.getElementById("avatarSpeechBubble");
  const speechText = document.getElementById("avatarSpeechText");
  const ripple = document.getElementById("avatarClickRipple");
  const halo = document.getElementById("avatarSpotlightHalo");
  const avatarVideo = document.getElementById("heroAvatarVideo");

  if (!frame) return;

  // Lancement robuste de la boucle vidéo 3D (tolérance aux politiques d'économie d'énergie)
  if (avatarVideo) {
    const startPlay = () => {
      avatarVideo.play().catch(() => {});
    };
    startPlay();
    window.addEventListener("pointerdown", startPlay, { once: true });
    window.addEventListener("scroll", startPlay, { once: true, passive: true });
  }

  // Répliques vivantes du développeur
  const quotes = [
    "👋 Salut ! Je suis Christ Esli, étudiant en génie logiciel à l’IIT.",
    "📱 Je présente ici mes projets et prototypes autour du développement mobile et web.",
    "🌱 KÔA AI est une piste de projet consacrée à l’assistance agricole.",
    "🏆 Retrouve mes distinctions et mon parcours dans les sections du portfolio.",
    "🎯 Je recherche une opportunité de stage en développement logiciel.",
    "💻 La console ci-dessous est une démonstration interactive avec réponses simulées."
  ];

  let quoteIdx = 0;
  let autoSpeechTimer = null;

  function showNextQuote() {
    quoteIdx = (quoteIdx + 1) % quotes.length;
    if (speechText && speechBubble) {
      speechBubble.classList.remove("bubble-pop");
      void speechBubble.offsetWidth; // Force reflow
      speechText.textContent = quotes[quoteIdx];
      speechBubble.classList.add("bubble-pop");
    }
  }

  // Clic interactif sur l'avatar : onde de choc + réplique + son haptique
  frame.addEventListener("click", () => {
    showNextQuote();

    if (ripple) {
      ripple.classList.remove("rippling");
      void ripple.offsetWidth; // Force reflow
      ripple.classList.add("rippling");
      setTimeout(() => ripple.classList.remove("rippling"), 650);
    }

    if (typeof playSoundHaptic === "function") {
      playSoundHaptic(880, "sine", 0.12, 0.05);
    }

    if (autoSpeechTimer) {
      clearInterval(autoSpeechTimer);
      autoSpeechTimer = setInterval(showNextQuote, 9500);
    }
  });

  // Touche Entrée / Espace au clavier (Accessibilité WCAG)
  frame.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      frame.click();
    }
  });

  // Rotation automatique discrète des pensées
  if (!REDUCED_MOTION) {
    autoSpeechTimer = setInterval(() => {
      if (!document.hidden) showNextQuote();
    }, 9500);

    if (container) {
      container.addEventListener("mouseenter", () => {
        if (autoSpeechTimer) {
          clearInterval(autoSpeechTimer);
          autoSpeechTimer = null;
        }
      });
      container.addEventListener("mouseleave", () => {
        if (autoSpeechTimer) clearInterval(autoSpeechTimer);
        autoSpeechTimer = setInterval(() => {
          if (!document.hidden) showNextQuote();
        }, 9500);
      });
    }
  }

  // Physique 3D de suivi du regard (Head & Eye tracking)
  if (!REDUCED_MOTION) {
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let isTrackingActive = false;
    let rafId = null;

    function update3DPhysics() {
      // Interpolation exponentielle (lerp fluide)
      currentRotX += (targetRotX - currentRotX) * 0.08;
      currentRotY += (targetRotY - currentRotY) * 0.08;

      frame.style.transform = `perspective(800px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;

      if (halo) {
        halo.style.transform = `translate(calc(-50% + ${(currentRotY * 1.6).toFixed(1)}px), calc(-50% + ${(-currentRotX * 1.6).toFixed(1)}px))`;
      }

      if (Math.abs(targetRotX - currentRotX) > 0.02 || Math.abs(targetRotY - currentRotY) > 0.02) {
        rafId = requestAnimationFrame(update3DPhysics);
      } else {
        isTrackingActive = false;
      }
    }

    function startPhysicsLoop() {
      if (!isTrackingActive) {
        isTrackingActive = true;
        rafId = requestAnimationFrame(update3DPhysics);
      }
    }

    // Suivi de la souris sur l'écran
    window.addEventListener("mousemove", (e) => {
      const rect = frame.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      // Facteur d'angle (max ±16deg)
      const maxAngle = 16;
      targetRotY = Math.max(-maxAngle, Math.min(maxAngle, (dx / (window.innerWidth / 2)) * maxAngle));
      targetRotX = Math.max(-maxAngle, Math.min(maxAngle, -(dy / (window.innerHeight / 2)) * maxAngle));

      startPhysicsLoop();
    }, { passive: true });

    // Gyroscope mobile / tablette (DeviceOrientation)
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", (e) => {
        if (e.gamma !== null && e.beta !== null) {
          targetRotY = Math.max(-14, Math.min(14, e.gamma * 0.45));
          targetRotX = Math.max(-12, Math.min(12, (e.beta - 45) * 0.35));
          startPhysicsLoop();
        }
      }, { passive: true });
    }

    // Réinitialisation douce quand le curseur quitte la fenêtre
    document.addEventListener("mouseleave", () => {
      targetRotX = 0;
      targetRotY = 0;
      startPhysicsLoop();
    });
  }
}

/**
 * =========================================================================
 * 2d. MOTEUR D'ANIMATION VIDÉO FX CANVAS TEMPS RÉEL (60 FPS)
 * Impulsions électriques synaptiques, flares photoniques & HUD laser
 * =========================================================================
 */
function initAvatarVideoCanvas() {
  const canvas = document.getElementById("avatarVideoCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const W = canvas.width; // 336
  const H = canvas.height; // 336
  const CX = W / 2; // 168
  const CY = H * 0.371; // ~125
  const RADIUS = W * 0.385; // ~129

  // Chemins des circuits imprimés sur le maillot (coordonnées adaptées au canvas 336x336)
  const circuitTracks = [
    // Épaule gauche -> torse
    [
      { x: W * 0.22, y: H * 0.76 },
      { x: W * 0.28, y: H * 0.72 },
      { x: W * 0.33, y: H * 0.72 },
      { x: W * 0.36, y: H * 0.76 },
      { x: W * 0.40, y: H * 0.76 },
      { x: W * 0.43, y: H * 0.81 }
    ],
    // Col gauche
    [
      { x: W * 0.33, y: H * 0.69 },
      { x: W * 0.38, y: H * 0.74 },
      { x: W * 0.42, y: H * 0.74 },
      { x: W * 0.45, y: H * 0.79 }
    ],
    // Col droit
    [
      { x: W * 0.67, y: H * 0.69 },
      { x: W * 0.62, y: H * 0.74 },
      { x: W * 0.58, y: H * 0.74 },
      { x: W * 0.55, y: H * 0.79 }
    ],
    // Épaule droite -> torse
    [
      { x: W * 0.78, y: H * 0.76 },
      { x: W * 0.72, y: H * 0.72 },
      { x: W * 0.67, y: H * 0.72 },
      { x: W * 0.64, y: H * 0.76 },
      { x: W * 0.60, y: H * 0.76 },
      { x: W * 0.57, y: H * 0.81 }
    ],
    // Pointe du V du col
    [
      { x: W * 0.45, y: H * 0.70 },
      { x: W * 0.50, y: H * 0.76 },
      { x: W * 0.55, y: H * 0.70 }
    ],
    // Circuits bas du torse
    [
      { x: W * 0.28, y: H * 0.85 },
      { x: W * 0.36, y: H * 0.85 },
      { x: W * 0.38, y: H * 0.88 },
      { x: W * 0.46, y: H * 0.88 }
    ],
    [
      { x: W * 0.72, y: H * 0.85 },
      { x: W * 0.64, y: H * 0.85 },
      { x: W * 0.62, y: H * 0.88 },
      { x: W * 0.54, y: H * 0.88 }
    ]
  ];

  // Particules quantiques et poussières d'or en sustentation
  const particles = Array.from({ length: 22 }, (_, i) => ({
    x: W * 0.15 + Math.random() * W * 0.7,
    y: H * 0.35 + Math.random() * H * 0.6,
    speed: 0.35 + Math.random() * 0.65,
    size: 1.0 + Math.random() * 2.0,
    alpha: 0.3 + Math.random() * 0.65,
    color: i % 3 === 0 ? "#FF1E56" : (i % 3 === 1 ? "#FACC15" : "#38BDF8"),
    angleOffset: Math.random() * Math.PI * 2
  }));

  let rafId = null;
  let time = 0;
  let surgeIntensity = 0; // Impulsion de surtension électrique lors du clic

  const frame = document.getElementById("avatarFrame");
  if (frame) {
    frame.addEventListener("click", () => {
      surgeIntensity = 1.0;
    });
  }

  function getPointAlongPath(pts, progress) {
    if (pts.length < 2) return pts[0];
    const totalSegs = pts.length - 1;
    const segFloat = progress * totalSegs;
    const segIdx = Math.min(Math.floor(segFloat), totalSegs - 1);
    const subT = segFloat - segIdx;
    const p1 = pts[segIdx];
    const p2 = pts[segIdx + 1];
    return {
      x: p1.x + (p2.x - p1.x) * subT,
      y: p1.y + (p2.y - p1.y) * subT
    };
  }

  function renderVideoLoop() {
    time += 0.024;
    surgeIntensity = Math.max(0, surgeIntensity - 0.03);

    ctx.clearRect(0, 0, W, H);

    // 1. Flares photoniques orbitant le halo rouge rubis
    const flareCount = 3;
    for (let i = 0; i < flareCount; i++) {
      const flareAngle = time * (0.8 + i * 0.4) + (i * Math.PI * 2) / flareCount;
      const fx = CX + RADIUS * Math.cos(flareAngle);
      const fy = CY + RADIUS * Math.sin(flareAngle);

      const radGlow = 14 + Math.sin(time * 3 + i) * 4;
      const grad = ctx.createRadialGradient(fx, fy, 0, fx, fy, radGlow);
      const flareCol = i === 0 ? "255, 30, 86" : (i === 1 ? "245, 158, 11" : "56, 189, 248");
      grad.addColorStop(0, `rgba(255, 255, 255, ${0.9 + surgeIntensity * 0.1})`);
      grad.addColorStop(0.35, `rgba(${flareCol}, ${0.7 + surgeIntensity * 0.2})`);
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(fx, fy, radGlow, 0, Math.PI * 2);
      ctx.fill();
    }

    // 2. Impulsions de courant électrique sur le maillot circuit imprimé
    circuitTracks.forEach((track, idx) => {
      // Trace conductrice
      ctx.beginPath();
      ctx.moveTo(track[0].x, track[0].y);
      for (let p = 1; p < track.length; p++) {
        ctx.lineTo(track[p].x, track[p].y);
      }
      const trackAlpha = 0.08 + surgeIntensity * 0.4;
      ctx.strokeStyle = idx % 2 === 0 ? `rgba(212, 175, 55, ${trackAlpha})` : `rgba(56, 189, 248, ${trackAlpha})`;
      ctx.lineWidth = 1.2 + surgeIntensity * 1.5;
      ctx.stroke();

      // Étincelle voyageuse
      const cycleProgress = (time * (0.55 + idx * 0.07) + idx * 0.22) % 1.0;
      const spark = getPointAlongPath(track, cycleProgress);

      const sparkGlow = 7 + surgeIntensity * 9;
      const sparkGrad = ctx.createRadialGradient(spark.x, spark.y, 0, spark.x, spark.y, sparkGlow);
      const isCyan = idx % 2 === 1;
      const sparkCol = isCyan ? "56, 189, 248" : "250, 204, 21";

      sparkGrad.addColorStop(0, "#FFFFFF");
      sparkGrad.addColorStop(0.4, `rgba(${sparkCol}, ${0.85 + surgeIntensity * 0.15})`);
      sparkGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = sparkGrad;
      ctx.beginPath();
      ctx.arc(spark.x, spark.y, sparkGlow, 0, Math.PI * 2);
      ctx.fill();
    });

    // 3. Poussières cybernétiques et particules quantiques en sustentation
    particles.forEach((p) => {
      p.y -= p.speed;
      p.x += Math.sin(time * 2 + p.angleOffset) * 0.35;
      if (p.y < H * 0.15) {
        p.y = H * 0.95;
        p.x = W * 0.15 + Math.random() * W * 0.7;
      }

      ctx.save();
      ctx.globalAlpha = p.alpha * (0.5 + Math.sin(time * 3 + p.angleOffset) * 0.5);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size + surgeIntensity * 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    rafId = requestAnimationFrame(renderVideoLoop);
  }

  // Contrôle de visibilité et pause quand l'onglet est inactif
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    } else if (rafId === null && !REDUCED_MOTION) {
      rafId = requestAnimationFrame(renderVideoLoop);
    }
  });

  if (!REDUCED_MOTION) {
    rafId = requestAnimationFrame(renderVideoLoop);
  }
}

/**
 * =========================================================================
 * 2e. TILT 3D HOLOGRAPHIQUE SUR LA CARTE PROFIL HERO
 * =========================================================================
 */
function initHologramCardTilt() {
  if (!FINE_POINTER || REDUCED_MOTION || window.innerWidth < 992) return;
  const stage = document.querySelector(".hologram-card-stage");
  const card = document.querySelector(".hologram-card");
  const glare = document.querySelector(".hologram-glare");
  if (!stage || !card) return;

  stage.addEventListener("mousemove", (e) => {
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -8;
    const rotY = ((x - cx) / cx) * 8;

    card.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
    if (glare) {
      glare.style.background = `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(255,255,255,0.22) 0%, rgba(212,175,55,0.12) 35%, transparent 70%)`;
      glare.style.opacity = "1";
    }
  }, { passive: true });

  stage.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    if (glare) glare.style.opacity = "0";
  });
}

/**
 * =========================================================================
 * 3b. HUD DE PROGRESSION DE L'ODYSSÉE & INTERACTIONS 3D
 * =========================================================================
 */
function initOdysseyHUD() {
  const progressFill = document.getElementById("odysseyProgressFill");
  const chapterCodeEl = document.getElementById("hudChapterCode");
  const chapterTitleEl = document.getElementById("hudChapterTitle");
  const warpBtn = document.getElementById("warpBoostBtn");

  const chapterMeta = {
    hero: { code: "00", title: "PROLOGUE // LE PILOTE" },
    "a-propos": { code: "01", title: "ACTE I // L'ORIGINE" },
    workflow: { code: "02", title: "ACTE II // LE RITUEL" },
    distinctions: { code: "03", title: "ACTE III // LES ARÈNES" },
    projets: { code: "04", title: "ACTE IV // LES MISSIONS" },
    competences: { code: "05", title: "ACTE V // L'ARSENAL" },
    contact: { code: "06", title: "ÉPILOGUE // L'ALLIANCE" }
  };

  const sections = document.querySelectorAll("section[id]");
  let hudTicking = false;

  function updateHudProgress() {
    hudTicking = false;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const pct = Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100));
    if (progressFill) {
      progressFill.style.width = `${pct.toFixed(1)}%`;
    }

    let currentId = "hero";
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 180) {
        currentId = sec.id;
      }
    });
    if (sections.length && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 40) {
      currentId = sections[sections.length - 1].id;
    }

    const meta = chapterMeta[currentId];
    if (meta) {
      if (chapterCodeEl) chapterCodeEl.textContent = meta.code;
      if (chapterTitleEl) chapterTitleEl.textContent = meta.title;
    }
  }

  window.addEventListener("scroll", () => {
    if (!hudTicking) {
      hudTicking = true;
      requestAnimationFrame(updateHudProgress);
    }
  }, { passive: true });
  updateHudProgress();

  // Bouton Hyperdrive / Boost 3D
  if (warpBtn) {
    warpBtn.addEventListener("click", () => {
      window.__portfolio3D?.triggerWarp();
      warpBtn.classList.add("warping");
      setTimeout(() => warpBtn.classList.remove("warping"), 900);
      if (typeof playSoundHaptic === "function") playSoundHaptic(523.25, "sawtooth", 0.22, 0.04);
      showToastMessage("Hyperdrive 3D activé — Exploration stellaire !");
    });
  }

  // Interaction des 4 Pôles avec les Planètes 3D (souris + clavier WCAG)
  document.querySelectorAll(".planet-lore-item[data-planet]").forEach((item) => {
    const planetKey = item.getAttribute("data-planet");
    const triggerPulse = () => {
      if (planetKey) window.__portfolio3D?.focusPlanet(planetKey);
    };
    const activatePlanet = () => {
      triggerPulse();
      window.__portfolio3D?.triggerWarp();
      if (typeof playSoundHaptic === "function") playSoundHaptic(659.25, "sine", 0.14, 0.035);
    };
    item.addEventListener("mouseenter", triggerPulse);
    item.addEventListener("focus", triggerPulse);
    item.addEventListener("click", activatePlanet);
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activatePlanet();
      }
    });
  });
}

/**
 * =========================================================================
 * 2. TÉLÉMÉTRIE HUD EN TEMPS RÉEL (Horloge, Coordonnées, Latence)
 * =========================================================================
 */
function initHUDTelemetry() {
  const clockEl = document.getElementById("hudClock");
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    const utcHours = String(now.getUTCHours()).padStart(2, "0");
    const utcMinutes = String(now.getUTCMinutes()).padStart(2, "0");
    const utcSeconds = String(now.getUTCSeconds()).padStart(2, "0");
    if (clockEl) {
      clockEl.textContent = `${utcHours}:${utcMinutes}:${utcSeconds} UTC`;
    }
  }

  updateClock();
  setInterval(updateClock, 1000);


}

/**
 * =========================================================================
 * 3. CURSEUR MAGNÉTIQUE CYBER-LUXE
 * =========================================================================
 */
function initCustomCursor() {
  const cursor = document.getElementById("customCursor");
  const dot = document.getElementById("customCursorDot");
  if (!cursor || !dot || !FINE_POINTER || REDUCED_MOTION || window.innerWidth < 992) {
    if (cursor) cursor.style.display = "none";
    if (dot) dot.style.display = "none";
    return;
  }

  let mouseX = -100, mouseY = -100;
  let curX = -100, curY = -100;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  }, { passive: true });

  function renderCursor() {
    curX += (mouseX - curX) * 0.22;
    curY += (mouseY - curY) * 0.22;
    cursor.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Délégation d'événements : fonctionne aussi pour les cartes projets re-rendues par les filtres
  const hoverTargets = "a, button, .project-card, .workflow-step, .distinction-card, .skill-chip";
  document.addEventListener("mouseover", (e) => {
    document.body.classList.toggle("cursor-hover", !!e.target.closest(hoverTargets));
  });
}

/**
 * =========================================================================
 * 4. MACHINE À ÉCRIRE CINÉTIQUE DU HERO (Text Morphing)
 * =========================================================================
 */
function initKineticTypewriter() {
  const target = document.getElementById("kineticRoleText");
  if (!target) return;

  const roles = [
    "Étudiant en Génie Logiciel (IIT Grand-Bassam)",
    "Concepteur d'Architectures Logicielles & Systèmes",
    "Développeur Mobile Flutter & Dart",
    "Solutions AgriTech & Intégration IA",
    "Double Lauréat Hackathons 2026"
  ];

  // Mouvement réduit : texte statique, pas d'effet machine à écrire
  if (REDUCED_MOTION) {
    target.textContent = roles[0];
    target.style.animation = "none";
    return;
  }

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function loop() {
    const fullText = roles[roleIdx];
    if (isDeleting) {
      target.textContent = fullText.substring(0, charIdx - 1);
      charIdx--;
    } else {
      target.textContent = fullText.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 25 : 60;

    if (!isDeleting && charIdx === fullText.length) {
      speed = 2400; // Pause lecture
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 400;
    }

    setTimeout(loop, speed);
  }

  loop();
}

/**
 * =========================================================================
 * 5. SIMULATEUR DE TERMINAL COMPILATION EN DIRECT & ONGLETS INTERACTIFS
 * =========================================================================
 */
function initLiveCodeTerminal() {
  const terminalLog = document.getElementById("liveTerminalLog");
  const tabBtns = document.querySelectorAll(".terminal-tab-btn");
  const fileTitleEl = document.getElementById("terminalFileTitle");
  const copyBtn = document.getElementById("btnCopyTerminalCode");
  const cliInput = document.getElementById("terminalCliInput");
  const cliSubmit = document.getElementById("terminalCliSubmit");
  const pillBtns = document.querySelectorAll(".cli-pill-btn");
  if (!terminalLog) return;

  const fileTitles = {
    all: "portfolio / exemples / presentation.dart",
    koa: "agrivo / idee / assistance_agricole.py",
    db: "exemples / modele_relationnel.sql",
    fintech: "synerpay / concept / parcours_paiement.dart",
    cli: "demo / terminal-interactif"
  };

  const demoCatalog = {
    all: `<span class="code-comment">// Exemple illustratif — ce code n’est pas exécuté</span>
<span class="code-keyword">final</span> projet = {
  nom: <span class="code-string">"Portfolio de Christ Esli"</span>,
  formation: <span class="code-string">"Génie logiciel — IIT"</span>,
  technologies: [<span class="code-string">"Flutter"</span>, <span class="code-string">"Dart"</span>, <span class="code-string">"Python"</span>]
};
<span class="code-func">print</span>(<span class="code-string">"Projets et prototypes présentés dans ce portfolio."</span>);`,

    koa: `<span class="code-comment"># KÔA AI — idée d’assistance agricole en exploration</span>
<span class="code-comment"># Exemple illustratif : aucune analyse d’image n’est exécutée.</span>
question = <span class="code-string">"Comment faciliter l’accès à des informations agricoles ?"</span>
langues_envisagees = [<span class="code-string">"Français"</span>, <span class="code-string">"langues locales"</span>]
<span class="code-func">print</span>(<span class="code-string">"Piste de conception à approfondir avec les utilisateurs."</span>)`,

    db: `<span class="code-comment">-- Exemple de modèle relationnel, sans connexion réelle</span>
<span class="code-keyword">CREATE TABLE</span> commandes (
  id <span class="code-keyword">INTEGER PRIMARY KEY</span>,
  nom_client <span class="code-keyword">VARCHAR</span>(100),
  statut <span class="code-keyword">VARCHAR</span>(30)
);
<span class="code-comment">-- Structure illustrative à adapter au besoin du projet.</span>`,

    fintech: `<span class="code-comment">// Synerpay — concept de parcours de paiement</span>
<span class="code-comment">// Démonstration d’interface, sans transaction réelle.</span>
<span class="code-keyword">final</span> etapes = [
  <span class="code-string">"Choisir un service"</span>,
  <span class="code-string">"Vérifier le montant"</span>,
  <span class="code-string">"Confirmer le paiement"</span>
];
<span class="code-func">print</span>(<span class="code-string">"Prototype à valider avec les utilisateurs."</span>);`,

    cli: `<span class="cli-out-gold">Antigravity / Linux 6.8.0-eece-generic (x86_64)</span>
<span class="code-comment">Session active pour EZOUA EMIAN CHRIST ESLI (IIT Grand-Bassam).</span>
Tapez <span class="cli-out-accent">'help'</span> ou cliquez sur les touches ci-dessous pour lancer une commande.
`
  };

  let cliHistory = demoCatalog.cli;
  let activeKey = "all";
  let autoTimer = null;
  const snippetKeys = ["all", "koa", "db", "fintech"];
  let keyIndex = 0;

  function setSnippet(key) {
    activeKey = key;
    terminalLog.style.opacity = "0.3";
    if (fileTitleEl && fileTitles[key]) {
      fileTitleEl.textContent = fileTitles[key];
    }

    setTimeout(() => {
      if (key === "cli") {
        terminalLog.innerHTML = cliHistory;
        terminalLog.scrollTop = terminalLog.scrollHeight;
      } else {
        terminalLog.innerHTML = demoCatalog[key] || demoCatalog.all;
      }
      terminalLog.style.opacity = "1";
    }, 120);

    tabBtns.forEach((btn) => {
      const selected = btn.getAttribute("data-action") === key;
      btn.classList.toggle("active", selected);
      btn.setAttribute("aria-selected", String(selected));
      btn.setAttribute("tabindex", selected ? "0" : "-1");
    });
  }

  function stopAutoRotate() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  // Clic onglets
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-action");
      if (action && (demoCatalog[action] || action === "cli")) {
        setSnippet(action);
        if (typeof playSoundHaptic === "function") playSoundHaptic(660, "sine", 0.08, 0.03);
        stopAutoRotate();
      }
    });
  });

  // Copie du code
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const textToCopy = terminalLog.textContent || terminalLog.innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const toast = document.getElementById("toastNotice");
        if (toast) {
          toast.textContent = "Code source copié dans le presse-papier !";
          toast.classList.add("show");
          setTimeout(() => toast.classList.remove("show"), 2800);
        }
        if (typeof playSoundHaptic === "function") playSoundHaptic(880, "triangle", 0.12, 0.04);
      }).catch(() => {});
    });
  }

  // Traitement des commandes CLI
  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function executeCliCommand(rawCmd) {
    stopAutoRotate();
    const cmd = (rawCmd || "").trim().toLowerCase();
    if (!cmd) return;
    const safeCmd = escapeHtml(rawCmd);

    if (activeKey !== "cli") {
      activeKey = "cli";
      setSnippet("cli");
    }

    let response = "";
    if (cmd === "help") {
      response = `
<span class="cli-out-gold">COMMANDES DISPONIBLES :</span>
  <span class="cli-out-accent">skills</span>       - Technologies et outils présentés
  <span class="cli-out-accent">projects</span>     - Liste des projets et prototypes présentés
  <span class="cli-out-accent">architecture</span> - Quelques notions et outils étudiés
  <span class="cli-out-accent">stats</span>        - Formation et distinctions présentées
  <span class="cli-out-accent">git status</span>   - Exemple de réponse simulée
  <span class="cli-out-accent">git log</span>      - Exemple de réponse simulée
  <span class="cli-out-success">contact-stage</span> - Ouvrir le contact WhatsApp
  <span class="cli-out-accent">clear</span>        - Nettoyer le terminal
`;
    } else if (cmd === "skills" || cmd === "cat skills" || cmd === "ezoua --skills") {
      response = `
<span class="cli-out-gold">[ARSENAL D'INGÉNIERIE LOGICIELLE]</span>
<span class="cli-out-accent">• Mobile &amp; Client :</span> Flutter, Dart et interfaces mobiles
<span class="cli-out-accent">• Backend &amp; Data :</span> Python, JavaScript, Firebase, PostgreSQL, API REST
<span class="cli-out-accent">• IA &amp; Data Science :</span> Exploration de l’IA et projets numériques
<span class="cli-out-accent">• DevOps &amp; Outils :</span> Git / GitHub, Figma, VS Code, Cloudflare
`;
    } else if (cmd === "projects" || cmd === "ls -la" || cmd === "ezoua --projects") {
      response = `
<span class="cli-out-gold">[PROJETS ET PROTOTYPES PRÉSENTÉS]</span>
1. <span class="cli-out-accent">CodeLingo</span>      [Flutter + Firebase]      -> Projet d’application mobile éducative
2. <span class="cli-out-accent">Agrivo</span>         [Concept agricole]       -> Piste de service agricole
3. <span class="cli-out-accent">AgriOS / KÔA</span>   [Concept en exploration] -> Idée d’assistance agricole
4. <span class="cli-out-accent">Bread+</span>         [Prototype]               -> Gestion de commandes
5. <span class="cli-out-accent">Synerpay</span>       [Concept]                 -> Parcours de paiement
6. <span class="cli-out-accent">Global Tech</span>    [Expérience web]          -> Création et adaptation de sites
`;
    } else if (cmd === "architecture" || cmd === "arch") {
      response = `
<span class="cli-out-gold">[NOTIONS ET OUTILS]</span>
• Conception d’interfaces et développement mobile avec Flutter / Dart.
• Données, API REST, UML et bases relationnelles parmi les sujets explorés.
• Les détails de chaque projet sont présentés dans les cartes du portfolio.
`;
    } else if (cmd === "stats" || cmd === "whoami") {
      response = `
<span class="cli-out-gold">[PARCOURS]</span>
• Nom : <span class="cli-out-accent">EZOUA EMIAN CHRIST ESLI</span>
• Formation : <span class="cli-out-accent">Licence 2 Génie Logiciel</span> @ IIT Côte d'Ivoire (Grand-Bassam)
• Palmarès : <span class="cli-out-success">2ᵉ Place Hackathon IIT 2026</span> • <span class="cli-out-success">3ᵉ Place Vibeathon 2026</span>
• Disponibilité : <span class="cli-out-gold">Prêt pour stage d'ingénierie logicielle (2026-2027)</span>
`;
    } else if (cmd === "git status") {
      response = `
<span class="cli-out-gold">Démo interactive :</span> ce terminal n’est relié à aucun dépôt Git.
Aucun état de branche ou de fichiers n’est consulté.
`;
    } else if (cmd === "git log") {
      response = `\n<span class="cli-out-gold">Démo interactive :</span> aucun historique Git réel n’est chargé.\n`;
    } else if (cmd === "contact-stage" || cmd.includes("hire")) {
      window.__portfolio3D?.triggerWarp();
      response = `
<span class="cli-out-success">[CONTACT] Préparation de votre message WhatsApp.</span>
✓ Profil : <span class="cli-out-gold">EZOUA EMIAN CHRIST ESLI — Génie Logiciel IIT Grand-Bassam</span>
✓ Un nouvel onglet WhatsApp va s’ouvrir. Vous pourrez modifier le message avant de l’envoyer.
`;
      setTimeout(() => {
        window.open("https://wa.me/2250161407064?text=" + encodeURIComponent("Bonjour, je souhaite échanger avec vous au sujet de votre portfolio."), "_blank");
      }, 2000);
    } else if (cmd === "clear" || cmd === "cls") {
      cliHistory = `<span class="cli-out-gold">Session nettoyée.</span> Tapez 'help' pour les commandes disponibles.\n`;
      terminalLog.innerHTML = cliHistory;
      return;
    } else {
      response = `
<span class="cli-out-err">Commande non reconnue: '${safeCmd}'.</span> Tapez <span class="cli-out-accent">'help'</span> pour la liste des commandes.
`;
    }

    cliHistory += `\n<span class="cli-prompt-user">esli@iit-dev:~$</span> <span style="color:#FFFFFF;">${safeCmd}</span>\n${response}`;
    terminalLog.innerHTML = cliHistory;
    terminalLog.scrollTop = terminalLog.scrollHeight;
    if (typeof playSoundHaptic === "function") playSoundHaptic(750, "sine", 0.06, 0.02);
  }

  if (cliSubmit && cliInput) {
    cliSubmit.addEventListener("click", () => {
      executeCliCommand(cliInput.value);
      cliInput.value = "";
    });
    cliInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        executeCliCommand(cliInput.value);
        cliInput.value = "";
      }
    });
  }

  pillBtns.forEach((pill) => {
    pill.addEventListener("click", () => {
      const cmd = pill.getAttribute("data-cmd");
      if (cmd) executeCliCommand(cmd);
    });
  });

  function rotate() {
    if (document.hidden || activeKey === "cli") return;
    keyIndex = (keyIndex + 1) % snippetKeys.length;
    setSnippet(snippetKeys[keyIndex]);
  }

  setSnippet("all");
  if (!REDUCED_MOTION) {
    autoTimer = setInterval(rotate, 6500);
    const terminal = terminalLog.closest(".hero-code-terminal");
    if (terminal) {
      terminal.addEventListener("mouseenter", () => { if (autoTimer) clearInterval(autoTimer); });
      terminal.addEventListener("mouseleave", () => { if (autoTimer && activeKey !== "cli") autoTimer = setInterval(rotate, 6500); });
      terminal.addEventListener("focusin", stopAutoRotate);
    }
  }
}

/**
 * =========================================================================
 * 6. SYNTHÉTISEUR AUDIO LUXE (Web Audio API Haptics)
 * =========================================================================
 */
let audioCtx = null;
let soundActive = false;

function playSoundHaptic(freq, type = "sine", duration = 0.12, gainLvl = 0.04) {
  if (!soundActive) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(gainLvl, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

function initAudioSynthesizer() {
  const toggleBtn = document.getElementById("soundToggleBtn");
  if (!toggleBtn) return;

  const svgMute = `<svg class="svg-icon" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
  const svgUnmute = `<svg class="svg-icon" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;

  toggleBtn.addEventListener("click", () => {
    soundActive = !soundActive;
    toggleBtn.innerHTML = soundActive ? svgUnmute : svgMute;
    hideDecorativeIcons(toggleBtn);
    toggleBtn.title = soundActive ? "Couper le son haptique" : "Activer les effets sonores d'immersion";
    toggleBtn.setAttribute("aria-pressed", String(soundActive));
    toggleBtn.classList.toggle("active", soundActive);
    if (soundActive) {
      playSoundHaptic(587.33, "sine", 0.2, 0.06);
    }
  });

  // Délégation : couvre aussi les éléments injectés dynamiquement (cartes filtrées, modale)
  const soundTargets = ".btn, .filter-btn, .project-card, .distinction-card, .terminal-tab-btn";
  let lastHovered = null;
  document.addEventListener("mouseover", (e) => {
    const el = e.target.closest(soundTargets);
    if (el && el !== lastHovered) playSoundHaptic(440, "sine", 0.06, 0.015);
    lastHovered = el;
  });
  document.addEventListener("click", (e) => {
    if (e.target.closest(soundTargets)) playSoundHaptic(880, "triangle", 0.12, 0.035);
  });
}

/**
 * =========================================================================
 * 7. WORKFLOW D'INGÉNIERIE LOGICIELLE (Les 4 Épreuves du Bâtisseur)
 * =========================================================================
 */
function initWorkflow() {
  const container = document.getElementById("workflowGrid");
  if (!container) return;

  const steps = [
    {
      num: "ÉPREUVE 01",
      iconSvg: `<svg class="svg-icon svg-icon-md" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
      titre: "Comprendre le besoin",
      desc: "Clarifier le besoin, les utilisateurs concernés et les fonctionnalités attendues."
    },
    {
      num: "ÉPREUVE 02",
      iconSvg: `<svg class="svg-icon svg-icon-md" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
      titre: "Préparer la conception",
      desc: "Organiser les idées, les écrans et les données utiles au projet."
    },
    {
      num: "ÉPREUVE 03",
      iconSvg: `<svg class="svg-icon svg-icon-md" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      titre: "Construire un prototype",
      desc: "Réaliser une première version, puis la faire évoluer selon les retours."
    },
    {
      num: "ÉPREUVE 04",
      iconSvg: `<svg class="svg-icon svg-icon-md" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`,
      titre: "Le Bouclier &amp; Déploiement",
      desc: "Verrouiller la sécurité transactionnelle, auditer les versions sous Git/GitHub et propulser la solution sur le cloud mondial via Cloudflare."
    }
  ];

  container.innerHTML = "";
  steps.forEach((st) => {
    const card = document.createElement("div");
    card.className = "workflow-step";
    card.innerHTML = `
      <div class="step-number">${st.num}</div>
      <div class="step-icon-wrap">${st.iconSvg}</div>
      <h3 class="step-title">${st.titre}</h3>
      <p class="step-desc">${st.desc}</p>
    `;
    container.appendChild(card);
  });
}

/**
 * =========================================================================
 * 8. PROJETS MAJEURS AVEC 3D TILT GYROSCOPIQUE (Les Grandes Expéditions)
 * =========================================================================
 */
function initProjects(config) {
  const container = document.getElementById("projectsGrid");
  if (!container) return;

  const projectImages = {
    codelingo: "assets/images/project-codelingo.jpg",
    agrivo: "assets/images/project-agrivo.jpg",
    "agrios-koa-ai": "assets/images/project-agrios.jpg",
    "bread-plus": "assets/images/project-boulangerie.svg",
    synerpay: "assets/images/project-synerpay.svg",
    "global-tech-synergie": "assets/images/project-synergie.svg"
  };

  function render(filter = "all") {
    container.innerHTML = "";
    const filtered = config.projets.filter((p) => {
      if (filter === "all") return true;
      if (filter === "mobile")
        return p.stack.some((s) => ["Flutter", "Dart"].includes(s)) || p.categorie.toLowerCase().includes("mobile");
      if (filter === "ia")
        return p.stack.some((s) => s.toLowerCase().includes("ia") || s.toLowerCase().includes("intelligence"));
      if (filter === "web")
        return (
          p.stack.some((s) => ["Web", "Web & Mobile", "Déploiement Web", "HTML / CSS / JS", "WordPress"].includes(s)) ||
          p.categorie.toLowerCase().includes("web")
        );
      if (filter === "fintech")
        return p.categorie.toLowerCase().includes("fintech") || p.tag.toLowerCase().includes("fintech");
      return true;
    });

    filtered.forEach((p) => {
      const card = document.createElement("article");
      card.className = "project-card";
      const imgSrc = projectImages[p.id] || "assets/images/project-codelingo.jpg";

      card.innerHTML = `
        <div class="card-glare"></div>
        <div class="project-thumb">
          <div class="device-mockup-bar">
            <span class="device-time">09:41</span>
            <span class="device-notch"></span>
            <div class="device-status-icons">
              <span class="device-status-dot"></span>
              <span class="device-status-dot" style="background:#4ADE80;"></span>
            </div>
          </div>
          <img src="${imgSrc}" alt="Aperçu visuel de la mission ${p.titre}" loading="lazy" decoding="async" width="800" height="500" />
          <span class="project-badge-overlay">${p.badge}</span>
          <span class="live-stream-badge">${p.badge || "PROJET"}</span>
        </div>
        <div class="project-body">
          <div class="project-dev-strip">
            <span class="project-arch-tag">${p.architecture || "Projet en exploration"}</span>
            <span class="project-dev-metric">${p.devMetric || "Prototype"}</span>
          </div>
          <span class="project-cat">${p.categorie}</span>
          <h3 class="project-title">${p.titre}</h3>
          <p style="font-size: 0.82rem; color: var(--gold-light); margin-bottom: 0.5rem; font-weight: 700;">${p.sousTitre}</p>
          <p class="project-summary">${p.descriptionCourte}</p>
          <div class="project-tags">
            ${p.stack.map((s) => `<span class="tech-tag">${s}</span>`).join("")}
          </div>
          <div class="project-footer">
            <button type="button" class="btn-detail" data-project-id="${p.id}" aria-haspopup="dialog" aria-label="Consulter les détails d'ingénierie de la mission ${p.titre}">
              <span>Voir le détail</span>
              <svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <div style="display:flex; align-items:center; gap:8px;">
              <a href="${config.contacts.github}" target="_blank" rel="noopener" class="btn-github-inline" title="Consulter le profil GitHub de Christ" aria-label="Profil GitHub du projet">
                <svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <span style="font-family: var(--font-mono); font-size: 0.74rem; color: var(--gold-primary); font-weight: 800;">${p.annee}</span>
            </div>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    container.querySelectorAll(".btn-detail").forEach((btn) => {
      btn.addEventListener("click", () => {
        const pId = btn.getAttribute("data-project-id");
        openProjectModal(pId, config, btn);
      });
    });

    apply3DTilt(container.querySelectorAll(".project-card"));

    // Annonce du nombre de résultats aux lecteurs d'écran
    const countEl = document.getElementById("projectsCount");
    if (countEl) countEl.textContent = `${filtered.length} mission${filtered.length > 1 ? "s" : ""} affichée${filtered.length > 1 ? "s" : ""}.`;

    // Apparition échelonnée des cartes après filtrage
    if (!REDUCED_MOTION) {
      container.querySelectorAll(".project-card").forEach((card, i) => {
        card.animate(
          [{ opacity: 0, transform: "translateY(16px) scale(0.97)" }, { opacity: 1, transform: "none" }],
          { duration: 400, delay: i * 60, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "backwards" }
        );
      });
    }
  }

  render("all");

  // Interactions de filtrage et ouverture de modale propulsées par jQuery (avec fallback natif)
  if (window.jQuery) {
    const $ = window.jQuery;
    $(".filter-btn").on("click", function () {
      const $btn = $(this);
      $(".filter-btn").removeClass("active").attr("aria-pressed", "false");
      $btn.addClass("active").attr("aria-pressed", "true");
      render($btn.data("filter"));
    });
  } else {
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach((b) => {
          b.classList.remove("active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
        const f = btn.getAttribute("data-filter");
        render(f);
      });
    });
  }
}

function apply3DTilt(cards) {
  if (window.innerWidth < 992 || !FINE_POINTER || REDUCED_MOTION) return;

  cards.forEach((card) => {
    const glare = card.querySelector(".card-glare");

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;

      if (glare) {
        glare.style.background = `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(255,255,255,0.25) 0%, rgba(212,175,55,0.12) 40%, transparent 75%)`;
      }
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
      if (glare) glare.style.background = `none`;
    });
  });
}

/**
 * =========================================================================
 * 9. DISTINCTIONS & HACKATHONS 2026 (Les Arènes Stellaires)
 * =========================================================================
 */
function initDistinctions(config) {
  const container = document.getElementById("distinctionsGrid");
  if (!container || !config.distinctions) return;

  container.innerHTML = "";
  config.distinctions.forEach((item) => {
    const card = document.createElement("div");
    card.className = "distinction-card";
    card.innerHTML = `
      <div class="distinction-header">
        <span class="distinction-badge">
          <svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
          <span>${item.badge}</span>
        </span>
        <span class="distinction-year">${item.annee} • ${item.missionCode || "DÉFI"}</span>
      </div>
      <h3 class="distinction-title">${item.titre}</h3>
      <p class="distinction-org">${item.organisation} • <span style="color: var(--gold-warm); font-weight: 700;">${item.epreuve || "Sprint 48h"}</span></p>
      <p class="distinction-desc">${item.description}</p>
    `;
    container.appendChild(card);
  });
}

/**
 * =========================================================================
 * 10. COMPÉTENCES CATÉGORISÉES DU CV
 * =========================================================================
 */
function initSkills(config) {
  const container = document.getElementById("skillsCategorized");
  if (!container || !config.competences) return;

  const cats = [
    {
      titre: "Mobile Cross-Platform & Client",
      iconSvg: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      items: ["Flutter", "Dart", "Développement mobile", "Conception d’interfaces"]
    },
    {
      titre: "Backend, Données & Architecture",
      iconSvg: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
      items: ["Python", "JavaScript", "PostgreSQL", "Modélisation UML", "API REST", "Firebase"]
    },
    {
      titre: "Intelligence Artificielle & Vision",
      iconSvg: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>`,
      items: ["Exploration de l’intelligence artificielle", "Projets numériques", "Prototypage"]
    },
    {
      titre: "DevOps, Outils & Méthodes",
      iconSvg: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
      items: ["Git / GitHub", "VS Code", "Figma", "Cloudflare", "WordPress"]
    }
  ];

  container.innerHTML = "";
  cats.forEach((c) => {
    const box = document.createElement("div");
    box.className = "skill-cat-box";
    box.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1rem;">
        <span style="color: var(--gold-primary); display: inline-flex;">${c.iconSvg}</span>
        <h3 class="skill-cat-title" style="margin-bottom: 0;">${c.titre}</h3>
      </div>
      <div class="skill-chips-wrap">
        ${c.items.map((it) => `<span class="skill-chip">${it}</span>`).join("")}
      </div>
    `;
    container.appendChild(box);
  });
}

/**
 * =========================================================================
 * 11. MODALE PROJET
 * =========================================================================
 */
let modalReturnFocus = null;

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  if (!modal || !modal.classList.contains("active")) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  document.getElementById("mainContent")?.removeAttribute("inert");
  // Restitution du focus à l'élément déclencheur (UX : focus management)
  if (modalReturnFocus && document.contains(modalReturnFocus)) modalReturnFocus.focus();
  modalReturnFocus = null;
}

function initProjectModal(config) {
  const modal = document.getElementById("projectModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", closeProjectModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeProjectModal();
    if (e.target.closest("[data-modal-close]")) closeProjectModal();
  });
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") {
      closeProjectModal();
      return;
    }
    // Piège de focus : Tab reste à l'intérieur de la modale
    if (e.key === "Tab") {
      const focusables = modal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

function openProjectModal(projectId, config, trigger) {
  const modal = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalDynamicContent");
  if (!modal || !modalContent) return;

  const project = config.projets.find((p) => p.id === projectId);
  if (!project) return;

  modalReturnFocus = trigger || document.activeElement;

  modalContent.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 8px;">
      <span class="adventure-badge">${project.badge || "PROJET"}</span>
      <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--gold-light);">${project.annee}</span>
    </div>
    <h2 class="section-title" id="modalProjectTitle" style="margin-bottom: 0.2rem;">${project.titre}</h2>
    <p style="color: var(--gold-light); font-size: 1.1rem; font-weight: 700; margin-bottom: 1.2rem;">${project.sousTitre}</p>

    <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 1.5rem;">
      <span class="hud-live-badge"><span>STATUT : ${project.statut}</span></span>
      <span class="hud-live-badge" style="border-color: var(--border-gold); color: var(--gold-light);"><span>DOMAINE : ${project.tag}</span></span>
      ${project.roleDev ? `<span class="hud-live-badge" style="border-color: rgba(56, 189, 248, 0.4); color: #38BDF8;"><span>RÔLE : ${project.roleDev}</span></span>` : ""}
      ${project.architecture ? `<span class="hud-live-badge" style="border-color: rgba(74, 222, 128, 0.4); color: #4ADE80;"><span>ORIENTATION : ${project.architecture}</span></span>` : ""}
      ${project.devMetric ? `<span class="hud-live-badge" style="border-color: rgba(255, 30, 86, 0.4); color: #FF4D6D;"><span>OUTILS / AXES : ${project.devMetric}</span></span>` : ""}
    </div>

    ${project.aventureExplication ? `
      <div style="background: rgba(212, 175, 55, 0.06); border: 1px solid rgba(212, 175, 55, 0.25); border-left: 3px solid var(--gold-primary); padding: 1.1rem 1.3rem; border-radius: 0 var(--radius-sm) var(--radius-sm) 0; margin-bottom: 1.6rem;">
        <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--gold-warm); text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px; font-weight: 800;">// CONTEXTE DU PROJET :</span>
        <p style="font-size: 0.95rem; color: #FFFFFF; line-height: 1.6; margin: 0;">${project.aventureExplication}</p>
      </div>
    ` : ""}

    <div style="color: var(--text-main); font-size: 1.05rem; line-height: 1.8; margin-bottom: 1.8rem;">
      ${project.descriptionLongue}
    </div>

    <h4 style="font-family: var(--font-display); color: var(--gold-light); font-size: 1.15rem; margin-bottom: 0.8rem;">
      Ce que couvre le projet :
    </h4>
    <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 1.8rem;">
      ${project.pointsForts
        .map(
          (pt) => `
        <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; color: var(--text-muted);">
          <svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24" aria-hidden="true" style="color: var(--gold-primary); margin-top: 4px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${pt}</span>
        </li>
      `
        )
        .join("")}
    </ul>

    <h4 style="font-family: var(--font-display); color: var(--gold-light); font-size: 1.15rem; margin-bottom: 0.8rem;">
      Technologies mobilisées :
    </h4>
    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 2rem;">
      ${project.stack.map((s) => `<span class="tech-tag" style="padding: 6px 14px; font-size: 0.85rem;">${s}</span>`).join("")}
    </div>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem;">
      <a href="https://wa.me/${config.contacts.whatsappNumero}?text=${encodeURIComponent(
    `Bonjour M. EZOUA, j'aimerais échanger au sujet de la mission ${project.titre}.`
  )}" target="_blank" rel="noopener" class="btn btn-gold">
        <span>Discuter de cette mission sur WhatsApp</span>
        <svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
      <a href="${config.contacts.github}" target="_blank" rel="noopener" class="btn btn-outline-gold">
        <svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        <span>Consulter GitHub</span>
      </a>
      <button type="button" class="btn btn-outline-gold" data-modal-close>
        Fermer la fiche
      </button>
    </div>
  `;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("mainContent")?.setAttribute("inert", "");
  modal.querySelector(".modal-content").scrollTop = 0;
  document.getElementById("modalCloseBtn")?.focus();
}

/**
 * =========================================================================
 * 12. PRESSE-PAPIER & NOTIFICATION TOAST
 * =========================================================================
 */
function initClipboardButtons() {
  const toast = document.getElementById("toastNotice");

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3200);
  }

  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-copy-target");
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      const textToCopy = targetEl.textContent.trim();
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          showToast(`Copié : ${textToCopy}`);
        })
        .catch(() => {
          showToast(`Information : ${textToCopy}`);
        });
    });
  });
}

/**
 * =========================================================================
 * 13. FORMULAIRE CONTACT DIRECT VERS WHATSAPP
 * =========================================================================
 */
function initContactForm(config) {
  const form = document.getElementById("portfolioContactForm");
  if (!form) return;

  const fields = [
    { el: document.getElementById("senderName"), err: document.getElementById("senderNameError"), msg: "Indiquez votre nom ou celui de votre entreprise." },
    { el: document.getElementById("senderMessage"), err: document.getElementById("senderMessageError"), msg: "Écrivez un message (au moins 10 caractères).", min: 10 }
  ];

  function validateField(f) {
    const value = f.el.value.trim();
    const ok = value.length >= (f.min || 1);
    f.el.setAttribute("aria-invalid", String(!ok));
    if (f.err) f.err.textContent = ok ? "" : f.msg;
    return ok;
  }

  // Validation inline au blur, puis en temps réel une fois l'erreur affichée (UX : inline-validation)
  fields.forEach((f) => {
    if (!f.el) return;
    f.el.addEventListener("blur", () => { if (f.el.value.trim()) validateField(f); });
    f.el.addEventListener("input", () => { if (f.el.getAttribute("aria-invalid") === "true") validateField(f); });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nom = document.getElementById("senderName").value.trim();
    const sujet = document.getElementById("senderSubject").value.trim();
    const message = document.getElementById("senderMessage").value.trim();

    const invalid = fields.filter((f) => f.el && !validateField(f));
    if (invalid.length) {
      invalid[0].el.focus();
      return;
    }

    const texteFinal = `Bonjour M. EZOUA,\nJe m'appelle ${nom}.\nObjet : ${sujet || "Opportunité de stage / projet"}\n\n${message}`;
    const whatsappUrl = `https://wa.me/${config.contacts.whatsappNumero}?text=${encodeURIComponent(texteFinal)}`;
    window.open(whatsappUrl, "_blank", "noopener");
  });
}

/**
 * =========================================================================
 * 14. EFFETS DE DÉFILEMENT & HEADER SCROLLED
 * =========================================================================
 */
function initScrollEffects() {
  const header = document.getElementById("siteHeader");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const odysseyNodes = document.querySelectorAll(".odyssey-node-btn");
  let ticking = false;

  function update() {
    ticking = false;
    header.classList.toggle("scrolled", window.scrollY > 40);

    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute("href") === `#${current}`;
      link.classList.toggle("active", isCurrent);
      if (isCurrent) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });

    odysseyNodes.forEach((node) => {
      const isCurrent = node.getAttribute("href") === `#${current}`;
      node.classList.toggle("active", isCurrent);
    });
  }

  // Throttle via requestAnimationFrame (UX : debounce-throttle, main-thread-budget)
  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
}

/**
 * =========================================================================
 * 15. MENU MOBILE ACCESSIBLE
 * =========================================================================
 */
function initMobileMenu() {
  if (window.jQuery) {
    const $ = window.jQuery;
    const $btn = $("#menuToggleBtn");
    const $menu = $("#navMenuList");
    if (!$btn.length || !$menu.length) return;

    function setOpen(open) {
      $menu.toggleClass("is-open", open);
      $btn.attr("aria-expanded", String(open));
      $btn.attr("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    }

    $btn.on("click", () => setOpen(!$menu.hasClass("is-open")));
    $menu.on("click", "a", () => setOpen(false));
    $(document).on("keydown", (e) => {
      if (e.key === "Escape" && $menu.hasClass("is-open")) {
        setOpen(false);
        $btn.trigger("focus");
      }
    });
    $(document).on("click", (e) => {
      if ($menu.hasClass("is-open") && !$(e.target).closest("#siteHeader").length) {
        setOpen(false);
      }
    });
    $(window).on("resize", () => {
      if ($(window).width() > 1120) setOpen(false);
    });
    return;
  }

  const btn = document.getElementById("menuToggleBtn");
  const menu = document.getElementById("navMenuList");
  if (!btn || !menu) return;

  function setOpen(open) {
    menu.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  }

  btn.addEventListener("click", () => setOpen(menu.classList.contains("is-open") === false));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      setOpen(false);
      btn.focus();
    }
  });
  document.addEventListener("click", (e) => {
    if (menu.classList.contains("is-open") && !e.target.closest("#siteHeader")) setOpen(false);
  });
  window.addEventListener("resize", () => { if (window.innerWidth > 1120) setOpen(false); });
}

/**
 * =========================================================================
 * 15b. INTERACTIONS JQUERY (Smooth Scroll & Feedback UI)
 * =========================================================================
 */
function initJQueryInteractions() {
  if (!window.jQuery) return;
  const $ = window.jQuery;

  // Défilement fluide animé vers les sections d'ancres
  $('a[href^="#"]').on("click", function (e) {
    const targetId = $(this).attr("href");
    if (!targetId || targetId === "#") return;
    const $target = $(targetId);
    if (!$target.length) return;

    e.preventDefault();
    const headerOffset = 86;
    const targetTop = Math.max(0, $target.offset().top - headerOffset);
    if (REDUCED_MOTION) {
      window.scrollTo(0, targetTop);
    } else {
      $("html, body").stop(true).animate({ scrollTop: targetTop }, 550);
    }
  });
}

/**
 * =========================================================================
 * 16. RÉVÉLATION AU DÉFILEMENT (IntersectionObserver, stagger léger)
 * =========================================================================
 */
function initScrollReveal() {
  if (REDUCED_MOTION || !("IntersectionObserver" in window)) return;

  const groups = [
    ".section-label, .section-title, .section-desc",
    ".stat-card",
    ".workflow-step",
    ".distinction-card",
    ".skill-cat-box",
    ".contact-card-direct, .contact-form-box"
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });

  groups.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      if (el.closest(".hero-section, .modal-overlay")) return;
      const siblings = Array.from(el.parentElement.children).filter((c) => c.matches(selector));
      el.style.setProperty("--reveal-delay", `${Math.min(siblings.indexOf(el), 5) * 60}ms`);
      el.classList.add("reveal");
      observer.observe(el);
    });
  });
}

/**
 * Tableau d'activité GitHub : navigation par onglets accessible au clavier.
 * Les cartes restent des liens directs vers les pages publiques du profil.
 */
document.addEventListener("DOMContentLoaded", () => {
  const tabs = Array.from(document.querySelectorAll("[data-github-tab]"));
  const panels = Array.from(document.querySelectorAll("[data-github-panel]"));
  if (!tabs.length || !panels.length) return;

  function activateTab(tab, moveFocus = false) {
    const selected = tab.dataset.githubTab;
    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
      item.tabIndex = active ? 0 : -1;
    });
    panels.forEach((panel) => {
      const active = panel.dataset.githubPanel === selected;
      panel.hidden = !active;
    });
    if (moveFocus) tab.focus();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab));
    tab.addEventListener("keydown", (event) => {
      let next = index;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      else return;
      event.preventDefault();
      activateTab(tabs[next], true);
    });
  });
});

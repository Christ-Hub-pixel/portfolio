/**
 * =========================================================================
 * MOTEUR D'ANIMATIONS NEXT-GEN — HAUTE JOAILLERIE QUANTIQUE
 * 1. Portail d'ouverture cinématique (Quantum Iris Reveal)
 * 2. Constellation stellaire interactive + Onde de choc au clic (Canvas 60fps)
 * 3. Décryptage quantique des titres au scroll (Quantum Scramble)
 * 4. Champ magnétique élastique sur les boutons CTA
 * 5. Éclairage liquide dynamique sur les bordures des cartes (Border Spotlight)
 * 6. Inertie cinétique au scroll + Burst de particules sur interactions
 * =========================================================================
 */
(function () {
  "use strict";

  const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FINE_POINTER = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // -----------------------------------------------------------------------
  // 1. PORTAIL D'OUVERTURE CINÉMATIQUE (QUANTUM IRIS REVEAL)
  // -----------------------------------------------------------------------
  function initQuantumIntro() {
    if (REDUCED_MOTION) return;

    const curtain = document.createElement("div");
    curtain.className = "quantum-intro-curtain";
    curtain.setAttribute("aria-hidden", "true");
    curtain.innerHTML = `
      <div class="quantum-intro-core">
        <div class="quantum-ring ring-outer"></div>
        <div class="quantum-ring ring-inner"></div>
        <div class="quantum-monogram">EECE</div>
        <div class="quantum-subline">INITIALISATION DE L'ODYSSÉE</div>
      </div>
    `;
    document.body.appendChild(curtain);

    // Ouverture fluide après 750ms
    setTimeout(() => {
      curtain.classList.add("is-opening");
      document.documentElement.classList.add("quantum-ready");
    }, 750);

    // Suppression propre du DOM après la transition
    setTimeout(() => {
      curtain.remove();
    }, 1750);
  }

  // -----------------------------------------------------------------------
  // 2. CONSTELLATION STELLAIRE & ONDES DE CHOC AU CLIC (CANVAS FX)
  // -----------------------------------------------------------------------
  let spawnBurst = () => {};

  function initConstellationCanvas() {
    if (REDUCED_MOTION) return;

    const canvas = document.createElement("canvas");
    canvas.id = "quantumFxCanvas";
    canvas.className = "quantum-fx-canvas";
    canvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const particles = [];
    const shockwaves = [];
    const MAX_PARTICLES = FINE_POINTER ? 75 : 35;
    let lastX = -999;
    let lastY = -999;
    let animRunning = false;

    const COLORS = [
      { r: 212, g: 175, b: 55 },  // Or impérial
      { r: 245, g: 208, b: 97 },  // Or clair
      { r: 255, g: 30, b: 86 },   // Rubis néon
      { r: 255, g: 255, b: 255 }  // Éclat stellaire
    ];

    function addParticle(x, y, vx, vy, size, life, color) {
      if (particles.length >= MAX_PARTICLES) particles.shift();
      particles.push({ x, y, vx, vy, size, life, maxLife: life, color });
      ensureLoop();
    }

    spawnBurst = function (x, y, count = 18, addRing = true) {
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
        const speed = 1.4 + Math.random() * 4.2;
        const color = COLORS[i % COLORS.length];
        addParticle(
          x,
          y,
          Math.cos(angle) * speed,
          Math.sin(angle) * speed,
          1.4 + Math.random() * 2.2,
          28 + Math.random() * 22,
          color
        );
      }
      if (addRing) {
        shockwaves.push({
          x,
          y,
          radius: 6,
          maxRadius: 92,
          alpha: 0.78,
          color: Math.random() > 0.35 ? "212, 175, 55" : "255, 30, 86"
        });
        ensureLoop();
      }
    };

    if (FINE_POINTER) {
      window.addEventListener(
        "pointermove",
        (e) => {
          const dx = e.clientX - lastX;
          const dy = e.clientY - lastY;
          const dist = Math.hypot(dx, dy);
          if (dist < 10) return;

          lastX = e.clientX;
          lastY = e.clientY;
          const color = Math.random() > 0.25 ? COLORS[0] : COLORS[2];
          addParticle(
            e.clientX + (Math.random() - 0.5) * 4,
            e.clientY + (Math.random() - 0.5) * 4,
            dx * 0.04 + (Math.random() - 0.5) * 0.7,
            dy * 0.04 + (Math.random() - 0.5) * 0.7 - 0.25,
            1.2 + Math.random() * 1.8,
            24 + Math.random() * 18,
            color
          );
        },
        { passive: true }
      );
    }

    window.addEventListener(
      "pointerdown",
      (e) => {
        spawnBurst(e.clientX, e.clientY, FINE_POINTER ? 16 : 10, true);
      },
      { passive: true }
    );

    function ensureLoop() {
      if (!animRunning) {
        animRunning = true;
        requestAnimationFrame(render);
      }
    }

    function render() {
      ctx.clearRect(0, 0, width, height);

      // Dessin des ondes de choc
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += (sw.maxRadius - sw.radius) * 0.14;
        sw.alpha *= 0.89;

        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${sw.color}, ${sw.alpha.toFixed(3)})`;
        ctx.lineWidth = 1.6;
        ctx.stroke();

        if (sw.alpha < 0.02) {
          shockwaves.splice(i, 1);
        }
      }

      // Mise à jour et dessin des particules + filaments constellation
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.life -= 1;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const ratio = p.life / p.maxLife;
        const { r, g, b } = p.color;

        // Filaments entre particules proches
        for (let j = i - 1; j >= 0 && j > i - 8; j--) {
          const other = particles[j];
          const d = Math.hypot(p.x - other.x, p.y - other.y);
          if (d < 68) {
            const lineAlpha = (1 - d / 68) * ratio * 0.34;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineAlpha.toFixed(3)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * ratio, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${(ratio * 0.9).toFixed(3)})`;
        ctx.fill();
      }

      if (particles.length > 0 || shockwaves.length > 0) {
        requestAnimationFrame(render);
      } else {
        animRunning = false;
      }
    }
  }

  // -----------------------------------------------------------------------
  // 3. DÉCRYPTAGE QUANTIQUE DES TITRES AU SCROLL (QUANTUM SCRAMBLE)
  // -----------------------------------------------------------------------
  function initQuantumTextScramble() {
    if (REDUCED_MOTION || !("IntersectionObserver" in window)) return;

    const GLYPHS = "01◈⌘λ∑⚡✦ΨΩ#";
    const targets = document.querySelectorAll(".section-title, .odyssey-title");

    function scrambleNode(el) {
      if (el.dataset.scrambledDone === "1") return;
      el.dataset.scrambledDone = "1";

      // Ne scramble que les nœuds texte directs pour préserver les <span> internes (ex: text-gold-gradient)
      const textNodes = [];
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
      let current;
      while ((current = walker.nextNode())) {
        if (current.nodeValue && current.nodeValue.trim().length > 0) {
          textNodes.push({ node: current, original: current.nodeValue });
        }
      }

      const start = performance.now();
      const duration = 560;

      function tick(now) {
        const progress = Math.min(1, (now - start) / duration);
        for (const item of textNodes) {
          const orig = item.original;
          const revealCount = Math.floor(orig.length * progress);
          let out = "";
          for (let i = 0; i < orig.length; i++) {
            const ch = orig[i];
            if (ch === " " || ch === "\n" || i < revealCount) {
              out += ch;
            } else {
              out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            }
          }
          item.node.nodeValue = out;
        }

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          for (const item of textNodes) {
            item.node.nodeValue = item.original;
          }
        }
      }

      requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scrambleNode(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    targets.forEach((el) => observer.observe(el));
  }

  // -----------------------------------------------------------------------
  // 4. CHAMP DE FORCE MAGNÉTIQUE SUR LES BOUTONS CTA
  // -----------------------------------------------------------------------
  function initMagneticButtons() {
    if (REDUCED_MOTION || !FINE_POINTER) return;

    const buttons = document.querySelectorAll(".btn-gold, .btn-outline-gold, .btn-whatsapp, .filter-btn");
    buttons.forEach((btn) => {
      btn.classList.add("quantum-magnetic");

      btn.addEventListener("pointermove", (e) => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        const offsetX = ((relX / rect.width) - 0.5) * 12;
        const offsetY = ((relY / rect.height) - 0.5) * 10;

        btn.style.setProperty("--btn-mx", `${relX.toFixed(1)}px`);
        btn.style.setProperty("--btn-my", `${relY.toFixed(1)}px`);
        btn.style.transform = `translate3d(${offsetX.toFixed(2)}px, ${offsetY.toFixed(2)}px, 0)`;
      });

      btn.addEventListener("pointerleave", () => {
        btn.style.transform = "";
      });
    });
  }

  // -----------------------------------------------------------------------
  // 5. ÉCLAIRAGE LIQUIDE SUR LES BORDURES DES CARTES (BORDER SPOTLIGHT)
  // -----------------------------------------------------------------------
  function initLiquidSpotlights() {
    if (REDUCED_MOTION || !FINE_POINTER) return;

    const selector =
      ".stat-card, .service-card, .about-pillar-card, .skill-cat-box, .academic-card, .odyssey-map-card, .odyssey-node-btn, .contact-card-direct, .contact-form-box, .planetary-codex-card, .github-dashboard, .project-card, .distinction-card";

    document.addEventListener(
      "pointermove",
      (e) => {
        const card = e.target && e.target.closest ? e.target.closest(selector) : null;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${(e.clientX - rect.left).toFixed(1)}px`);
        card.style.setProperty("--my", `${(e.clientY - rect.top).toFixed(1)}px`);
      },
      { passive: true }
    );
  }

  // -----------------------------------------------------------------------
  // 6. IMPULSION 3D SUR FILTRES PROJETS & PLANÈTES + INERTIE SCROLL
  // -----------------------------------------------------------------------
  function initKineticInteractions() {
    if (REDUCED_MOTION) return;

    // Pulse sur changement de filtre projet
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const rect = btn.getBoundingClientRect();
        spawnBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 20, true);

        requestAnimationFrame(() => {
          const cards = document.querySelectorAll("#projectsGrid .project-card");
          cards.forEach((card, idx) => {
            card.classList.remove("quantum-card-enter");
            void card.offsetWidth;
            card.style.animationDelay = `${idx * 65}ms`;
            card.classList.add("quantum-card-enter");
          });
        });
      });
    });

    // Pulse sur clic d'une planète de l'Arsenal
    document.querySelectorAll(".planet-lore-item").forEach((item) => {
      item.addEventListener("click", () => {
        const rect = item.getBoundingClientRect();
        spawnBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 24, true);
        item.classList.remove("planet-pulse-active");
        void item.offsetWidth;
        item.classList.add("planet-pulse-active");
      });
    });

    // Comète lumineuse sur la barre de progression de l'Odyssée
    const progressFill = document.getElementById("odysseyProgressFill");
    if (progressFill) {
      progressFill.classList.add("quantum-comet-fill");
    }

    // Subtile inertie cinétique au scroll sur les grilles principales
    let lastScrollY = window.scrollY;
    let velocity = 0;
    let skewTicking = false;
    const skewTargets = document.querySelectorAll(".projects-grid, .services-grid, .stats-strip");

    function updateSkew() {
      velocity *= 0.84;
      const clamped = Math.max(-2.2, Math.min(2.2, velocity * 0.08));
      skewTargets.forEach((el) => {
        el.style.transform = Math.abs(clamped) > 0.04 ? `skewY(${clamped.toFixed(2)}deg)` : "";
      });

      if (Math.abs(velocity) > 0.4) {
        requestAnimationFrame(updateSkew);
      } else {
        skewTargets.forEach((el) => {
          el.style.transform = "";
        });
        skewTicking = false;
      }
    }

    window.addEventListener(
      "scroll",
      () => {
        const currentY = window.scrollY;
        velocity = currentY - lastScrollY;
        lastScrollY = currentY;
        if (!skewTicking) {
          skewTicking = true;
          requestAnimationFrame(updateSkew);
        }
      },
      { passive: true }
    );
  }

  // -----------------------------------------------------------------------
  // INITIALISATION GLOBALE
  // -----------------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    initQuantumIntro();
    initConstellationCanvas();
    initQuantumTextScramble();
    initMagneticButtons();
    initLiquidSpotlights();
    initKineticInteractions();
  });
})();

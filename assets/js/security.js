/**
 * =========================================================================
 * BOUCLIER DE SÉCURITÉ MULTI-COUCHES (DEFENSE-IN-DEPTH)
 * Protection anti-inspection, anti-copie, anti-clickjacking,
 * intégrité DOM et protection des données personnelles.
 * =========================================================================
 */
(function () {
  "use strict";

  // -----------------------------------------------------------------------
  // 1. ANTI-CLICKJACKING & FRAME-BUSTING
  // -----------------------------------------------------------------------
  if (window.top !== window.self) {
    try {
      document.documentElement.style.display = "none";
      window.top.location.replace(window.self.location.href);
    } catch (_err) {
      document.documentElement.innerHTML = "";
    }
    return;
  }

  // Supprimer toute référence fenêtre parente (anti-tabnabbing inverse)
  try {
    if (window.opener) {
      window.opener = null;
    }
  } catch (_err) {
    // Ignore si lecture seule
  }

  // -----------------------------------------------------------------------
  // 2. UTILITAIRES INTERNES
  // -----------------------------------------------------------------------
  const EDITABLE_SELECTOR = "input, textarea, select, [contenteditable='true']";
  let toastTimer = null;
  let devToolsOpen = false;
  let overlayEl = null;

  function isEditableTarget(target) {
    return Boolean(target && target.closest && target.closest(EDITABLE_SELECTOR));
  }

  function notifySecurity(message) {
    const toast = document.getElementById("toastNotice");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show", "security-alert");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show", "security-alert");
    }, 2600);
  }

  // -----------------------------------------------------------------------
  // 3. ÉCRAN DE VERROUILLAGE ANTI-INSPECTION (DEVTOOLS SHIELD)
  // -----------------------------------------------------------------------
  function ensureLockoutOverlay() {
    if (overlayEl) return overlayEl;
    overlayEl = document.createElement("div");
    overlayEl.id = "securityLockoutOverlay";
    overlayEl.className = "security-lockout-overlay";
    overlayEl.setAttribute("role", "alertdialog");
    overlayEl.setAttribute("aria-modal", "true");
    overlayEl.setAttribute("aria-label", "Protection de sécurité active");
    overlayEl.innerHTML = `
      <div class="security-lockout-card">
        <div class="security-lockout-badge">PROTECTION ACTIVE // ACCÈS RESTREINT</div>
        <h2>Inspection non autorisée détectée</h2>
        <p>
          Les outils de développement et l'inspection du code source sont désactivés sur ce portfolio
          afin de protéger la propriété intellectuelle et les données personnelles.
        </p>
        <p class="security-lockout-hint">
          Fermez les outils de développement (DevTools) pour reprendre la navigation normalement.
        </p>
      </div>
    `;
    document.body.appendChild(overlayEl);
    return overlayEl;
  }

  function setLockoutState(locked) {
    if (devToolsOpen === locked) return;
    devToolsOpen = locked;
    if (!document.body) return;

    const overlay = ensureLockoutOverlay();
    if (locked) {
      document.documentElement.classList.add("sec-locked");
      overlay.classList.add("active");
      try {
        window.getSelection()?.removeAllRanges();
      } catch (_err) {
        // Ignore
      }
    } else {
      document.documentElement.classList.remove("sec-locked");
      overlay.classList.remove("active");
    }
  }

  function triggerPrivacyFlash(reason) {
    document.documentElement.classList.add("sec-privacy-flash");
    if (reason) notifySecurity(reason);
    setTimeout(() => {
      document.documentElement.classList.remove("sec-privacy-flash");
    }, 1200);
  }

  // -----------------------------------------------------------------------
  // 4. BLOCAGE CLIC DROIT, COPIE, SÉLECTION, GLISSER-DÉPOSER & IMPRESSION
  // -----------------------------------------------------------------------
  document.addEventListener(
    "contextmenu",
    (e) => {
      if (isEditableTarget(e.target)) return;
      e.preventDefault();
      e.stopPropagation();
      notifySecurity("Action bloquée — Contenu protégé.");
    },
    true
  );

  ["copy", "cut"].forEach((evtName) => {
    document.addEventListener(
      evtName,
      (e) => {
        if (isEditableTarget(e.target)) return;
        e.preventDefault();
        e.stopPropagation();
        if (e.clipboardData) {
          e.clipboardData.setData("text/plain", "Contenu protégé — Copie non autorisée.");
        }
        notifySecurity("Copie désactivée sur ce portfolio.");
      },
      true
    );
  });

  document.addEventListener(
    "selectstart",
    (e) => {
      if (isEditableTarget(e.target)) return;
      e.preventDefault();
    },
    true
  );

  document.addEventListener(
    "dragstart",
    (e) => {
      e.preventDefault();
    },
    true
  );

  // Blocage impression (Ctrl+P / Menu navigateur)
  window.addEventListener("beforeprint", () => {
    document.documentElement.classList.add("sec-print-blocked");
  });
  window.addEventListener("afterprint", () => {
    document.documentElement.classList.remove("sec-print-blocked");
  });

  // -----------------------------------------------------------------------
  // 5. BLOCAGE RACCOURCIS CLAVIER (DEVTOOLS, SOURCE, SAVE, PRINT, COPY)
  // -----------------------------------------------------------------------
  document.addEventListener(
    "keydown",
    (e) => {
      const key = (e.key || "").toLowerCase();
      const ctrlOrMeta = e.ctrlKey || e.metaKey;
      const editable = isEditableTarget(e.target);

      // F12 (DevTools)
      if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        notifySecurity("Inspection bloquée par la politique de sécurité.");
        return;
      }

      // PrintScreen (Capture d'écran)
      if (e.key === "PrintScreen" || e.keyCode === 44) {
        e.preventDefault();
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText("").catch(() => {});
        }
        triggerPrivacyFlash("Capture d'écran dissuadée — Contenu protégé.");
        return;
      }

      // Ctrl/Cmd + Shift + I / J / C / K / M (DevTools / Console / Inspecteur)
      if (ctrlOrMeta && e.shiftKey && ["i", "j", "c", "k", "m", "e"].includes(key)) {
        e.preventDefault();
        e.stopPropagation();
        notifySecurity("Outils de développement désactivés.");
        return;
      }

      // macOS Option + Cmd + I / J / C / U
      if (e.metaKey && e.altKey && ["i", "j", "c", "u"].includes(key)) {
        e.preventDefault();
        e.stopPropagation();
        notifySecurity("Outils de développement désactivés.");
        return;
      }

      // Ctrl/Cmd + U (Source), S (Enregistrer), P (Imprimer)
      if (ctrlOrMeta && ["u", "s", "p"].includes(key)) {
        e.preventDefault();
        e.stopPropagation();
        notifySecurity("Action non autorisée sur ce site.");
        return;
      }

      // Ctrl/Cmd + C / X / A hors champs de formulaire
      if (!editable && ctrlOrMeta && ["c", "x", "a"].includes(key)) {
        e.preventDefault();
        e.stopPropagation();
        notifySecurity("Copie et sélection désactivées.");
      }
    },
    true
  );

  // -----------------------------------------------------------------------
  // 6. DÉTECTION ACTIVE DES OUTILS DE DÉVELOPPEMENT (DEVTOOLS)
  // -----------------------------------------------------------------------
  function checkDevToolsDimensions() {
    // Ignore sur petits écrans tactiles où la barre d'adresse varie
    if (window.innerWidth < 768) return false;
    const widthThreshold = window.outerWidth - window.innerWidth > 170;
    const heightThreshold = window.outerHeight - window.innerHeight > 170;
    return widthThreshold || heightThreshold;
  }

  // Piège console basé sur getter (se déclenche uniquement si la console inspecte l'objet)
  function checkConsoleProbe() {
    let triggered = false;
    const probe = new Image();
    Object.defineProperty(probe, "id", {
      get: function () {
        triggered = true;
        return "sec-probe";
      }
    });
    // Utilise la référence console native si disponible
    if (nativeConsoleLog) {
      nativeConsoleLog("%c", probe);
    }
    return triggered;
  }

  const nativeConsoleLog = typeof console !== "undefined" && console.log ? console.log.bind(console) : null;
  const nativeConsoleClear = typeof console !== "undefined" && console.clear ? console.clear.bind(console) : null;

  function runDevToolsScan() {
    const dimDetected = checkDevToolsDimensions();
    const probeDetected = checkConsoleProbe();
    setLockoutState(dimDetected || probeDetected);
  }

  // -----------------------------------------------------------------------
  // 7. DURCISSEMENT DE LA CONSOLE
  // -----------------------------------------------------------------------
  function hardenConsole() {
    try {
      if (nativeConsoleClear) nativeConsoleClear();
      if (nativeConsoleLog) {
        nativeConsoleLog(
          "%cSTOP — ZONE SÉCURISÉE",
          "color:#FF1E56;font-size:28px;font-weight:900;text-shadow:0 0 12px rgba(255,30,86,0.5);"
        );
        nativeConsoleLog(
          "%cCe portfolio est protégé contre l'inspection, le scraping et la copie non autorisée.",
          "color:#D4AF37;font-size:14px;font-weight:700;"
        );
      }

      const noop = function () {};
      ["log", "debug", "info", "warn", "table", "dir", "trace"].forEach((method) => {
        try {
          Object.defineProperty(console, method, {
            value: noop,
            writable: false,
            configurable: false
          });
        } catch (_err) {
          console[method] = noop;
        }
      });
    } catch (_err) {
      // Ignore sur navigateurs restrictifs
    }
  }

  // -----------------------------------------------------------------------
  // 8. INTÉGRITÉ DOM (ANTI-INJECTION DE SCRIPTS / IFRAMES TIERS)
  // -----------------------------------------------------------------------
  const ALLOWED_SCRIPT_HOSTS = new Set(["cdnjs.cloudflare.com", window.location.hostname]);

  function startDomIntegrityMonitor() {
    if (!window.MutationObserver || !document.documentElement) return;

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== 1) continue;
          const tag = (node.tagName || "").toUpperCase();

          if (tag === "IFRAME" || tag === "OBJECT" || tag === "EMBED") {
            node.remove();
            continue;
          }

          if (tag === "SCRIPT") {
            const src = node.getAttribute("src");
            if (!src) {
              node.remove();
              continue;
            }
            try {
              const url = new URL(src, window.location.href);
              if (!ALLOWED_SCRIPT_HOSTS.has(url.hostname)) {
                node.remove();
              }
            } catch (_err) {
              node.remove();
            }
          }
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }

  // -----------------------------------------------------------------------
  // 9. GEL RÉCURSIF DE LA CONFIGURATION (ANTI-TAMPERING)
  // -----------------------------------------------------------------------
  function deepFreeze(obj) {
    if (!obj || typeof obj !== "object") return obj;
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach((prop) => {
      const value = obj[prop];
      if (value && typeof value === "object" && !Object.isFrozen(value)) {
        deepFreeze(value);
      }
    });
    return obj;
  }

  // -----------------------------------------------------------------------
  // 10. INITIALISATION DU BOUCLIER
  // -----------------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    // Geler PORTFOLIO_CONFIG après son chargement
    if (window.PORTFOLIO_CONFIG) {
      deepFreeze(window.PORTFOLIO_CONFIG);
      try {
        Object.defineProperty(window, "PORTFOLIO_CONFIG", {
          value: window.PORTFOLIO_CONFIG,
          writable: false,
          configurable: false
        });
      } catch (_err) {
        // Ignore si déjà non configurable
      }
    }

    // Désactiver le glisser-déposer sur toutes les images et vidéos
    document.querySelectorAll("img, video, svg").forEach((el) => {
      el.setAttribute("draggable", "false");
    });

    // Horodatage de chargement pour l'anti-bot du formulaire
    window.__PORTFOLIO_LOAD_TS__ = Date.now();

    startDomIntegrityMonitor();
    runDevToolsScan();
    setInterval(runDevToolsScan, 1000);
    window.addEventListener("resize", runDevToolsScan, { passive: true });
    hardenConsole();
  });
})();

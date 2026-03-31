import { c as createComponent } from './astro-component_BjqUrzO7.mjs';
import 'piccolore';
import { o as createRenderInstruction, h as addAttribute, p as renderHead, q as renderSlot, r as renderTemplate, m as maybeRenderHead } from './entrypoint_I3-4Ut1s.mjs';
import 'clsx';
import { createClient } from '@supabase/supabase-js';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title || "Ingeniería Extrema Media — Contenido Premium para Arquitectos"}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/aec2/aec-web/src/layouts/Layout.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="main-nav" data-astro-cid-jp2pq5zm> <a href="/" class="nav-logo" data-astro-cid-jp2pq5zm> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="logo-icon" data-astro-cid-jp2pq5zm> <rect x="4" y="4" width="12" height="12" stroke="white" stroke-opacity="0.3" stroke-width="2" data-astro-cid-jp2pq5zm></rect> <rect x="8" y="8" width="12" height="12" stroke="var(--green)" stroke-width="2" data-astro-cid-jp2pq5zm></rect> <path d="M8 8V16M16 8H8" stroke="var(--green)" stroke-width="2" stroke-linecap="round" data-astro-cid-jp2pq5zm></path> </svg> <div class="logo-text" data-astro-cid-jp2pq5zm>
Ingeniería <span data-astro-cid-jp2pq5zm>Extrema Media</span> </div> </a> <ul class="nav-links" data-astro-cid-jp2pq5zm> <li data-astro-cid-jp2pq5zm><a href="/" data-astro-cid-jp2pq5zm>Inicio</a></li> <li data-astro-cid-jp2pq5zm><a href="/megapacks" data-astro-cid-jp2pq5zm>Mega Packs</a></li> <li data-astro-cid-jp2pq5zm><a href="/bundles" data-astro-cid-jp2pq5zm>Bundles</a></li> </ul> <a href="https://wa.me/573133144700?text=Hola! Quiero información sobre un pack personalizado" target="_blank" class="nav-cta" onclick="if(window.waLock){event.preventDefault(); return false;} window.waLock=true; setTimeout(()=>window.waLock=false, 2000);" data-astro-cid-jp2pq5zm> <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-jp2pq5zm> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-jp2pq5zm></path> </svg>
Quiero pack personalizado
</a> <button class="menu-toggle" id="menuToggle" aria-label="Abrir menú" data-astro-cid-jp2pq5zm> <span data-astro-cid-jp2pq5zm></span> <span data-astro-cid-jp2pq5zm></span> <span data-astro-cid-jp2pq5zm></span> </button> </nav> <div class="mobile-overlay" id="mobileOverlay" data-astro-cid-jp2pq5zm> <button class="close-menu" id="closeMenu" data-astro-cid-jp2pq5zm>&times;</button> <ul class="mobile-links" data-astro-cid-jp2pq5zm> <li data-astro-cid-jp2pq5zm><a href="/" class="mobile-link" data-astro-cid-jp2pq5zm>Inicio</a></li> <li data-astro-cid-jp2pq5zm><a href="/megapacks" class="mobile-link" data-astro-cid-jp2pq5zm>Mega Packs</a></li> <li data-astro-cid-jp2pq5zm><a href="/bundles" class="mobile-link" data-astro-cid-jp2pq5zm>Bundles</a></li> <li style="margin-top: 20px;" data-astro-cid-jp2pq5zm> <a href="https://wa.me/573133144700?text=Hola! Quiero información sobre un pack personalizado" class="nav-cta" style="display: flex; justify-content: center; width: 100%;" onclick="if(window.waLock){event.preventDefault(); return false;} window.waLock=true; setTimeout(()=>window.waLock=false, 2000);" data-astro-cid-jp2pq5zm>
Quiero pack personalizado
</a> </li> </ul> </div> ${renderScript($$result, "D:/aec2/aec-web/src/components/layout/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/aec2/aec-web/src/components/layout/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = 2024;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-35ed7um5> <div class="footer-links" data-astro-cid-35ed7um5> <button class="level-btn" data-legal="terms" data-astro-cid-35ed7um5>Términos y Condiciones</button> <button class="level-btn" data-legal="privacy" data-astro-cid-35ed7um5>Políticas de Privacidad</button> <button class="level-btn" data-legal="faq" data-astro-cid-35ed7um5>Preguntas Frecuentes (FAQ)</button> </div> <div class="footer-bottom" data-astro-cid-35ed7um5> <span data-astro-cid-35ed7um5>© ${currentYear} Ingeniería Extrema Media. Todos los derechos reservados.</span> </div> <!-- REUSABLE LEGAL MODAL --> <div id="legalModal" class="legal-modal" data-astro-cid-35ed7um5> <div class="legal-overlay" data-astro-cid-35ed7um5></div> <div class="legal-window" data-astro-cid-35ed7um5> <button id="closeLegal" class="close-btn" aria-label="Cerrar" data-astro-cid-35ed7um5> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-35ed7um5> <path d="M18 6L6 18M6 6l12 12" data-astro-cid-35ed7um5></path> </svg> </button> <div class="legal-content" data-astro-cid-35ed7um5> <div id="legalHeader" class="legal-header" data-astro-cid-35ed7um5> <div class="legal-label" data-astro-cid-35ed7um5>— DOCUMENTO LEGAL —</div> <h2 id="legalTitle" data-astro-cid-35ed7um5>Cargando...</h2> </div> <div id="legalBody" class="legal-body" data-astro-cid-35ed7um5> <!-- Content injected via JS --> </div> </div> </div> </div> </footer>  ${renderScript($$result, "D:/aec2/aec-web/src/components/layout/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/aec2/aec-web/src/components/layout/Footer.astro", void 0);

const supabaseUrl = "https://rivincfuelyyjiamfins.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpdmluY2Z1ZWx5eWppYW1maW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2NDg3MjAsImV4cCI6MjA5MDIyNDcyMH0.awAl5v8Tn0oVZ8FYyXZzAeNiIKAne1iY5sWbFlcJVK8";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { $$Layout as $, $$Navbar as a, $$Footer as b, renderScript as r, supabase as s };

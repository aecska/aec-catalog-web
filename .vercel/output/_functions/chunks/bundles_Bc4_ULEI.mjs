import { c as createComponent } from './astro-component_BjqUrzO7.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, h as addAttribute, l as renderComponent } from './entrypoint_I3-4Ut1s.mjs';
import { s as supabase, $ as $$Layout, r as renderScript, a as $$Navbar, b as $$Footer } from './supabase_Dj8r-rZj.mjs';
import 'clsx';

const $$BundlesHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="bundles-hero" data-astro-cid-b7m73s45> <div class="hero-bg" data-astro-cid-b7m73s45> <div class="noise-overlay" data-astro-cid-b7m73s45></div> </div> <div class="hero-content fade-up" data-astro-cid-b7m73s45> <h1 data-astro-cid-b7m73s45>
BIBLIOTECA DE<br data-astro-cid-b7m73s45> <span class="accent" data-astro-cid-b7m73s45>BUNDLES</span> <span class="gray" data-astro-cid-b7m73s45>MAESTROS</span> </h1> </div> </header>`;
}, "D:/aec2/aec-web/src/components/catalog/BundlesHero.astro", void 0);

const $$BundlesGrid = createComponent(async ($$result, $$props, $$slots) => {
  const { data: bundles, error } = await supabase.from("bundles").select("*").order("created_at", { ascending: false });
  return renderTemplate`${maybeRenderHead()}<section class="bundles-catalog-grid" data-astro-cid-ebfrq3pm> <div class="container" data-astro-cid-ebfrq3pm> <div class="grid-layout" data-astro-cid-ebfrq3pm> ${bundles && bundles.map((bundle) => renderTemplate`<div${addAttribute(`bundle-card fade-up ${Number(bundle.saving_percentage) > 30 ? "featured" : ""}`, "class")} data-astro-cid-ebfrq3pm> ${Number(bundle.saving_percentage) > 30 && renderTemplate`<span class="featured-badge" data-astro-cid-ebfrq3pm>MÁS VENDIDO</span>`} <h3 class="bundle-title" data-astro-cid-ebfrq3pm>${bundle.name}</h3> <p class="bundle-description" data-astro-cid-ebfrq3pm>${bundle.hero_subtitle || "Acceso total a la colección AEC profesional."}</p> <div class="bundle-pricing" data-astro-cid-ebfrq3pm> <div class="pricing-row-main" data-astro-cid-ebfrq3pm> ${bundle.price_total && renderTemplate`<span class="price-original" data-astro-cid-ebfrq3pm>$${Number(bundle.price_total).toLocaleString()}</span>`} <span class="price-current" data-astro-cid-ebfrq3pm><sup data-astro-cid-ebfrq3pm>$</sup>${Number(bundle.price_discount).toLocaleString()}</span> <span class="price-unit" data-astro-cid-ebfrq3pm>COP</span> </div> <div class="pricing-row-savings" data-astro-cid-ebfrq3pm> <span class="discount-badge" data-astro-cid-ebfrq3pm>AHORRAS ${bundle.saving_percentage}%</span> </div> </div> <div class="bundle-actions" data-astro-cid-ebfrq3pm> <a${addAttribute(`/bundle/${bundle.slug}`, "href")} class="btn-secondary" data-astro-cid-ebfrq3pm>
VER DETALLES
</a> <a${addAttribute(`https://wa.me/573133144700?text=Hola! Quiero comprar el ${bundle.name} completo ($${Number(bundle.price_discount).toLocaleString()} COP). Por favor envíame los métodos de pago.`, "href")} target="_blank" class="btn-primary" data-astro-cid-ebfrq3pm> <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-ebfrq3pm> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-ebfrq3pm></path> </svg>
Comprar
</a> </div> </div>`)} </div> ${(!bundles || bundles.length === 0) && renderTemplate`<div class="empty-state" data-astro-cid-ebfrq3pm> <p data-astro-cid-ebfrq3pm>AEC Collections coming soon.</p> </div>`} </div> </section>`;
}, "D:/aec2/aec-web/src/components/catalog/BundlesGrid.astro", void 0);

const $$BundlesUpsell = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="bundles-upsell" class="fade-up" data-astro-cid-hfdka7t6> <div class="upsell-card" data-astro-cid-hfdka7t6> <div class="text-side" data-astro-cid-hfdka7t6> <h2 data-astro-cid-hfdka7t6>¿BUSCAS ALGO MÁS ESPECÍFICO?</h2> <p data-astro-cid-hfdka7t6>Si no necesitas la colección completa, puedes explorar nuestra biblioteca de Mega Packs individuales para llevar solo lo que necesitas.</p> </div> <a href="/megapacks" class="btn-black" data-astro-cid-hfdka7t6>
Ver Packs Individuales
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-hfdka7t6> <line x1="5" y1="12" x2="19" y2="12" data-astro-cid-hfdka7t6></line> <polyline points="12 5 19 12 12 19" data-astro-cid-hfdka7t6></polyline> </svg> </a> </div> </section>`;
}, "D:/aec2/aec-web/src/components/catalog/BundlesUpsell.astro", void 0);

const $$Bundles = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bundles Maestros — Ingeniería Extrema Media", "data-astro-cid-qlr4ruml": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-qlr4ruml": true })} ${maybeRenderHead()}<main data-astro-cid-qlr4ruml> ${renderComponent($$result2, "BundlesHero", $$BundlesHero, { "data-astro-cid-qlr4ruml": true })} ${renderComponent($$result2, "BundlesGrid", $$BundlesGrid, { "data-astro-cid-qlr4ruml": true })} ${renderComponent($$result2, "BundlesUpsell", $$BundlesUpsell, { "data-astro-cid-qlr4ruml": true })} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-qlr4ruml": true })} ` })}  ${renderScript($$result, "D:/aec2/aec-web/src/pages/bundles.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/aec2/aec-web/src/pages/bundles.astro", void 0);

const $$file = "D:/aec2/aec-web/src/pages/bundles.astro";
const $$url = "/bundles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Bundles,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

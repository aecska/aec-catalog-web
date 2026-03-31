import { c as createComponent } from './astro-component_BjqUrzO7.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, h as addAttribute, l as renderComponent } from './entrypoint_I3-4Ut1s.mjs';
import { s as supabase, r as renderScript, $ as $$Layout, a as $$Navbar, b as $$Footer } from './supabase_Dj8r-rZj.mjs';
import 'clsx';
import { $ as $$ProductCard } from './ProductCard_Cy4Xfs4q.mjs';

const $$CatalogHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="catalog-hero" data-astro-cid-cguezhlx> <div class="hero-bg" data-astro-cid-cguezhlx> <div class="noise-overlay" data-astro-cid-cguezhlx></div> </div> <div class="hero-content fade-up" data-astro-cid-cguezhlx> <h1 data-astro-cid-cguezhlx>
BIBLIOTECA DE<br data-astro-cid-cguezhlx> <span class="accent" data-astro-cid-cguezhlx>MEGA PACKS</span> <span class="gray" data-astro-cid-cguezhlx>PRO</span> </h1> </div> </header>`;
}, "D:/aec2/aec-web/src/components/catalog/CatalogHero.astro", void 0);

const $$CategoryFilters = createComponent(async ($$result, $$props, $$slots) => {
  const { data: categories } = await supabase.from("categories").select("*").order("name", { ascending: true });
  return renderTemplate`${maybeRenderHead()}<div class="filter-wrapper" data-astro-cid-bbyved6k> <div class="filter-container" data-astro-cid-bbyved6k> <div class="filter-label" data-astro-cid-bbyved6k>Explorar:</div> <div class="filter-navigation" data-astro-cid-bbyved6k> <button class="scroll-btn prev" id="scrollPrev" aria-label="Anterior" data-astro-cid-bbyved6k> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbyved6k> <polyline points="15 18 9 12 15 6" data-astro-cid-bbyved6k></polyline> </svg> </button> <div class="filter-track" id="filterTrack" data-astro-cid-bbyved6k> <button class="filter-btn active" data-category="all" data-astro-cid-bbyved6k>TODOS</button> ${categories && categories.map((cat) => renderTemplate`<button class="filter-btn"${addAttribute(cat.slug, "data-category")} data-astro-cid-bbyved6k> ${cat.name.toUpperCase()} </button>`)} </div> <button class="scroll-btn next" id="scrollNext" aria-label="Siguiente" data-astro-cid-bbyved6k> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbyved6k> <polyline points="9 18 15 12 9 6" data-astro-cid-bbyved6k></polyline> </svg> </button> </div> </div> </div>  ${renderScript($$result, "D:/aec2/aec-web/src/components/catalog/CategoryFilters.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/aec2/aec-web/src/components/catalog/CategoryFilters.astro", void 0);

const $$CatalogUpsell = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="upsell-section fade-up" data-astro-cid-mhepqqws> <div class="upsell-card" data-astro-cid-mhepqqws> <div class="text-side" data-astro-cid-mhepqqws> <div class="upsell-badge" data-astro-cid-mhepqqws>OPCIÓN RECOMENDADA</div> <h2 data-astro-cid-mhepqqws>¿QUIERES ESCALAR TU NIVEL?</h2> <p data-astro-cid-mhepqqws>No compres uno por uno. Adquiere colecciones completas por categoría o llévatelo todo con nuestros Bundles Maestros AEC.</p> </div> <a href="/bundles" class="btn-upsell" data-astro-cid-mhepqqws>
Ver Catálogo de Bundles
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-mhepqqws> <line x1="5" y1="12" x2="19" y2="12" data-astro-cid-mhepqqws></line> <polyline points="12 5 19 12 12 19" data-astro-cid-mhepqqws></polyline> </svg> </a> </div> </section>`;
}, "D:/aec2/aec-web/src/components/catalog/CatalogUpsell.astro", void 0);

const $$Megapacks = createComponent(async ($$result, $$props, $$slots) => {
  const { data: packs, error } = await supabase.from("packs").select("*, categories(*)").order("created_at", { ascending: false });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Catálogo Mega Packs PRO — Ingeniería Extrema Media", "data-astro-cid-v64gtlgd": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-v64gtlgd": true })} ${maybeRenderHead()}<main data-astro-cid-v64gtlgd> ${renderComponent($$result2, "CatalogHero", $$CatalogHero, { "data-astro-cid-v64gtlgd": true })} ${renderComponent($$result2, "CategoryFilters", $$CategoryFilters, { "data-astro-cid-v64gtlgd": true })} <section id="catalog-grid-section" data-astro-cid-v64gtlgd> <div class="container" data-astro-cid-v64gtlgd> <div class="products-grid" id="catalogGrid" data-astro-cid-v64gtlgd> ${packs && packs.map((pack) => renderTemplate`<div class="product-card-wrapper fade-up"${addAttribute(pack.categories?.slug || "other", "data-category")} data-astro-cid-v64gtlgd> ${renderComponent($$result2, "ProductCard", $$ProductCard, { ...pack, "data-astro-cid-v64gtlgd": true })} </div>`)} </div>  <div id="empty-state" class="empty-state" style="display: none;" data-astro-cid-v64gtlgd> <div class="empty-icon" data-astro-cid-v64gtlgd>📂</div> <h3 data-astro-cid-v64gtlgd>No se encontraron packs</h3> <p data-astro-cid-v64gtlgd>Lo sentimos, no tenemos packs disponibles en esta categoría por el momento. ¡Vuelve pronto!</p> </div> </div> </section> ${renderComponent($$result2, "CatalogUpsell", $$CatalogUpsell, { "data-astro-cid-v64gtlgd": true })} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-v64gtlgd": true })} ` })}  ${renderScript($$result, "D:/aec2/aec-web/src/pages/megapacks.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/aec2/aec-web/src/pages/megapacks.astro", void 0);

const $$file = "D:/aec2/aec-web/src/pages/megapacks.astro";
const $$url = "/megapacks";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Megapacks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

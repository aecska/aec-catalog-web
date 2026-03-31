import { c as createComponent } from './astro-component_BjqUrzO7.mjs';
import 'piccolore';
import { m as maybeRenderHead, l as renderComponent, n as Fragment, r as renderTemplate, h as addAttribute } from './entrypoint_I3-4Ut1s.mjs';
import { r as renderScript, s as supabase, $ as $$Layout, a as $$Navbar, b as $$Footer } from './supabase_Dj8r-rZj.mjs';
import { $ as $$ProductCard } from './ProductCard_Cy4Xfs4q.mjs';
import 'clsx';

const $$BundleHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BundleHero;
  const { bundle } = Astro2.props;
  const priceTotal = bundle.price_total ? Number(bundle.price_total).toLocaleString() : null;
  const priceDiscount = bundle.price_discount ? Number(bundle.price_discount).toLocaleString() : "0";
  const stats = bundle.hero_stats || [];
  return renderTemplate`${maybeRenderHead()}<section id="hero" data-astro-cid-qqpe2gih> <div class="hero-content" data-astro-cid-qqpe2gih> <div class="software-label fade-up" data-astro-cid-qqpe2gih>COLECCIÓN COMPLETA ${bundle.categories?.name}</div> <h1 class="fade-up" style="transition-delay: 0.1s" data-astro-cid-qqpe2gih> ${bundle.name} <span class="accent" data-astro-cid-qqpe2gih>${bundle.hero_title}</span> </h1> <!-- STATS BAR (Conversion Booster) --> ${stats.length > 0 && renderTemplate`<div class="stats-bar fade-up" style="transition-delay: 0.2s" data-astro-cid-qqpe2gih> ${stats.map((stat, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-qqpe2gih": true }, { "default": ($$result2) => renderTemplate` <div class="stat-item" data-astro-cid-qqpe2gih> <div class="stat-value" data-astro-cid-qqpe2gih>${stat.text.split(" ")[0]}</div> <div class="stat-label" data-astro-cid-qqpe2gih>${stat.text.split(" ").slice(1).join(" ")}</div> </div> ${index < stats.length - 1 && renderTemplate`<div class="stat-sep" data-astro-cid-qqpe2gih></div>`}` })}`)} </div>`} <p class="section-sub fade-up" style="max-width: 650px; transition-delay: 0.3s" data-astro-cid-qqpe2gih> ${bundle.hero_subtitle} </p> <div class="price-large fade-up" style="margin-top: 0; transition-delay: 0.4s" data-astro-cid-qqpe2gih> ${priceTotal && renderTemplate`<div class="price-old-large" data-astro-cid-qqpe2gih>$${priceTotal}</div>`} <div class="price-new-large" data-astro-cid-qqpe2gih>$${priceDiscount} <span style="font-size: 20px; font-family: var(--font-mono); margin-left: 8px; opacity: 0.6;" data-astro-cid-qqpe2gih>COP</span></div> </div> <div class="hero-actions fade-up" style="transition-delay: 0.5s" data-astro-cid-qqpe2gih> <a${addAttribute(`https://wa.me/573133144700?text=Hola! Quiero comprar el ${bundle.name} completo ($${priceDiscount} COP). Por favor envíame los métodos de pago.`, "href")} target="_blank" class="nav-cta-giant" data-astro-cid-qqpe2gih>
Quiero el ${bundle.name} Completo
</a> <p class="trust-note" data-astro-cid-qqpe2gih>🔒 Acceso inmediato por Google Drive de por vida.</p> </div> </div> <!-- Background Glows --> <div class="hero-glow" data-astro-cid-qqpe2gih></div> </section>`;
}, "D:/aec2/aec-web/src/components/bundles/BundleHero.astro", void 0);

const $$BundleInventory = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BundleInventory;
  const { packs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="catalog-section" id="inventory" data-astro-cid-u2negpdy> <div class="section-header fade-up" data-astro-cid-u2negpdy> <div class="section-label" data-astro-cid-u2negpdy>INVENTARIO DEL BUNDLE</div> <h2 data-astro-cid-u2negpdy>LO QUE INCLUYE ESTA COLECCIÓN</h2> <p class="section-sub" data-astro-cid-u2negpdy>Esta lista representa el valor total del paquete, con acceso inmediato a cada volumen.</p> </div> <div class="products-grid" data-astro-cid-u2negpdy> ${packs.map((pack) => renderTemplate`<div class="fade-up" data-astro-cid-u2negpdy> ${renderComponent($$result, "ProductCard", $$ProductCard, { ...pack, "isBundle": true, "data-astro-cid-u2negpdy": true })} </div>`)} </div> </section>`;
}, "D:/aec2/aec-web/src/components/bundles/BundleInventory.astro", void 0);

const $$BundleFinalOffer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BundleFinalOffer;
  const { bundle } = Astro2.props;
  const priceTotal = bundle.price_total ? Number(bundle.price_total).toLocaleString() : null;
  const priceDiscount = bundle.price_discount ? Number(bundle.price_discount).toLocaleString() : "0";
  return renderTemplate`${maybeRenderHead()}<section class="bundle-offer" id="final-offer" data-astro-cid-bfcaiby7> <div class="bundle-card-large fade-up" data-astro-cid-bfcaiby7> ${bundle.saving_percentage && renderTemplate`<div class="savings-tag" data-astro-cid-bfcaiby7>AHORRAS ${bundle.saving_percentage}%</div>`} <div class="section-label" data-astro-cid-bfcaiby7>OFERTA IRRECHAZABLE</div> <h2 style="margin-top: 10px;" data-astro-cid-bfcaiby7>Lleva toda la colección ${bundle.categories?.name}</h2> <p class="section-sub-offer" data-astro-cid-bfcaiby7> ${bundle.hero_subtitle} </p> <div class="price-large-offer" data-astro-cid-bfcaiby7> ${priceTotal && renderTemplate`<div class="price-old-offer" data-astro-cid-bfcaiby7>$${priceTotal}</div>`} <div class="price-new-offer" data-astro-cid-bfcaiby7>$${priceDiscount} <span style="font-size: 24px; font-family: var(--font-mono); margin-left: 10px; opacity: 0.6;" data-astro-cid-bfcaiby7>COP</span></div> </div> <a${addAttribute(`https://wa.me/573133144700?text=Hola! Quiero comprar el ${bundle.name} completo ($${priceDiscount} COP). Por favor envíame los métodos de pago.`, "href")} target="_blank" class="nav-cta-offer" data-astro-cid-bfcaiby7>
Comprar Todo por $${priceDiscount} COP
</a> <p class="offer-footer" data-astro-cid-bfcaiby7>Incluye soporte VIP y acceso de por vida.</p> </div> </section>`;
}, "D:/aec2/aec-web/src/components/bundles/BundleFinalOffer.astro", void 0);

const $$BundleFAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BundleFAQ;
  const { faq } = Astro2.props;
  const defaultFaq = [
    { q: "¿Cómo se entrega el bundle?", a: "Recibes acceso directo a una carpeta privada en Google Drive con todos los archivos organizados por volumen." },
    { q: "¿Es compatible con mi versión de Revit?", a: "Sí, las familias y plantillas son compatibles con Revit 2018 hasta 2024." }
  ];
  const displayFaq = faq && faq.length > 0 ? faq : defaultFaq;
  return renderTemplate`${maybeRenderHead()}<section id="faq" data-astro-cid-rzqjh7cu> <div class="section-header fade-up" data-astro-cid-rzqjh7cu> <div class="section-overtitle" data-astro-cid-rzqjh7cu>— RESOLVIENDO DUDAS —</div> <h2 data-astro-cid-rzqjh7cu>PREGUNTAS <span class="accent-green" data-astro-cid-rzqjh7cu>FRECUENTES</span></h2> <p class="section-sub-faq" data-astro-cid-rzqjh7cu>Todo lo que necesitas saber antes de dar el siguiente paso.</p> </div> <div class="faq-container" data-astro-cid-rzqjh7cu> ${displayFaq.map((item, index) => renderTemplate`<div class="faq-item fade-up"${addAttribute(`transition-delay: ${index * 0.1}s`, "style")} data-astro-cid-rzqjh7cu> <div class="faq-question" data-astro-cid-rzqjh7cu> ${item.q} </div> <div class="faq-answer" data-astro-cid-rzqjh7cu> ${item.a} </div> </div>`)} </div> </section>  ${renderScript($$result, "D:/aec2/aec-web/src/components/bundles/BundleFAQ.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/aec2/aec-web/src/components/bundles/BundleFAQ.astro", void 0);

const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { data: bundle, error } = await supabase.from("bundles").select(`
    *,
    categories (
      name
    ),
    bundle_packs (
      packs (
        *,
        categories (
          name
        )
      )
    )
  `).eq("slug", slug).single();
  if (error || !bundle) {
    return Astro2.redirect("/404");
  }
  const relatedPacks = bundle.bundle_packs?.map((bp) => bp.packs).filter(Boolean) || [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${bundle.name} — Ingeniería Extrema Media` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main> <!-- 1. MASTER HERO --> ${renderComponent($$result2, "BundleHero", $$BundleHero, { "bundle": bundle })} <!-- 2. MASTER INVENTORY --> ${relatedPacks.length > 0 && renderTemplate`${renderComponent($$result2, "BundleInventory", $$BundleInventory, { "packs": relatedPacks })}`} <!-- 3. MASTER OFFER --> ${renderComponent($$result2, "BundleFinalOffer", $$BundleFinalOffer, { "bundle": bundle })} <!-- 4. MASTER FAQ --> ${renderComponent($$result2, "BundleFAQ", $$BundleFAQ, { "faq": bundle.faq })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}  ${renderScript($$result, "D:/aec2/aec-web/src/pages/bundle/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/aec2/aec-web/src/pages/bundle/[slug].astro", void 0);

const $$file = "D:/aec2/aec-web/src/pages/bundle/[slug].astro";
const $$url = "/bundle/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

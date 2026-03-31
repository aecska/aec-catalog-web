import { c as createComponent } from './astro-component_BjqUrzO7.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './entrypoint_I3-4Ut1s.mjs';
import 'clsx';
import { r as renderScript } from './supabase_Dj8r-rZj.mjs';

const $$ProductCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ProductCard;
  const {
    id,
    name,
    slug,
    price,
    old_price,
    image_url,
    badge,
    hero_subtitle,
    rating = 4.9,
    votes = 12347,
    categories,
    isBundle = false
  } = Astro2.props;
  const displayCategory = categories?.name || "";
  const accentColor = categories?.accent_color || "var(--green)";
  const getDirectUrl = (url) => {
    if (!url) return "";
    if (url.includes("drive.google.com") || url.includes("drive.usercontent.google.com")) {
      const idMatch = url.match(/\/d\/(.+?)\//) || url.match(/[?&]id=(.+?)(&|$)/);
      const id2 = idMatch ? idMatch[1] : "";
      return id2 ? `https://lh3.googleusercontent.com/d/${id2}` : url;
    }
    return url;
  };
  const directImageUrl = getDirectUrl(image_url);
  const fullStars = Math.floor(rating);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`product-card ${isBundle ? "is-bundle" : ""}`, "class")} data-astro-cid-so7ky3fd> <a${addAttribute(`/megapack/${slug}`, "href")} class="card-link-overlay" data-astro-cid-so7ky3fd></a> <div class="card-img"${addAttribute(`border-bottom: 2px solid ${accentColor}22`, "style")} data-astro-cid-so7ky3fd> <img${addAttribute(directImageUrl, "src")}${addAttribute(name, "alt")} loading="lazy" data-astro-cid-so7ky3fd> <!-- Background Identifier Text --> <div class="bg-text-overlay" data-astro-cid-so7ky3fd>${displayCategory.substring(0, 5).toUpperCase()}</div> <div class="card-labels" data-astro-cid-so7ky3fd> <div class="label-tech"${addAttribute(`background: ${accentColor}22; color: ${accentColor}; border: 1px solid ${accentColor}44`, "style")} data-astro-cid-so7ky3fd> ${displayCategory.toUpperCase()} </div> ${badge && renderTemplate`<div class="label-status" data-astro-cid-so7ky3fd> ${badge.toUpperCase()} </div>`} </div> </div> <div class="card-body" data-astro-cid-so7ky3fd> <h3 class="card-name" data-astro-cid-so7ky3fd>${name}</h3> <p class="card-desc" data-astro-cid-so7ky3fd>${hero_subtitle || "Herramientas de alto nivel diseñadas para potenciar tus flujos de trabajo."}</p> <div class="card-rating" data-astro-cid-so7ky3fd> <div class="rating-row-stars" data-astro-cid-so7ky3fd> <div class="stars" data-astro-cid-so7ky3fd> ${[...Array(5)].map((_, i) => renderTemplate`<span${addAttribute(i < fullStars ? "star active" : "star", "class")} data-astro-cid-so7ky3fd>★</span>`)} </div> <span class="rating-val" data-astro-cid-so7ky3fd>${rating.toFixed(1)}</span> </div> <div class="rating-row-votes" data-astro-cid-so7ky3fd> <span class="votes-count js-votes-count" data-astro-cid-so7ky3fd>(${votes.toLocaleString()})</span> <button class="btn-like js-like-btn"${addAttribute(id, "data-id")}${addAttribute(name, "data-name")} title="Me gusta" data-astro-cid-so7ky3fd> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-so7ky3fd> <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" data-astro-cid-so7ky3fd></path> </svg> </button> </div> </div> ${!isBundle && renderTemplate`<div class="card-price" data-astro-cid-so7ky3fd> ${old_price && renderTemplate`<div class="old-price" data-astro-cid-so7ky3fd> <span class="old-currency" data-astro-cid-so7ky3fd>$</span> <span class="old-amount" data-astro-cid-so7ky3fd>${old_price.toLocaleString(void 0, { minimumFractionDigits: 0 })}</span> </div>`} <div class="current-price" data-astro-cid-so7ky3fd> <span class="currency" data-astro-cid-so7ky3fd>$</span> <span class="amount" data-astro-cid-so7ky3fd>${price.toLocaleString(void 0, { minimumFractionDigits: 0 })}</span> <span class="unit" data-astro-cid-so7ky3fd>COP</span> </div> </div>`} <div class="card-actions" data-astro-cid-so7ky3fd> <a${addAttribute(`/megapack/${slug}`, "href")} class="btn-details" data-astro-cid-so7ky3fd>VER DETALLES</a> ${!isBundle && renderTemplate`<a${addAttribute(`https://wa.me/573133144700?text=Hola! Me interesa comprar el ${name}. Enviame los métodos de pago.`, "href")} target="_blank" class="btn-buy" data-astro-cid-so7ky3fd>COMPRAR</a>`} </div> </div> </div>  ${renderScript($$result, "D:/aec2/aec-web/src/components/shared/ProductCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/aec2/aec-web/src/components/shared/ProductCard.astro", void 0);

export { $$ProductCard as $ };

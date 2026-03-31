import { c as createComponent } from './astro-component_BjqUrzO7.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, u as unescapeHTML, l as renderComponent, n as Fragment, r as renderTemplate } from './entrypoint_I3-4Ut1s.mjs';
import { r as renderScript, s as supabase, $ as $$Layout, a as $$Navbar, b as $$Footer } from './supabase_Dj8r-rZj.mjs';
import 'clsx';

const $$PackHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PackHero;
  const { pack } = Astro2.props;
  const accentColor = pack.categories?.accent_color || "var(--green)";
  const formatTitle = (title) => {
    if (!title) return "";
    return title.replace("REVIT", `<span style="color: ${accentColor}">REVIT</span>`).replace("AUTOCAD", `<span style="color: ${accentColor}">AUTOCAD</span>`).replace("D5 RENDER", `<span style="color: ${accentColor}">D5 RENDER</span>`).replace("LUMION", `<span style="color: ${accentColor}">LUMION</span>`).replace("3DS MAX", `<span style="color: ${accentColor}">3DS MAX</span>`).replace("SKETCHUP", `<span style="color: ${accentColor}">SKETCHUP</span>`).replace("7.0", '<span class="gray">7.0</span>').replace("2024", '<span class="gray">2024</span>');
  };
  return renderTemplate`${maybeRenderHead()}<section id="hero-pack" data-astro-cid-d4dqctai> <div class="hero-content" data-astro-cid-d4dqctai> <div class="hero-header-row fade-up" data-astro-cid-d4dqctai> <div class="software-label"${addAttribute(`--accent: ${accentColor}`, "style")} data-astro-cid-d4dqctai> ${pack.hero_overtitle || `BIBLIOTECA DE ${pack.categories?.name || "AEC"} PRO`} </div> <div class="stars-social" data-astro-cid-d4dqctai> <span class="stars" data-astro-cid-d4dqctai>★★★★★</span> <span class="votes" data-astro-cid-d4dqctai>(${pack.rating || "4.9"}/5) • ${pack.votes?.toLocaleString() || "12,347"} votos</span> <button class="btn-like-mini" aria-label="Añadir a favoritos" data-astro-cid-d4dqctai> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-d4dqctai> <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" data-astro-cid-d4dqctai></path> </svg> <span class="like-count" data-astro-cid-d4dqctai>1.2k</span> </button> </div> </div> <h1 class="fade-up" style="transition-delay: 0.1s" data-astro-cid-d4dqctai>${unescapeHTML(formatTitle(`${pack.name} — ${pack.hero_title || ""}`))}</h1> <p class="hero-sub fade-up" style="transition-delay: 0.2s" data-astro-cid-d4dqctai> ${pack.hero_subtitle || "Nosotros ya filtramos, organizamos y empaquetamos el contenido premium que necesitas."} </p> <!-- VALUE BAR (DYNAMIC STATS) --> <div class="value-bar fade-up" style="transition-delay: 0.3s" data-astro-cid-d4dqctai> ${(pack.hero_stats || [
    { icon: "📁", text: "Acceso Vitalicio" },
    { icon: "🚀", text: "Google Drive" },
    { icon: "⚡", text: "Descarga Inmediata" }
  ]).map((stat, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-d4dqctai": true }, { "default": ($$result2) => renderTemplate` <div class="value-item" data-astro-cid-d4dqctai> <span class="stat-icon" data-astro-cid-d4dqctai>${stat.icon}</span> ${stat.text} </div> ${index < (pack.hero_stats || []).length - 1 && renderTemplate`<div class="value-sep" data-astro-cid-d4dqctai></div>`}` })}`)} </div> <div class="hero-actions fade-up" style="transition-delay: 0.4s" data-astro-cid-d4dqctai> <a${addAttribute(`https://wa.me/573133144700?text=Hola! Me interesa comprar el ${pack.name}. Enviame los métodos de pago.`, "href")} target="_blank" class="btn-buy-giant"${addAttribute(`--accent: ${accentColor}`, "style")} data-astro-cid-d4dqctai>
QUIERO ESTE PACK — $${pack.price ? Number(pack.price).toLocaleString() : "0"} COP
</a> <div class="trust-signal" data-astro-cid-d4dqctai> <span data-astro-cid-d4dqctai>🔒</span> Pago seguro 100% garantizado por WhatsApp
</div> </div> </div> </section>  ${renderScript($$result, "D:/aec2/aec-web/src/components/packs/PackHero.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/aec2/aec-web/src/components/packs/PackHero.astro", void 0);

const $$PackDashboard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PackDashboard;
  const { pack } = Astro2.props;
  const accentColor = pack.categories?.accent_color || "var(--green)";
  const defaultCards = [
    {
      title: "30 PLANTILLAS DE VISTA",
      description: "10 Plantas (Arqui & Estructura), 10 Secciones Técnicas Profundas, 5 Elevaciones & Sombras, 5 Vistas 3D & Isometrías",
      type: "catalog"
    },
    {
      title: "9 CLASES MAGISTRALES",
      description: "1h 45 min de entrenamiento Pro, Creación de plantillas propias, Configuración de filtros BIM, Estandarización de grosores",
      type: "video",
      is_featured: true
    },
    {
      title: "LIBRERÍA REVIT 2.0",
      description: "Refuerzos Estructurales, Componentes de anotación, Tablas de planificación, Acceso a futuras mejoras",
      type: "drive"
    }
  ];
  const cards = pack.content_cards && pack.content_cards.length >= 3 ? pack.content_cards : defaultCards;
  const formatS2Title = (text) => {
    return text.replace(/\n/g, "<br />").replace(/\r/g, "");
  };
  const getChecklist = (desc) => {
    if (!desc) return [];
    return desc.split(",").map((item) => item.trim());
  };
  return renderTemplate`${maybeRenderHead()}<section id="dashboard" data-astro-cid-bnxmzsrh> <div class="dashboard-container" data-astro-cid-bnxmzsrh> <div class="dashboard-header fade-up" data-astro-cid-bnxmzsrh> <div class="overtitle" data-astro-cid-bnxmzsrh>— ${pack.s2_overtitle || "DOMINA EL SOFTWARE HOY MISMO"} —</div> <h2 data-astro-cid-bnxmzsrh>${unescapeHTML(formatS2Title(pack.s2_title || "TODO LO QUE NECESITAS PARA ENTREGAS PRO EN UN SOLO LUGAR"))}</h2> <p class="section-sub" data-astro-cid-bnxmzsrh> ${pack.s2_subtitle || "Diseñado para arquitectos que buscan resultados de alto nivel sin perder horas configurando."} </p> </div> <div class="content-grid" data-astro-cid-bnxmzsrh> ${cards.map((card, index) => renderTemplate`<div${addAttribute(`content-card fade-up ${index === 1 || card.is_featured ? "featured" : ""}`, "class")}${addAttribute(`transition-delay: ${index * 0.1}s; --accent: ${accentColor}`, "style")} data-astro-cid-bnxmzsrh> ${(index === 1 || card.is_featured) && renderTemplate`<div class="featured-tag" data-astro-cid-bnxmzsrh></div>`} <div class="card-header" data-astro-cid-bnxmzsrh> <h3 class="card-title" data-astro-cid-bnxmzsrh>${card.title || card.label}</h3> </div> <ul class="card-list" data-astro-cid-bnxmzsrh> ${getChecklist(card.description).map((item) => renderTemplate`<li data-astro-cid-bnxmzsrh> <span class="check" data-astro-cid-bnxmzsrh>✓</span> ${item} </li>`)} </ul> </div>`)} </div> <!-- MAIN DASHBOARD ACTIONS --> <div class="dashboard-actions fade-up" style="transition-delay: 0.4s" data-astro-cid-bnxmzsrh> <button class="btn-action secondary open-modal-btn"${addAttribute(pack.catalog_url, "data-url")} data-type="catalog" data-astro-cid-bnxmzsrh> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-bnxmzsrh> <path d="M4 6h16M4 12h16M4 18h7" data-astro-cid-bnxmzsrh></path> </svg>
Explorar el Catálogo
</button> <button class="btn-action primary open-modal-btn"${addAttribute(pack.demo_video_url, "data-url")} data-type="video" data-astro-cid-bnxmzsrh> <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-bnxmzsrh> <path d="M8 5v14l11-7z" data-astro-cid-bnxmzsrh></path> </svg>
Ver Video Demostración
</button> </div> </div> <div class="slider-dots mobile-only" data-astro-cid-bnxmzsrh> <div class="dot active" data-astro-cid-bnxmzsrh></div> <div class="dot" data-astro-cid-bnxmzsrh></div> <div class="dot" data-astro-cid-bnxmzsrh></div> </div> <!-- REUSABLE MODAL --> <div id="dashboardModal" class="modal" data-astro-cid-bnxmzsrh> <div class="modal-overlay" data-astro-cid-bnxmzsrh></div> <div class="modal-content" data-astro-cid-bnxmzsrh> <button class="modal-close" data-astro-cid-bnxmzsrh>&times;</button> <div class="video-wrapper" data-astro-cid-bnxmzsrh> <iframe id="modalIframe" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-astro-cid-bnxmzsrh></iframe> <!-- Fallback message inside modal --> <div id="modalFallback" class="modal-fallback" style="display: none;" data-astro-cid-bnxmzsrh> <div class="fallback-inner" data-astro-cid-bnxmzsrh> <span class="f-icon" data-astro-cid-bnxmzsrh>🎥</span> <h3 id="fallbackTitle" data-astro-cid-bnxmzsrh>CONTENIDO EN ACTUALIZACIÓN</h3> <p id="fallbackMsg" data-astro-cid-bnxmzsrh>Estamos trabajando para brindarte la mejor experiencia técnica. Este material estará disponible muy pronto.</p> <div class="f-badge" data-astro-cid-bnxmzsrh>PROXIMAMENTE</div> </div> </div> </div> </div> </div> </section>  ${renderScript($$result, "D:/aec2/aec-web/src/components/packs/PackDashboard.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/aec2/aec-web/src/components/packs/PackDashboard.astro", void 0);

const $$PackDriveMockup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PackDriveMockup;
  const { pack } = Astro2.props;
  pack.categories?.accent_color || "var(--green)";
  const trustCards = [
    {
      title: "Pago Protegido",
      desc: "Pasarela 100% segura.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
    },
    {
      title: "Acceso Cloud",
      desc: "Google Drive 24/7.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2-1.5-3.5-3.5-4C18 7.5 15.5 5 12.5 5c-2.5 0-4.5 2-4.5 4.5 0 .5.1.8.2 1.2C6 11 4.5 12.5 4.5 14.5c0 2.5 2 4.5 4.5 4.5h8.5z"></path></svg>`
    },
    {
      title: "Link Vitalicio",
      desc: "Nunca caduca.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`
    },
    {
      title: "Soporte VIP",
      desc: "Chat con ingenieros.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`
    }
  ];
  const videoUrl = pack.drive_video_url;
  const finalVideoUrl = videoUrl && videoUrl !== "#" && videoUrl.trim() !== "" ? videoUrl.includes("youtube.com/watch?v=") ? videoUrl.replace("watch?v=", "embed/") : videoUrl.includes("drive.google.com/file/d/") && !videoUrl.includes("/preview") ? videoUrl.replace(/\/view(\?.*)?$/, "/preview") : videoUrl : null;
  return renderTemplate`${maybeRenderHead()}<section id="access-process" data-astro-cid-7s3dj5ng> <div class="container" data-astro-cid-7s3dj5ng> <div class="header fade-up" data-astro-cid-7s3dj5ng> <div class="overtitle" data-astro-cid-7s3dj5ng>— PROCESO DE ACCESO —</div> <h2 data-astro-cid-7s3dj5ng>TU LIBRERÍA EN LA NUBE, LISTA PARA USAR</h2> <p class="subtitle" data-astro-cid-7s3dj5ng>Acceso inmediato y organizado. Mira cómo navegarás por tu nuevo material.</p> </div> <div class="access-grid" data-astro-cid-7s3dj5ng> <!-- LEFT: BROWSER VIDEO TOUR --> <div class="video-column fade-up" data-astro-cid-7s3dj5ng> <div class="browser-mockup" data-astro-cid-7s3dj5ng> <div class="browser-header" data-astro-cid-7s3dj5ng> <div class="dots" data-astro-cid-7s3dj5ng> <span class="dot red" data-astro-cid-7s3dj5ng></span> <span class="dot yellow" data-astro-cid-7s3dj5ng></span> <span class="dot green" data-astro-cid-7s3dj5ng></span> </div> <div class="address-bar" data-astro-cid-7s3dj5ng> <span class="folder-path" data-astro-cid-7s3dj5ng>Mi Unidad > Tour por el Pack ${pack.name}</span> </div> </div> <div class="video-container" data-astro-cid-7s3dj5ng> ${finalVideoUrl ? renderTemplate`<iframe${addAttribute(finalVideoUrl, "src")} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-astro-cid-7s3dj5ng></iframe>` : renderTemplate`<div class="video-placeholder" data-astro-cid-7s3dj5ng> <div class="placeholder-content" data-astro-cid-7s3dj5ng> <span class="p-icon" data-astro-cid-7s3dj5ng>🎥</span> <h3 data-astro-cid-7s3dj5ng>Video de Acceso</h3> <p data-astro-cid-7s3dj5ng>Estamos actualizando el tour por esta librería. Estará disponible muy pronto.</p> <div class="p-badge" data-astro-cid-7s3dj5ng>EN ACTUALIZACIÓN</div> </div> </div>`} </div> </div> </div> <!-- RIGHT: TRUST CARDS --> <div class="cards-column" data-astro-cid-7s3dj5ng> ${trustCards.map((card, index) => renderTemplate`<div class="trust-card fade-up"${addAttribute(`transition-delay: ${index * 0.1}s`, "style")} data-astro-cid-7s3dj5ng> <div class="card-inner" data-astro-cid-7s3dj5ng> <div class="card-icon" data-astro-cid-7s3dj5ng>${unescapeHTML(card.icon)}</div> <div class="card-info" data-astro-cid-7s3dj5ng> <h3 data-astro-cid-7s3dj5ng>${card.title}</h3> <p data-astro-cid-7s3dj5ng>${card.desc}</p> </div> </div> </div>`)} </div> </div> </div> </section>`;
}, "D:/aec2/aec-web/src/components/packs/PackDriveMockup.astro", void 0);

const $$PackBenefits = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PackBenefits;
  const { pack } = Astro2.props;
  const accentColor = pack.categories?.accent_color || "var(--green)";
  const standardBenefits = [
    { icon: "✨", title: "Mejora visual", description: "Logra planos con nivel de detalle superior y estética profesional de forma inmediata." },
    { icon: "⏱️", title: "Ahorra tiempo", description: "Elimina horas de configuración manual. Arrastra, suelta y empieza a producir." },
    { icon: "🎓", title: "Curso incluido", description: "9 Clases maestras para que aprendas a personalizar y crear tus propias vistas." },
    { icon: "📂", title: "Orden absoluto", description: "Todo clasificado por disciplina (Arqui, Estructural, MEP) para un uso intuitivo." },
    { icon: "🖨️", title: "Listo para imprimir", description: "Grosores de línea y visibilidad configurados bajo estándares técnicos reales." }
  ];
  const benefits = pack.benefits && pack.benefits.length >= 5 ? pack.benefits : standardBenefits;
  return renderTemplate`${maybeRenderHead()}<section id="strategic-investment" data-astro-cid-wtbdgp5z> <div class="container" data-astro-cid-wtbdgp5z> <div class="benefits-header fade-up" data-astro-cid-wtbdgp5z> <div class="overtitle" data-astro-cid-wtbdgp5z>— ${pack.s4_overtitle || "INVERSIÓN ESTRATÉGICA"} —</div> <h2 data-astro-cid-wtbdgp5z>${pack.s4_title || "¿POR QUÉ ESTE PACK ES TU MEJOR DECISIÓN?"}</h2> <p class="subtitle" data-astro-cid-wtbdgp5z>${pack.s4_subtitle || "Eleva el nivel de tus presentaciones BIM con estándares profesionales."}</p> </div> <div class="benefits-grid" data-astro-cid-wtbdgp5z> ${benefits.map((benefit, index) => renderTemplate`<div class="benefit-card fade-up"${addAttribute(`transition-delay: ${index * 0.1}s; --accent: ${accentColor}`, "style")} data-astro-cid-wtbdgp5z> <div class="benefit-icon" data-astro-cid-wtbdgp5z> <span class="icon-inner" data-astro-cid-wtbdgp5z>${benefit.icon || "💎"}</span> </div> <h3 data-astro-cid-wtbdgp5z>${benefit.title}</h3> <p data-astro-cid-wtbdgp5z>${benefit.description || benefit.desc}</p> </div>`)} </div> </div> </section>`;
}, "D:/aec2/aec-web/src/components/packs/PackBenefits.astro", void 0);

const $$PackBundleCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PackBundleCTA;
  const { pack, bundle } = Astro2.props;
  const softwareName = pack.categories?.name || "este software";
  const discount = bundle.saving_percentage || "25";
  return renderTemplate`${maybeRenderHead()}<section id="bundle-cta" data-astro-cid-fawkha7o> <div class="cta-gradient" data-astro-cid-fawkha7o> <div class="container fade-up" data-astro-cid-fawkha7o> <div class="badge" data-astro-cid-fawkha7o>¡OFERTA ESPECIAL!</div> <h2 data-astro-cid-fawkha7o>LLEVA TU BIBLIOTECA AL NIVEL DEFINITIVO</h2> <p data-astro-cid-fawkha7o>Añade todos los packs de ${softwareName} en nuestro Bundle y ahorra un ${discount}%.</p> <div class="actions" data-astro-cid-fawkha7o> <a${addAttribute(`/bundle/${bundle.slug}`, "href")} class="btn-bundle" data-astro-cid-fawkha7o>
Ver Bundle Completo
</a> </div> </div> </div> </section>`;
}, "D:/aec2/aec-web/src/components/packs/PackBundleCTA.astro", void 0);

const $$PackFAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PackFAQ;
  const { faq, accentColor = "var(--green)" } = Astro2.props;
  const defaultFaq = [
    { q: "¿Cómo recibo el contenido?", a: "Inmediatamente después de confirmar tu pago por WhatsApp, te enviamos el enlace de acceso privado a Google Drive." },
    { q: "¿El pago es único?", a: "Sí. Un solo pago y el acceso es para siempre, incluyendo futuras actualizaciones del pack." }
  ];
  const faqList = faq && faq.length > 0 ? faq : defaultFaq;
  return renderTemplate`${maybeRenderHead()}<section id="faq-section" data-astro-cid-7wviuif7> <div class="container" data-astro-cid-7wviuif7> <div class="faq-header fade-up" data-astro-cid-7wviuif7> <div class="overtitle" data-astro-cid-7wviuif7>— RESOLVIENDO DUDAS —</div> <h2 data-astro-cid-7wviuif7>PREGUNTAS <span${addAttribute(`color: ${accentColor}`, "style")} data-astro-cid-7wviuif7>FRECUENTES</span></h2> <p class="subtitle" data-astro-cid-7wviuif7>Todo lo que necesitas saber antes de dar el siguiente paso.</p> </div> <div class="faq-list" data-astro-cid-7wviuif7> ${faqList.map((item, index) => renderTemplate`<div class="faq-item fade-up"${addAttribute(`transition-delay: ${index * 0.1}s`, "style")} data-astro-cid-7wviuif7> <button class="faq-question" aria-expanded="false" data-astro-cid-7wviuif7> <span data-astro-cid-7wviuif7>${item.q}</span> <span class="icon" data-astro-cid-7wviuif7> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-7wviuif7> <path d="M7 0V14" stroke="currentColor" stroke-width="2" data-astro-cid-7wviuif7></path> <path d="M0 7H14" stroke="currentColor" stroke-width="2" class="horizontal-line" data-astro-cid-7wviuif7></path> </svg> </span> </button> <div class="faq-answer" data-astro-cid-7wviuif7> <div class="answer-content" data-astro-cid-7wviuif7> <p data-astro-cid-7wviuif7>${item.a}</p> </div> </div> </div>`)} </div> </div> </section>  ${renderScript($$result, "D:/aec2/aec-web/src/components/packs/PackFAQ.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/aec2/aec-web/src/components/packs/PackFAQ.astro", void 0);

const $$PackFinalCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PackFinalCTA;
  const { pack, bundle } = Astro2.props;
  const priceCOP = pack.price ? Number(pack.price).toLocaleString() : "0";
  const accentColor = pack.categories?.accent_color || "var(--green)";
  return renderTemplate`${maybeRenderHead()}<section id="final-cta" data-astro-cid-ew322cre> <div class="container fade-up" data-astro-cid-ew322cre> <div class="overtitle" data-astro-cid-ew322cre>— IMPULSO FINAL —</div> <h2 data-astro-cid-ew322cre>¿LISTO PARA <span${addAttribute(`color: ${accentColor}`, "style")} data-astro-cid-ew322cre>TRANSFORMAR</span> TUS PROYECTOS?</h2> <p class="subtitle" data-astro-cid-ew322cre>Obtén el <strong data-astro-cid-ew322cre>${pack.name}</strong> hoy mismo y acelera tu carrera profesional.</p> <div class="cta-actions" data-astro-cid-ew322cre> <a${addAttribute(`https://wa.me/573133144700?text=Hola! Me interesa comprar el ${pack.name}. Enviame los métodos de pago.`, "href")} class="btn-primary" target="_blank"${addAttribute(`background: ${accentColor}`, "style")} data-astro-cid-ew322cre>
Quiero este Pack — $${priceCOP} COP
</a> ${bundle ? renderTemplate`<a${addAttribute(`/bundle/${bundle.slug}`, "href")} class="btn-secondary" data-astro-cid-ew322cre>
Ver Bundle Completo
</a>` : renderTemplate`<a href="/#packs" class="btn-secondary" data-astro-cid-ew322cre>
Ver todos los Packs
</a>`} </div> </div> </section>`;
}, "D:/aec2/aec-web/src/components/packs/PackFinalCTA.astro", void 0);

const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { data: pack, error } = await supabase.from("packs").select(`
    *,
    categories (
      name,
      accent_color
    )
  `).eq("slug", slug).single();
  if (error || !pack) {
    return Astro2.redirect("/404");
  }
  const { data: bundleLink } = await supabase.from("bundle_packs").select(`
    bundles (
      id,
      name,
      slug,
      saving_percentage
    )
  `).eq("pack_id", pack.id).single();
  const bundle = bundleLink?.bundles;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${pack.name} — Ingeniería Extrema Media`, "data-astro-cid-k2rdgpbx": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-k2rdgpbx": true })} ${maybeRenderHead()}<main data-astro-cid-k2rdgpbx> ${renderComponent($$result2, "PackHero", $$PackHero, { "pack": pack, "data-astro-cid-k2rdgpbx": true })} ${renderComponent($$result2, "PackDashboard", $$PackDashboard, { "pack": pack, "data-astro-cid-k2rdgpbx": true })} ${renderComponent($$result2, "PackDriveMockup", $$PackDriveMockup, { "pack": pack, "data-astro-cid-k2rdgpbx": true })} ${renderComponent($$result2, "PackBenefits", $$PackBenefits, { "pack": pack, "data-astro-cid-k2rdgpbx": true })} ${bundle && renderTemplate`${renderComponent($$result2, "PackBundleCTA", $$PackBundleCTA, { "pack": pack, "bundle": bundle, "data-astro-cid-k2rdgpbx": true })}`} ${renderComponent($$result2, "PackFAQ", $$PackFAQ, { "faq": pack.faq, "accentColor": pack.categories?.accent_color, "data-astro-cid-k2rdgpbx": true })} ${renderComponent($$result2, "PackFinalCTA", $$PackFinalCTA, { "pack": pack, "bundle": bundle, "data-astro-cid-k2rdgpbx": true })} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-k2rdgpbx": true })} ` })}  ${renderScript($$result, "D:/aec2/aec-web/src/pages/megapack/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/aec2/aec-web/src/pages/megapack/[slug].astro", void 0);

const $$file = "D:/aec2/aec-web/src/pages/megapack/[slug].astro";
const $$url = "/megapack/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

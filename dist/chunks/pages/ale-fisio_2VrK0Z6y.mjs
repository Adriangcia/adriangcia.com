/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderSlot, b as renderComponent, u as unescapeHTML } from '../astro_CdNvLDSm.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$BaseLayout, a as $$SectionContainer } from './about_C_IqQcBc.mjs';
/* empty css                              */

const $$Astro$1 = createAstro();
const $$H1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$H1;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(`text-5xl font-bold gap-x-3 pb-5 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/components/etiquetas/H1.astro", void 0);

const $$Astro = createAstro();
const $$MarkdownProjectLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownProjectLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": frontmatter.title, "description": "UX Design Project Estrategic Management", "data-astro-cid-lfq5pvlt": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "pt-5 md:pt-14 pb-10", "data-astro-cid-lfq5pvlt": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center items-center" data-astro-cid-lfq5pvlt> <img${addAttribute(frontmatter.imageFeatured.url, "src")}${addAttribute(frontmatter.imageFeatured.alt, "alt")} width="80%" class="mb-4 md:mb-6 rounded-lg w-[100%] max-w-screen-md" data-astro-cid-lfq5pvlt> </div> ${renderComponent($$result3, "H1", $$H1, { "data-astro-cid-lfq5pvlt": true }, { "default": ($$result4) => renderTemplate`${frontmatter.title}` })} ${renderSlot($$result3, $$slots["default"])} <p class="mt-5" data-astro-cid-lfq5pvlt> <b data-astro-cid-lfq5pvlt>Herramientas y tecnologías:</b> <!-- Obtengo las tags de cada proyecto y las muestro aquí --> </p><p data-astro-cid-lfq5pvlt> ${frontmatter.tags.map((tag, index, array) => {
    if (index === array.length - 1) {
      return tag;
    } else {
      return `${tag}, `;
    }
  })} </p>  ` })} ` })} `;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/layouts/MarkdownProjectLayout.astro", void 0);

const html = "<p>Ale Fisio fue una aplicación online para la gestión de clínicas de fisioterapia que dearrollamos para un cliente, en Genética Design Management, que poseia varios centros y quería poder tener una gestión centralizada de todos ellos.</p>\n<p>Pasamos varias jornadas en el centro para conocer el día a día de todos los trabajadores y así poder detectar necesidades no evidentes y poder adaptar los máximo posible la aplicación.</p>\n<p>Creamos una aplicación sencilla desde la que gestionar historiales de pacientes, citas, turnos, facturación…</p>\n<img src=\"/images/AleFisiocita.webp\" alt=\"Vista de la gestión de citas en Ale Fisio\" class=\"imgmd\">\n<p>El equipo para este desarrollo estaba formado por un programador, técnico de sistemas y dos diseñadores.</p>\n<p>Mi rol fue Gestión del proyecto, coordinar equipo y establecer las fases de diseño.</p>\n<p>Investigación para el diseño, estudio de los usarios, análisis de campo y diseño de la aplicación.</p>\n<img src=\"/images/AleFisioturnos.webp\" alt=\"Vista del listado de usuarios en talkiens admin\" class=\"imgmd\">\n<img src=\"/images/AleFisiofacturas.webp\" alt=\"Vista del listado de usuarios en talkiens admin\" class=\"imgmd\">\n<style>\n    .imgmd{\n        border-radius: 0.5rem;\n        margin-top: 2%;\n        margin-bottom: 2%;\n    }\n</style>";

				const frontmatter = {"layout":"../../layouts/MarkdownProjectLayout.astro","title":"Ale Fisio","pubDate":"2018-01-01T00:00:00.000Z","description":"Aplicación para la gestión de centros de fisioterapia.","imageFeatured":{"url":"../../images/AleFisioperfil.webp","alt":"Vista de la cabina del helimer que usamos para simular emergencias."},"tags":["Python","Jinja","HTML","CSS","Inkscape","GDrive","Slack","Trello","Atlasian Bitbucket"]};
				const file = "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/pages/projects/ale-fisio.md";
				const url = "/projects/ale-fisio";
				function rawContent() {
					return "Ale Fisio fue una aplicación online para la gestión de clínicas de fisioterapia que dearrollamos para un cliente, en Genética Design Management, que poseia varios centros y quería poder tener una gestión centralizada de todos ellos.\n\nPasamos varias jornadas en el centro para conocer el día a día de todos los trabajadores y así poder detectar necesidades no evidentes y poder adaptar los máximo posible la aplicación.\n\nCreamos una aplicación sencilla desde la que gestionar historiales de pacientes, citas, turnos, facturación…\n\n<img src=\"/images/AleFisiocita.webp\" alt=\"Vista de la gestión de citas en Ale Fisio\" class=\"imgmd\">\n\nEl equipo para este desarrollo estaba formado por un programador, técnico de sistemas y dos diseñadores.\n\nMi rol fue Gestión del proyecto, coordinar equipo y establecer las fases de diseño.\n\nInvestigación para el diseño, estudio de los usarios, análisis de campo y diseño de la aplicación.\n\n<img src=\"/images/AleFisioturnos.webp\" alt=\"Vista del listado de usuarios en talkiens admin\" class=\"imgmd\">\n\n<img src=\"/images/AleFisiofacturas.webp\" alt=\"Vista del listado de usuarios en talkiens admin\" class=\"imgmd\">\n\n\n<style>\n    .imgmd{\n        border-radius: 0.5rem;\n        margin-top: 2%;\n        margin-bottom: 2%;\n    }\n</style>";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownProjectLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const aleFisio = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content,
    compiledContent,
    default: Content,
    file,
    frontmatter,
    getHeadings,
    rawContent,
    url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MarkdownProjectLayout as $, $$H1 as a, aleFisio as b };

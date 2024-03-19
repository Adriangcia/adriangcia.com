/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../astro_CdNvLDSm.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './about_C_IqQcBc.mjs';
import { a as $$H1 } from './ale-fisio_2VrK0Z6y.mjs';
/* empty css                             */

const $$Astro = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const allProjects = await Astro2.glob(/* #__PURE__ */ Object.assign({"./projects/ale-fisio.md": () => import('./ale-fisio_2VrK0Z6y.mjs').then(n => n.b),"./projects/control-de-horarios.md": () => import('./control-de-horarios_DnLrsEq0.mjs'),"./projects/kumquat.md": () => import('./kumquat_BDgDJlBI.mjs'),"./projects/medidor-calado-barcos.md": () => import('./medidor-calado-barcos_3-By1PEs.mjs'),"./projects/medidor-laser.md": () => import('./medidor-laser_HyiBkiNG.mjs'),"./projects/parkings.md": () => import('./parkings_BYjcuJXB.mjs'),"./projects/simulador-emergencias-helicoptero-salvamento.md": () => import('./simulador-emergencias-helicoptero-salvamento_DcbXdRvd.mjs'),"./projects/talkiens.md": () => import('./talkiens_4uXkaKZC.mjs'),"./projects/uvieu-embruxa.md": () => import('./uvieu-embruxa_nIFjw_JU.mjs')}), () => "../pages/projects/*.md");
  allProjects.sort((a, b) => Date.parse(b.frontmatter.pubDate) - Date.parse(a.frontmatter.pubDate));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Adri\xE1n Gc\xEDa - UX Design Project Manager", "description": "UX Design Project Estrategic Management", "data-astro-cid-aid3sr62": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container w-full mx-auto lg:w-[900px] mt-12 mb-5" data-astro-cid-aid3sr62> ${renderComponent($$result2, "H1", $$H1, { "class": "text-center", "data-astro-cid-aid3sr62": true }, { "default": ($$result3) => renderTemplate`
Algunos proyectos
` })} <h2 data-astro-cid-aid3sr62>
Aquí detallo alguno de los proyectos en los que he trabajo y que creo interesantes para explicar mi rol en unos u otros.
<br data-astro-cid-aid3sr62> Iré añadiendo nuevos proyectos poco a poco.
<br data-astro-cid-aid3sr62> En el siguiente enlace muestro otros proyectos alternativos a mi actividad principal como diseñador: <a href="/side-projects" data-astro-cid-aid3sr62>side projects</a>.
</h2> </section> <section class="container w-full mx-auto lg:w-[900px]" data-astro-cid-aid3sr62> <ul class="grid gap-4 md:grid-cols-2" data-astro-cid-aid3sr62> ${allProjects.map(
    (project) => renderTemplate`<li data-astro-cid-aid3sr62> <div class="max-w-sm bg-zinc-900 border border-zinc-900 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-astro-cid-aid3sr62> <a${addAttribute(project.url, "href")} data-astro-cid-aid3sr62> <img${addAttribute(project.frontmatter.imageFeatured.url, "src")}${addAttribute(project.frontmatter.imageFeatured.alt, "alt")} width="100%" class="rounded-lg" data-astro-cid-aid3sr62> </a> <div class="p-5 text-pretty projectcard" data-astro-cid-aid3sr62> <a${addAttribute(project.url, "href")} data-astro-cid-aid3sr62> <h5 class="mb-2 text-2xl font-bold tracking-tight text-lightgray dark:text-white" data-astro-cid-aid3sr62> ${project.frontmatter.title} </h5> </a> <p class="mb-3 font-normal text-lightgray dark:text-gray-400" data-astro-cid-aid3sr62>${project.frontmatter.description}</p> <a${addAttribute(project.url, "href")} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-500/60 rounded-lg hover:bg-indigo-700/60 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-astro-cid-aid3sr62>
Leer más
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" data-astro-cid-aid3sr62> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" data-astro-cid-aid3sr62></path> </svg> </a> </div> </div> </li>`
  )} </ul> </section> ` })} `;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/pages/projects.astro", void 0);

const $$file = "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };

/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../astro_CdNvLDSm.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$BaseLayout } from './about_C_IqQcBc.mjs';
import { a as $$H1 } from './ale-fisio_2VrK0Z6y.mjs';
/* empty css                                  */

const $$Astro = createAstro();
const $$SideProjects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SideProjects;
  const allProjects = await Astro2.glob(/* #__PURE__ */ Object.assign({"./projects/ale-fisio.md": () => import('./ale-fisio_2VrK0Z6y.mjs').then(n => n.b),"./projects/control-de-horarios.md": () => import('./control-de-horarios_DnLrsEq0.mjs'),"./projects/kumquat.md": () => import('./kumquat_BDgDJlBI.mjs'),"./projects/medidor-calado-barcos.md": () => import('./medidor-calado-barcos_3-By1PEs.mjs'),"./projects/medidor-laser.md": () => import('./medidor-laser_HyiBkiNG.mjs'),"./projects/parkings.md": () => import('./parkings_BYjcuJXB.mjs'),"./projects/simulador-emergencias-helicoptero-salvamento.md": () => import('./simulador-emergencias-helicoptero-salvamento_DcbXdRvd.mjs'),"./projects/talkiens.md": () => import('./talkiens_4uXkaKZC.mjs'),"./projects/uvieu-embruxa.md": () => import('./uvieu-embruxa_nIFjw_JU.mjs')}), () => "../pages/projects/*.md");
  allProjects.sort((a, b) => Date.parse(b.frontmatter.pubDate) - Date.parse(a.frontmatter.pubDate));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Adri\xE1n Gc\xEDa - UX Design Project Manager", "description": "UX Design Project Estrategic Management", "data-astro-cid-s74g2io5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container w-full mx-auto lg:w-[900px] mt-12 mb-5" data-astro-cid-s74g2io5> ${renderComponent($$result2, "H1", $$H1, { "class": "text-center", "data-astro-cid-s74g2io5": true }, { "default": ($$result3) => renderTemplate`
En desarrollo
` })} </section> ` })} `;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/pages/side-projects.astro", void 0);

const $$file = "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/pages/side-projects.astro";
const $$url = "/side-projects";

export { $$SideProjects as default, $$file as file, $$url as url };

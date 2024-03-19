/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from '../astro_CdNvLDSm.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$SectionContainer, $ as $$BaseLayout } from './about_C_IqQcBc.mjs';

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Adri\xE1n Gc\xEDa - UX Design Project Manager", "description": "UX Design Project Estrategic Management" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "pt-11 text-pretty" })} ` })}`;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/pages/contact.astro", void 0);

const $$file = "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };

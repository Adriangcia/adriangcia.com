/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, d as addAttribute, b as renderComponent } from '../astro_CdNvLDSm.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$SectionContainer, b as $$SocialPill, c as $$H2, $ as $$BaseLayout } from './about_C_IqQcBc.mjs';
import { a as $$H1 } from './ale-fisio_2VrK0Z6y.mjs';

const $$Astro$5 = createAstro();
const $$LinkedIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${spreadAttributes(Astro2.props)} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path> <path d="M8 11l0 5"></path> <path d="M8 8l0 .01"></path> <path d="M12 16l0 -5"></path> <path d="M16 16v-3a2 2 0 0 0 -4 0"></path> </svg>`;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/components/icons/LinkedIn.astro", void 0);

const $$Astro$4 = createAstro();
const $$Briefcase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${spreadAttributes(Astro2.props)} viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>`;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/components/icons/Briefcase.astro", void 0);

const $$Astro$3 = createAstro();
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${spreadAttributes(Astro2.props)} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path> <path d="M3 7l9 6l9 -6"></path> </svg>`;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/components/icons/Mail.astro", void 0);

const $$Astro$2 = createAstro();
const $$ExperienceItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, description, link, date } = Astro2.props;
  const hasLink = link.length > 0;
  return renderTemplate`${maybeRenderHead()}<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-sm font-normal leading-none">${date}</time> <h3 class="text-lg font-semibold text-cyan-500"> ${title} </h3> <p class="mb-4 text-base font-normal"> ${description} </p> <a${addAttribute(link, "href")}${addAttribute(hasLink ? "inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" : "hidden", "class")} target="_blank">Ver más <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg></a>`;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/components/ExperienceItem.astro", void 0);

const $$Astro$1 = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Experience;
  const EXPERIENCE = [
    {
      date: "2020 - 2024",
      title: "Azai Solutions SL",
      description: "Project & UX Manager, Product Designer. Desarrollo de herramientas digitales para gesti\xF3n de entornos industriales.",
      link: "https://azai.info/",
      hasLink: true
    },
    {
      date: "2020",
      title: "Dise\xF1o de skateparks",
      description: "Como director del comit\xE9 de roller freestyle en la FDPPA asesoro a ayuntamientos respecto a instalaciones para patinar, gestiono proyectos y dise\xF1o m\xF3dulos.",
      link: "https://skateparksdesign.com/",
      hasLink: true
    },
    {
      date: "2019",
      title: "Asturias Dise\xF1a",
      description: "Formo parte de los impulsores del colectivo que agrupa a todas las disciplinas, y entidades, directamente relacionadas con el dise\xF1o en Asturias.",
      link: "https://asturias.design/",
      hasLink: true
    },
    // { 
    //     date: '2018',
    //     title: 'Comité roller freestyle en FDPPA',
    //     description: 'Asumo el cargo como primer director del comité de roller freestyle en la Federación de Patinaje del Principado de Asturias con el objetivo de potenciar la disciplina y organizar competiciones y eventos con el apoyo federativo.',
    //     link: '',
    // },
    {
      date: "2018 - 2019",
      title: "Facto Agencia de Innovaci\xF3n",
      description: "Design & Innovation Manager. Agencia de innovaci\xF3n y dise\xF1o con enfoque en empresas de la econom\xEDa social.",
      link: "",
      hasLink: false
    },
    {
      date: "06 - 2016",
      title: "Ingenier\xEDa T\xE9cnica Industrial - Electr\xF3nica",
      description: "Entrega del PFC, Epi Gij\xF3n, Universidad de Oviedo.",
      link: "",
      hasLink: false
    },
    {
      date: "2015",
      title: "mimar\xEDa hempworks",
      description: "Cofundador de mimar\xEDa hempworks, marca asturiana de productos elaborados con fibra de c\xE1\xF1amo en peque\xF1as tiradas de producci\xF3n local.",
      link: "https://mimariahempworks.com/",
      hasLink: true
    },
    {
      date: "2012",
      title: "Dida (Asociaci\xF3n de Dise\xF1adores Industriales de Asturias)",
      description: "Formo parte de la directiva de la asociaci\xF3n, dise\xF1o de eventos y estrategias de divulgaci\xF3n.",
      link: "https://asociacion-dida.org",
      hasLink: true
    },
    {
      date: "2012 - 2018",
      title: "Gen\xE9tica Design Management",
      description: "Tras terminar los estudios del M\xE1ster y haber trabajado en varios proyectos nos juntamos tres exalumnos y fundamos nuestro propio estudio de dise\xF1o y gesti\xF3n de proyectos de dise\xF1o.",
      link: "https://geneticadesign.com",
      hasLink: true
    },
    {
      date: "2011",
      title: "Akroteria",
      description: "Dise\xF1o y proyectos de estrategia arquitect\xF3nica y urban\xEDstica.",
      link: "",
      hasLink: false
    },
    {
      date: "2011",
      title: "Master en Gesti\xF3n del Dise\xF1o Industrial",
      description: "EPI Gij\xF3n, Universidad de Oviedo. Conocimiento de todo lo que implica el desarrollo de un producto industrial y los procesos que gestiona la figura de un Product Manager, desarrollando diferentes proyectos con clientes reales.",
      link: "",
      hasLink: false
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative border-s border-gray-200 dark:border-gray-70"> ${EXPERIENCE.map((experience) => renderTemplate`<li class="ml-7 mb-10 ms-4 text-pretty"> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experience })} </li>`)} </ol>`;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/components/Experience.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Adri\xE1n Gc\xEDa - UX Design Project Manager", "description": "UX Design Project Estrategic Management" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "pt-14 pb-10" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<img class="rounded-full size-12 mb-4" src="https://media.licdn.com/dms/image/C4D03AQHAoFT8Pkqkyg/profile-displayphoto-shrink_800_800/0/1563790593186?e=1715212800&v=beta&t=8feiTNJPp_NaBJYqLkpGdIBxNtLSOTjH3Gj8F5Ttjfg" alt="Mi foto de perfil"> ${renderComponent($$result3, "H1", $$H1, {}, { "default": ($$result4) => renderTemplate`
Hola, soy Adrián Gcía
` })} <h2 class="flex flex-row max-w-[60ch]">Esta es mi página personal, o portfolio, que iré actualizando poco a poco. <br> Soy UX, Design and Project manager con más de 10 años de experiencia.</h2> <h2 class="flex flex-row max-w-[60ch]">Experto en design thinking, gestión de diseño y experiencia de usuario.</h2> <nav class="flex flex-wrap my-5 gap-x-3 gap-y-1"> ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com/in/adriangcia/", "target": "_blanck" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedinIcon", $$LinkedIn, { "class": "size-7" })} <span>LinkedIn</span> ` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "mailto:adriangcia@gmail.com", "target": "_blanck" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "MailIcon", $$Mail, { "class": "size-7" })} <span>adriangcia@gmail.com</span> ` })} </nav> ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "px-6 content-center" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H2", $$H2, { "class": "inline-flex items-center" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Briefcase", $$Briefcase, { "class": "size-10 ml-[-5px]" })}Cronología
` })} ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ` })}`;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/pages/index.astro", void 0);

const $$file = "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

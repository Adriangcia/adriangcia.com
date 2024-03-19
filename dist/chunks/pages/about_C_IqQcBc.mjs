/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, e as renderHead, f as renderSlot, s as spreadAttributes } from '../astro_CdNvLDSm.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */
import Hotjar from '@hotjar/browser';
/* empty css                          */

const $$Astro$a = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<div class="nav-links"> <a href="/">Saludo</a> <a href="/about">Soy</a> <a href="/projects">Proyectos</a> <!-- <a href="/contact">Contacto</a>      --> </div>`;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/components/Navigation.astro", void 0);

const $$Astro$9 = createAstro();
const $$Hamburger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Hamburger;
  return renderTemplate`${maybeRenderHead()}<div class="hamburger" data-astro-cid-3weo6hls> <span class="line" data-astro-cid-3weo6hls></span> <span class="line" data-astro-cid-3weo6hls></span> <span class="line" data-astro-cid-3weo6hls></span> </div> `;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/components/Hamburger.astro", void 0);

const $$Astro$8 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<nav class="flex flex-row py-1 mt-9 gap-x-10 md:justify-center bg-indigo-500 text-black md:text-inherit rounded-md z-10" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Hamburger", $$Hamburger, { "data-astro-cid-3ef6ksr2": true })} ${renderComponent($$result, "Navigation", $$Navigation, { "data-astro-cid-3ef6ksr2": true })} </nav> `;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/components/Header.astro", void 0);

const $$Astro$7 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="flex p-4 justify-center h-12"> <p class="text-xs">
Página creada con Astro + Tailwind por Adrián Gcía · adriangcia@gmail.com
</p> </footer>`;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/components/Footer.astro", void 0);

const $$Astro$6 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description } = Astro2.props;
  const siteId = 3911784;
  const hotjarVersion = 6;
  Hotjar.init(siteId, hotjarVersion);
  Hotjar.init(siteId, hotjarVersion, {
    debug: true
  });
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="px-3"> <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> ${renderComponent($$result, "Header", $$Header, {})} <section class="flex flex-col h-screen justify-between z-10 "> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </section>  </body> </html> `;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/layouts/BaseLayout.astro", void 0);

const $$Astro$5 = createAstro();
const $$SectionContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`w-full mx-auto lg:w-[500px] ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/components/etiquetas/SectionContainer.astro", void 0);

const $$Astro$4 = createAstro();
const $$SocialPill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a class="flex rounded-full border justify-center items-center py-1 px-3 gap-x-1 hover:scale-105 hover:bg-white/10 transition"${spreadAttributes(Astro2.props)} data-astro-cid-buvmtvh3> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/components/SocialPill.astro", void 0);

const $$Astro$3 = createAstro();
const $$H2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$H2;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(`text-3xl font-bold gap-x-3 pb-5 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </h2>`;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/components/etiquetas/H2.astro", void 0);

const $$Astro$2 = createAstro();
const $$Twitter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Twitter;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" stroke-width="0" fill="currentColor"></path></svg>`;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/components/icons/Twitter.astro", void 0);

const $$Astro$1 = createAstro();
const $$Instagram = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Instagram;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${spreadAttributes(Astro2.props)} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path> <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path> <path d="M16.5 7.5l0 .01"></path> </svg>`;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/components/icons/Instagram.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Adri\xE1n Gc\xEDa - UX Design Project Manager", "description": "UX Design Project Estrategic Management" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "pt-11 text-pretty" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<img class="rounded-2xl w-40 h-40 mb-4" src="https://media.licdn.com/dms/image/C4D03AQHAoFT8Pkqkyg/profile-displayphoto-shrink_800_800/0/1563790593186?e=1715212800&v=beta&t=8feiTNJPp_NaBJYqLkpGdIBxNtLSOTjH3Gj8F5Ttjfg" alt="Portfolio hecho con Astro y Tailwind"> ${renderComponent($$result3, "H2", $$H2, { "class": "flex flex-row text-5xl font-bold gap-x-3 pb-4" }, { "default": ($$result4) => renderTemplate`
Hola, soy Adrián
` })} <nav class="flex flex-wrap my-5 gap-x-3 gap-y-1"> ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://twitter.com/Adrian_Gcia", "target": "_blanck" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "TwitterIcon", $$Twitter, { "class": "size-6" })} <span>Twitter</span> ` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://www.instagram.com/adrian_gcia/", "target": "_blanck" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "InstagramIcon", $$Instagram, { "class": "size-7" })} <span>Instagram</span> ` })} </nav> <p>
Diseñador de producto, especialista en Project Management, Design Thinking, Experiencia de Usuario y diseño de servicios.
</p> <p>
He trabajado en todo tipo de proyectos con equipos multidisciplinares, pero los últimos años de mi vida he estado enfocado en producto / servicio digital para industria 4.0 y elearning.
</p> <p>
En mi día a día trato con el cliente, y usuarios, para entender sus necesidades, me encargo del proceso de diseño, gestiono el Scrum con el equipo, maqueto el frontend, y testeo las soluciones.
</p> <p>
Trabajo con herramientas de diseño, Trello, Gitlab, Figma, CSS, HTML, React, Astro, Wordpress, Visual Studio Code, Slack, Drive, Inkscape...
</p> <p>
Soy una persona muy curiosa que me gusta estar continuamente aprendiendo cosas nuevas, algo que me ayuda a la hora de tener una visión 360º en la gestión de proyecto.
</p> <p>
También me gusta implicarme socialmente aportando mi granito de arena en donde mis conocimientos sean de ayuda, te cuento más.
</p> <p>
Desde 2012 me he implicado en la directiva de la Asociación de Diseñadores Industriales de Asturias (DIDA), ayudando a divulgar el valor del diseño en la región, creando y organizando eventos como Design & Drinks o el congreso de diseño y sociedad Design & You.
</p> <p>
En 2019 nos reunimos entre todas las asociaciones, y entidades, relacionadas con el diseño en Asturias y creamos el colectivo Asturias Diseña, con el que organizamos las jornadas de Asturias Diseña en Oviedo, Gijón y Avilés, siendo yo el responsable de las actividades en Oviedo; y los primeros premios al Diseño Asturiano de Asturias Diseña.
</p> <p>
Fuera de mi vida laboral me gusta hacer deporte, la música, los videojuegos, las series, leer.
</p> <p>
Intento practicar deporte a diario, ya que creo importante estar en forma fisicamente para estar también en forma mentalmente, además de servir de desconexión.
</p> <p>
Practico varios deportes de forma más o menos asidua durante las semanas: roller freestyle, kick boxing, escalada, MTB, ski, snowboard.
</p> <div class="flex justify-center items-center"> <img src="../images/mutegrab.jpg" width="50%" class="rounded-xl object-center mt-5 mb-5"> </div> <p>
En el que más implicado estoy es en roller freestyle, o aggressive inline, que llevo practicándolo desde el 95, y desde el 2018 obstento el cargo de director del comité de la disciplina en la Federación de Patinaje del Principado de Asturias.
            Así aporto mi knowhow como diseñador, ingeniero y gestor de proyectos, para orgranizar eventos, competiciones y asesorar a ayuntamientos a la hora de afrontar proyectos para la construcción de skateparks y otras instalaciones.
</p> ` })} ` })}`;
}, "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/pages/about.astro", void 0);

const $$file = "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, $$SectionContainer as a, $$SocialPill as b, $$H2 as c, about as d };

/* empty css                          */
import { a as createComponent, r as renderTemplate, b as renderComponent, u as unescapeHTML } from '../astro_CdNvLDSm.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$MarkdownProjectLayout } from './ale-fisio_2VrK0Z6y.mjs';

const html = "<p>Uviéu Embruxa fue un proyecto expósitivo, diferente a lo que estamos acostumbrados, con intención de estrategia turística, que desarrollamos para el Ayuntamiento de Oviedo en colaboración con el colectivo de artistas Local Creativo Paraíso.</p>\n<p>En el proyecto participaron hasta 150 personas, incluyendo: dirección y diseño, arte, comunicación, animación, coordinación, programación, actuaciones, eventos…</p>\n<p>Mi labor consistió en la coordinación de los equipos de dirección, diseño de concepto, estrategia, coordinación de las estrategias de comunicación y gestión de los desarrollos para las instalaciones digitales.</p>\n<p>El proyecto está más explicado en mi antiguo blog:</p>\n<p><a href=\"https://geneticadesign.com/uvieu-embruxa-stand-del-ayto-de-oviedo-en-la-feria-internacional-de-muestra-de-asturias/\">https://geneticadesign.com/uvieu-embruxa-stand-del-ayto-de-oviedo-en-la-feria-internacional-de-muestra-de-asturias/</a></p>\n<div class=\"flex justify-center items-center\">\n    <img src=\"https://i0.wp.com/geneticadesign.com/wp-content/uploads/2017/07/Expo002.webp\" alt=\"Vista del pórtico de entrada al espacio de Uviéu Embruxa\" class=\"imgmd\">\n</div>\n<div class=\"flex justify-center items-center\">\n    <img src=\"https://i1.wp.com/geneticadesign.com/wp-content/uploads/2017/07/Expo001.webp\" alt=\"Vista de algunas muestras expósitivas en el espacio de Uviéu Embruxa\" class=\"imgmd\">\n</div>\n<div class=\"flex justify-center items-center\">\n    <img src=\"https://i1.wp.com/geneticadesign.com/wp-content/uploads/2017/07/Bici001.webp\" alt=\"Vista de una de las instalaciones inmersivas en el espacio de Uviéu Embruxa\" class=\"imgmd\">\n</div>\n<div class=\"flex justify-center items-center\">\n    <img src=\"https://i0.wp.com/geneticadesign.com/wp-content/uploads/2017/07/360.webp\" alt=\"Vista de la experiencia de visión 360º en el espacio de Uviéu Embruxa\" class=\"imgmd\">\n</div>\n<style>\n    .imgmd{\n        border-radius: 0.5rem;\n        margin-top: 2%;\n        margin-bottom: 2%;\n    }\n</style>";

				const frontmatter = {"layout":"../../layouts/MarkdownProjectLayout.astro","title":"Uviéu Embruxa","pubDate":"2017-07-01T00:00:00.000Z","description":"Uviéu Embruxa fue un proyecto expósitivo, diferente a lo que estamos acostumbrados, con intención de estrategia turística, que desarrollamos para el Ayuntamiento de Oviedo.","imageFeatured":{"url":"https://i2.wp.com/geneticadesign.com/wp-content/uploads/2017/07/pantallaUEfoto.webp","alt":"Una de las imágenes promocionales de Uviéu Embruxa con el skyline de Oviedo donde se detalla la catedrla y el gasómetro."},"tags":["Design Thinking"]};
				const file = "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/pages/projects/uvieu-embruxa.md";
				const url = "/projects/uvieu-embruxa";
				function rawContent() {
					return "Uviéu Embruxa fue un proyecto expósitivo, diferente a lo que estamos acostumbrados, con intención de estrategia turística, que desarrollamos para el Ayuntamiento de Oviedo en colaboración con el colectivo de artistas Local Creativo Paraíso.\n\nEn el proyecto participaron hasta 150 personas, incluyendo: dirección y diseño, arte, comunicación, animación, coordinación, programación, actuaciones, eventos...\n\nMi labor consistió en la coordinación de los equipos de dirección, diseño de concepto, estrategia, coordinación de las estrategias de comunicación y gestión de los desarrollos para las instalaciones digitales.\n\nEl proyecto está más explicado en mi antiguo blog: \n\nhttps://geneticadesign.com/uvieu-embruxa-stand-del-ayto-de-oviedo-en-la-feria-internacional-de-muestra-de-asturias/\n\n<div class=\"flex justify-center items-center\">\n    <img src=\"https://i0.wp.com/geneticadesign.com/wp-content/uploads/2017/07/Expo002.webp\" alt=\"Vista del pórtico de entrada al espacio de Uviéu Embruxa\" class=\"imgmd\">\n</div>\n<div class=\"flex justify-center items-center\">\n    <img src=\"https://i1.wp.com/geneticadesign.com/wp-content/uploads/2017/07/Expo001.webp\" alt=\"Vista de algunas muestras expósitivas en el espacio de Uviéu Embruxa\" class=\"imgmd\">\n</div>\n<div class=\"flex justify-center items-center\">\n    <img src=\"https://i1.wp.com/geneticadesign.com/wp-content/uploads/2017/07/Bici001.webp\" alt=\"Vista de una de las instalaciones inmersivas en el espacio de Uviéu Embruxa\" class=\"imgmd\">\n</div>\n<div class=\"flex justify-center items-center\">\n    <img src=\"https://i0.wp.com/geneticadesign.com/wp-content/uploads/2017/07/360.webp\" alt=\"Vista de la experiencia de visión 360º en el espacio de Uviéu Embruxa\" class=\"imgmd\">\n</div>\n\n<style>\n    .imgmd{\n        border-radius: 0.5rem;\n        margin-top: 2%;\n        margin-bottom: 2%;\n    }\n</style>";
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

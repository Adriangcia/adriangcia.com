/* empty css                          */
import { a as createComponent, r as renderTemplate, b as renderComponent, u as unescapeHTML } from '../astro_CdNvLDSm.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$MarkdownProjectLayout } from './ale-fisio_2VrK0Z6y.mjs';

const html = "<p>Este proyecto surge como parte de los módulos de <a href=\"/projects/kumquat\" target=\"_blank\">kumquat</a> para el control de la producción en fábrica.</p>\n<p>Tras mucho estudio de diferentes dispositivos, entornos, cálculos, etc.</p>\n<p>Desarrollamos un sistema de medición de llenado y caudal por láser, con display informativo en planta, conexión en tiempo real con un pc en oficina e informes de producción diarios divididos por turnos.</p>\n<div class=\"flex justify-center items-center\">\n    <img src=\"/images/laserphotos.webp\" alt=\"Vista del listado de usuarios en talkiens admin\" class=\"imgmd\">\n</div>\n<p>El equipo para este desarrollo estaba formado por un ingeniero de telecomunicaciones, encagardo de la programación en PC/Web y la integración con kumquat y dos ingenieros electrónicos que se encargaron de sistema de medición láser en planta.</p>\n<p>Mi rol principal en este proyecto consistió en la gestión y la coordinación del equipo.</p>\n<style>\n    .imgmd{\n        border-radius: 0.5rem;\n        margin-top: 2%;\n        margin-bottom: 2%;\n    }\n</style>";

				const frontmatter = {"layout":"../../layouts/MarkdownProjectLayout.astro","title":"Medidor Láser","pubDate":"2023-06-15T00:00:00.000Z","description":"Sistema de medición de caudal y llenado de lingotes metálicos por láser.","imageFeatured":{"url":"../../images/laserpc.webp","alt":"Vista de los calendarios de un empleado en kumquat"},"tags":["C#","Python","Azure","Visual Studio Code","Electrónica digital","Slack","Trello","Gitlab","Dropbox Paper"]};
				const file = "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/pages/projects/medidor-laser.md";
				const url = "/projects/medidor-laser";
				function rawContent() {
					return "Este proyecto surge como parte de los módulos de <a href=\"/projects/kumquat\" target=\"_blank\">kumquat</a> para el control de la producción en fábrica.\n\nTras mucho estudio de diferentes dispositivos, entornos, cálculos, etc.\n\nDesarrollamos un sistema de medición de llenado y caudal por láser, con display informativo en planta, conexión en tiempo real con un pc en oficina e informes de producción diarios divididos por turnos.\n<div class=\"flex justify-center items-center\">\n    <img src=\"/images/laserphotos.webp\" alt=\"Vista del listado de usuarios en talkiens admin\" class=\"imgmd\">\n</div>\n\nEl equipo para este desarrollo estaba formado por un ingeniero de telecomunicaciones, encagardo de la programación en PC/Web y la integración con kumquat y dos ingenieros electrónicos que se encargaron de sistema de medición láser en planta.\n\nMi rol principal en este proyecto consistió en la gestión y la coordinación del equipo.\n\n<style>\n    .imgmd{\n        border-radius: 0.5rem;\n        margin-top: 2%;\n        margin-bottom: 2%;\n    }\n</style>";
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

/* empty css                          */
import { a as createComponent, r as renderTemplate, b as renderComponent, u as unescapeHTML } from '../astro_CdNvLDSm.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$MarkdownProjectLayout } from './ale-fisio_2VrK0Z6y.mjs';

const html = "<p>Este proyecto fue un reto divertido que desarrollamos para el Centro de Salvamento Marítimo Jovellanos como parte del programa europeo ATVirtual.</p>\n<p>El reto consistía en aprovechar una cabina de helicóptero real que tiene el centro para crear un simulador en el que llevar a cabo prácticas de situaciones de emergencia el helicópteros de salvamento.</p>\n<p>La premisa inicial consistía en usar herramientas de realidad virtual, pero teniendo un fuselaje real donde hacer las prácticas consideramos que no tenía sentido utilizar unas gafas, por lo que apostamos por crear un entorno que combina hardware, software y vídeo, para hacerlo inmersivo.</p>\n<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/InpRqphiowU?si=A60fVO2LZ99_Q7z0\" title=\"Vídeo grabado durante las pruebas del primer prototipo.\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen class=\"mt-5 mb-5\"></iframe>\n<p>El equipo para este desarrollo estaba formado por un ingeniero de telecomunicaciones, encagardo de la programación para el PC de control de las secuencias, dos ingenieros electrónicos que se encargaron de desarrollar los sistemas digitales, un experto en simuladores de vuelo, empleados de salvamento que realizan las prácticas y personal de vuelo real.</p>\n<p>Mi rol principal en este proyecto consistió en la gestión, trato con el cliente y la coordinación del equipo, además de definir toda la interacción de los futuros usuario y la dirección de la inmersión.</p>\n<div class=\"flex justify-center items-center\">\n    <img src=\"/images/helitrip.webp\" alt=\"Vistas del simulador de emergencias en helicoptero de Salvamento Marítimo\" class=\"imgmd\">\n</div>\n<style>\n    .imgmd{\n        border-radius: 0.5rem;\n        margin-top: 2%;\n        margin-bottom: 2%;\n    }\n</style>";

				const frontmatter = {"layout":"../../layouts/MarkdownProjectLayout.astro","title":"Simulador emergencias en helicoptero","pubDate":"2023-06-01T00:00:00.000Z","description":"Este proyecto fue un reto divertido que desarrollamos para el Centro de Salvamento Marítimo Jovellanos como parte del programa europeo ATVirtual.","imageFeatured":{"url":"../../images/helisim.webp","alt":"Vista de la cabina del helimer que usamos para simular emergencias."},"tags":["C#","Python","Azure","Visual Studio Code","Electrónica digital","GDrive","Slack","Trello"]};
				const file = "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/pages/projects/simulador-emergencias-helicoptero-salvamento.md";
				const url = "/projects/simulador-emergencias-helicoptero-salvamento";
				function rawContent() {
					return "Este proyecto fue un reto divertido que desarrollamos para el Centro de Salvamento Marítimo Jovellanos como parte del programa europeo ATVirtual.\n\nEl reto consistía en aprovechar una cabina de helicóptero real que tiene el centro para crear un simulador en el que llevar a cabo prácticas de situaciones de emergencia el helicópteros de salvamento.\n\nLa premisa inicial consistía en usar herramientas de realidad virtual, pero teniendo un fuselaje real donde hacer las prácticas consideramos que no tenía sentido utilizar unas gafas, por lo que apostamos por crear un entorno que combina hardware, software y vídeo, para hacerlo inmersivo.\n\n<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/InpRqphiowU?si=A60fVO2LZ99_Q7z0\" title=\"Vídeo grabado durante las pruebas del primer prototipo.\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen class=\"mt-5 mb-5\"></iframe>\n\nEl equipo para este desarrollo estaba formado por un ingeniero de telecomunicaciones, encagardo de la programación para el PC de control de las secuencias, dos ingenieros electrónicos que se encargaron de desarrollar los sistemas digitales, un experto en simuladores de vuelo, empleados de salvamento que realizan las prácticas y personal de vuelo real.\n\nMi rol principal en este proyecto consistió en la gestión, trato con el cliente y la coordinación del equipo, además de definir toda la interacción de los futuros usuario y la dirección de la inmersión.\n\n<div class=\"flex justify-center items-center\">\n    <img src=\"/images/helitrip.webp\" alt=\"Vistas del simulador de emergencias en helicoptero de Salvamento Marítimo\" class=\"imgmd\">\n</div>\n\n<style>\n    .imgmd{\n        border-radius: 0.5rem;\n        margin-top: 2%;\n        margin-bottom: 2%;\n    }\n</style>";
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

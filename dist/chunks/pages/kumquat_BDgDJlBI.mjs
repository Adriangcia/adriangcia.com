/* empty css                          */
import { a as createComponent, r as renderTemplate, b as renderComponent, u as unescapeHTML } from '../astro_CdNvLDSm.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$MarkdownProjectLayout } from './ale-fisio_2VrK0Z6y.mjs';

const html = "<p><a href=\"https://azai.info\" target=\"_blank\">Azai Solutions</a>, ecosistemas digitales 4.0 para PYMES.</p>\n<p>La hipótesis de partida es que pequeñas y medianas industrias carecen de flujos de comunicación fluidos entre personas o máquinas. Casi todo se hace manualmente, con mucho papel, se hacen viajes innecesarios, por ejemplo, desde la planta de producción hasta la oficina técnica o administrativa. Estos problemas resultan en un rendimiento ineficiente debido a la pérdida de información y tiempo.</p>\n<p>Por eso, la base del ecosistema digital de Azai se llama <a href=\"https://azai.info/kumquat-ecosistema-digital-para-la-industria/\" target=\"_blank\">Kumquat</a>, una aplicación modular que permite enviar nóminas a los empleados, gestionar incidentes durante los turnos, los empleados tienen la capacidad de gestionar sus propias vacaciones, controlar la producción en tiempo real o gestionar el clima laboral de una empresa.</p>\n<div class=\"flex justify-center items-center\">\n            <img src=\"../images/kqshowcase.webp\" width=\"80%\" alt=\"Vista de la gestión de citas en Ale Fisio\" class=\"imgmd\">\n</div>  \n<p>Con Kumquat, tienes más control sobre tu empresa, mejor información, y si tienes mejor información, puedes tomar decisiones estratégicas mejores.</p>\n<p>Mi rol principal en este proyecto es de responsable de diseño y experiencia de usuario.\nPor lo tanto mi trabajo se inicia en reuniones con el cliente para investigar las necesidades que el producto debe satisfacer, detectar los puntos de dolor a evitar y definir los desarrollos, diseñar las interfaces y maquetarlas para darles el acabado final.</p>\n<style>\n    .imgmd{\n        border-radius: 0.5rem;\n        margin-top: 2%;\n        margin-bottom: 2%;\n    }\n</style>";

				const frontmatter = {"layout":"../../layouts/MarkdownProjectLayout.astro","title":"kumquat","pubDate":"2023-06-25T00:00:00.000Z","description":"Gestión de los calendarios de vacacaciones y compensatorios. Módulo diseñado para el ecosistema kumquat.","imageFeatured":{"url":"../../images/vacacioneswidescreen.webp","alt":"Vista de los calendarios de un empleado en kumquat"},"tags":["Design Thinking","C#","Azure","Figma","HTML","CSS","Blazor"]};
				const file = "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/pages/projects/kumquat.md";
				const url = "/projects/kumquat";
				function rawContent() {
					return "<a href=\"https://azai.info\" target=\"_blank\">Azai Solutions</a>, ecosistemas digitales 4.0 para PYMES.\n\nLa hipótesis de partida es que pequeñas y medianas industrias carecen de flujos de comunicación fluidos entre personas o máquinas. Casi todo se hace manualmente, con mucho papel, se hacen viajes innecesarios, por ejemplo, desde la planta de producción hasta la oficina técnica o administrativa. Estos problemas resultan en un rendimiento ineficiente debido a la pérdida de información y tiempo.\n\nPor eso, la base del ecosistema digital de Azai se llama <a href=\"https://azai.info/kumquat-ecosistema-digital-para-la-industria/\" target=\"_blank\">Kumquat</a>, una aplicación modular que permite enviar nóminas a los empleados, gestionar incidentes durante los turnos, los empleados tienen la capacidad de gestionar sus propias vacaciones, controlar la producción en tiempo real o gestionar el clima laboral de una empresa.\n\n<div class=\"flex justify-center items-center\">\n            <img src=\"../images/kqshowcase.webp\" width=\"80%\" alt=\"Vista de la gestión de citas en Ale Fisio\" class=\"imgmd\">\n</div>  \n\n\nCon Kumquat, tienes más control sobre tu empresa, mejor información, y si tienes mejor información, puedes tomar decisiones estratégicas mejores.\n\nMi rol principal en este proyecto es de responsable de diseño y experiencia de usuario.\nPor lo tanto mi trabajo se inicia en reuniones con el cliente para investigar las necesidades que el producto debe satisfacer, detectar los puntos de dolor a evitar y definir los desarrollos, diseñar las interfaces y maquetarlas para darles el acabado final.\n\n<style>\n    .imgmd{\n        border-radius: 0.5rem;\n        margin-top: 2%;\n        margin-bottom: 2%;\n    }\n</style>";
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

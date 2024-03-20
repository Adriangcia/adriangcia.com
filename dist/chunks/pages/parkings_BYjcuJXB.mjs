/* empty css                          */
import { a as createComponent, r as renderTemplate, b as renderComponent, u as unescapeHTML } from '../astro_CdNvLDSm.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$MarkdownProjectLayout } from './ale-fisio_2VrK0Z6y.mjs';

const html = "<p>Una de mis ambiciones en el proyecto <a href=\"/projects/kumquat\" target=\"_blank\">kumquat</a> de Azai Solutions era avanzar en la implantación de módulos de visión artificial.</p>\n<p>De los desarrollos planteados y pendientes de ejecutar el que más interés me producía era la creación de un módulo para la prevención de incendios con visión artificial, ya que la mayoría de fuegos se producen por puntos de calor que son detectables prematuramente con cámaras térmicas.</p>\n<p>Como primer experimento a desarrollar con uno de nuestros clientes fue la gestión de un parking desde el propio kumquat, con el que informar no solo al usuario, sino tener métricas e informes detallados sobre su utilización.</p>\n<div class=\"flex justify-center items-center\">\n            <img src=\"/images/parkingcontrolsystem.webp\" width=\"50%\" alt=\"Vista de la gestión de citas en Ale Fisio\" class=\"imgmd\">\n</div>  \n<div class=\"flex justify-center items-center\">\n            <img src=\"/images/parkingcontrolview.webp\" width=\"50%\" alt=\"Vista de la gestión de citas en Ale Fisio\" class=\"imgmd\">\n</div>  \n<style>\n    .imgmd{\n        border-radius: 0.5rem;\n        margin-top: 2%;\n        margin-bottom: 2%;\n    }\n</style>";

				const frontmatter = {"layout":"../../layouts/MarkdownProjectLayout.astro","title":"Parkings","pubDate":"2023-06-12T00:00:00.000Z","description":"Módulo de gestión de parkings por visión artificial.","imageFeatured":{"url":"../../images/parkingcontrol.webp","alt":"Vista de los calendarios de un empleado en kumquat"},"tags":["Visión artificial","C#","Python","Figma","Azure","Design Thinking","HTML","CSS"]};
				const file = "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/pages/projects/parkings.md";
				const url = "/projects/parkings";
				function rawContent() {
					return "Una de mis ambiciones en el proyecto <a href=\"/projects/kumquat\" target=\"_blank\">kumquat</a> de Azai Solutions era avanzar en la implantación de módulos de visión artificial.\n\nDe los desarrollos planteados y pendientes de ejecutar el que más interés me producía era la creación de un módulo para la prevención de incendios con visión artificial, ya que la mayoría de fuegos se producen por puntos de calor que son detectables prematuramente con cámaras térmicas.\n\nComo primer experimento a desarrollar con uno de nuestros clientes fue la gestión de un parking desde el propio kumquat, con el que informar no solo al usuario, sino tener métricas e informes detallados sobre su utilización.\n\n<div class=\"flex justify-center items-center\">\n            <img src=\"/images/parkingcontrolsystem.webp\" width=\"50%\" alt=\"Vista de la gestión de citas en Ale Fisio\" class=\"imgmd\">\n</div>  \n\n<div class=\"flex justify-center items-center\">\n            <img src=\"/images/parkingcontrolview.webp\" width=\"50%\" alt=\"Vista de la gestión de citas en Ale Fisio\" class=\"imgmd\">\n</div>  \n\n\n<style>\n    .imgmd{\n        border-radius: 0.5rem;\n        margin-top: 2%;\n        margin-bottom: 2%;\n    }\n</style>";
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

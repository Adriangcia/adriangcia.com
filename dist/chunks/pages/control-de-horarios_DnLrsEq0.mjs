/* empty css                          */
import { a as createComponent, r as renderTemplate, b as renderComponent, u as unescapeHTML } from '../astro_CdNvLDSm.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$MarkdownProjectLayout } from './ale-fisio_2VrK0Z6y.mjs';

const html = "<p>Fichajes es un módulo desarrollado para <a href=\"/projects/kumquat\" target=\"_blank\">kumquat</a> con el objetivo de llevar el control de las jornadas laborales de los empleados de nuestros clientes conforme a la nueva ley.</p>\n<p>Es un sistema modular que se puede adaptar a las necesidades de cualquier empresa.</p>\n<div class=\"flex justify-center items-center\">\n            <img src=\"/images/FigmaFichajes.webp\" width=\"80%\" alt=\"Vista de la gestión de citas en Ale Fisio\" class=\"imgmd\">\n</div>  \n<p>Para el diseño de este módulo realicé varias sesiones de investigación con uno de nuestros clientes. El objetivo era crear la primera iteración del servicio totalmente adaptado a sus necesidades, teniendo en cuenta que cosas podrían variar entre unas compañías y otras.</p>\n<p>Además añadimos la función de recabar información sobre el clima laboral al final de la jornada con el objetivo de mejorar la experiencia del empleado de la compañía.</p>\n<style>\n    .imgmd{\n        border-radius: 0.5rem;\n        margin-top: 2%;\n        margin-bottom: 2%;\n    }\n</style>";

				const frontmatter = {"layout":"../../layouts/MarkdownProjectLayout.astro","title":"Fichajes","pubDate":"2023-07-01T00:00:00.000Z","description":"Gestión digital del registro de horarios desde el móvil de cada empleado. Módulo diseñado para el ecosistema kumquat.","imageFeatured":{"url":"../../images/kumquatmovil.webp","alt":"Imgen de la vista de kumquat en móvil."},"tags":["Xamarin syncfusion","C#","Figma","HTML","CSS"]};
				const file = "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/pages/projects/control-de-horarios.md";
				const url = "/projects/control-de-horarios";
				function rawContent() {
					return "Fichajes es un módulo desarrollado para <a href=\"/projects/kumquat\" target=\"_blank\">kumquat</a> con el objetivo de llevar el control de las jornadas laborales de los empleados de nuestros clientes conforme a la nueva ley.\n\nEs un sistema modular que se puede adaptar a las necesidades de cualquier empresa.\n\n<div class=\"flex justify-center items-center\">\n            <img src=\"/images/FigmaFichajes.webp\" width=\"80%\" alt=\"Vista de la gestión de citas en Ale Fisio\" class=\"imgmd\">\n</div>  \n\nPara el diseño de este módulo realicé varias sesiones de investigación con uno de nuestros clientes. El objetivo era crear la primera iteración del servicio totalmente adaptado a sus necesidades, teniendo en cuenta que cosas podrían variar entre unas compañías y otras.\n\nAdemás añadimos la función de recabar información sobre el clima laboral al final de la jornada con el objetivo de mejorar la experiencia del empleado de la compañía.\n\n\n<style>\n    .imgmd{\n        border-radius: 0.5rem;\n        margin-top: 2%;\n        margin-bottom: 2%;\n    }\n</style>";
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

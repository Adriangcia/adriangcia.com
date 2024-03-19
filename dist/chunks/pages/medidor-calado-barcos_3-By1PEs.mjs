/* empty css                          */
import { a as createComponent, r as renderTemplate, b as renderComponent, u as unescapeHTML } from '../astro_CdNvLDSm.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$MarkdownProjectLayout } from './ale-fisio_2VrK0Z6y.mjs';

const html = "<p>El proyecto tenía como objetivo crear un dispositivo para medir el calado de los barcos mercantes, graneleros, en el puerto de origen y en el el puerto destino.</p>\n<div class=\"flex justify-center items-center\">\n    <img src=\"/images/medidorcaladominiaturas.png\" alt=\"Vista de la gestión de citas en Ale Fisio\" class=\"imgmd\">\n    </div>\n<p>Este proyecto se realizó entre varias empresas y Genética Design éramos los responsables de la gestión, coordinación y diseño.</p>\n<p>Durante el mismo yo trabajé en la investigación previa, diseño de concepto, pruebas de prototipo y coordinación entre equipos, principalmente a la hora del trato con los responsables de la electrónica y el software.</p>\n<style>\n    .imgmd{\n        border-radius: 0.5rem;\n        margin-top: 2%;\n        margin-bottom: 2%;\n    }\n</style>";

				const frontmatter = {"layout":"../../layouts/MarkdownProjectLayout.astro","title":"Medidor de calado de barcos mercantes graneleros","pubDate":"2014-07-01T00:00:00.000Z","description":"El proyecto tenía como objetivo crear un dispositivo para medir el calado de los barcos mercantes, graneleros, en el puerto de origen y en el el puerto destino.","imageFeatured":{"url":"../../images/testcalado-min.png","alt":"Vista de la cabina del helimer que usamos para simular emergencias."},"tags":["Design Thinking","Design Management","Blender","Impresión 3D","Inkscape"]};
				const file = "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/pages/projects/medidor-calado-barcos.md";
				const url = "/projects/medidor-calado-barcos";
				function rawContent() {
					return "El proyecto tenía como objetivo crear un dispositivo para medir el calado de los barcos mercantes, graneleros, en el puerto de origen y en el el puerto destino.\n<div class=\"flex justify-center items-center\">\n    <img src=\"/images/medidorcaladominiaturas.png\" alt=\"Vista de la gestión de citas en Ale Fisio\" class=\"imgmd\">\n    </div>\n\nEste proyecto se realizó entre varias empresas y Genética Design éramos los responsables de la gestión, coordinación y diseño.\n\nDurante el mismo yo trabajé en la investigación previa, diseño de concepto, pruebas de prototipo y coordinación entre equipos, principalmente a la hora del trato con los responsables de la electrónica y el software.\n\n\n\n<style>\n    .imgmd{\n        border-radius: 0.5rem;\n        margin-top: 2%;\n        margin-bottom: 2%;\n    }\n</style>";
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

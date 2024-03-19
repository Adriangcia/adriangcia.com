/* empty css                          */
import { a as createComponent, r as renderTemplate, b as renderComponent, u as unescapeHTML } from '../astro_CdNvLDSm.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$MarkdownProjectLayout } from './ale-fisio_2VrK0Z6y.mjs';

const html = "<!-- # My First Blog Post -->\n<p><a target=\"_blank\" href=\"https://www.talkiens.com\">Talkiens</a> es una plataforma desarrollada para la enseñanza de idiomas online a nivel internacional.</p>\n<p>Mi rol en este proyecto ha sido la gestión del mismo, la dirección de diseño y la experiencia de usuario.</p>\n<p>Contacto continuo con el cliente para conocer sus necesidades y ayudarles a ir definiendo el serivicio y la estrategia de negocio.</p>\n<p>Con la información obtenida y el proceso de investigación inicial en toda iteración de diseño paso a conceptualizar una solución que cumpla las especificaciones, diseñando la interface y como sería el desarrollo.</p>\n<p>Esto lo pongo en común con el equipo de sistemas y programación, con el fin de verificar que mi planteamiento es correcto y que puedan aportar lo que consideren oportuno.</p>\n<p>Tras este paso vuelvo a reunirme con el cliente para validar el diseño o replantear lo que pueda surgir.</p>\n<img src=\"/images/talkiensusuarioswidescreen.png\" alt=\"Vista del listado de usuarios en talkiens admin\" class=\"imgmd\">\n<p>Lo siguiente, si no tenemos que revisitar alguno de los pasos anteriores, es nombrar, jerarquizar tareas junto al equipo y definir el sprint semanal.</p>\n<p>A partir de este momento mi rol pasa a ser más técnico y mientras los programadores se encargan de crear la funcionalidad de la solución yo diseño más en detalle la interface de usuario en FIGMA para terminar a posteriori la maquetación final en  el Frontend, trabajando con React, HTML y CSS.</p>\n<p>La solución se presenta al cliente primero en la plataforma de desarrollo, con un vídeo explicativo de todas las nuevas funcionalidades para que puedan hacer pruebas previas al despliegue en producción.</p>\n<p>Durante esta fase mi trabajo además consiste etailwind\n}\n</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownProjectLayout.astro","title":"talkiens","pubDate":"2023-07-01T00:00:00.000Z","description":"Talkiens es una plataforma desarrollada para la enseñanza de idiomas online a nivel internacional.","imageFeatured":{"url":"../../images/talkiensmovil.png","alt":"Vista de los calendarios de un empleado en kumquat"},"tags":["Figma","C#","React","HTML","CSS","Azure","Visual Studio Code","DBeaver","GDrive","Slack","Trello","Gitlab","Inkscape","YT"]};
				const file = "/home/adri/SynologyDrive/Trabajo/BUSQUEDA/adriangcia.com/src/pages/projects/talkiens.md";
				const url = "/projects/talkiens";
				function rawContent() {
					return "<!-- # My First Blog Post -->\n\n<a target=\"_blank\" href=\"https://www.talkiens.com\">Talkiens</a> es una plataforma desarrollada para la enseñanza de idiomas online a nivel internacional.\n\nMi rol en este proyecto ha sido la gestión del mismo, la dirección de diseño y la experiencia de usuario.\n\nContacto continuo con el cliente para conocer sus necesidades y ayudarles a ir definiendo el serivicio y la estrategia de negocio.\n\nCon la información obtenida y el proceso de investigación inicial en toda iteración de diseño paso a conceptualizar una solución que cumpla las especificaciones, diseñando la interface y como sería el desarrollo.\n\nEsto lo pongo en común con el equipo de sistemas y programación, con el fin de verificar que mi planteamiento es correcto y que puedan aportar lo que consideren oportuno.\n\nTras este paso vuelvo a reunirme con el cliente para validar el diseño o replantear lo que pueda surgir.\n\n<img src=\"/images/talkiensusuarioswidescreen.png\" alt=\"Vista del listado de usuarios en talkiens admin\" class=\"imgmd\">\n\nLo siguiente, si no tenemos que revisitar alguno de los pasos anteriores, es nombrar, jerarquizar tareas junto al equipo y definir el sprint semanal.\n\nA partir de este momento mi rol pasa a ser más técnico y mientras los programadores se encargan de crear la funcionalidad de la solución yo diseño más en detalle la interface de usuario en FIGMA para terminar a posteriori la maquetación final en  el Frontend, trabajando con React, HTML y CSS.\n\nLa solución se presenta al cliente primero en la plataforma de desarrollo, con un vídeo explicativo de todas las nuevas funcionalidades para que puedan hacer pruebas previas al despliegue en producción.\n\nDurante esta fase mi trabajo además consiste etailwind\n    }\n</style>";
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

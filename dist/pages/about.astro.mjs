export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/about_C_IqQcBc.mjs').then(n => n.d);

export { page };

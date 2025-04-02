
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://MeghanaSurya.github.io/meghana-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/meghana-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/meghana-portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/meghana-portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/meghana-portfolio/experience"
  },
  {
    "renderMode": 2,
    "route": "/meghana-portfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24745, hash: '6ab224ca1f10a4c8e0208b806b0a8109237557b4867f71e999c560adbe6dbb12', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17187, hash: '805407ac84a969718d355b96c21afbe37a2e3b1c9b3d0d08d513609016ad75e2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 33613, hash: '02957c0126e8f9f072350d325116ccc80471365f21ceaf242b31b50857ef7fe7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 37492, hash: '8a6fac0a78be39ced118e42e4bd92347569ba0b641695bcbb0d806c008c83b59', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 39322, hash: 'bc0b8308ea5beb4e8fef3e4da29e8eb93df8cd546d923074a139870f05f83875', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 33886, hash: '631ea8f0a71fcfd33d04f7e70940f9edabc608bcccb201f3b2a04b9cbdab396a', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32441, hash: '0a1a13ba789646cfdf28ef8cbb589b6cfb721d9f647b254069cc212ed752c5fe', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-LCZWOBSN.css': {size: 80855, hash: '8097FqxHQc8', text: () => import('./assets-chunks/styles-LCZWOBSN_css.mjs').then(m => m.default)}
  },
};

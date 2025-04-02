
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/meghana-portfolio/',
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
    'index.csr.html': {size: 24715, hash: '54a7cdeb5213376750d7579ad69a3cc5785ee3bc197929f305d403a0a0326da9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17157, hash: '19437ea486992bbc23dc23e567a3f9f99bff727a2fb40e2871159d0c2adb0408', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 33373, hash: '59db4c389cad255d4bfe0a2f4c1b46ed2f5417f6ea0d35114f7a7a4e12e2b257', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 37282, hash: 'ae2c5992e7f6d45b47681abbe92d8b0195ac4adebbd8194a2101a015ba329df3', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 39112, hash: 'f2f865bd4c78da3c0069be1b9a5f6f937540c4e67d47099e8d507ae17c46bfa1', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 33676, hash: 'b236f2dd195b939a34949f668d52d7bee25f28364b9b688d6dd4fb7ae0de6a57', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32231, hash: '31ddd22af5e9515a2e9dd1e6fea4f0ff0300b7fe6f3972057fe12670e02e5a93', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-LCZWOBSN.css': {size: 80855, hash: '8097FqxHQc8', text: () => import('./assets-chunks/styles-LCZWOBSN_css.mjs').then(m => m.default)}
  },
};

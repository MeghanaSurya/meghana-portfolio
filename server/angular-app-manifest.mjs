
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
    'index.csr.html': {size: 24744, hash: 'e6187688e5a50e02c47bedd8078c48215c403797c7f7af76d041922bfad3b125', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17157, hash: '0c8b29f84b9bd5a8f2b825c38ab028be654e797e7d81afb45479fb8bfd1c30cb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34167, hash: 'e97d836dba54148394fafcb94ba59f79cf54d22cb8df7caba803e92a0a102bdb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 39906, hash: '1d0ecea2fe5a7ded5ad31bdb2d478625358ddebc97d132bd1a2e5cfad3802304', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 34470, hash: '388ae334270b982e44bb86a1ea03c78658bcee69a0e19eaf982aee6b3d15712e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 38076, hash: '6f39d7f48fd905c8a2e29c099485148e0f591baf03fc9715ac1f1c0b8b4a38e4', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 33025, hash: '1a6c8f1b9d4befa3ae8d8fd2c08c44a4135d2246944f9200c9fef4ab9ce51fd3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-O3SR4FHE.css': {size: 80884, hash: '1kTWgqs1kdg', text: () => import('./assets-chunks/styles-O3SR4FHE_css.mjs').then(m => m.default)}
  },
};

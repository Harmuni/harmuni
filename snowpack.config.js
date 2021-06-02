/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    // directory name: 'build directory'
    public: { url: '/', static: true },
    src: { url: '/dist' }
  },
  routes: [
    /* Enable an SPA Fallback in development: */
    // { match: 'routes', src: '.*', dest: '/index.html' },
    { match: 'all', src: 'index.html', dest: '/index' },
    { match: 'all', src: 'game.html', dest: '/game' }
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  plugins: [
    '@snowpack/plugin-sass',
    '@snowpack/plugin-postcss'
  ]
}

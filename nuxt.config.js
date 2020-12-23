export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'SWON',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'preconnect',  href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=Fredoka+One&family=Open+Sans&display=swap' }
    
    ],
    script:[

    
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [

  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios'
],
  axios: {
    baseURL: 'https://swon-strapi.herokuapp.com/', // Used as fallback if no runtime config is provided
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config) {
      // ..
      config.module.rules.push({
        test: /\.(gltf)$/,
        loader: "gltf-webpack-loader"
      });
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      });
      // Sets webpack's mode to development if `isDev` is true.
      
    }
  },
  target: 'static',
}

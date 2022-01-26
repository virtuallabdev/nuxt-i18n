
import colors from 'vuetify/es5/util/colors';
import i18nConfig from './routes/i18n.config';



export default {
  ssr: true
  , target: 'static'

  /*
  ** Headers of the page
  */
  , head: {
    //titleTemplate: '%s - ' + process.env.npm_package_name,
    //title: process.env.npm_package_name || '',
    //titleTemplate: '%s - Halkidikivilla'
    title: process.env.BASE_TITLE || ''
    , meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { hid: 'robots', name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }
    ]
    , link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
  /*
  ** Customize the progress-bar color
  */
  , loading: { color: '#f00' }
  /*
  ** Global CSS
  */
  , css: [
  ]




  /*
  ** Plugins to load before mounting the App
  */
  , plugins: [
  ]
    


  /*
  ** Nuxt.js dev-modules
  */
  , buildModules: [
    ['@nuxtjs/vuetify', {treeShake: true}]
  ]


  /*
  ** Nuxt.js modules
  */
  , modules: [
    //'@nuxtjs/axios'
    ,['@nuxtjs/i18n', {
      baseUrl: 'https://www.halkidikivilla.com',
      strategy: 'prefix_except_default',
      locales: [
        { name: 'Bulgarian', code: 'bg', iso: 'bg-BG', file: 'bg-BG.js' },
        { name: 'Russian', code: 'ru', iso: 'ru-RU', file: 'ru-RU.js' },
        { name: 'English', code: 'en', iso: 'en-US', file: 'en-US.js' }
      ]
      , lazy: true
      , langDir: 'locales/'
      , defaultLocale: 'en'
      , encodePaths: true
      , seo: true
      , parsePages: false
      , pages: i18nConfig.pages
      /*
      , detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        onlyOnRoot: true
      }*/
    }]
  ]








  /*
  ** Static HTML generator
  */
  , generate: {
    interval: 250
    , concurrency: 200
    ,crawler: false
    ,fallback: '404.html'
    ,gzip: true
  }





  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  ,vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false,
    icons: {
      iconfont: 'mdi'
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },



  /*
  ** Build configuration
  */
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        preserveLineBreaks: false,
        collapseWhitespace: true
      }
    }

    ,extractCSS: false

    /*
    ** You can extend webpack config here
    */
    ,extend (config, ctx) {
      config.node = {
        console: true,
        fs: 'empty',
        net:'empty',
        tls:'empty',
      }
    }
    //,analyze: true
  }



}

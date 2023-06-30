const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require('unplugin-auto-import/webpack')({ 
        imports: ['vue', 'vue-router', 'vuex'],
       }),
    ],
  },
})

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require('unplugin-auto-import/webpack')({ //Auto Functions Import
        imports: ['vue', 'vue-router', 'vuex'],
        
       }),
       require('unplugin-vue-components/webpack')({ //Auto Components Import
        dts: true
      }),
    ],
  },
})

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
  module.exports = {
  // transpileDependencies: true,
  devServer: {  
    // host: 'localhost',
    // port: '8081',
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        // target: 'http://sample.bmaster.kro.kr',
        changeOrigin: true
      }
    },
  },
// })
  }

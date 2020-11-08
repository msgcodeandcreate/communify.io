import Vue from 'vue'

Vue.config.productionTip = false
module.exports = {
    chainWebpack: config => config.resolve.symlinks(false)
  }
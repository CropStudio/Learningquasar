import Vue from 'vue'
import Vuex from 'vuex'

// we first import the module
import biodata from './biodata'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // then we reference it
      biodata
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  /*
    if we want some HMR magic for it, we handle
    the hot update like below. Notice we guard this
    code with "process.env.DEV" -- so this doesn't
    get into our production build (and it shouldn't).
  */

  if (process.env.DEV && module.hot) {
    module.hot.accept(['./biodata'], () => {
      const newBiodata = require('./biodata').default
      Store.hotUpdate({ modules: {
        biodata: newBiodata
      } })
    })
  }

  return Store
}

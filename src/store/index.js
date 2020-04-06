import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    counter: counter
  }
});

export default store;

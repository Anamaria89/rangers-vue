import Vuex from 'vuex';
import Vue from 'vue';
import rangers from './modules/rangers';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    rangers
  }
});
import axios from 'axios';

const state = {
  rangers: []
};

const getters = {
    allRangers: state => state.rangers
};

const actions = {
    async fetchRangers({ commit }) {
        const response = await axios.get(
          'https://my-json-server.typicode.com/Anamaria89/rangers-json/rangers'
        );
        //console.log(response.data);
        commit('setRangers', response.data);
      }
};

const mutations = {
    setRangers: (state, rangers) => (state.rangers = rangers)
};

export default {
  state,
  getters,
  actions,
  mutations
};
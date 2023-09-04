import { createStore } from 'vuex';
import { bregade_db } from './bregade.js';
import { typework_db } from './typework.js';
export default createStore({
  state: {
    bregades: bregade_db,
    typeWorks: typework_db,
  },
  getters: {
    tableHead(state) {
      return state.bregades;
    },
    tableData(state) {
      return state.bregades;
    },
  },
  mutations: {
    tableHead(state) {
      state.bregades = bregade_db;
    },
    // tableData(state, table) {
    //   state.table = table;
    // },
  },
  actions: {},
});

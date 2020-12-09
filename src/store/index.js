import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		title: "teste",
	},
	mutations: {
		setTitle(state, title) {
			state.title = title;
		},
	},
	getters: {
		getTitle: (state) => state.title,
	},
});

export default store;

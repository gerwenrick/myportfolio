import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		portfolioItems: [],
		displayPortfolioItems: [],
		homePortfolioItems: [],
		rows: 0,
	},
	mutations: {
		SET_PORTFOLIOITEMS(state, portfolioItems) {
			state.portfolioItems = portfolioItems;
		},
		SET_DISPLAY_PORTFOLIOITEMS(state, displayPortfolioItems) {
			state.displayPortfolioItems = displayPortfolioItems;
		},
		SET_HOME_PORTFOLIOITEMS(state, homePortfolioItems) {
			state.homePortfolioItems = homePortfolioItems;
		},
		SET_ROWS(state, rows) {
			state.rows = rows;
		},
	},
	actions: {
		async fetchData() {
			return new Promise((resolve) => {
				setTimeout(async () => {
					const res = await fetch('portfolio.json');
					const val = await res.json();
					resolve(val);
				}, 0);
			});
		},
		updatePagination({ commit, dispatch }, { myJson, currentPage, perPage }) {
			commit('SET_PORTFOLIOITEMS', myJson);
			commit('SET_ROWS', myJson.length);
			dispatch('paginate', { currentPage, perPage });
		},
		async fetchPortfolioItems({ dispatch, commit }) {
			const myJson = await dispatch('fetchData');
			commit('SET_PORTFOLIOITEMS', myJson);
			commit('SET_ROWS', myJson.length);
			const displayPortfolioItems = myJson.slice(0, 10);
			commit('SET_DISPLAY_PORTFOLIOITEMS', displayPortfolioItems);
			const homePortfolioItems = myJson.slice(0, 3);
			commit('SET_HOME_PORTFOLIOITEMS', homePortfolioItems);
			commit('SET_ROWS', myJson.length);
		},
		async paginate({ commit, state }, { currentPage, perPage }) {
			const start = (currentPage - 1) * perPage;
			const portfolioItems = state.portfolioItems.slice(start, start + 10);
			commit('SET_DISPLAY_PORTFOLIOITEMS', portfolioItems);
		},

		async search({ dispatch }, { text }) {
			const myJson = await this.dispatch('fetchData');
			const values = myJson.filter((val) => {
				return val.name.toLowerCase().includes(text.toLowerCase());
			});
			dispatch('updatePagination', {
				myJson: values,
				currentPage: 1,
				perPage: 3,
			});
		},
	},
	getters: {
		portfolioItems(state) {
			return state.portfolioItems;
		},
		displayPortfolioItems(state) {
			return state.displayPortfolioItems;
		},
		homePortfolioItems(state) {
			return state.homePortfolioItems;
		},
		rows(state) {
			return state.rows;
		},
	},
	modules: {},
});

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/About.vue'),
	},
	{
		path: '/portfolio',
		name: 'portfolio',
		props: true,
		component: () => import('../views/Portfolio.vue'),
	},
	{
		path: '/portfolio/:id',
		name: 'portfolioDetail',
		props: true,
		component: () => import('../views/PortfolioDetail.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;

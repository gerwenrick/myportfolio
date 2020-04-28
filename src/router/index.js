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
		name: 'portfoliodetail',
		props: true,
		component: () => import('../views/PortfolioDetail.vue'),
	},
	{
		path: '/test',
		name: 'test',
		component: () => import('../views/Test.vue'),
	},
	{
		path: '/contact',
		name: 'contact',
		component: () => import('../views/Contact.vue'),
	},
	{
		path: '/404',
		name: '404',
		component: () => import('../views/NotFound.vue'),
	},
	{
		path: '*',
		redirect: '/404',
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;

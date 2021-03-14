import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Game from '../views/Game.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Game',
    component: Game,
  },
  {
    path: '/rules',
    name: 'Rules',
    component: () =>
      import(/* webpackChunkName: "rules" */ '../views/Rules.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

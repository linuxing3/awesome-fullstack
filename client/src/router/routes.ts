import { RouteConfig } from 'vue-router';
export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: loadView('Home'),
  },
  {
    path: '/about',
    name: 'about',
    component: loadView('About'),
  },
  {
    path: '/secret',
    name: 'secret',
    component: loadView('Secret'),
  },
];
export function loadView(view: string) {
  return () => import(/* webpackChunkName: "view-[request]" */
    /* webpackMode: "lazy" */ `@/views/${view}.tsx`);};

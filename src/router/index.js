// src/router/index.js - HermesPOS-Operaciones
import { createRouter, createWebHistory } from 'vue-router';
import LoginMock from '../components/Login-MOCK.vue';
import Dashboard from '@/views/Dashboard.vue';
import GestionProductos from '../views/GestionProductos.vue';
import NotFound from '../views/NotFound.vue';
import GestionServicios from '../views/GestionServicios.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginMock
  },
  {
    path: '/gestion-servicios',
    name: 'GestionServicios',
    component: GestionServicios
  },
  {
    path: '/gestion-productos',
    name: 'GestionProductos',
    component: GestionProductos
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

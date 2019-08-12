import Vue from 'vue';
import Router from 'vue-router';
import Routes from '@/routes';
import {ROUTER_DEFAULT_CONFIG} from '@/config';
import {routerBeforeEachFunc, routerAfterEachFunc} from 'config/interceptors/router';

Vue.use(Router);

const routerInstance = new Router({
    ...ROUTER_DEFAULT_CONFIG,
    routes: Routes
});


routerInstance.beforeEach(routerBeforeEachFunc);
routerInstance.afterEach(routerAfterEachFunc);

export default routerInstance;

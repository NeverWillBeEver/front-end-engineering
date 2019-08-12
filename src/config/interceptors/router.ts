import {Route} from 'vue-router';

// 在这里写一些需要公用路由配置的问题
export async function routerBeforeEachFunc(to: Route, from: Route, next: any) {
  next();
}
export function routerAfterEachFunc(to: Route, from: Route) {
}

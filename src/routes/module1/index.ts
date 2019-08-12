export default {
  path: 'module1',
  component: () => import('components/router-view.vue'),
  children: [
    {
      path: 'module1-child',
      name: '模块1',
      component: () => import('views/index/index.vue'),
      props: true
    }
  ]
};

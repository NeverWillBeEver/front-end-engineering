export default {
  path: 'module2',
  component: () => import('components/router-view.vue'),
  children: [
    {
      path: 'module2-child',
      name: '模块2',
      component: () => import('views/index/index.vue'),
      props: true
    },
    {
      path: 'module2-child1',
      name: '模块3',
      component: () => import('views/index/index.vue'),
      props: true
    }
  ]
};

import module2 from './module2';
import module1 from './module1';


export default [
  {
    path: '/',
    component: () => import('components/router-view.vue'),
    children: [
      {
        path: '',
        redirect: {name: 'homework'}
      },
      module1,
      module2,
    ]
  }
];

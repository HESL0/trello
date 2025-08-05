const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('src/pages/HomePage.vue'),
  },
  {
    path: '/board/:id',
    name: 'board',
    component: () => import('src/pages/BoardPage.vue'),
    props: true,
  },
]
export default routes

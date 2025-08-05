const routes = [
  {
  path: '/',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    { path: '', component: () => import('pages/IndexPage.vue') }
  ]
},
  {
    path: '/board/:id',
    name: 'board',
    component: () => import('src/pages/BoardPage.vue'),
    props: true,
  },
]
export default routes

const routeOptions = [
  {
    name: 'pageNotFound',
    path: '/:pathMatch(.*)*',
    pageTitle: 'errors.pageNotFound',
  },
  {
    name: 'jobs',
    path: '/',
    pageTitle: 'jobs.name',
  },
  {
    name: 'job-detail',
    path: '/job-detail/:id',
    pageTitle: 'jobs.detail.name',
  },
];

const routes = routeOptions.map(({ name, path, pageTitle }) => ({
  name,
  path,
  component: () => {
    // const basePath = `@/views/${name}`;
    return import(`@/views/${name}.vue`)
    .catch(() => import(`@/views/${name}/index.vue`))
  },
  meta: {
    pageTitle,
  },
}));

export default routes;
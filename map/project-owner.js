const routes = {
  path: '/project-owner',
  routes: [
    {
      path: '/',
      method: 'get',
      scope: 0
    },
    {
      path: '/',
      method: 'post',
      scope: 1
    },
    {
      path: '/:id',
      method: 'get',
      scope: 1
    },
    {
      path: '/:id',
      method: 'delete',
      scope: 1
    },
    {
      path: '/:id/password',
      method: 'patch',
      scope: 1
    },
    {
      path: '/:id/email',
      method: 'patch',
      scope: 1
    },
  ],
}

module.exports = routes;
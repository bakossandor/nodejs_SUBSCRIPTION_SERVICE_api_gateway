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
      scope: 2
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

// scope
// 0 - admin access only
// 1 - user access
// 2 - public access
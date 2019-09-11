const getConfigFiles = require('../lib/getPathConfig');
const authMiddleWare = require('../lib/authMiddleware');

async function route (app) {
  const configFiles = await getConfigFiles();
  configFiles.forEach((service) => {
    service.routes.forEach((route) => {
      app[route.method](route.path, authMiddleWare(route.scope), )
    })
  })
  app.get('/', (req, res, next) => {
    res.send('watup')
  })
}

module.exports = route;
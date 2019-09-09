const getConfigFiles = require('../lib/getPathConfig');

async function route (app) {
  const configFiles = await getConfigFiles();
  configFiles.forEach((service) => {
    service.routes.forEach((route) => {
      
    })
  })
  app.get('/', (req, res, next) => {
    res.send('watup')
  })
}

module.exports = route;
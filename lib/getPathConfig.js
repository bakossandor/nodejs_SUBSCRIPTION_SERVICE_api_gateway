const fs = require('fs');
const path = require('path');

function getFilenames() {
  const directoryPath = path.join(__dirname, '../map')
  return new Promise((resolve, reject) => {
    return fs.readdir(directoryPath, function (err, files) {
      if (err) {
        reject(err); 
      }
      resolve(files);
    });
  });
}

function getRouteConfigs(filenames) {
  return new Promise((resolve, reject) => {
    const config = filenames.map((file) => {
      return require(path.join(__dirname, `../map/${file}`))
    })
    resolve(config);
  })  
}

module.exports= async function() {
  try {
    const filenames = await getFilenames();
    const config = await getRouteConfigs(filenames);
    return config;
  } catch (error) {
    console.error('API Gateway could not start');
    console.error(error);
    process.exit(99);
  }
}

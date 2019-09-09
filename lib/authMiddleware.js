const request = require('request');

async function auth(req, res, next) {
  try {
    const 
    const response = await request(process.env.AUTH_URL);

  } catch (error) {
    res.send(401);
  }
}

/// figure out the scope!!!
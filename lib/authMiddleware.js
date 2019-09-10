const request = require('axios');

function createAuthMiddleware(scope) {
  return async function auth(request, response, next) {
    try {
      // 2 scope means public access
      if (scope === 2) {
        next();
        return
      }
      const { headers : { authorization } } = request;
      if (!authorization) {
        res.send(401);
        return;
      }
      const [,token] = authorization.split(" ");
      const { params: { id } } = request
      const { data: { access_level } } = await axios({
        method: 'post',
        url: process.env.AUTH_URL,
        data: {
          token,
          id,
        }
      });
      // 0 scope means admin access
      if (access_level === 0) {
        next();
        return;
      }
      // 1 scope means user access
      if (access_level === 1 && scope === 0) {
        response.status(401).end();
      } else if (access_level === 1 && scope === 1) {
        next();
      }
    } catch (error) {
      res.send(401);
    }
  }
}

module.exports = createAuthMiddleware;

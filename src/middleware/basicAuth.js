const basicAuth = require("basic-auth");

function authMiddleware(req, res, next) {
  const user = basicAuth(req);

  //Credentials
  const userName = 'admin';
  const pass = '1234';

  if (!user || !user.name || !user.pass) {
    res.set("WWW-Authenticate", "Basic realm=Authorization Required");
    res.sendStatus(401);
    return;
  }

  if (user.name === userName && user.pass === pass) {
    next();
  } else {
    res.set("WWW-Authenticate", "Basic realm=Authorization Required");
    res.sendStatus(401);
    return;
  }
}

module.exports = authMiddleware;
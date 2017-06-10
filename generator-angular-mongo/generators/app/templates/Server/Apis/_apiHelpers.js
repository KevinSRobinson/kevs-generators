var jwtDecode = require('jwt-decode');

var decodeToken = function (token) {
  return jwtDecode(token);
}

var getUserIdFromToken = function (req) {
  return jwtDecode(req.headers.authorization).sub;
}

module.exports.decodeToken = decodeToken;
module.exports.getUserIdFromToken = getUserIdFromToken
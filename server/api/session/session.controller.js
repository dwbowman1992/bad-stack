'use-strict';
const jwt = require('jsonwebtoken');
const config = require('../../config');

/**
 * Verify a users jwt is authenticated
 *
 * @param {Express.Request} req - Express request object
 * @param {Express.Response} res - Express response object
 */
function isAuthenticated(req, res) {
  jwt.verify(req.query.token, config.secrets.session, function(err, decoded) {
    if (err) {
      res.send({
        authenticated: false
      })
    } else {
      res.send({
        authenticated: true
      })
    }
  });
}

// Any functions we create, we want to return these functions to the express app to use.
module.exports = { isAuthenticated };

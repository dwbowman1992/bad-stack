'use strict';
const express = require('express');
// Import the Controller so we may assign specific functions to a route
const controller = require('./session.controller');

// Assign the route variable to an Express.Route handler
const router = express.Router();

/**
 * path: /session/isAuthenticated
 * method: GET
 * function: listAllUsers() in the users.controller.js file
 */
router.get('/isAuthenticated', controller.isAuthenticated);

module.exports = router;

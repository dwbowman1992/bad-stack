'use strict';
const jwt = require('jsonwebtoken');
const config = require('../../config');
const User = require('./user.model');

/**
 * Handles validation errors and returns the error to the user.
 * @param {Express.Response} res - an Express Response object
 * @param {number} statusCode - the result status code number
 */
function validationError(res, statusCode) {
  statusCode = statusCode || 422;
  return function (err) {
    return res.status(statusCode).json(err);
  };
}

/**
 * handles error codes and sends the status code to the user.
 * @param {Express.Response} res - an Express Response object
 * @param {number} statusCode -  the result status code number
 */
function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    return res.status(statusCode).send(err);
  };
}

/**
 * This function will search for all users in the users collection and show the
 * details, except for the salt and password
 * @param {Express.Request} req  - Express request object with possible parameters
 * @param {Express.Response} res - Express response object.
 */
function listAllUsers(req, res) {
  return User.find({}, '-salt -password') // find all users, exclude salt and password from query
    .exec() // execute query
    .then(users => { // if users
      // respond to user with 200 (success) and json encode the users
      res.status(200).json(users);
    })
    .catch(handleError(res)); // catch any errors and send them to the custom error handler function
}

/**
 * Find a user by a specific email, we will send a request to this function in a GET request
 * saving the email in the request.param.id field
 * @param {Express.Request} req - Express request object contaning the User email we are searching for
 * @param {Express.Response} res - Express response object
 * @param {Express.Next} next - function when called goes back to request origin and tries to find another route.
 */
function findUserByEmail(req, res, next) {
  User.find({
    email: req.params.id
  }, (err, usr) => { // handle errors or user
    if (err) { // if user doesnt exist, error will be defined
      res.send(err); // return error to user
    }
    res.json(usr); // otherwise lets return the user
  }).catch(err => next(err)); // any other errors not related to not finding the object, catch them
}

/**
 * Create a user and save it to the DB. We will send the user details in a POST request in the body of the post.
 * @param {Express.Request} req - Express Request object with the Request.body contaning the data
 * @param {*} res  - Express Response object
 */
function create(req, res) {
  // Define the new user, give the constructor the req.body containing all fields
  let newUser = new User(req.body);
  // if role not defined, lets give it a default user role, although our model should handle this
  newUser.role = 'user';
  // Now lets save the user
  return newUser.save().then(function(user) { // then when the user saves
    // We will be returning only a few fields that we should need.
    res.json({
      name: user.name,
      _id: user._id,
      role: user.role
    }); // let's return the user entry to the person
    // NOTE: We are not currently encrypting the user password, this is bad.
  }).catch(validationError(res)); // catch any errors
}

/**
 *
 * @param {Express.Request} req - Express Request object
 * @param {*} res - Express Response Object
 */
function login(req, res) {
  // Find user by email
  User.findOne({
    email: req.body.email
  }).then(user => {
    // Once we find the user, now let's pass the password from req.body to authenticate
    if (!user) {
      // Return false, user not even registered, but let's not tell them.
      res.send({
        message: 'Username/Password Incorrect',
        status: 401
      });
      return;
    }
    user.authenticate(req.body.password, function (authErr, authenticated) {
      if (authErr) {
        res.send(authErr);
      }
      if (!authenticated) {
        // Return false, password invalid
        res.send({
          message: 'Username/Password Incorrect',
          status: 401
        });
      } else {
        // User is authenticated, let's created a webtoken
        const token = jwt.sign({
          _id: user._id
        }, config.secrets.session, {
          expiresIn: 1800 // set expire time for token
        });
        // Let's return the created JSON Web token with some fields from the user Model
        // we can use these fields to populate in the application who this logged in user is.
        res.json({
          token: token,
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          status: 200,
          message: 'Login Authenticated'
        });
      }
    });
  }).catch(validationError(res));
}


// Any functions we create, we want to return these functions to the express app to use.
module.exports = { listAllUsers, findUserByEmail, create, login};

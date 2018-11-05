const path = require('path');
const _ = require('lodash');

/**
 * Configuration settings for DB and application
 */
const all = {
  // secrets used to encrypt session data
  secrets: {
    // this secret is used to encrypt express session logs as well as user password
    session: 'sample-secret'
  },
  // Mongo Db settings
  mongo: {
    // Connection data
    connection: {
      useMongoClient: true,
      // uri: 'mongodb://<user>:<pwd>@databaseip:port/database'
      // uri: 'mongodb://localhost:27017/db'
      uri: 'mongodb://badUserTest:badUserPass@localhost:27017/database'
    },
    // Mongo DB Options
    options: {
      db: {
        safe: true
      }
    }
  },
  // Application Roles
  userRoles: ['guest', 'user', 'admin'],
};

// Export all settings
module.exports = _.merge(
  all
);

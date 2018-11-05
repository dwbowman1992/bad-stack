const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema; // Mongoose model is a Schema

// User Model Definition below
const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    lowercase: true,
    // This field is required
    required: [true, 'can\'t be blank'],
    // This is a regular expresion we run on the email to ensure it is in the format
    // username@domainname.extension
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    // Index tru tells MongoDB that we can query by this field as an index reference
    index: true
  },
  phone: String,
  password: {
    type: String,
    required: true
  },
  // User Role in the application [guest, user, or admin]
  role: {
    type: String,
    default: 'user'
  },
  // Password hash
  salt: String,
});

/**
 * Export mongoose.model() which can take up to 3 parameters
 * @param {string} ModelName - The name of the model in thise case 'User'
 * @param {mongoose.Schema} UserSchema - The Schema variable we created
 * @param {string} CollectionName - name of the collection User model saves to.
 */
module.exports = mongoose.model('User', UserSchema, 'users');

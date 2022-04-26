const { OAuth2Client } = require('google-auth-library');
const { google } = require('googleapis');
const keys = require('../client_secret.json');

const client = new OAuth2Client(
  keys.web.client_id,
  keys.web.client_secret,
  'https://pieceofmind-app.herokuapp.com',
);

module.exports = { client, google, keys };

const express = require('express');
const asyncHandler = require('express-async-handler');
const { OAuth2Client } = require('google-auth-library');
const { google } = require('googleapis');
const keys = require('../client_secret.json');

const client = new OAuth2Client(keys.web.client_id, keys.web.client_secret, 'http://localhost:8080');

// const { getDogs } = require('../model/dogs');

const router = express.Router();
async function verify(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: keys.web.client_id,
  });
  const payload = ticket.getPayload();
  console.log(ticket);
  return payload.name;
}

router.get(
  '/welcome',
  asyncHandler((req, res) => res.send('Willkommen beim Basis Server Pimped!')),
);

router.post(
  '/login',
  asyncHandler(async (req, res) => {
    const userCode = req.body.code;
    const r = await client.getToken(userCode);
    client.setCredentials(r.tokens);
    const drive = google.drive({ version: 'v3', auth: client });
    const driveRes = await drive.files.list({
      pageSize: 20,
      fields: 'nextPageToken, files(id, name,mimeType,kind)',
    });
    res.status(200).json(driveRes.data.files);
    // const verifyResult = await verify(userToken);
    // res.status(200).json(verifyResult);
  }),
);

module.exports = router;

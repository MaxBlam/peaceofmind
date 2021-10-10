const express = require('express');
const asyncHandler = require('express-async-handler');
const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '510930460352-helprk2rbp57j1p85tsv275pgopj2ldm.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

// const { getDogs } = require('../model/dogs');

const router = express.Router();
async function verify(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
  });
  const payload = ticket.getPayload();
  console.log(payload);
  return payload.name;
}

router.get(
  '/welcome',
  asyncHandler((req, res) => res.send('Willkommen beim Basis Server Pimped!')),
);

router.post(
  '/login',
  asyncHandler(async (req, res) => {
    const userToken = req.body.token;
    const verifyResult = await verify(userToken);

    res.status(200).json(verifyResult);
  }),
);

module.exports = router;

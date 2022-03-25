const asyncHandler = require('express-async-handler');
const { client, google, keys } = require('./apisetup');
const { createRootFolder } = require('./drive');
const model = require('../model/users');

const login = asyncHandler(async (req, res) => {
  const userCode = req.body.code;
  const r = await client.getToken(userCode);

  const UserData = await client.verifyIdToken({
    idToken: r.tokens.id_token,
    audience: keys.web.client_id,
  });
  const userHash = UserData.getPayload().sub;

  const result = await model.getUser(userHash);

  console.log(result);

  if (result.length === 0) {
    client.setCredentials(r.tokens);
    const rootId = await createRootFolder();
    const resultt = await model.createUser(userHash, rootId);
  }
  const userDataDB = await model.getUser(UserData.getPayload().sub);

  if (userDataDB.length > 0) {
    client.setCredentials(r.tokens);
    req.session.userHash = UserData.getPayload().sub;
    res.status(200).json({
      code: 200,
      data: { userHash: UserData.getPayload().sub, picture: UserData.getPayload().picture },
    });
  } else {
    res.status(200).json({
      code: 500,
      data: 'Login Failed',
    });
  }
});

const logout = async (req, res) => {
  // model.deleteUserSession(req.session.sid);
  //console.log(req.session);

  req.session.destroy();
  res.clearCookie(process.env.SESSION_NAME);
  if (client.credentials) client.revokeCredentials(() => console.log('Credentials cleared'));

  res.status(200).end();
};

module.exports = { login, logout };

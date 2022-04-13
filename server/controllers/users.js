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


  if (result.length === 0) {
    client.setCredentials(r.tokens);
    const rootId = await createRootFolder();
    /*const resultt = */ await model.createUser(userHash, rootId);
  }
  const userDataDB = await model.getUser(UserData.getPayload().sub);

  if (userDataDB.length > 0) {
    client.setCredentials(r.tokens);
    req.session.userHash = UserData.getPayload().sub;
    res.status(200).json({
      userHash: UserData.getPayload().sub,
      picture: UserData.getPayload().picture,
    });
  } else {
    res.status(500).send('Login failed!');
  }
});

const logout = async (req, res) => {
  // model.deleteUserSession(req.session.sid);
  //console.log(req.session);

  req.session.destroy();
  res.clearCookie(process.env.SESSION_NAME);
  if (client.credentials)
    client.revokeCredentials(() => console.log('Credentials cleared'));

  res.status(200).end();
};

const addSettings = asyncHandler(async (req, res) => {
  const { userHash, settings } = req.body;
  const userData = await model.getUser(userHash);
  const userSettings = await model.getUserSettings(userData[0].acc_id);
  let dbRes = [];
  if (userSettings.length == 0) {
    dbRes = await model.createUserSettings(userData[0].acc_id, settings);
  } else {
    dbRes = await model.updateUserSettings(userData[0].acc_id, settings);
  }

  res.status(200).json(dbRes);
});

const getSettings = asyncHandler(async (req, res) => {
  const { user } = req.params;
  const userData = await model.getUser(user);
  const userSettings = await model.getUserSettings(userData[0].acc_id);
  const pColorString = userSettings[0].paragraph_color.split(',');
  const hColorString = userSettings[0].heading_color.split(',');
  const liColorString = userSettings[0].list_color.split(',');
  const resObject = {
    pColor: {
      r: Number(pColorString[0]) * 255,
      g: Number(pColorString[1]) * 255,
      b: Number(pColorString[2]) * 255,
    },
    hColor: {
      r: Number(hColorString[0]) * 255,
      g: Number(hColorString[1]) * 255,
      b: Number(hColorString[2]) * 255,
    },
    liColor: {
      r: Number(liColorString[0]) * 255,
      g: Number(liColorString[1]) * 255,
      b: Number(liColorString[2]) * 255,
    },
  };

  res.status(200).json(resObject);
});

module.exports = { login, logout, addSettings, getSettings };

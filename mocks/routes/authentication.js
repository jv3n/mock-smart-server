const authenticationResponseError = require('../data/authentication/authentication-response-error.json');
const authenticationUserData = require('../data/authentication/authentication-user-data.json');

module.exports = [
  {
    id: "post-user-login",
    url: "/user/login",
    method: "POST",
    variants: [
      {
        id: "success",
        type: "middleware",
        options: {
          middleware: (req, res) => {
            res.status(200);
            res.append('Access-Control-Expose-Headers', 'ICON-X-SESSIONID');
            res.append('Access-Control-Allow-Headers', 'ICON-X-SESSIONID');
            res.set('ICON-X-SESSIONID', 'f33b85d0-2beb-401b-94dc-9b854d7cb4dd');
            res.send(authenticationUserData);
          }
        },
      },
      {
        id: "error",
        type: "middleware",
        options: {
          middleware: (req, res) => {
            res.status(500);
            res.send(authenticationResponseError);
          }
        }
      }
    ]
  }
];

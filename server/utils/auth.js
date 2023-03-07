const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

function authMiddleware(req, res, next) {
  try {
    // Get the token from the request headers
    const token = req.headers.authorization.split(' ')[1];

    // Verify the token
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;

    next();
  } catch {
    res.status(401).json({ error: 'Unauthorized' });
  }
}
module.exports = {
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  authMiddleware: authMiddleware,
};

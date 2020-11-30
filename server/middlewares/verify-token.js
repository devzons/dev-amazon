const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  let token = req.headers['x-access-token'] || req.headers['authorization']
  let checkBearer = 'Bearer '

  if (token) {
    if (token.startsWith(checkBearer)) {
      token = token.slice(checkBearer.length, token.length)
    }

    jwt.verify(token, process.env.SECRET, (error, decoded) => {
      if (error) {
        res.json({
          success: false,
          message: 'Fail to authenticate',
        })
      } else {
        req.decoded = decoded
        next()
      }
    })
  } else {
    res.json({
      success: false,
      message: 'No token provided',
    })
  }
}
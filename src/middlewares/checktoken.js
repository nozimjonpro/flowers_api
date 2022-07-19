const jwt = require('../lib/jwt.js')


module.exports  = (req, res, next) => {
  try {
    if(req.method != 'GET' && req.url != '/admin'){
        let token = req.headers.token;
        if(!token) throw new Error('token is required')
        jwt.verify(token)
    }
    next()
  } catch (error) {
    res.sendStatus(401)
  }
     
}
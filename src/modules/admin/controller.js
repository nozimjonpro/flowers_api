const model = require('./model.js')
const jwt = require('../../lib/jwt.js')

const LOGIN = async(req, res) => {
    try {
        let admin = await model.LOGIN(req.body)
        if(admin){
            res.status(200).json({
                status: 200,
                message: 'ok',
                token: jwt.sign(admin.admin_id)
            })
        }else{
            res.status(401).json({
                status: 401,
                message: 'wrong username or password',
                token: null
            })
        }
    } catch (error) {
        console.error(error)
    }
}


module.exports = {
    LOGIN
}
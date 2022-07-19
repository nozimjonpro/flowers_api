const model = require('./model.js')
const upload = require('../../lib/multer.js');

const newsImage = upload.single('newsImage')

const GET = async (req, res)=>{
    try {
        const news = await model.GET(req.params)
        if(news){
            res.status(200).json({
                status: 200,
                message: 'ok',
                data: news
            })
        }else{
            res.status(404).json({
                status: 404,
                message: 'client error',
                data: null
            })
        }
    } catch (error) {
        console.error(error)
    }
}

const POST = async(req, res) => {
    try {
        const addednew = await model.POST(req.file, req.body)
        if(addednew){
            res.status(201).json({
                status: 201,
                message: 'ok',
                data: addednew
            })
        }else{
            res.status(404).json({
                status: 404,
                message: 'client error',
                data: null
            })
        }
    } catch (error) {
        console.error(error)
    }
}

const DELETE = async(req, res) => {
    try {
        const newjon = await model.DELETE(req.params)
        if(newjon){
            res.status(200).json({
                status: 200,
                message: 'newjon deleted',
                data: newjon
            })
        }else{
            res.status(404).json({
                status: 404,
                message: 'client error',
                data: null
            })
        }
    } catch (error) {
        console.error(error)
    }
}

const PUT = async(req, res) => {
    try {
        const newjon = await model.PUT(req.params, req.body, req.file)
        if(newjon){
            res.status(200).json({
                status: 200,
                message: 'newjon updated',
                data: newjon
            })
        }else{
            res.status(404).json({
                status: 404,
                message: 'client error',
                data: null
            })
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    GET, POST, newsImage, DELETE, PUT
}
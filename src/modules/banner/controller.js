const model = require('./model.js')
const upload = require('../../lib/multer.js')

const imagesUploads = upload.single('bannerImage')


const GET = async (req, res)=>{
    try {
        const banners = await model.GET(req.params)
        if(banners){
            res.status(200).json({
                status: 200,
                message: 'ok',
                data: banners
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

const POST = async (req, res)=>{
    try {
        const banners = await model.POST(req.file)
        if(banners){
            res.status(201).json({
                status: 201,
                message: 'new banner added',
                data: banners
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

const DELETE = async (req, res)=>{
    try {
        const banner = await model.DELETE(req.params)
        if(banner){
            res.status(201).json({
                status: 201,
                message: 'deleted',
                data: banner
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

const PUT = async (req, res)=>{
    try {
        const banner = await model.PUT(req.params, req.file)
        if(banner){
            res.status(201).json({
                status: 201,
                message: 'banner updated',
                data: banner
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
    GET, imagesUploads, POST, DELETE, PUT
}
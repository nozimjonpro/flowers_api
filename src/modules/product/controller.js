const model = require('./model.js')
const upload = require('../../lib/multer.js')

const imagesUploads = upload.fields([{name: "mainImage", maxCount: 1}, {name: 'image', maxCount: 6}])


const GET = async (req, res)=>{
    try {
        const products = await model.GET(req.params)
        if(products){
            res.status(200).json({
                status: 200,
                message: 'ok',
                data: products
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
        const product = await model.POST(req.body)
        if(product){
            res.status(200).json({
                status: 200,
                message: 'ok',
                data: product
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
        const product = await model.DELETE(req.params)
        if(product){
            res.status(200).json({
                status: 200,
                message: 'product deleted',
                data: product
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
        const product = await model.PUT(req.params, req.body)
        if(product){
            res.status(200).json({
                status: 200,
                message: 'product updated',
                data: product
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

const POSTIMAGE =async (req, res)=>{
    try {
    const images = await model.POSTIMAGE(req.params, req.files)
    if(images){
        res.status(201).json({
            status: 201,
            message: "image added",
            data: images
        })
    }else{
        res.status(404).json({
            status: 404,
            message: "client error",
            data: null
        })
    }
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
    GET, POST, DELETE, PUT, POSTIMAGE, imagesUploads
}
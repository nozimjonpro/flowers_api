const model = require('./model.js')


const GET = async (req, res)=>{
    try {
        const categories = await model.GET(req.params)
        if(categories){
            res.status(200).json({
                status: 200,
                message: 'ok',
                data: categories
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

const POST = async(req, res)=>{
    try {
        const category = await model.POST(req.body)
        if(category){
            res.status(201).json({
                status: 201,
                message: 'category added',
                data: category
            })
        }else{
            res.status(404).json({
                status: 404,
                message: 'client error',
                data: null
            })
        }
    } catch (error) {
        
    }
}

const DELETE = async(req, res)=>{
    try {
        const category = await model.DELETE(req.params)
        if(category){
            res.status(201).json({
                status: 201,
                message: 'category deleted',
                data: category
            })
        }else{
            res.status(404).json({
                status: 404,
                message: 'client error',
                data: null
            })
        }
    } catch (error) {
        
    }
}

const PUT = async(req, res)=>{
    try {
        const category = await model.PUT(req.params, req.body)
        if(category){
            res.status(201).json({
                status: 201,
                message: 'category updated',
                data: category
            })
        }else{
            res.status(404).json({
                status: 404,
                message: 'client error',
                data: null
            })
        }
    } catch (error) {
        
    }
}

module.exports = {GET, POST, DELETE, PUT}
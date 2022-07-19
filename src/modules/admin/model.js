const {fetch} = require('../../lib/postgres.js')
const {GET} = require('./query.js')

const LOGIN = async({username, password}) => {
    try {
       return await fetch(GET, username, password)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {LOGIN}
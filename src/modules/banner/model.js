const {fetchAll, fetch} = require('../../lib/postgres.js')
const {GETBANNERS, POSTBANNERS, DELETEBANNERS, PUTBANNERS} = require('./query.js')


const GET = async ({bannerId}) => {
    try {
      return await fetchAll(GETBANNERS, bannerId);
    } catch (error) {
      console.error(error);
    }
  };

  const POST = async ({filename}) => {
    try {
      return await fetchAll(POSTBANNERS, filename);
    } catch (error) {
      console.error(error);
    }
  };


  const DELETE = async ({bannerId}) => {
    try {
      return await fetchAll(DELETEBANNERS, bannerId);
    } catch (error) {
      console.error(error);
    }
  };

  const PUT = async ({bannerId}, {filename}) => {
    try {
      return await fetchAll(PUTBANNERS, bannerId, filename);
    } catch (error) {
      console.error(error);
    }
  };

  module.exports = {
    GET, POST, DELETE, PUT
  }
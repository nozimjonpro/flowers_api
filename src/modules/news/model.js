const { fetchAll, fetch } = require("../../lib/postgres.js");

const { GETNEWS, POSTNEW, DELETENEW, PUTNEW } = require("./query.js");

const GET = async ({ newsId }) => {
  try {
    return await fetchAll(GETNEWS, newsId);
  } catch (error) {
    console.error(error);
  }
};

const POST = async ({ filename }, { title, description }) => {
  try {
    return await fetch(POSTNEW, filename, title, description);
  } catch (error) {
    console.error(error);
  }
};

const DELETE = async ({ newsId }) => {
    try {
      return await fetch(DELETENEW, newsId);
    } catch (error) {
      console.error(error);
    }
  };

  const PUT = async ({ newsId }, { title, description }, {filename}) => {
    try {
      return await fetch(PUTNEW, newsId, title, description, filename);
    } catch (error) {
      console.error(error);
    }
  };

module.exports = {
  GET,
  POST,
  DELETE,
  PUT
};

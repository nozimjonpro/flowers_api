const { fetchAll, fetch } = require("../../lib/postgres.js");

const {
  GETPRODUCTS,
  POSTPRODUCT,
  DELETEPRODUCT,
  PUTPRODUCT,
  ADDIMAGE
} = require("./query.js");

const GET = async ({ productId }) => {
  try {
    return await fetchAll(GETPRODUCTS, productId);
  } catch (error) {
    console.error(error);
  }
};

const POST = async ({ productName, description, price, count, categoryId }) => {
  try {
    return await fetch(
      POSTPRODUCT,
      productName,
      description,
      price,
      count,
      categoryId
    );
  } catch (error) {
    console.error(error);
  }
};

const DELETE = async ({ productId }) => {
  try {
    return await fetch(DELETEPRODUCT, productId);
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (
  { productId },
  { productName, description, price, count }
) => {
  try {
    return await fetch(
      PUTPRODUCT,
      productId,
      productName,
      description,
      price,
      count
    );
  } catch (error) {
    console.error(error);
  }
};

const POSTIMAGE = async ({ productId }, { mainImage: [main], image=[] }) => {
  try {
    let images = [];
    images[0] = await fetch(ADDIMAGE, productId, main.filename);
    for (let value of image) {
      images[images.length] = await fetch(ADDIMAGE, productId, value.filename);
    }
    return images
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  GET,
  POST,
  DELETE,
  PUT,
  POSTIMAGE,
};

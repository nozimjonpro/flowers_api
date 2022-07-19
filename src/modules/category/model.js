const { fetchAll, fetch } = require("../../lib/postgres.js");

const { GETCATEGORY, GETIMG, POSTCATEGORY, DELETECATEGORY, PUTCATEGORY } = require("./query.js");

const GET = async ({ categoryId=0 }) => {
  try {
    let categories = await fetchAll(GETCATEGORY, categoryId);

    let images = await fetchAll(GETIMG);

    categories = categories.map((category) => {
        category.products = category.products[0] == null ? [] : category.products
      category.products.map((product) => {
        delete product.category_id;
        product.images = images.filter(
          (img) => img.product_id == product.product_id
        );
        return product;
      });
      return category;
    });

    return categories;
  } catch (error) {
    console.error(error);
  }
};

const POST = async ({ categoryName }) => {
  try {
    return await fetch(POSTCATEGORY, categoryName);
  } catch (error) {
    console.error(error);
  }
};

const DELETE = async ({ categoryId }) => {
    try {
      return await fetch(DELETECATEGORY, categoryId);
    } catch (error) {
      console.error(error);
    }
};

const PUT = async ({ categoryId }, {categoryName}) => {
    try {
      return await fetch(PUTCATEGORY, categoryId, categoryName);
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

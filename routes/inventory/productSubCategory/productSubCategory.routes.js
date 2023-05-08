const express = require("express");
const {
  createSingleProductSubCategory,
  getAllProductSubCategory,
  getSingleProductSubCategory,
  updateSingleProductSubCategory,
  deleteSingleProductSubCategory,
} = require("./productSubCategory.controllers");
const authorize = require("../../../utils/authorize"); // authentication middleware

const productSubCategoryRoutes = express.Router();

productSubCategoryRoutes.post(
  "/",
  authorize("createProductSubCategory"),
  createSingleProductSubCategory
);
productSubCategoryRoutes.get(
  "/",
  authorize("viewProductSubCategory"),
  getAllProductSubCategory
);
productSubCategoryRoutes.get(
  "/:id",
  authorize("viewProductSubCategory"),
  getSingleProductSubCategory
);
productSubCategoryRoutes.put(
  "/:id",
  authorize("updateProductSubCategory"),
  updateSingleProductSubCategory
);
productSubCategoryRoutes.delete(
  "/:id",
  authorize("deleteProductSubCategory"),
  deleteSingleProductSubCategory
);

module.exports = productSubCategoryRoutes;

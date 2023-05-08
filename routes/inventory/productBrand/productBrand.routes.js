const express = require("express");
const {
  createSingleProductBrand,
  getAllProductBrand,
  getSingleProductBrand,
  updateSingleProductBrand,
  deleteSingleProductBrand,
} = require("./productBrand.controllers");
const authorize = require("../../../utils/authorize"); // authentication middleware

const productBrandRoutes = express.Router();

productBrandRoutes.post(
  "/",
  authorize("createProductBrand"),
  createSingleProductBrand
);
productBrandRoutes.get("/", authorize("viewProductBrand"), getAllProductBrand);
productBrandRoutes.get(
  "/:id",
  authorize("viewProductBrand"),
  getSingleProductBrand
);
productBrandRoutes.put(
  "/:id",
  authorize("updateProductBrand"),
  updateSingleProductBrand
);
productBrandRoutes.delete(
  "/:id",
  authorize("deleteProductBrand"),
  deleteSingleProductBrand
);

module.exports = productBrandRoutes;

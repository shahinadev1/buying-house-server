const brandModel = require("../models/barndModel");
const childCategoryModel = require("../models/childCategoryModel");
const childSubCategoryModel = require("../models/childSubCategoryModel");
const footerAddressModel = require("../models/FooterAddressModel");
const navbarParentModel = require("../models/navbarParentModel");
const navbarSubModel = require("../models/navbarSubModel");
const productModel = require("../models/productModel");
const sliderModel = require("../models/sliderModel");
const subCategoryModel = require("../models/subCategoryModel");
const topBarCategoryModel = require("../models/topBarCategoryModel");
const topMenuModel = require("../models/topMenuModel");

const router = require("express").Router();

//get all top menus api
router.get("/topmenu1", async (req, res) => {
  try {
    const result = await topMenuModel.find({});
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});
//get all parent  menus api
router.get("/parentMenus", async (req, res) => {
  try {
    const result = await navbarParentModel.find({});
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});
//get all sub  menus api
router.get("/subMenus", async (req, res) => {
  try {
    const result = await navbarSubModel.find({});
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});
//get all slider   api
router.get("/sliders", async (req, res) => {
  try {
    const result = await sliderModel.find({});
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//slider delete  api
router.delete("/sliders/:id", async (req, res) => {
  try {
    const result = await sliderModel.deleteOne({ _id: req.params.id });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//add top menus api
router.post("/add-topmenu1", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");
  try {
    const doc = new topMenuModel(req.body);
    const result = await doc.save();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});
//update top menus api
router.put("/topmenu1/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");

  try {
    const result = await topMenuModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});
//update parent menus api
router.put("/parentMenu/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");

  try {
    const result = await navbarParentModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});
//update sub menus api
router.put("/subMenu/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");

  try {
    const result = await navbarSubModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});
//delete top menus api
router.delete("/topmenu1/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");
  try {
    const result = await topMenuModel.deleteOne({ _id: req.params.id });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//delete parent menus api
router.delete("/parentMenu/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");
  try {
    const result = await navbarParentModel.deleteOne({ _id: req.params.id });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});
//delete sub menus api
router.delete("/subMenu/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");
  try {
    const result = await navbarSubModel.deleteOne({ _id: req.params.id });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//add navbar -parent api
router.post("/add-parentMenu", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");
  try {
    const doc = new navbarParentModel(req.body);
    const result = await doc.save();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});
//add navbar -sub api
router.post("/add-subMenu", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");
  try {
    const doc = new navbarSubModel(req.body);
    const result = await doc.save();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//slider image add api
router.post("/add-slider", async (req, res) => {
  try {
    const doc = new sliderModel(req.body);
    const result = await doc.save();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});

//topBar category image add api
router.post("/add-topbar-category", async (req, res) => {
  try {
    const doc = new topBarCategoryModel(req.body);
    const result = await doc.save();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});

//topBar category image add api
router.post("/add-sub-category", async (req, res) => {
  try {
    const doc = new subCategoryModel(req.body, {}, { ordered: false });
    const result = await doc.save();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});

//topbar category delete api
router.delete("/add-topbar-category/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");
  try {
    const result = await topBarCategoryModel.deleteOne({ _id: req.params.id });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});

//sub category  delete api
router.delete("/add-sub-category/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");
  try {
    const result = await subCategoryModel.deleteOne({ _id: req.params.id });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});

//topbar category update api
router.put("/add-topbar-category/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");

  try {
    const result = await topBarCategoryModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});

//sub category category update api
router.put("/add-sub-category/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");

  try {
    const result = await subCategoryModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});

//all top category get api
//get all slider   api
router.get("/add-topbar-category", async (req, res) => {
  try {
    const result = await topBarCategoryModel.find({});
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//get sub category    api
router.get("/add-sub-category", async (req, res) => {
  try {
    const result = await subCategoryModel.find({});
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//get sub category by slug api
router.get("/add-sub-category/:slug", async (req, res) => {
  try {
    const result = await subCategoryModel.find({ slug: req.params.slug });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//manage footer address add api
router.post("/footer-address", async (req, res) => {
  try {
    const doc = new footerAddressModel(req.body);
    const result = await doc.save();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});

//manage footer address Update api
router.put("/footer-address/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");

  try {
    const result = await footerAddressModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});

//manage footer address api delete
router.delete("/footer-address/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");
  try {
    const result = await footerAddressModel.deleteOne({ _id: req.params.id });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//get footer address
router.get("/footer-address", async (req, res) => {
  try {
    const result = await footerAddressModel.find({});
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//add child category-> api
router.post("/child-category", async (req, res) => {
  try {
    const doc = new childCategoryModel(req.body);
    const result = await doc.save();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});

//update child category  api
router.put("/child-category/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");

  try {
    const result = await childCategoryModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});

//delete child category api delete
router.delete("/child-category/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");
  try {
    const result = await childCategoryModel.deleteOne({ _id: req.params.id });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//get footer address
router.get("/child-category", async (req, res) => {
  try {
    const result = await childCategoryModel.find({});
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//get footer address
router.get("/child-category/:slug", async (req, res) => {
  try {
    const result = await childCategoryModel.findOne({ slug: req.params.slug });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//mange child sub category

//add child category-> api
router.post("/child-sub-category", async (req, res) => {
  try {
    const doc = new childSubCategoryModel(req.body);
    const result = await doc.save();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});

//update child category  api
router.put("/child-sub-category/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");

  try {
    const result = await childSubCategoryModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});

//delete child category api delete
router.delete("/child-sub-category/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");
  try {
    const result = await childSubCategoryModel.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//get footer address
router.get("/child-sub-category", async (req, res) => {
  try {
    const result = await childSubCategoryModel.find({});
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//mange brand

//add brand-> api
router.post("/brand", async (req, res) => {
  try {
    const doc = new brandModel(req.body);
    const result = await doc.save();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});

//update brand  api
router.put("/brand/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");

  try {
    const result = await brandModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});

//delete brand api delete
router.delete("/brand/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");
  try {
    const result = await brandModel.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//get footer address
router.get("/brand", async (req, res) => {
  try {
    const result = await brandModel.find({});
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//product manage api

//add brand-> api
router.post("/products", async (req, res) => {
  try {
    const doc = new productModel(req.body);
    const result = await doc.save();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});

//update brand  api
router.put("/products/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");

  try {
    const result = await productModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error.message,
    });
  }
});

//delete brand api delete
router.delete("/products/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");
  try {
    const result = await productModel.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//get footer address
router.get("/products", async (req, res) => {
  try {
    const result = await productModel.find({});
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//get footer address
router.get("/products/:slug", async (req, res) => {
  try {
    const result = await productModel.findOne({ slug: req.params.slug });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

module.exports = router;

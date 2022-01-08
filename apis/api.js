const aboutModel = require("../models/aboutModel");
const brandModel = require("../models/barndModel");
const childCategoryModel = require("../models/childCategoryModel");
const childSubCategoryModel = require("../models/childSubCategoryModel");
const footerAddressModel = require("../models/FooterAddressModel");
const navbarParentModel = require("../models/navbarParentModel");
const navbarSubModel = require("../models/navbarSubModel");
const orderModel = require("../models/orderModel");
const paymentModel = require("../models/paymentModel");
const productModel = require("../models/productModel");
const privacyModel = require("../models/privacyModel");
const termsModel = require("../models/termsModel");
const sliderModel = require("../models/sliderModel");
const subCategoryModel = require("../models/subCategoryModel");
const topBarCategoryModel = require("../models/topBarCategoryModel");
const topMenuModel = require("../models/topMenuModel");
const trans = require("./SendMail/orderInvoice");
const shopModel = require("../models/shopModel");
const userModel = require("../models/userModel");
const payoutModel = require("../models/payoutModel");
const agentModel = require("../models/agentModel");
const dealerModel = require("../models/delearModel");
const agentPayoutModel = require("../models/agentPayoutModel");
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
    res.status(500).json({
      error: error.message,
    });
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
    res.status(500).json({
      error: error.message,
    });
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
    res.status(500).json({
      error: error.message,
    });
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
    res.status(500).json({
      error: error.message,
    });
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
    res.status(500).json({
      error: error.message,
    });
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
    res.status(500).json({
      error: error.message,
    });
    res.status(500).json({
      data: error.message,
    });
  }
});

//topbar category delete api
router.delete("/add-topbar-category/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");
  try {
    const result = await topBarCategoryModel.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
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
    res.status(500).json({
      error: error.message,
    });
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
    res.status(500).json({
      error: error.message,
    });
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
    res.status(500).json({
      error: error.message,
    });
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
    res.status(500).json({
      error: error.message,
    });
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

    socket.emit("footer_address1", result);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
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
    res.status(500).json({
      error: error.message,
    });
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
    res.status(500).json({
      error: error.message,
    });
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
    const result = await childCategoryModel.findOne({
      slug: req.params.slug,
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
    res.status(500).json({
      error: error.message,
    });
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
    res.status(500).json({
      error: error.message,
    });
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

//get footer address
router.get("/child-sub-category/:id", async (req, res) => {
  try {
    const result = await childSubCategoryModel.findById(req.params.id);
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
    res.status(500).json({
      error: error.message,
    });
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
    res.status(500).json({
      error: error.message,
    });
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

//get footer address
router.get("/brand/:id", async (req, res) => {
  try {
    const result = await brandModel.findById(req.params.id);
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
    console.log(req.body);
    const doc = new productModel(req.body);
    const result = await doc.save();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
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
    res.status(500).json({
      error: error.message,
    });
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

//products filter by categoryName
router.get("/products/filter/c/:cID", async (req, res) => {
  try {
    const result = await productModel.find({
      parentId: req.params.cID,
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

//products filter by categoryName
router.get("/products/filter/author/:author", async (req, res) => {
  try {
    const result = await productModel.find({
      added_by: req.params.author,
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

//add brand-> api
router.post("/payment", async (req, res) => {
  try {
    const doc = new paymentModel(req.body);
    const result = await doc.save();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
    res.status(500).json({
      data: error.message,
    });
  }
});

//get footer address
router.get("/payment", async (req, res) => {
  try {
    const result = await paymentModel.find({});
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
router.get("/payment/:id", async (req, res) => {
  try {
    const result = await paymentModel.findOne({ _id: req.params.id });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//update brand  api
router.put("/payment/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");

  try {
    const result = await paymentModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
    res.status(500).json({
      data: error.message,
    });
  }
});

//delete brand api delete
router.delete("/payment/:id", async (req, res) => {
  //   if (!res.body) res.status(400).json("Bad request!");
  try {
    const result = await paymentModel.deleteOne({
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

//add brand-> api
router.post("/orders", async (req, res) => {
  try {
    const doc = new orderModel(req.body);
    const result = await doc.save();
    trans.sendMail(
      {
        from: "codershahin1@gmail.com",
        to: result.user_email,
        subject: `Your order is placed order #${result._id} || buying.house`,
        html: `
        <!DOCTYPE  html>
        <html>
          <head>
            <body>
            <p>Hi ${result.user_name},
              Thank you for ordering from Buying.house!
              We're excited for you to receive your order #${
                result._id
              } and will notify you once it's on its way. If you have ordered from multiple sellers, your items will be delivered in separate packages. We hope you had a great shopping experience! You can check your order status here.</p>
             <a href="http://localhost:8080/dashboard" class="btn btn-success">Check status</a>
             <p>Here's a confirmation of what you bought in your order.</p>
             <p style="color: #0f146d">DELIVERY DETAILS</p>
             <li>
              <span style="color: #0f146d">Name:</span> ${result.user_name}
             </li>
             <li><span style="color: #0f146d">Address:</span> ${
               result.district
             }, ${result.country}, ${result.address}</li>
             <li>
              <span style="color: #0f146d">Phone:</span> ${result.phone}
             </li>
             <li>
              <span style="color: #0f146d">Email:</span> ${result.user_email}
             </li>
             <p style="color: #0f146d">ORDER DETAIL</p>
             <div>
             ${result.products.items.map(
               (p) => `
               <div>
                 <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${
                      p.image[0]
                    }" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${p.name}</h5>
                      <span class="card-subtitle">Sold by: ${p.added_by}</span>
                         <p  class="card-text" style="color: #0f146d"></p>
                        <p  class="card-text" style="color: #0f146d">TK ${
                          p.price
                        }</p>
                        <p  class="card-text" style="color: #0f146d">Quintity: ${
                          p.quintity
                        }</p>
                        <p  class="card-text" style="color: #0f146d">Total: ${
                          parseInt(p.price) * parseInt(p.quintity)
                        }</p>
                     
                    </div>
                  </div>
                </div>
                </div>
               </div>;
             `
             )}
             </div>
            </body>
          </head>
        </html>
      `,
      },
      (err, info) => {
        if (!err) {
          console.log(info.response);
        } else {
          console.log(err.message);
        }
      }
    );
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
    res.status(500).json({
      data: error.message,
    });
  }
});

//get footer address
router.get("/orders", async (req, res) => {
  try {
    const result = await orderModel.find({});
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
router.put("/orders/:id", async (req, res) => {
  trans.sendMail(
    {
      from: process.env.EMIL_USER,
      to: req.body.order.user_email,
      subject: `Your order status #${req.body.order._id}. form buying.house`,
      html: `
        <!DOCTYPE  html>
        <html>
          <head>
            <style>
            h1{
              color:green;
            }
            </style>
            <body>
              <h1>Hey ${req.body.order.user_name}</h1>
              <p>Hi ${req.body.order.user_name},
Thank you for ordering from Buying.house!
We're excited for you to receive your order #${req.body.order._id} and will notify you once it's on its way. If you have ordered from multiple sellers, your items will be delivered in separate packages. We hope you had a great shopping experience! You can check your order status here.</p>
<h3>Order status:${req.body.order_status}</h3>
            </body>
          </head>
        </html>
      `,
    },
    (err, info) => {
      if (!err) {
        console.log(info.response);
      } else {
        console.log(err.message);
      }
    }
  );
  try {
    const result = await orderModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        order_status: req.body.order_status,
      }
    );
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
router.get("/orders/:id", async (req, res) => {
  try {
    const result = await orderModel.findOne({ _id: req.params.id });
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
router.get("/order/:email", async (req, res) => {
  try {
    const result = await orderModel.find({ shopEmail: req.params.email });
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
router.get("/order/:email", async (req, res) => {
  try {
    const result = await orderModel.find({ user_email: req.params.email });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
    });
  }
});

//About Page
router.post("/add-about", async (req, res) => {
  try {
    const doc = new aboutModel(req.body);
    const result = await doc.save();
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
});
//About Page
router.get("/about", async (req, res) => {
  try {
    const result = await aboutModel.find({});
    res.status(200).json(result[0]);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

//About Page
router.put("/add-about/:id", async (req, res) => {
  try {
    const result = await aboutModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        ...req.body,
      }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

//Privacy Page
router.post("/add-privacy", async (req, res) => {
  try {
    const doc = new privacyModel(req.body);
    const result = await doc.save();
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
});
//privacy Page
router.get("/privacy", async (req, res) => {
  try {
    const result = await privacyModel.find({});
    res.status(200).json(result[0]);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

//privacy Page
router.put("/add-privacy/:id", async (req, res) => {
  try {
    const result = await privacyModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        ...req.body,
      }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

//terms Page
router.post("/add-terms", async (req, res) => {
  try {
    const doc = new termsModel(req.body);
    const result = await doc.save();
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
});

//Terms Page
router.get("/terms", async (req, res) => {
  try {
    const result = await termsModel.find({});
    res.status(200).json(result[0]);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

//About Page
router.put("/add-terms/:id", async (req, res) => {
  try {
    const result = await termsModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        ...req.body,
      }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

//general Page
router.post("/add-general", async (req, res) => {
  try {
    const doc = new generalModel(req.body);
    const result = await doc.save();
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
});

//Terms Page
router.get("/general", async (req, res) => {
  try {
    const result = await generalModel.find({});
    res.status(200).json(result[0]);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

//About Page
router.put("/add-general/:id", async (req, res) => {
  try {
    const result = await generalModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        ...req.body,
      }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

//agent
// router.post("/agent", async (req, res) => {
//   try {
//     const doc = new agentModel();
//     const result = await doc.save();
//     req.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({
// error:error.message
// })
//   }
// });

router.post("/shop", async (req, res) => {
  try {
    const doc = new shopModel(req.body);
    const result = await doc.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/shop", async (req, res) => {
  try {
    const result = await shopModel.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
router.get("/shop/:email", async (req, res) => {
  try {
    const result = await shopModel.findOne({ email: req.params.email });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.post("/users", async (req, res) => {
  try {
    const doc = new userModel(req.body);
    const result = await doc.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.post("/req-payout", async (req, res) => {
  try {
    const doc = new payoutModel(req.body);
    const result = await doc.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.post("/agent/req-payout", async (req, res) => {
  try {
    const doc = new agentPayoutModel(req.body);
    const result = await doc.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.post("/agents", async (req, res) => {
  try {
    const doc = new agentModel(req.body);
    const result = await doc.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.put("/agents/:email", async (req, res) => {
  try {
    const result = await agentModel.findOneAndUpdate(
      { email: req.params.email },
      req.body
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.put("/req-payout/:id", async (req, res) => {
  try {
    const result = await payoutModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        status: req.body.status,
        adminReceived: req.body.paymentInformation,
      }
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
//ss

router.delete("/agents/:id", async (req, res) => {
  try {
    const result = await agentModel.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/agents", async (req, res) => {
  try {
    const result = await agentModel.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/agent/:email", async (req, res) => {
  try {
    const result = await agentModel.findOne({ email: req.params.email });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/agents/payouts", async (req, res) => {
  try {
    const result = await agentPayoutModel.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/agents/:email", async (req, res) => {
  try {
    const result = await agentModel.findOne({ email: req.params.email });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/agents/payout/:email", async (req, res) => {
  try {
    const result = await agentPayoutModel.find({ email: req.params.email });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

//dealer apis

router.post("/dealers", async (req, res) => {
  try {
    const doc = new dealerModel(req.body);
    const result = await doc.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.put("/dealers/:id", async (req, res) => {
  try {
    const result = await dealerModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        status: req.body.status,
        adminReceived: req.body.paymentInformation,
      }
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.delete("/dealers/:id", async (req, res) => {
  try {
    const result = await dealerModel.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/dealers", async (req, res) => {
  try {
    const result = await dealerModel.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/dealer/:email", async (req, res) => {
  try {
    const result = await dealerModel.findOne({ email: req.params.email });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/payouts", async (req, res) => {
  try {
    const result = await payoutModel.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/payouts/:email", async (req, res) => {
  try {
    const result = await payoutModel.find({ email: req.params.email });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/users/:email", async (req, res) => {
  try {
    const result = await userModel.findOne({ email: req.params.email });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;

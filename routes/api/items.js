const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Items");

// @route  GET api/items
// @desc   Get all items
// @access Public

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// @route  POST api/items
// @desc   Create  a new item
// @access Public

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem.save().then((item) => res.json(item));
});

// @route  DELETE api/items
// @desc   Delete an item
// @access Public

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) =>
      item.remove().then(() => res.json({ msg: "Item successfully deleted" }))
    )
    .catch((err) => res.status(404).json({ msg: "Item not found" }));
});

router.delete("/", (req, res) => {
  Item.remove({}, (err) => {
    if (err) throw err;
  }).then(() => Item.find().then((items) => res.json(items)));
});

module.exports = router;

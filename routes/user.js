const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { getMyVouchers } = require("../controllers/userController");
const { userAuth } = require("../middleware/auth");

// Register
router.post("/register", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// ✅ Correct voucher route (expiry auto-update)
router.get("/my-vouchers", userAuth, getMyVouchers);

module.exports = router;

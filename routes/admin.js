const express = require("express");
const router = express.Router();
const { adminAuth } = require("../middleware/auth");
const Voucher = require("../models/voucher");

// Create voucher
router.post("/create-voucher", adminAuth, async (req, res) => {
  const { user_id, voucher_code, value } = req.body;

  const voucher = await Voucher.create({
    user_id,
    voucher_code,
    type: "FIXED_AMOUNT",
    value,
    expiry_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  });

  res.json({ message: "Voucher created", voucher });
});

module.exports = router;

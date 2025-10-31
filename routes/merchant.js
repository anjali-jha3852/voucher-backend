const express = require("express");
const router = express.Router();
const { merchantAuth } = require("../middleware/auth");
const Voucher = require("../models/voucher");

router.post("/redeem", merchantAuth, async(req,res)=>{
  const { voucher_code } = req.body;

  const voucher = await Voucher.findOneAndUpdate(
    { voucher_code, status:"ACTIVE" },
    { status:"USED" },
    { new:true }
  );

  if (!voucher) return res.json({ error:"Invalid or used voucher" });

  res.json({ message:"Voucher Redeemed", voucher });
});

module.exports = router;


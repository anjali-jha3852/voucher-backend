const mongoose = require("mongoose");
const Voucher = require("../models/voucher");

exports.getMyVouchers = async (req, res) => {
  try {
    const userId = req.userId;

    // ✅ Convert string to ObjectId
    const userObjectId = new mongoose.Types.ObjectId(userId);

    // ✅ Mark expired vouchers
    await Voucher.updateMany(
      {
        user_id: userObjectId,
        status: "ACTIVE",
        expiry_at: { $lt: new Date() }
      },
      { $set: { status: "EXPIRED" } }
    );

    // ✅ Get only valid vouchers
    const vouchers = await Voucher.find({
      user_id: userObjectId,
      status: "ACTIVE",
      expiry_at: { $gt: new Date() }
    });

    res.json({ success: true, vouchers });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};





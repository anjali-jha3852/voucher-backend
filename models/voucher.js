const mongoose = require("mongoose");

const voucherSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  voucher_code: { type: String, unique: true },
  type: String,
  value: Number,
  status: { type: String, default: "ACTIVE" },
  expiry_at: Date
});

module.exports = mongoose.model("Voucher", voucherSchema);

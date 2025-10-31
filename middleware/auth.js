const Merchant = require("../models/merchant");

function adminAuth(req, res, next) {
  if (req.headers["x-admin-api-key"] !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ error: "Admin API Key Required" });
  }
  next();
}

function userAuth(req, res, next) {
  const userId = req.headers["x-user-id"];
  if (!userId) return res.status(401).json({ error: "x-user-id required" });
  req.userId = userId;
  next();
}

async function merchantAuth(req, res, next) {
  const key = req.headers["x-merchant-api-key"];
  const merchant = await Merchant.findOne({ api_key: key });
  if (!merchant) return res.status(401).json({ error: "Merchant auth failed" });
  req.merchant = merchant;
  next();
}

module.exports = { adminAuth, userAuth, merchantAuth };

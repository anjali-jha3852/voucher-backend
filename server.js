require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const merchantRoutes = require('./routes/merchant');

const app = express();
app.use(express.json());

// DB connect
mongoose.connect(process.env.MONGO_URI)
  .then(()=> console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);
app.use("/api/merchant", merchantRoutes);

app.get("/", (req, res)=> res.send("Voucher System Running ✅"));

app.listen(process.env.PORT, ()=> console.log(`🚀 Server running ${process.env.PORT}`));

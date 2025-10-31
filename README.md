# Voucher Management System Backend

A complete backend system for creating, validating, and redeeming vouchers using **Node.js**, **Express**, and **MongoDB**.

This project supports three types of users:

* **Admin** – Creates vouchers
* **User** – Requests and checks voucher status
* **Merchant** – Redeems voucher

---

##  Tech Stack

* **Backend Framework:** Node.js + Express
* **Database:** MongoDB (Mongoose)
* **Security:** API Keys for Admin & Merchant

---

## 🔧 Installation & Setup

### ** Clone repo**

```bash
git clone https://github.com/anjali-jha3852/voucher-backend.git
cd voucher-backend
```

### ** Install dependencies**

```bash
npm install
```

### **3️Update `.env`**

Create a `.env` file:



### ** Run Server**

```bash
node server.js
```

---

##  API Endpoints

###  **Admin Routes** (`/api/admin`)

| Method | Endpoint   | Description        |
| ------ | ---------- | ------------------ |
| POST   | `/voucher` | Create new voucher |

###  **User Routes** (`/api/user`)

| Method | Endpoint                | Description          
| ------ | ----------------------- | -------------------- 
| POST   | `/voucher/request`      | Request voucher      
| GET    | `/voucher/status/:code` | Check voucher status 

### 🛍 **Merchant Routes** (`/api/merchant`)

| Method | Endpoint          | Description    |
| ------ | ----------------- | -------------- |
| POST   | `/voucher/redeem` | Redeem voucher |

---

## ✅ Features

* Unique voucher codes
* Voucher creation by admin
* Voucher request by users
* Single‑use voucher redemption
* Merchant authorization
* Status checking

---



## Developed by

**Anjali Jha** 

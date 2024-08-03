"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cryptoController_1 = require("../controller/cryptoController");
const router = require("express").Router();
router.get("/getCoins", cryptoController_1.getCoins);
router.post("/postCoins", cryptoController_1.postCoins);
router.all("/*", async (req, res) => {
    return res.status(404).send({ message: "Page Not Found." });
});
exports.default = router;

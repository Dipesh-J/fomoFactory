import { getCoins } from "../controller/cryptoController";

const router = require("express").Router();


router.get("/getCoins", getCoins)
router.all("/*", async (req: any, res: any) => {
  return res.status(404).send({ message: "Page Not Found." });
});

export default router;

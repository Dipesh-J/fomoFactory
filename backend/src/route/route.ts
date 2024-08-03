import { getCoins, postCoins } from "../controller/cryptoController";

const router = require("express").Router();


router.get("/getCoins", getCoins)
router.post("/postCoins", postCoins)
router.all("/*", async (req: any, res: any) => {
  return res.status(404).send({ message: "Page Not Found." });
});

export default router;

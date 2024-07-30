import Crypto from "../model/coinsModel";

export const getCoins = async (req: any, res: any) => {
  try {
    const coins = await Crypto.find();
    res.send(coins);
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const getTableData = async (req:any, res:any)=>{
  try {
    const coin = req.params.coin;
    const tableData = await Crypto.find({id:coin},{limit:20});
    return res.send(tableData);
  } catch (err) {
    
  }
}

export const postCoins = async (req: any, res: any) => {
  try {
    const {
      id,
      symbol,
      name,
      current_price,
      market_cap,
      total_volume,
      high_24h,
      low_24h,
      price_change_percentage_24h,
      last_updated,
    } = req.body;
    const coins = new Crypto({
      id,
      symbol,
      name,
      current_price,
      market_cap,
      total_volume,
      high_24h,
      low_24h,
      price_change_percentage_24h,
      last_updated,
    });
    await coins.save();
    return res.send({ status: true, data: coins });
  } catch (err) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

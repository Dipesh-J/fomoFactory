import { Request, Response } from "express";
import Crypto from "../model/coinsModel";

// Get all coins
// Get all coins
export const getCoins = async (req: Request, res: Response): Promise<Response> => {
  try {
    const coins = await Crypto.find().sort({ createdAt: -1 });
    return res.status(200).json(coins);
  } catch (err) {
    console.error('Error fetching coins:', err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get table data for a specific coin
export const getTableData = async (req: Request<{ coin: string }>, res: Response): Promise<Response> => {
  try {
    const { coin } = req.params;
    const tableData = await Crypto.find({ id: coin }).limit(20);
    return res.status(200).json(tableData);
  } catch (err) {
    console.error('Error fetching table data:', err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

interface CryptoDataBody {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string; // ISO 8601 formatted date string
  atl: number;
  atl_change_percentage: number;
  atl_date: string; // ISO 8601 formatted date string
  roi: null;
  last_updated: string; // ISO 8601 formatted date string
}

// Insert multiple coins
export const postCoins = async (req: Request<{}, {}, CryptoDataBody[]>, res: Response): Promise<Response> => {
  try {
    const coinsData = req.body;

    if (!Array.isArray(coinsData) || coinsData.length === 0) {
      return res.status(400).json({ status: false, message: "Invalid input data" });
    }

    const result = await Crypto.insertMany(coinsData);
    return res.status(201).json({ status: true, message: "Data Inserted", data: result });
  } catch (err) {
    console.error('Error inserting coins:', err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

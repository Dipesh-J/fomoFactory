import mongoose, { Schema, Document } from "mongoose";

interface ICrypto extends Document {
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

const CryptoSchema: Schema = new Schema({
  id: { type: String, required: true },
  symbol: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  current_price: { type: Number, required: true },
  market_cap: { type: Number, required: true },
  market_cap_rank: { type: Number, required: true },
  fully_diluted_valuation: { type: Number, required: false },
  total_volume: { type: Number, required: true },
  high_24h: { type: Number, required: true },
  low_24h: { type: Number, required: true },
  price_change_24h: { type: Number, required: true },
  price_change_percentage_24h: { type: Number, required: true },
  market_cap_change_24h: { type: Number, required: true },
  market_cap_change_percentage_24h: { type: Number, required: true },
  circulating_supply: { type: Number, required: true },
  total_supply: { type: Number, required: false },
  max_supply: { type: Number, required: false },
  ath: { type: Number, required: true },
  ath_change_percentage: { type: Number, required: true },
  ath_date: { type: String, required: true },
  atl: { type: Number, required: true },
  atl_change_percentage: { type: Number, required: true },
  atl_date: { type: String, required: true },
  roi: { type: Schema.Types.Mixed, required: false },
  last_updated: { type: String, required: true },
});

const Crypto = mongoose.model<ICrypto>("Crypto", CryptoSchema);

export default Crypto;
export { ICrypto };

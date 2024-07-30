import mongoose from "mongoose";

const { Schema } = mongoose;

const CryptoSchema = new Schema({
  id: { type: String, required: true },
  symbol: { type: String, required: true },
  name: { type: String, required: true },
  current_price: { type: Number, required: true },
  market_cap: { type: Number, required: true },
  total_volume: { type: Number, required: true },
  high_24h: { type: Number, required: true },
  low_24h: { type: Number, required: true },
  price_change_percentage_24h: { type: Number, required: true },
  last_updated: { type: Date, required: true },
});

const Crypto = mongoose.model("Crypto", CryptoSchema);

export default Crypto;

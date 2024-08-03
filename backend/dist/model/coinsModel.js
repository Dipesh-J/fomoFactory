"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const CryptoSchema = new mongoose_1.Schema({
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
    roi: { type: mongoose_1.Schema.Types.Mixed, required: false },
    last_updated: { type: String, required: true },
});
const Crypto = mongoose_1.default.model("Crypto", CryptoSchema);
exports.default = Crypto;

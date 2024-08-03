"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCoins = exports.getTableData = exports.getCoins = void 0;
const coinsModel_1 = __importDefault(require("../model/coinsModel"));
// Get all coins
// Get all coins
const getCoins = async (req, res) => {
    try {
        const coins = await coinsModel_1.default.find().sort({ createdAt: -1 });
        return res.status(200).json(coins);
    }
    catch (err) {
        console.error('Error fetching coins:', err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.getCoins = getCoins;
// Get table data for a specific coin
const getTableData = async (req, res) => {
    try {
        const { coin } = req.params;
        const tableData = await coinsModel_1.default.find({ id: coin }).limit(20);
        return res.status(200).json(tableData);
    }
    catch (err) {
        console.error('Error fetching table data:', err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.getTableData = getTableData;
// Insert multiple coins
const postCoins = async (req, res) => {
    try {
        const coinsData = req.body;
        if (!Array.isArray(coinsData) || coinsData.length === 0) {
            return res.status(400).json({ status: false, message: "Invalid input data" });
        }
        const result = await coinsModel_1.default.insertMany(coinsData);
        return res.status(201).json({ status: true, message: "Data Inserted", data: result });
    }
    catch (err) {
        console.error('Error inserting coins:', err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.postCoins = postCoins;

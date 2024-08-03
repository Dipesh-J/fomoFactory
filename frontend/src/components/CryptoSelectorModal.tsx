import React from "react";
import { CryptoBasicInfo, CryptoSelectorModalProps, } from "./interface/CryptoInterfaces";

const cryptoCoins: CryptoBasicInfo[] = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
  },
  {
    id: "tether",
    symbol: "usdt",
    name: "Tether",
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
  },
];

const CryptoSelectorModal: React.FC<CryptoSelectorModalProps> = ({
  onSelect,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Select a Cryptocurrency</h2>
        <ul>
          {cryptoCoins.map((crypto) => (
            <li
              key={crypto.id}
              className="cursor-pointer hover:bg-gray-200 py-2 px-4 rounded"
              onClick={() => {
                onSelect(crypto);
                onClose();
              }}
            >
              {crypto.name} ({crypto.symbol.toUpperCase()})
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CryptoSelectorModal;

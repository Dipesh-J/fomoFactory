import React from 'react';
import { CryptoTableProps } from './interface/CryptoInterfaces';

const CryptoTable: React.FC<CryptoTableProps> = ({ selectedCryptos }) => {
  const limitedCryptos = selectedCryptos.slice(0, 20);

  if (!limitedCryptos.length) {
    return <div className="text-center p-4">No cryptocurrencies selected.</div>;
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg overflow-x-auto">
      <table className="table-auto w-full border-separate border-spacing-0">
        <thead className="bg-blue-950 text-white">
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 text-left">Name</th>
            <th className="px-6 py-3 border-b border-gray-200 text-left">Symbol</th>
            <th className="px-6 py-3 border-b border-gray-200 text-right">Price</th>
            <th className="px-6 py-3 border-b border-gray-200 text-right">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {limitedCryptos.map((crypto) => (
            <tr key={crypto._id} className="even:bg-gray-100">
              <td className="px-6 py-4 border-b border-gray-200">{crypto.name}</td>
              <td className="px-6 py-4 border-b border-gray-200">{crypto.symbol}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-right">${crypto.current_price.toLocaleString()}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-right">${crypto.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;

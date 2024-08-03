import React, { useState, useEffect } from "react";
import CryptoTable from "./CryptoTable";
import CryptoSelectorModal from "./CryptoSelectorModal";
import { CryptoData } from "./interface/CryptoInterfaces";
import { CryptoBasicInfo } from "./interface/CryptoInterfaces";
import { fetchCryptoData, fetchDataFromAPI, postCoins } from "@/api";
const Apps: React.FC = () => {
  const [cryptos, setCryptos] = useState<CryptoData[]>([]);
  const [selectedCryptos, setSelectedCryptos] = useState<CryptoData[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCryptoData();
      setCryptos(data);
      const newData = await fetchDataFromAPI();
      await postCoins(newData);
    };
    fetchData();

    // Set up interval to refresh data every 5 seconds (5000 ms)
    const intervalId = setInterval(fetchData, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    if (selectedCryptos.length) {
      const updatedSelection = cryptos.filter(crypto =>
        selectedCryptos.some(selected => selected.id === crypto.id)
      );
      setSelectedCryptos(updatedSelection);
    }
  }, [cryptos, selectedCryptos]);

  const handleSelect = (selected: CryptoBasicInfo) => {
    const filteredCryptos = cryptos.filter(
      (crypto) => crypto.id === selected.id
    );
    setSelectedCryptos(filteredCryptos);
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cryptocurrency Data</h1>
      <button
        onClick={() => setModalOpen(true)}
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Select Cryptocurrency
      </button>
      {isModalOpen && (
        <CryptoSelectorModal
          onSelect={handleSelect}
          onClose={() => setModalOpen(false)}
        />
      )}
      <CryptoTable selectedCryptos={selectedCryptos} />
    </div>
  );
};

export default Apps;

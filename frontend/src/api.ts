import { CryptoDataAPIResponse } from "./components/interface/CryptoInterfaces";
export const fetchCryptoData = async () => {
  try {
    const response = await fetch("http://localhost:3000/getCoins");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    return [];
  }
};

export const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin%2Csolana";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-31oZRofWaZKhEtheA6QiKpq6",
  },
};

export const fetchDataFromAPI = async (): Promise<CryptoDataAPIResponse[]> => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const postCoins = async (
  coinsData: CryptoDataAPIResponse[]
): Promise<void> => {
  try {
    const url = "http://localhost:3000/postCoins";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coinsData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};

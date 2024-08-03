import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CryptoData } from '../components/interface/CryptoInterfaces';
// import { CryptoBasicInfo } from '../components/trying/interface/CryptoInterfaces';

interface CryptoState {
  selectedCryptos: CryptoData[];
}

const initialState: CryptoState = {
  selectedCryptos: [],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setSelectedCryptos(state, action: PayloadAction<CryptoData[]>) {
      state.selectedCryptos = action.payload;
    },
  },
});

export const { setSelectedCryptos } = cryptoSlice.actions;

export default cryptoSlice.reducer;



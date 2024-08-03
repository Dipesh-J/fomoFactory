// import { configureStore } from '@reduxjs/toolkit';
// import cryptoReducer from './cryptoSlice.ts';

// const store = configureStore({
//   reducer: {
//     crypto: cryptoReducer,
//   },
//   preloadedState: loadState(), // Load state from localStorage
// });

// store.subscribe(() => {
//   saveState(store.getState()); // Save state to localStorage on every change
// });

// export default store;

// // Utility functions for localStorage
// function saveState(state: unknown) {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('cryptoState', serializedState);
//   } catch (e) {
//     console.warn('Could not save state', e);
//   }
// }

// function loadState() {
//   try {
//     const serializedState = localStorage.getItem('cryptoState');
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (e) {
//     console.warn('Could not load state', e);
//     return undefined;
//   }
// }
